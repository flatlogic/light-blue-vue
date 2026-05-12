<template>
  <canvas
    ref="canvas"
    v-bind="options"
  />
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUpdate } from 'vue'
import SkyconsFactory from 'skycons'

const Skycons = SkyconsFactory(window || {})

interface Props {
  options?: Record<string, unknown>
  icon?: string
  color?: string
  autoplay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: true,
})

const canvas = ref<HTMLCanvasElement | null>(null)
const skycons = new Skycons({ color: props.color })

onMounted(() => {
  if (canvas.value && props.icon) {
    skycons.add(canvas.value, (Skycons as Record<string, unknown>)[props.icon])

    if (props.autoplay) {
      skycons.play()
    }
  }
})

onBeforeUpdate(() => {
  if (canvas.value && props.icon) {
    skycons.set(canvas.value, (Skycons as Record<string, unknown>)[props.icon])
  }
})

function play() {
  skycons.play()
}

function pause() {
  skycons.pause()
}

defineExpose({ play, pause })
</script>
