<template>
  <Widget>
    <div class="compose">
      <h4 class="mb-lg">
        Compose <span class="fw-semi-bold">New</span>
      </h4>
      <b-form-input
        class="mb"
        type="text"
        placeholder="To"
        :value="data?.to"
      />
      <b-form-input
        class="mb"
        type="text"
        placeholder="Subject"
        :value="data?.subject"
      />
      <ckeditor
        v-model="wygContent"
        :editor="wygEditor"
      />
      <div class="text-md-right mt">
        <b-button
          class="ms-1"
          variant="secondary"
        >
          Discard
        </b-button>
        <b-button
          class="ms-1"
          variant="secondary"
        >
          Save
        </b-button>
        <b-button
          class="ms-1"
          variant="danger"
        >
          Send
        </b-button>
      </div>
    </div>
  </Widget>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import { ClassicEditor } from 'ckeditor5'

interface ComposeData {
  to?: string
  subject?: string
  content?: string
}

defineProps<{
  data?: ComposeData
}>()

const wygEditor = ClassicEditor
const wygContent = ref('')
</script>

<style src="./Compose.scss" lang="scss" scoped />
