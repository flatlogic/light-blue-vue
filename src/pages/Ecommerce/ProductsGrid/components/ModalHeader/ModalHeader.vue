<template>
  <div class="mobileModalTitle">
    <button
      v-if="!openedPage"
      @click="emit('close')"
    >
      <img
        src="../../../../../assets/cancel.svg"
        alt="close"
      />
    </button>
    <button
      v-else
      @click="emit('back')"
    >
      <img
        class="back"
        src="../../../../../assets/back.svg"
        alt="back"
      />
    </button>
    <h5>{{ renderedTitle }}</h5>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface OpenedPage {
  label: string
}

const props = defineProps<{
  openedPage?: OpenedPage | null
  title: string
}>()

const emit = defineEmits<{
  close: []
  back: []
}>()

const renderedTitle = computed(() => {
  return props.openedPage ? props.openedPage.label : props.title
})
</script>

<style src="./ModalHeader.scss" lang="scss" scoped />
