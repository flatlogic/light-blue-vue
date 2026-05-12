<template>
  <div :class="{ 'd-flex align-items-start': true, completed: completed }">
    <div class="abc-checkbox abc-checkbox-success d-flex mt-4">
      <input
        :id="`checkbox${task.id}`"
        type="checkbox"
        :checked="completed"
        @click="emit('toggle', task.id)"
      />
      <label :for="`checkbox${task.id}`" />
    </div>
    <div class="task-content ps-2">
      <p class="text-muted mb-0">
        <small>{{ task.type }}</small>
      </p>
      <h6 class="mb-0">
        {{ task.title }}
      </h6>
      <p class="text-muted mb-1">
        <small>{{ task.time }}</small>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TaskItem {
  id: number
  type: string
  title: string
  time: string
}

interface Props {
  task: TaskItem
  completed: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  toggle: [id: number]
}>()
</script>

<style src="./Task.scss" lang="scss" scoped />
