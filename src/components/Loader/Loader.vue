<script setup lang="ts">
interface Props {
  size?: number
}

withDefaults(defineProps<Props>(), {
  size: 21
})
</script>

<template>
  <div class="data-loader">
    <i
      class="la la-spinner la-spin"
      :style="{ fontSize: size + 'px' }"
    />
  </div>
</template>

<style src="./Loader.scss" lang="scss" />
