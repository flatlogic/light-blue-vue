<template>
  <div class="email-page">
    <div class="pageTopLine">
      <h1 class="page-title">
        Email - <span class="fw-semi-bold">Inbox</span>
      </h1>
      <b-alert
        :show="isNotificationOpen"
        variant="success"
        :class="{ alertTransform: true, alertAfter: alertAfter }"
        dismissible
      >
        Hey! This is a <span class="fw-semi-bold">real app</span>
        with CRUD and Search functions. Have fun!
      </b-alert>
    </div>
    <div class="view">
      <b-row>
        <Filters
          @filter="filter"
          @open-message="openMessage"
          @compose="changeCompose"
        />
        <MessageTable
          :filter="filterValue"
          :opened-message="openedMessage"
          :compose="compose"
          :compose-data="composeData"
          @open-message="openMessage"
          @change-compose="changeCompose"
        />
      </b-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Filters from './components/Filters/Filters.vue'
import MessageTable from './components/MessageTable/MessageTable.vue'

interface ComposeData {
  to?: string
  subject?: string
  content?: string
}

// Reactive state
const isNotificationOpen = ref(true)
const filterValue = ref<string | null>(null)
const openedMessage = ref<number | null>(null)
const compose = ref(false)
const composeData = ref<ComposeData>({})
const alertAfter = ref(false)

function fixAlert() {
  alertAfter.value = true
}

function filter(value: string | null) {
  filterValue.value = value
  compose.value = false
  composeData.value = {}
}

function openMessage(id: number | null) {
  openedMessage.value = id
  compose.value = id === null ? false : compose.value
  if (id === null) composeData.value = {}
}

function changeCompose(composeVal: boolean, data?: ComposeData) {
  compose.value = composeVal
  if (data) {
    composeData.value = data
  }
}

onMounted(() => {
  setTimeout(() => {
    fixAlert()
  }, 500)
})
</script>

<style src="./Email.scss" lang="scss" scoped />
