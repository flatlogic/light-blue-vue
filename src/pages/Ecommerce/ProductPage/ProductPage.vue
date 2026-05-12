<template>
  <div class="product-page">
    <h1 class="page-title">
      E-commerce -
      <span class="fw-semi-bold">Product Detail</span>
    </h1>
    <Banner :data="product" />
    <div class="section">
      <h2 class="sectionTitle hide-sm">
        Product Description
      </h2>
      <Description :data="product" />
    </div>
    <div class="section">
      <h2 class="sectionTitle">
        You may also like
      </h2>
      <div class="slider">
        <Carousel
          class="slider"
          :items-to-show="itemsToShow"
          :wrap-around="false"
        >
          <Slide
            v-for="slide in products"
            :key="slide.id"
          >
            <div class="sliderItem">
              <ProductCard :product="slide" />
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { useProductsStore } from '@/store/products'
import Banner from './components/Banner/Banner.vue'
import Description from './components/Description/Description.vue'
import ProductCard from '../ProductsGrid/components/ProductCard/ProductCard.vue'
import { defaultProduct } from './mock'

const route = useRoute()
const productsStore = useProductsStore()

const { products } = storeToRefs(productsStore)
const { getProductsRequest } = productsStore

// Responsive items to show
const itemsToShow = computed(() => {
  // Default for different breakpoints
  if (typeof window !== 'undefined') {
    if (window.innerWidth >= 1024) return 4
    if (window.innerWidth >= 768) return 3
    if (window.innerWidth >= 480) return 2
  }
  return 2
})

const product = computed(() => {
  const id = parseInt(route.params.id as string)
  const found = products.value.find(p => p.id === id)

  return found || defaultProduct
})

onMounted(() => {
  getProductsRequest()
})
</script>

<style src="./ProductPage.scss" lang="scss" />
