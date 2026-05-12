<template>
  <div class="col-lg-9 col-xl-10 col-xs-12 d-flex flex-column">
    <div
      v-if="openedMessage === null && !compose"
      class="email-pagination"
    >
      <span class="pagination-info">Showing {{ startItem }} - {{ endItem }} of {{ rows }} messages</span>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        first-number
        last-number
        :limit="3"
      />
    </div>
    <span v-else>
      <b-button
        variant="secondary"
        class="mb"
        @click="emit('open-message', null)"
      >
        <i class="fa fa-angle-left fa-lg" />
      </b-button>
    </span>
    <Widget v-if="openedMessage === null && !compose">
      <MessageTableHeader
        @search="search"
        @choose-all="chooseAll"
        @choose-none="chooseNone"
        @choose-read="chooseRead"
        @choose-unread="chooseUnread"
        @mark-read="markRead"
        @mark-unread="markUnread"
        @delete-msg="deleteMsg"
      />
      <div class="table-responsive">
        <table class="table table-hover mb-0">
          <tbody>
            <tr
              v-for="message in dataToDisplay"
              v-show="_searchable(message)"
              :key="message.id"
              :class="{ unreadedMessage: message.unreaded }"
            >
              <td class="messageCheckbox">
                <div class="abc-checkbox abc-checkbox-success">
                  <input
                    :id="`checkbox${message.id}`"
                    type="checkbox"
                    :checked="checkedIds.indexOf(message.id) !== -1"
                    @change="changeChoosed(message.id)"
                  />
                  <label :for="`checkbox${message.id}`" />
                </div>
              </td>
              <td
                class="messageStar"
                @click.stop="starItem(message.id)"
              >
                <i
                  v-if="message.starred"
                  class="fa fa-star text-success"
                />
                <i
                  v-else
                  class="fa-regular fa-star"
                />
              </td>
              <td
                class="messageFrom"
                @click="handleOpenMessage(message.id)"
              >
                {{ message.from }}
              </td>
              <td @click="handleOpenMessage(message.id)">
                {{ message.theme }}
              </td>
              <td class="messageClip">
                <i
                  v-show="message.attachments"
                  class="fa fa-paperclip"
                />
              </td>
              <td class="text-end">
                {{ message.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Widget>
    <Compose
      v-else-if="compose"
      :data="composeData"
    />
    <Message
      v-else-if="openedMessage !== null && messages[openedMessage]"
      :message="messages[openedMessage]!"
      @change-compose="(open, data) => emit('change-compose', open, data as ComposeData)"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

import Widget from '@/components/Widget/Widget.vue'
import MessageTableHeader from '../MessageTableHeader/MessageTableHeader.vue'
import Message from '../Message/Message.vue'
import Compose from '../Compose/Compose.vue'

import mock, { Email } from '../../mock'

interface ComposeData {
  to?: string
  subject?: string
  content?: string
  from?: string
  theme?: string
}

// Props
const props = defineProps<{
  filter: string | null
  openedMessage: number | null
  composeData: ComposeData
  compose: boolean
}>()

const emit = defineEmits<{
  'open-message': [id: number | null]
  'change-compose': [compose: boolean, data?: ComposeData]
}>()

const messages = ref<Email[]>(mock)
const checkedIds = ref<number[]>([])
const searchString = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const rows = ref(96)

const filteredMessages = computed(() => {
  if (!props.filter) return messages.value
  return messages.value.filter(message => (message as Record<string, unknown>)[props.filter as string])
})

const dataToDisplay = computed(() => {
  return props.filter ? filteredMessages.value : messages.value
})

const _isMainChecked = computed(() => {
  return dataToDisplay.value.length === checkedIds.value.length && checkedIds.value.length > 0
})

const startItem = computed(() => {
  return (currentPage.value - 1) * perPage.value + 1
})

const endItem = computed(() => {
  const end = currentPage.value * perPage.value
  return end > rows.value ? rows.value : end
})

function changeChoosed(id: number) {
  const index = checkedIds.value.indexOf(id)

  if (index === -1) {
    checkedIds.value.push(id)
  } else {
    checkedIds.value.splice(index, 1)
  }
}

function chooseAll() {
  chooseNone()

  if (props.filter) {
    messages.value
      .filter(message => (message as Record<string, unknown>)[props.filter as string])
      .forEach(message => checkedIds.value.push(message.id))
  } else {
    messages.value.forEach(message => checkedIds.value.push(message.id))
  }
}

function chooseNone() {
  checkedIds.value = []
}

function chooseRead() {
  chooseNone()

  messages.value.forEach((message) => {
    if (!message.unreaded) {
      checkedIds.value.push(message.id)
    }
  })
}

function chooseUnread() {
  chooseNone()

  messages.value.forEach((message) => {
    if (message.unreaded) {
      checkedIds.value.push(message.id)
    }
  })
}

function markUnread() {
  messages.value.forEach((message) => {
    if (checkedIds.value.indexOf(message.id) !== -1) {
      message.unreaded = true
    }
  })
}

function markRead() {
  messages.value.forEach((message) => {
    if (checkedIds.value.indexOf(message.id) !== -1) {
      message.unreaded = false
    }
  })
}

function deleteMsg() {
  messages.value = messages.value.filter(m => checkedIds.value.indexOf(m.id) === -1)
  chooseNone()
}

function starItem(id: number) {
  const message = messages.value.find(m => m.id === id)
  if (message) {
    message.starred = !message.starred
  }
}

function handleOpenMessage(id: number) {
  const message = messages.value.find(m => m.id === id)
  if (message) {
    message.unreaded = false
  }
  emit('open-message', id)
}

function search(value: string) {
  searchString.value = value.toLowerCase()
}

function _searchable(m: Email) {
  if (searchString.value) {
    return (
      m.content.toLowerCase().indexOf(searchString.value) !== -1 ||
      m.from.toLowerCase().indexOf(searchString.value) !== -1 ||
      m.theme.toLowerCase().indexOf(searchString.value) !== -1
    )
  }
  return true
}

// Watchers
watch(() => props.filter, (newVal, oldVal) => {
  if (oldVal !== newVal) {
    chooseNone()
  }
})
</script>

<style src="./MessageTable.scss" lang="scss" scoped />
