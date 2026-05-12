<template>
  <div class="productDetailsBanner">
    <div
      class="productPhoto"
      :style="{ 'background-image': 'url(' + data.img + ')' }"
    />
    <div class="productInfo">
      <General
        :rating="data.rating"
        :title="data.title"
        :subtitle="data.subtitle"
        :price="data.price"
      />
      <a
        href="#"
        class="productGuide"
      >Size Guide</a>
      <Selects
        :sizes="[1, 2, 3, 4, 5]"
        :quantity="[1, 2, 3, 4, 5, 6, 7]"
      />
      <Bag />
      <div class="payments">
        <div
          v-for="payment in payments"
          :key="payment"
          :style="{ 'background-image': 'url(' + payment + ')' }"
        />
      </div>
      <span class="delivery">FREE Delivery & Returns</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import visa from '@/assets/payments/visa.png'
import mastercard from '@/assets/payments/master.png'
import paypal from '@/assets/payments/paypal.png'

import General from '../General/General.vue'
import Selects from '../Selects/Selects.vue'
import Bag from '../Bag/Bag.vue'

interface ProductData {
  img?: string
  rating?: number
  title?: string
  subtitle?: string
  price?: number
}

interface Props {
  data?: ProductData
}

withDefaults(defineProps<Props>(), {
  data: () => ({}),
})

const payments = [visa, mastercard, paypal]
</script>

<style src="./Banner.scss" lang="scss" scoped />
