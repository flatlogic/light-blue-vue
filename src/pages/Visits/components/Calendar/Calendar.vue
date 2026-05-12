<template>
  <span class="lb-calendar">
    <v-calendar
      is-expanded
      is-dark
      color="blue"
      :attributes="attrs"
    >
      <template #day-popover="{ day, attributes }">
        <div class="calendar-popover">
          <header class="fs-sm text-light fw-semi-bold text-center mb-2">
            {{ day.label }}
          </header>
          <div
            v-for="attr in attributes"
            :key="attr.key"
            class="popover-item text-white mb-1"
          >
            <p
              v-if="attr.customData?.title"
              class="fw-normal m-0"
            >{{ attr.customData.title }}</p>
            <p
              v-if="attr.customData?.description"
              class="fw-thin m-0 text-muted"
            >{{ attr.customData.description }}</p>
            <a
              v-if="attr.customData?.link"
              class="fw-thin m-0"
              :href="attr.customData.href"
            >{{ attr.customData.link }}</a>
          </div>
        </div>
      </template>
    </v-calendar>
  </span>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface PopoverConfig {
  visibility: 'click' | 'hover' | 'focus' | 'hover-focus'
  label?: string
}

interface CalendarAttribute {
  key: number
  dot?: string
  highlight?: boolean
  dates: Date
  popover?: PopoverConfig
  customData?: {
    title?: string
    description?: string
    link?: string
    href?: string
  }
}

const attrs = ref<CalendarAttribute[]>([])

onMounted(() => {
  const now = new Date()
  const month = now.getMonth()
  const year = now.getFullYear()

  attrs.value = [
    {
      key: 1,
      dot: 'blue',
      dates: new Date(year, month, 2),
      popover: { visibility: 'click' },
      customData: {
        title: 'The flower bed',
        description: 'Contents here',
      }
    },
    {
      key: 2,
      dot: 'orange',
      highlight: true,
      dates: new Date(year, month, 5),
      popover: { visibility: 'click' },
      customData: {
        title: 'Stop world water pollution',
        description: 'Have a kick off meeting with .inc company',
      }
    },
    {
      key: 3,
      dot: 'green',
      dates: new Date(year, month, 11),
      popover: { visibility: 'click' },
      customData: {
        title: 'Light Blue 2.2 release',
        description: 'Some contents here',
      }
    },
    {
      key: 4,
      dot: 'red',
      dates: new Date(year, month, 22),
      popover: { visibility: 'click' },
      customData: {
        title: 'Important deadline',
        description: 'Project milestone',
      }
    },
    {
      key: 5,
      highlight: true,
      dates: new Date(year, month, 29),
      popover: { visibility: 'click' },
      customData: {
        link: 'A link',
        href: 'http://www.flatlogic.com',
      }
    }
  ]
})
</script>

<style src="./Calendar.scss" lang="scss" />
