<template>
  <div class="bag">
    <BButton
      class="add me-2"
      variant="success"
    >
      add to bag
      <img
        :src="bagIcon"
        alt="bag"
      />
    </BButton>
    <BButton
      class="star"
      variant="outline-dark"
      @click="toggle"
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
</template>

<script setup lang="ts">
import { ref } from 'vue'
import bagIcon from '../../../../../assets/bag.svg'

const favourite = ref(false)

function toggle() {
  favourite.value = !favourite.value
}
</script>

<style src="./Bag.scss" lang="scss" scoped />
