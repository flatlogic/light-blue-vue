<template>
  <div class="product-edit">
    <h2 class="page-title">
      Product - <span class="fw-semi-bold">Detail</span>
    </h2>
    <Widget
      :title="(isNew ? 'New' : 'Edit') + ' product'"
      collapse
      close
    >
      <Loader
        v-if="!isNew && isReceiving"
        :size="40"
      />
      <form
        v-else
        @submit.prevent
      >
        <div class="form-group row">
          <label class="col-md-2">Image</label>
          <div class="col-md-5">
            <BDropdown
              id="productImage"
              variant="info"
            >
              <template #button-content>
                <img
                  v-if="product.img"
                  class="product-image"
                  alt="img"
                  :src="product.img"
                />
              </template>
              <BDropdownItem
                v-for="img in images"
                :key="img"
                @click="updateProductProperty(img, 'img')"
              >
                <img
                  class="product-image"
                  :alt="img"
                  :src="img"
                />
              </BDropdownItem>
            </BDropdown>
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productTitle"
          >Title</label>
          <div class="col-md-5">
            <input
              id="productTitle"
              class="form-control input-transparent"
              type="text"
              :value="product.title"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'title')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productSubtitle"
          >Subtitle</label>
          <div class="col-md-5">
            <input
              id="productSubtitle"
              class="form-control input-transparent"
              type="text"
              :value="product.subtitle"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'subtitle')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productPrice"
          >Price</label>
          <div class="col-md-2">
            <input
              id="productPrice"
              class="form-control input-transparent"
              type="number"
              step="0.01"
              min="0.01"
              :value="product.price"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'price')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productDiscount"
          >Discount</label>
          <div class="col-md-2">
            <input
              id="productDiscount"
              class="form-control input-transparent"
              type="number"
              step="1"
              min="0"
              max="100"
              :value="product.discount || 0"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'discount')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productDescription_1"
          >Description </label>
          <div class="col-md-5">
            <textarea
              id="productDescription_1"
              rows="3"
              class="form-control input-transparent"
              :value="product.description_1"
              @change="updateProductProperty(($event.target as HTMLTextAreaElement).value, 'description_1')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productDescription_2"
          >Description </label>
          <div class="col-md-5">
            <textarea
              id="productDescription_2"
              rows="3"
              class="form-control input-transparent"
              :value="product.description_2"
              @change="updateProductProperty(($event.target as HTMLTextAreaElement).value, 'description_2')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productCode"
          >Code</label>
          <div class="col-md-2">
            <input
              id="productCode"
              class="form-control input-transparent"
              type="text"
              :value="product.code"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'code')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productHashtag"
          >Hashtag</label>
          <div class="col-md-5">
            <input
              id="productHashtag"
              class="form-control input-transparent"
              type="text"
              :value="product.hashtag"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'hashtag')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productTechnology"
          >Technology</label>
          <div class="col-md-5">
            <Multiselect
              v-model="technologyTags"
              mode="tags"
              :create-option="true"
              :searchable="true"
              placeholder="Add tags..."
              @change="updateProductProperty($event, 'technology')"
            />
          </div>
        </div>
        <div class="form-group row">
          <label
            class="col-md-2"
            for="productRating"
          >Rating</label>
          <div class="col-md-2">
            <input
              id="productRating"
              class="form-control input-transparent"
              step="0.1"
              min="0"
              max="5"
              type="number"
              :value="product.rating"
              @change="updateProductProperty(($event.target as HTMLInputElement).value, 'rating')"
            />
          </div>
        </div>
        <BButtonToolbar>
          <BButton
            variant="success"
            @click="handleSave"
          >
            <Loader v-if="isUpdating" />
            <span v-else>Save</span>
          </BButton>
          <BButton
            variant="secondary"
            @click="goBack"
          >
            Back
          </BButton>
          <span v-if="!isNew">
            <BButton
              id="deleteProductPopover"
              variant="danger"
            >
              <Loader v-if="isDeleting" />
              <span v-else>Delete</span>
            </BButton>
            <BPopover
              v-model="showDeletePopover"
              class="popover-danger"
              target="deleteProductPopover"
              placement="top"
            >
              <template #title>
                <div class="px-5">Are you sure?</div>
              </template>
              <div class="px-5 d-flex justify-content-center">
                <BButtonToolbar>
                  <BButton
                    variant="success"
                    size="sm"
                    @click="handleDelete"
                  >
                    Yes
                  </BButton>
                  <BButton
                    variant="danger"
                    size="sm"
                    @click="showDeletePopover = false"
                  >
                    No
                  </BButton>
                </BButtonToolbar>
              </div>
            </BPopover>
          </span>
        </BButtonToolbar>
      </form>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import Multiselect from '@vueform/multiselect'
import Widget from '@/components/Widget/Widget.vue'
import Loader from '@/components/Loader/Loader.vue'
import { useProductsStore } from '@/store/products'
import type { Product } from '@/types'

const route = useRoute()
const router = useRouter()
const productsStore = useProductsStore()

const { products, isReceiving, isDeleting, isUpdating, images } = storeToRefs(productsStore)
const {
  loadProductRequest,
  updateProductRequest,
  createProductRequest,
  deleteProductRequest,
  getProductsImagesRequest,
} = productsStore

// Local state for the product being edited
const localProduct = ref<Partial<Product>>({ technology: [] })
const technologyTags = ref<string[]>([])
const showDeletePopover = ref(false)

const getId = () => parseInt(route.params.id as string) || -1

const isNew = computed(() => getId() === -1)

const product = computed(() => {
  const found = products.value.find(p => p.id === getId())
  return found || localProduct.value
})

// Keep technology tags in sync
watch(() => product.value.technology, (newTech) => {
  if (newTech) {
    technologyTags.value = [...newTech]
  }
}, { immediate: true })

function updateProductProperty(value: Product[keyof Product], key: keyof Product) {
  if (isNew.value) {
    localProduct.value = { ...localProduct.value, [key]: value }
  } else {
    // Find and update the product in the store
    const index = products.value.findIndex(p => p.id === getId())
    if (index !== -1) {
      products.value[index] = { ...products.value[index], [key]: value }
    }
  }
}

function handleSave() {
  if (isNew.value) {
    createProductRequest(localProduct.value as Omit<Product, 'id'>)
  } else {
    const productToUpdate = products.value.find(p => p.id === getId())
    if (productToUpdate) {
      updateProductRequest(productToUpdate)
    }
  }
}

function handleDelete() {
  const id = getId()
  if (id > -1) {
    deleteProductRequest(id)
  }
}

function goBack() {
  router.push('/app/ecommerce/management')
}

onMounted(() => {
  const id = getId()
  if (id > -1) {
    loadProductRequest(id)
  } else {
    localProduct.value = {
      price: 0.01,
      rating: 5,
      technology: []
    }
  }
  getProductsImagesRequest(id, product.value.img)
})
</script>

<style src="./ProductEdit.scss" lang="scss"></style>
