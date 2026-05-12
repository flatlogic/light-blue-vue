<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/layout'
import { useAuthStore } from '@/store/auth'
import config from '@/config'
import avatarImage from '@/assets/people/a5.jpg'
import Notifications from '@/components/Notifications/Notifications.vue'

const route = useRoute()
const layoutStore = useLayoutStore()
const authStore = useAuthStore()

const showNavbarAlert = ref(true)

const user = computed(() => authStore.user)

const sidebarClose = computed(() => layoutStore.sidebarStatic)

const firstUserLetter = computed(() => {
  return (user.value?.name || user.value?.email || 'P')[0].toUpperCase()
})

function switchSidebarMethod() {
  if (!sidebarClose.value) {
    layoutStore.toggleSidebar()
    layoutStore.changeSidebarActive(null)
  } else {
    layoutStore.toggleSidebar()
    const paths = route.fullPath.split('/')
    paths.pop()
    layoutStore.changeSidebarActive(paths.join('/') as unknown as number)
  }
}

function logoutUser() {
  authStore.logoutUser()
}
</script>

<template>
  <BNavbar
    toggleable="md"
    class="app-header d-print-none"
  >
    <BNavbarNav class="navbar-nav-mobile ms-auto">
      <BNavText class="me-3">
        <div
          v-if="showNavbarAlert"
          class="header-alert animate__animated animate__bounceIn animate__delay-2s"
        >
          Check out Light Blue <i class="fa-solid fa-gear text-primary mx-1" /> on the right!
          <button
            type="button"
            class="header-alert-close"
            @click="showNavbarAlert = false"
          >
            ✕
          </button>
        </div>
      </BNavText>
      <BNavForm class="d-sm-down-none me-3 d-flex align-items-center">
        <BInputGroup class="input-group-transparent">
          <BInputGroupText><i class="fa-solid fa-magnifying-glass" /></BInputGroupText>
          <BFormInput
            id="search-input"
            class="input-transparent"
            placeholder="Search Dashboard"
          />
        </BInputGroup>
      </BNavForm>
      <BNavItemDropdown
        right
        menu-class="py-0"
      >
        <template #button-content>
          <span class="avatar rounded-circle thumb-sm float-start me-2">
            <img
              v-if="user?.avatar || user?.email === config.auth.email"
              class="rounded-circle"
              :src="user?.avatar || avatarImage"
              :alt="user?.name || 'avatar'"
            />
            <span v-else>{{ firstUserLetter }}</span>
          </span>
          <span class="small">{{ user?.name || 'Admin' }}</span>
          <span class="mx-2 circle bg-danger text-white fs-sm fw-bold">9</span>
        </template>
        <Notifications />
      </BNavItemDropdown>
      <BNavItemDropdown
        class="d-md-down-none"
        no-caret
        right
        menu-class="dropdown-menu-messages"
      >
        <template #button-content>
          <i class="fa-regular fa-comment px-1" />
        </template>
        <BDropdownItem>
          <span class="avatar thumb-sm me-3">
            <img
              class="rounded-circle"
              src="../../assets/people/a1.jpg"
              alt="woman"
            />
          </span>
          <div>
            <h6>Jane <span class="fw-semi-bold">Hew</span></h6>
            <span class="fs-sm text-muted fw-thin">Hey, John! How is it going? ...</span>
          </div>
        </BDropdownItem>
        <BDropdownItem>
          <span class="avatar thumb-sm me-3">
            <img
              class="rounded-circle"
              src="../../assets/people/a2.jpg"
              alt="woman"
            />
          </span>
          <div>
            <h6>Alies <span class="fw-semi-bold">Rumiancaŭ</span></h6>
            <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
          </div>
        </BDropdownItem>
        <BDropdownItem>
          <span class="avatar thumb-sm me-3">
            <img
              class="rounded-circle"
              src="../../assets/people/a3.jpg"
              alt="woman"
            />
          </span>
          <div>
            <h6>Alexey <span class="fw-semi-bold">Kamandzirau</span></h6>
            <span class="fs-sm text-muted fw-thin">I will definitely buy this template</span>
          </div>
        </BDropdownItem>
        <BDropdownItemButton class="text-center">
          <span class="mx-auto">See all messages <i class="fa-solid fa-arrow-right ms-1" /></span>
        </BDropdownItemButton>
      </BNavItemDropdown>
      <BNavItem class="divider d-md-down-none" />
      <BNavItemDropdown
        no-caret
        right
        menu-class="dropdown-menu-settings"
      >
        <template #button-content>
          <i class="fa-solid fa-gear px-1" />
        </template>
        <div class="sidebar-controls-dropdown px-3 py-3">
          <div class="mb-3">
            <div class="text-center mb-2">
              Sidebar on the
            </div>
            <BButtonGroup class="w-100">
              <BButton
                :class="layoutStore.sidebarPosition === 'left' ? 'active-control' : 'inactive-control'"
                @click.stop="layoutStore.setSidebarPosition('left')"
              >
                Left
              </BButton>
              <BButton
                :class="layoutStore.sidebarPosition === 'right' ? 'active-control' : 'inactive-control'"
                @click.stop="layoutStore.setSidebarPosition('right')"
              >
                Right
              </BButton>
            </BButtonGroup>
          </div>
          <div>
            <div class="text-center mb-2">
              Sidebar
            </div>
            <BButtonGroup class="w-100">
              <BButton
                :class="layoutStore.sidebarVisible ? 'active-control' : 'inactive-control'"
                @click.stop="layoutStore.setSidebarVisible(true)"
              >
                Show
              </BButton>
              <BButton
                :class="!layoutStore.sidebarVisible ? 'active-control' : 'inactive-control'"
                @click.stop="layoutStore.setSidebarVisible(false)"
              >
                Hide
              </BButton>
            </BButtonGroup>
          </div>
        </div>
      </BNavItemDropdown>
      <BNavItemDropdown
        no-caret
        right
        class="d-md-down-none"
      >
        <template #button-content>
          <span class="bell-icon-wrapper">
            <i class="fa-regular fa-bell px-1" />
            <span class="bell-notification-dot" />
          </span>
        </template>
        <BDropdownItem>
          <span class="badge bg-danger me-2"><i class="fa-regular fa-bell" /></span>
          <span class="fs-sm">Check out this awesome ticket</span>
        </BDropdownItem>
        <BDropdownItem>
          <span class="badge bg-primary me-2"><i class="fa-regular fa-circle-question" /></span>
          <span class="fs-sm">Finish 2019 annual report</span>
        </BDropdownItem>
        <BDropdownItem>
          <span class="badge bg-success me-2"><i class="fa-solid fa-circle-info" /></span>
          <span class="fs-sm">Update Vue.js to the newest version</span>
        </BDropdownItem>
        <BDropdownItem>
          <span class="badge bg-info me-2"><i class="fa-solid fa-plus" /></span>
          <span class="fs-sm">Establish OKR system</span>
        </BDropdownItem>
        <BDropdownItem>
          <span class="badge bg-danger me-2"><i class="fa-solid fa-tag" /></span>
          <span class="fs-sm">Fill in time tracking</span>
        </BDropdownItem>
        <BDropdownItemButton class="text-center">
          See all tickets <i class="fa-solid fa-arrow-right ms-1" />
        </BDropdownItemButton>
      </BNavItemDropdown>
      <BNavItem
        class="d-md-down-none"
        @click="logoutUser"
      >
        <i class="fa-solid fa-power-off px-1" />
      </BNavItem>
      <BNavItem
        class="d-md-none"
        @click="switchSidebarMethod"
      >
        <i class="fa-solid fa-bars px-1" />
      </BNavItem>
    </BNavbarNav>
  </BNavbar>
</template>

<style src="./Header.scss" lang="scss" />
