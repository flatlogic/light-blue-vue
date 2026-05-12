<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef } from 'vue'
import Loader from '../Loader/Loader.vue'

interface Props {
  customHeader?: boolean
  tooltipPlacement?: string
  showTooltip?: boolean
  close?: boolean | string
  fullscreen?: boolean | string
  collapse?: boolean | string
  settings?: boolean | string
  settingsInverse?: boolean
  refresh?: boolean | string
  className?: string
  title?: string
  customControls?: string | null
  bodyClass?: string
  options?: Record<string, unknown>
  fetchingData?: boolean
  showLoader?: boolean
  collapsed?: boolean
  autoload?: boolean | number
}

const props = withDefaults(defineProps<Props>(), {
  customHeader: false,
  tooltipPlacement: 'top',
  showTooltip: false,
  close: false,
  fullscreen: false,
  collapse: false,
  settings: false,
  settingsInverse: false,
  refresh: false,
  className: '',
  title: '',
  customControls: null,
  bodyClass: '',
  options: () => ({}),
  fetchingData: false,
  showLoader: true,
  collapsed: false,
  autoload: false,
})

const emit = defineEmits<{
  load: []
  close: [removeFunction: () => void]
}>()

const state = ref(props.collapsed ? 'collapse' : 'default')
const widget = useTemplateRef<HTMLElement>('widget')
const customControlsRef = useTemplateRef<HTMLElement>('customControlsRef')

const randomId = computed(() => Math.floor(Math.random() * 100))

const mainControls = computed(() => {
  return !!(props.close || props.fullscreen || props.collapse ||
    props.refresh || props.settings || props.settingsInverse)
})

function closeWidget(e?: Event) {
  e?.preventDefault()
  const parentEl = widget.value?.parentElement
  if (!parentEl) return

  const length = parentEl.classList.length
  let parentToRemove = false

  for (let i = 0; i < length; i++) {
    if (/col.*/.test(parentEl.classList[i])) {
      parentToRemove = true
      break
    }
  }

  const removeFunction = () => {
    if (parentToRemove) {
      parentEl.remove()
    } else {
      widget.value?.remove()
    }
  }

  emit('close', removeFunction)
}

function changeState(e: Event | null, newState: string) {
  e?.preventDefault()
  state.value = newState
}

function loadWidgster(e?: Event) {
  e?.preventDefault()
  emit('load')
}

onMounted(() => {
  if (props.autoload) {
    loadWidgster()
    if (typeof props.autoload === 'number') {
      setInterval(() => loadWidgster(), props.autoload)
    }
  }

  if (props.customControls && customControlsRef.value) {
    const closeBtn = customControlsRef.value.querySelector('[control=close]')
    closeBtn?.addEventListener('click', closeWidget)

    const collapseBtn = customControlsRef.value.querySelector('[control=collapse]')
    collapseBtn?.addEventListener('click', () => changeState(null, 'collapse'))

    const expandBtn = customControlsRef.value.querySelector('[control=expand]')
    expandBtn?.addEventListener('click', () => changeState(null, 'default'))

    const fullscreenBtn = customControlsRef.value.querySelector('[control=fullscreen]')
    fullscreenBtn?.addEventListener('click', () => changeState(null, 'fullscreen'))

    const restoreBtn = customControlsRef.value.querySelector('[control=restore]')
    restoreBtn?.addEventListener('click', () => changeState(null, 'default'))

    const loadBtn = customControlsRef.value.querySelector('[control=load]')
    loadBtn?.addEventListener('click', loadWidgster)
  }
})

// Expose methods for parent components
defineExpose({
  changeState,
})
</script>

<template>
  <section
    ref="widget"
    :class="{
      widget: true,
      [className]: !!className,
      collapsed: state === 'collapse',
      fullscreened: state === 'fullscreen',
      loading: fetchingData
    }"
  >
    <h5
      v-if="title && typeof title === 'string' && !customHeader"
      class="title"
    >
      {{ title }}
    </h5>
    <header
      v-if="title && customHeader"
      v-safe-html="title"
      class="title"
    />

    <div
      v-if="!customControls && mainControls"
      class="widgetControls widget-controls"
    >
      <a
        v-if="settings"
        href="#"
      ><i class="la la-cog" /></a>
      <a
        v-if="settingsInverse"
        href="#"
        class="bg-default mx-2"
      >
        <i class="la la-cog text-white" />
      </a>
      <a
        v-if="refresh"
        :id="`reloadId-${randomId}`"
        href="#"
        @click="loadWidgster($event)"
      >
        <strong
          v-if="typeof refresh === 'string'"
          class="text-gray-light"
        >{{ refresh }}</strong>
        <i
          v-else
          class="la la-refresh"
        />
        <BTooltip
          v-if="showTooltip"
          :placement="tooltipPlacement as any"
          :target="`reloadId-${randomId}`"
        >
          Reload
        </BTooltip>
      </a>
      <a
        v-if="fullscreen && state !== 'fullscreen'"
        :id="`fullscreenId-${randomId}`"
        href="#"
        @click="changeState($event, 'fullscreen')"
      >
        <i class="la la-expand" />
        <BTooltip
          v-if="showTooltip"
          :placement="tooltipPlacement as any"
          :target="`fullscreenId-${randomId}`"
        >
          Fullscreen
        </BTooltip>
      </a>
      <a
        v-if="fullscreen && state === 'fullscreen'"
        :id="`restoreId-${randomId}`"
        href="#"
        @click="changeState($event, 'default')"
      >
        <i class="la la-compress" />
        <BTooltip
          v-if="showTooltip"
          :placement="tooltipPlacement as any"
          :target="`restoreId-${randomId}`"
        >
          Restore
        </BTooltip>
      </a>
      <span v-if="collapse && state !== 'collapse'">
        <a
          :id="`collapseId-${randomId}`"
          href="#"
          @click="changeState($event, 'collapse')"
        >
          <i class="la la-angle-down" />
          <BTooltip
            v-if="showTooltip"
            :placement="tooltipPlacement as any"
            :target="`collapseId-${randomId}`"
          >
            Collapse
          </BTooltip>
        </a>
      </span>
      <span v-if="collapse && state === 'collapse'">
        <a
          :id="`expandId-${randomId}`"
          href="#"
          @click="changeState($event, 'default')"
        >
          <i class="la la-angle-up" />
          <BTooltip
            v-if="showTooltip"
            :placement="tooltipPlacement as any"
            :target="`expandId-${randomId}`"
          >
            Expand
          </BTooltip>
        </a>
      </span>
      <a
        v-if="close"
        :id="`closeId-${randomId}`"
        href="#"
        @click="closeWidget($event)"
      >
        <strong
          v-if="typeof close === 'string'"
          class="text-gray-light"
        >{{ close }}</strong>
        <i
          v-else
          class="la la-remove"
        />
        <BTooltip
          v-if="showTooltip"
          :placement="tooltipPlacement as any"
          :target="`closeId-${randomId}`"
        >
          Close
        </BTooltip>
      </a>
    </div>

    <div
      v-if="customControls"
      ref="customControlsRef"
      v-safe-html="customControls"
      class="widgetControls widget-controls"
    />

    <div
      :class="`widgetBody widget-body ${bodyClass}`"
      :style="{ display: state === 'collapse' ? 'none' : '' }"
    >
      <Loader
        v-if="fetchingData && showLoader"
        class="widget-loader"
        :size="40"
      />
      <slot v-else />
    </div>
  </section>
</template>

<style src="./Widget.scss" lang="scss" />
