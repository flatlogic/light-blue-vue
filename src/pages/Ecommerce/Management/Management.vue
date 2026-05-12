<template>
  <div class="product-management">
    <div class="page-top-line">
      <h2 class="page-title">
        Product - <span class="fw-semi-bold">Management</span>
      </h2>
      <BAlert
        :variant="'success'"
        class="promo-alert"
        :class="{'show-alert': showAlert}"
        :model-value="true"
        dismissible
      >
        This page is only available in <a
          class="text-white font-weight-bold"
          rel="noreferrer noopener"
          href="https://flatlogic.com/templates/light-blue-vue-node-js"
          target="_blank"
        >Light Blue Vue with Node.js</a> integration!
      </BAlert>
    </div>
    <Widget
      title="List of Products"
      collapse
      close
      :fetching-data="isReceiving"
    >
      <BButton
        variant="success"
        class="mb-3"
        @click="createNewProduct()"
      >
        Create Product
      </BButton>

      <div class="mb-3 d-flex justify-content-end">
        <BFormInput
          v-model="searchQuery"
          placeholder="Search"
          class="search-input"
        />
      </div>

      <div class="table-responsive">
        <table class="table table-striped products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>IMAGE</th>
              <th>TITLE</th>
              <th class="d-none d-md-table-cell">
                SUBTITLE
              </th>
              <th class="d-none d-md-table-cell">
                PRICE($)
              </th>
              <th class="d-none d-md-table-cell">
                RATING
              </th>
              <th>API</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in filteredProducts"
              :key="product.id"
            >
              <td>{{ product.id }}</td>
              <td>
                <img
                  :src="product.img"
                  alt="image"
                  class="product-image"
                />
              </td>
              <td>
                <router-link
                  :to="'/app/ecommerce/product/' + product.id"
                  class="product-link"
                >
                  {{ product.title ? (product.title[0].toUpperCase() + product.title.slice(1)) : "No Title" }}
                </router-link>
              </td>
              <td class="d-none d-md-table-cell">
                {{ product.subtitle }}
              </td>
              <td class="d-none d-md-table-cell text-success">
                {{ product.price }}
              </td>
              <td class="d-none d-md-table-cell">
                <Rating :rating="parseFloat(String(product.rating))" />
              </td>
              <td>
                <div class="btn-group">
                  <BButton
                    variant="primary"
                    size="sm"
                    @click="$router.push('/app/ecommerce/management/' + product.id)"
                  >
                    Edit
                  </BButton>
                  <BButton
                    :id="'popoverDelete_' + product.id"
                    variant="danger"
                    size="sm"
                  >
                    <Loader
                      v-if="isDeleting && idToDelete === product.id"
                      :size="14"
                    />
                    <span v-else>Delete</span>
                  </BButton>
                </div>
                <BPopover
                  triggers="focus"
                  :target="'popoverDelete_' + product.id"
                  placement="top"
                >
                  <template #title>
                    <div class="px-3">
                      Are you sure?
                    </div>
                  </template>
                  <div class="px-3 d-flex justify-content-center gap-2">
                    <BButton
                      variant="success"
                      size="sm"
                      @click="handleDelete(product.id)"
                    >
                      Yes
                    </BButton>
                    <BButton
                      variant="danger"
                      size="sm"
                    >
                      No
                    </BButton>
                  </div>
                </BPopover>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-3">
        <BFormSelect
          v-model="perPage"
          :options="[10, 25, 50]"
          class="per-page-select"
        />
        <nav>
          <ul class="pagination mb-0">
            <li
              class="page-item"
              :class="{ active: true }"
            >
              <a
                class="page-link"
                href="#"
              >1</a>
            </li>
          </ul>
        </nav>
      </div>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/store/products'
import Widget from '@/components/Widget/Widget.vue'
import Loader from '@/components/Loader/Loader.vue'
import Rating from '../ProductPage/components/Rating/Rating.vue'

const router = useRouter()
const productsStore = useProductsStore()

const { products, isReceiving, isDeleting, idToDelete } = storeToRefs(productsStore)
const { getProductsRequest, deleteProductRequest } = productsStore

const showAlert = ref(false)
const searchQuery = ref('')
const perPage = ref(10)

const filteredProducts = computed(() => {
  if (!searchQuery.value) return products.value
  const query = searchQuery.value.toLowerCase()
  return products.value.filter(p =>
    p.title?.toLowerCase().includes(query) ||
    p.subtitle?.toLowerCase().includes(query)
  )
})

function createNewProduct() {
  router.push('/app/ecommerce/management/create')
}

function handleDelete(id: number) {
  deleteProductRequest(id)
}

onMounted(() => {
  getProductsRequest()
  setTimeout(() => {
    showAlert.value = true
  }, 100)
})
</script>

<style src="./Management.scss" lang="scss" />
