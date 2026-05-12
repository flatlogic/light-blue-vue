<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/layout'

import Sidebar from '@/components/Sidebar/Sidebar.vue'
import Header from '@/components/Header/Header.vue'
import Helper from '@/components/Helper/Helper.vue'

import './Layout.scss'

const route = useRoute()
const layoutStore = useLayoutStore()
const content = ref<HTMLElement | null>(null)

const breadcrumbs = computed(() => {
  const parts = route.path.split('/').filter(Boolean)
  let currentPath = ''
  return parts.map(part => {
    currentPath += '/' + part
    return {
      text: part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      to: currentPath
    }
  })
})

onMounted(() => {
  // Initialize theme from store (reads localStorage and syncs store state)
  layoutStore.initializeTheme()

  if (content.value) {
    content.value.addEventListener('animationend', () => {
      content.value?.classList.remove('animated')
      content.value?.classList.remove('fadeInUp')
    })
  }
})
</script>

<template>
  <div
    :class="{
      root: true,
      'sidebar-right': layoutStore.sidebarPosition === 'right',
      'sidebar-hidden': !layoutStore.sidebarVisible
    }"
  >
    <Helper />
    <Header />
    <Sidebar v-if="layoutStore.sidebarVisible" />
    <div
      ref="content"
      class="content animated fadeInUp"
    >
      <b-breadcrumb class="content-breadcrumb">
        <b-breadcrumb-item>YOU ARE HERE</b-breadcrumb-item>
        <b-breadcrumb-item
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          :to="index === breadcrumbs.length - 1 ? undefined : crumb.to"
          :active="index === breadcrumbs.length - 1"
        >
          {{ crumb.text }}
        </b-breadcrumb-item>
      </b-breadcrumb>
      <router-view v-slot="{ Component }">
        <transition name="router-animation">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <footer class="contentFooter">
      Light Blue Vue Admin Dashboard Template - Made by
      <a
        href="https://flatlogic.com"
        target="_blank"
      >Flatlogic</a>
    </footer>
  </div>
</template>

<style src="./Layout.scss" lang="scss" />
