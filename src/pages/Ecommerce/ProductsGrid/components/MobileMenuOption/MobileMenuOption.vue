<template>
  <li
    :class="{ option: true, active: active }"
    @click="emit('select')"
  >
    <span>
      <img
        src="../../../../../assets/check.svg"
        alt="check"
      />
    </span>
    {{ option }}
  </li>
</template>

<script setup lang="ts">
interface Props {
  option: string | number
  active: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  select: []
}>()
</script>

<style src="./MobileMenuOption.scss" lang="scss" scoped />
