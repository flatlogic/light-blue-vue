<template>
  <div class="selects">
    <BDropdown
      variant="secondary"
      :text="sizesText === 'Select size' ? 'Select size' : `Size: ${sizesText}`"
    >
      <BDropdownItemButton
        v-for="size in sizes"
        :key="size"
        @click="sizesText = String(size)"
      >
        {{ size }}
      </BDropdownItemButton>
    </BDropdown>
    <BDropdown
      variant="secondary"
      :text="quantityText.toString()"
    >
      <BDropdownItemButton
        v-for="number in quantity"
        :key="number"
        @click="quantityText = number"
      >
        {{ number }}
      </BDropdownItemButton>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  sizes: (string | number)[]
  quantity: number[]
}>()

const sizesText = ref('Select size')
const quantityText = ref(1)
</script>

<style src="./Selects.scss" lang="scss" />
