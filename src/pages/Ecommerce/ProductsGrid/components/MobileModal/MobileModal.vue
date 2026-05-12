<template>
  <div :class="{ mobileModal: true, mobileModalActive: active }">
    <ModalHeader
      :opened-page="isPageOpened ? currentPage : null"
      :title="data.title"
      @close="handleCloseClick"
      @back="handleBackClick"
    />
    <ul
      v-if="isPages && !isPageOpened"
      class="mobileModalBody"
    >
      <li
        v-for="item in pagesData"
        :key="item.id"
        @click="openPage(item.id)"
      >
        {{ item.label }}
      </li>
    </ul>
    <ul
      v-else-if="isPageOpened && currentPage"
      class="mobileModalBody"
    >
      <MobileMenuOption
        v-for="option in currentPage.options"
        :key="String(option)"
        :active="activeOptions[currentPage.label] === option"
        :option="option"
        @select="toggleOptionActive(currentPage!.label, option)"
      />
    </ul>
    <ul
      v-else
      class="mobileModalBody"
    >
      <MobileMenuOption
        v-for="option in simpleData"
        :key="option"
        :active="activeOptions[data.title] === option"
        :option="option"
        @select="toggleOptionActive(data.title, option)"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

import ModalHeader from '../ModalHeader/ModalHeader.vue'
import MobileMenuOption from '../MobileMenuOption/MobileMenuOption.vue'

interface FilterOption {
  id: number
  label: string
  options: (string | number)[]
}

interface ModalDataWithPages {
  title: string
  data: FilterOption[]
}

interface ModalDataSimple {
  title: string
  data: string[]
}

type ModalData = ModalDataWithPages | ModalDataSimple

// Props
const props = defineProps<{
  active: boolean
  data: ModalData
}>()

const emit = defineEmits<{
  close: []
}>()

const isPageOpened = ref(false)
const activePageId = ref(0)
const activeOptions = ref<Record<string, string | number>>({})

const isPages = computed(() => {
  const firstItem = props.data.data[0]
  return typeof firstItem === 'object' && firstItem !== null
})

const pagesData = computed(() => {
  if (isPages.value) {
    return props.data.data as FilterOption[]
  }
  return []
})

const simpleData = computed(() => {
  if (!isPages.value) {
    return props.data.data as string[]
  }
  return []
})

const currentPage = computed(() => {
  if (isPages.value) {
    return pagesData.value[activePageId.value]
  }
  return null
})

function resetState() {
  activePageId.value = 0
  isPageOpened.value = false
}

function toggleOptionActive(field: string, value: string | number) {
  activeOptions.value[field] = value
}

function handleCloseClick() {
  resetState()
  emit('close')
}

function handleBackClick() {
  activePageId.value = 0
  isPageOpened.value = false
}

function openPage(index: number) {
  activePageId.value = index
  isPageOpened.value = true
}
</script>

<style src="./MobileModal.scss" lang="scss" scoped />
