<template>
  <div :class="{ rating: true, [`rating-${size}`]: size }">
    {{ rating }}
    <i class="la la-star" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  rating?: number | string
  size?: string
}

withDefaults(defineProps<Props>(), {
  rating: 0,
})
</script>

<style src="./Rating.scss" lang="scss" scoped />
