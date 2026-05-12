<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
import MessageHeader from '../MessageHeader/MessageHeader.vue'
import MessageAttachments from '../MessageAttachments/MessageAttachments.vue'

interface Attachment {
  id: number
  photo: string
  photoName: string
  weight: string
}

interface Message {
  theme: string
  from: string
  fromEmail: string
  to: string
  date: string
  content: string
  attachments?: Attachment[]
}

const props = defineProps<{
  message: Message
}>()

const emit = defineEmits<{
  'change-compose': [open: boolean, data: { from: string; theme: string }]
}>()

function handleReply() {
  emit('change-compose', true, { from: props.message.from, theme: props.message.theme })
}
</script>

<template>
  <Widget>
    <MessageHeader
      :title="message.theme"
      :name="message.from"
      :email="message.fromEmail"
      :to="message.to"
      :date="message.date"
      @reply="handleReply"
    />
    <div v-safe-html="message.content" />
    <MessageAttachments
      v-if="message.attachments"
      :attachments="message.attachments"
    />
  </Widget>
</template>
