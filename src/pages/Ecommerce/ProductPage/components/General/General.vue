<script setup lang="ts">
import Rating from '../Rating/Rating.vue'

withDefaults(defineProps<{
  rating?: number
  title?: string
  subtitle?: string
  price?: number | string
}>(), {
  rating: 0,
  title: '',
  subtitle: '',
  price: 0,
})
</script>

<template>
  <div class="general">
    <div class="ratingWrapper">
      <Rating :rating="rating" />
    </div>
    <div class="dataWrapper">
      <h5 class="title">
        {{ title }}
      </h5>
      <span class="subtitle">{{ subtitle }}</span>
    </div>
    <span class="price">${{ price }}</span>
  </div>
</template>

<style src="./General.scss" lang="scss" scoped />
