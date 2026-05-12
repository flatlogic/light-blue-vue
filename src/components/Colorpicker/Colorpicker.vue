<script setup lang="ts">
interface Props {
  colors?: readonly (readonly [string, string])[]
  activeColor?: string
}

withDefaults(defineProps<Props>(), {
  colors: () => [],
  activeColor: '#000000'
})

defineEmits<{
  change: [color: readonly [string, string]]
}>()
</script>

<template>
  <ul class="colors-list">
    <li
      v-for="[colorName, colorValue] in colors"
      :key="colorValue"
      class="color-box"
      :class="{ active: activeColor === colorName }"
      :style="{ backgroundColor: colorValue }"
      @click="$emit('change', [colorName, colorValue] as const)"
    />
  </ul>
</template>

<style src="./Colorpicker.scss" lang="scss" scoped />
