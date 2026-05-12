<template>
  <Widget
    class-name="mb-xlg pb-2"
    body-class="task-container mt"
    :title="`
      <div class='d-flex justify-content-between align-items-start'>
        <div>
          <h5 class='mb-0'>Today&apos;s Tasks</h5>
          <p class='text-primary mb-0'><small>
            ${tasks.filter(t => t.completed).length} of ${tasks.length} completed
          </small></p>
        </div>
        <span class='badge rounded-pill bg-success'>
          ${tasks.length}
        </span>
      </div>`"
    custom-header
  >
    <Task
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :completed="task.completed ?? false"
      @toggle="toggleTaskState"
    />
    <b-button
      variant="link"
      class="w-100 text-center text-muted see-all-btn"
    >
      See All <i class="la la-arrow-down" />
    </b-button>
  </Widget>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import Task from '../Task/Task.vue'

interface TaskItem {
  id: number
  type: string
  title: string
  time: string
  completed?: boolean
}

interface Props {
  data: TaskItem[]
}

const props = defineProps<Props>()

// Initialize tasks immediately (equivalent to created() hook)
const tasks = ref<TaskItem[]>(
  props.data.map((task) => ({
    ...task,
    completed: false,
  }))
)

function toggleTaskState(index: number) {
  const task = tasks.value.find(({ id }) => id === index)
  if (task) {
    task.completed = !task.completed
  }
}
</script>
