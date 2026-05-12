<template>
  <div class="products-page">
    <div v-if="!isModalActive">
      <h1 class="page-title">
        E-commerce - <span class="fw-semi-bold">Product Grid</span>
      </h1>
      <div class="productsListFilters">
        <div
          v-for="filter in filtersData"
          :key="filter.title"
        >
          <FilterElement
            v-if="typeof filter.data[0] === 'string'"
            :key="filter.id || filter.title"
            :default-label="filter.title"
            :options="(filter.data as string[])"
          />
          <template v-else>
            <FilterElement
              v-for="element in (filter.data as FilterOption[])"
              :key="element.id"
              :default-label="element.label"
              :options="element.options"
            />
          </template>
        </div>
      </div>
      <div class="mobileFilterButtons">
        <BButton
          variant="light"
          size="lg"
          @click="openModal(0)"
        >
          Sort <i class="fa fa-2x fa-angle-down" />
        </BButton>
        <BButton
          variant="light"
          size="lg"
          @click="openModal(1)"
        >
          Filter <i class="fa fa-2x fa-angle-down" />
        </BButton>
      </div>
      <div class="productsListElements">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
    <MobileModal
      :active="isModalActive && modalId === 0"
      :data="(filtersData[1] as any)"
      @close="closeModal"
    />
    <MobileModal
      :active="isModalActive && modalId === 1"
      :data="(filtersData[0] as any)"
      @close="closeModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductsStore } from '@/store/products'

import FilterElement from './components/FilterElement/FilterElement.vue'
import ProductCard from './components/ProductCard/ProductCard.vue'
import MobileModal from './components/MobileModal/MobileModal.vue'

interface FilterOption {
  id: number
  label: string
  options: (string | number)[]
}

interface FilterData {
  id?: number
  title: string
  data: FilterOption[] | string[]
}

// Store
const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)

const filtersData = ref<FilterData[]>([
  {
    title: 'Filter',
    data: [
      { id: 0, label: 'Type', options: ['Shoes', 'Boots', 'Trainers'] },
      { id: 1, label: 'Brands', options: ['All', 'Nike', 'Adidas'] },
      { id: 2, label: 'Size', options: [7, 8, 9, 10, 11, 12, 12.5, 13] },
      { id: 3, label: 'Colour', options: ['All', 'White', 'Black'] },
      { id: 4, label: 'Range', options: ['All', '-', 'None'] },
    ],
  },
  {
    id: 6,
    title: 'Sort',
    data: ['Favourite', 'Price', 'Popular'],
  },
])

const isModalActive = ref(false)
const modalId = ref<number | null>(null)

function openModal(id: number) {
  modalId.value = id
  isModalActive.value = true
}

function closeModal() {
  modalId.value = null
  isModalActive.value = false
}

onMounted(() => {
  productsStore.getProductsRequest()
})
</script>

<style src="./ProductsGrid.scss" lang="scss" />
