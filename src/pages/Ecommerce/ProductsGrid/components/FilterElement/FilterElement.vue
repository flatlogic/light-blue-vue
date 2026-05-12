<template>
  <div class="filterElement">
    <div class="filterElementLable">
      {{ defaultLabel }}
    </div>
    <BDropdown
      class="me-1"
      :text="currentOption.toString()"
      variant="secondary"
    >
      <BDropdownItemButton
        v-for="option in options"
        :key="option"
        @click="changeCurrent(option)"
      >
        {{ option }}
      </BDropdownItemButton>
    </BDropdown>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  options: (string | number)[]
  defaultLabel: string
}>()

const currentOption = ref(props.options[0])

function changeCurrent(item: string | number) {
  currentOption.value = item
}
</script>

<style src="./FilterElement.scss" lang="scss" scoped />
