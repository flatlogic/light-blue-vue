<template>
  <div class="mb-xlg">
    <Widget
      class="h-100"
      body-class="p-0 mt-0"
    >
      <div class="d-flex justify-content-between flex-wrap px-4">
        <h4 class="d-flex align-items-center pb-1 bigStatTitle">
          <span
            :class="`circle bg-${color} me-2`"
            :style="{ fontSize: '6px' }"
          />
          Statistic <span class="fw-normal ms-1">{{ product }}</span>
        </h4>
        <b-dropdown
          :text="text"
          :variant="('default' as any)"
          size="sm"
          class="stat-dropdown"
        >
          <b-dropdown-item-button @click="changeText('Daily')">
            Daily
          </b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Weekly')">
            Weekly
          </b-dropdown-item-button>
          <b-dropdown-item-button @click="changeText('Yearly')">
            Yearly
          </b-dropdown-item-button>
        </b-dropdown>
      </div>
      <div class="px-5">
        <h4 class="fw-semi-bold mb-lg mt-sm">
          {{ total }}
        </h4>
        <div class="d-flex">
          <div class="w-50 py-3 pr-2">
            <div class="d-flex align-items-start">
              <h6>+{{ registrations.value }}</h6>
              <i
                :class="`la la-lg la-arrow-right ms-2 text-${registrations.profit ? 'success' : 'danger'}
                rotate-${registrations.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 me-1">
              <small>Registrations</small>
            </p>
          </div>
          <div class="w-50 py-3 pl-2">
            <div class="d-flex align-items-start">
              <h6>{{ bounce.value }}%</h6>
              <i
                :class="`la la-lg la-arrow-right ms-2 text-${bounce.profit ? 'success' : 'danger'}
                rotate-${bounce.profit ? '315' : '45'}`"
              />
            </div>
            <p class="text-muted mb-0 me-1">
              <small>Bounce Rate</small>
            </p>
          </div>
        </div>
      </div>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

interface StatValue {
  value: number | string
  profit: boolean
}

interface Props {
  product: string
  color: string
  total: string
  registrations: StatValue
  bounce: StatValue
}

defineProps<Props>()

const text = ref('Daily')

function changeText(newText: string) {
  text.value = newText
}
</script>

<style src="./BigStat.scss" lang="scss" scoped />
