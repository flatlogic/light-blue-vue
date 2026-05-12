<template>
  <div class="productCard">
    <div
      class="productCardPhoto"
      :style="{ backgroundImage: `url(${product.img})` }"
      @click="$router.push('/app/ecommerce/product/' + product.id)"
    >
      <div
        v-if="label"
        :class="{label: true, 'bg-danger': label === 'Sale',
                 'bg-primary': label !== 'Sale'}"
      >
        {{ label }}
      </div>
      <BButton
        class="star"
        variant="secondary"
        @click.stop="toggleFavourite()"
      >
        <i
          v-if="favourite"
          class="la la-star"
        />
        <i
          v-else
          class="la la-star-o"
        />
      </BButton>
    </div>
    <div class="productCardDataWrapper">
      <div class="productsCardTitle">
        {{ product.title }}
      </div>
      <div class="productsCardDescription">
        {{ product.subtitle }}
      </div>
    </div>
    <div class="productsCardPrice">
      <span v-if="!product.discount">${{ product.price }}</span>
      <div
        v-else
        class="sale"
      >
        <span class="old">${{ product.price }}</span>
        {{ product.discount }}% off
        <span class="new"> ${{ newPrice }}</span>
      </div>
      <Rating
        v-if="product.rating"
        :rating="product.rating"
        size="sm"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Rating from '../../../ProductPage/components/Rating/Rating.vue'
import type { Product } from '@/types'

const props = defineProps<{
  product: Product
}>()

const favourite = ref(props.product.favourite || false)

function toggleFavourite() {
  favourite.value = !favourite.value
}

const newPrice = computed(() => {
  return props.product.discount
    ? props.product.price - (props.product.price * props.product.discount / 100)
    : props.product.price
})

const label = computed(() => {
  if (props.product.discount) return 'Sale'
  if (!props.product.createdAt || !props.product.updatedAt) return null
  const created = props.product.createdAt instanceof Date
    ? props.product.createdAt.getTime()
    : new Date(props.product.createdAt).getTime()
  const updated = props.product.updatedAt instanceof Date
    ? props.product.updatedAt.getTime()
    : new Date(props.product.updatedAt).getTime()
  return created === updated ? 'New' : null
})
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
