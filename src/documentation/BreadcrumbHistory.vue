<template>
  <div>
    <b-breadcrumb :items="tree" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tree = computed(() => {
  return ['YOU ARE HERE']
    .concat(route.path
      .split('/')
      .slice(1)
      .map(routePart => routePart
        .split('-')
        .map(word => word[0]?.toUpperCase() + word.slice(1))
        .join(' ')
      )
    )
})
</script>
