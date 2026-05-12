<template>
  <div class="scrollspy-container sticky-top">
    <h6 class="scrollspy-title">
      {{ title }}
    </h6>
    <nav class="scrollspy-nav">
      <ul class="scrollspy-list">
        <li
          v-for="id in ids"
          :key="id"
          class="scrollspy-item"
          :class="{ active: activeId === id }"
        >
          <a
            :href="`#${id}`"
            class="scrollspy-link"
            @click.prevent="scrollTo(id)"
          >
            {{ formatLabel(id) }}
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Props {
  title: string
  ids: string[]
}

const props = defineProps<Props>()

const activeId = ref<string>(props.ids[0] || '')

function formatLabel(id: string): string {
  return id.replace(/-/g, ' ')
}

function scrollTo(id: string) {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeId.value = id
  }
}

function handleScroll() {
  const scrollPosition = window.scrollY + 100

  for (const id of props.ids) {
    const element = document.getElementById(id)
    if (element) {
      const { offsetTop, offsetHeight } = element
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        activeId.value = id
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss">
.scrollspy-container {
  top: 100px;
  padding: 1rem;
}

.scrollspy-title {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #868e96;
  margin-bottom: 0.75rem;
}

.scrollspy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scrollspy-item {
  margin-bottom: 0.25rem;
}

.scrollspy-link {
  display: block;
  padding: 0.25rem 0;
  font-size: 0.875rem;
  color: #6c757d;
  text-decoration: none;
  border-left: 2px solid transparent;
  padding-left: 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    color: #495057;
    border-left-color: #dee2e6;
  }
}

.scrollspy-item.active .scrollspy-link {
  color: #007bff;
  border-left-color: #007bff;
  font-weight: 500;
}
</style>
