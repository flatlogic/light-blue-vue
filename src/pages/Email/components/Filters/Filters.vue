<template>
  <div class="col-lg-3 col-xl-2 col-xs-12">
    <div class="d-grid gap-2">
      <b-button
        variant="danger"
        @click="emit('compose', true)"
      >
        Compose
      </b-button>
    </div>
    <div class="mb mt">
      <b-button
        v-for="button in mainButtons"
        :key="button.id"
        :class="{ button: true, buttonActive: button.id === activeButtonId }"
        variant="light"
        @click="handleButtonClick(button.id, button.filter)"
      >
        {{ button.title }}
        <b-badge
          v-if="button.notifications"
          :variant="button.label || 'secondary'"
          :class="`bg-${button.label || 'secondary'}`"
          pill
        >
          {{ button.notifications }}
        </b-badge>
      </b-button>
    </div>
    <div>
      <h6>QUICK VIEW</h6>
      <b-button
        v-for="button in quickViewButtons"
        :key="button.id"
        class="button"
        variant="light"
      >
        {{ button.title }}
        <i :class="`fa fa-circle text-${button.colour}`" />
      </b-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type VariantColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

interface MainButton {
  id: number
  title: string
  notifications?: number
  label?: VariantColor
  filter: string | null
}

interface QuickViewButton {
  id: number
  title: string
  colour: string
}

const emit = defineEmits<{
  filter: [condition: string | null]
  'open-message': [id: number | null]
  compose: [value: boolean]
}>()

const activeButtonId = ref(0)

const mainButtons: MainButton[] = [
  { id: 0, title: 'Inbox', notifications: 2, label: 'primary', filter: null },
  { id: 1, title: 'Starred', filter: 'starred' },
  { id: 2, title: 'Sent Mail', filter: 'sent' },
  { id: 3, title: 'Draft', notifications: 3, label: 'danger', filter: 'draft' },
  { id: 4, title: 'Trash', filter: 'trash' },
]

const quickViewButtons: QuickViewButton[] = [
  { id: 0, title: 'Work', colour: 'danger' },
  { id: 1, title: 'Private', colour: 'primary' },
  { id: 2, title: 'Saved', colour: 'primary' },
]

function handleButtonClick(id: number, filterCond: string | null) {
  activeButtonId.value = id
  emit('open-message', null)
  emit('filter', filterCond)
}
</script>

<style src="./Filters.scss" lang="scss" scoped />
