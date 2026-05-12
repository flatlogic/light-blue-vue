<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useLayoutStore } from '@/store/layout'
import NavLink from './NavLink/NavLink.vue'
import { sidebarIcons } from './icons'

const route = useRoute()
const layoutStore = useLayoutStore()

type VariantColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

interface Alert {
  id: number
  title: string
  value: number
  footer: string
  color: VariantColor
}

const alerts = ref<Alert[]>([
  {
    id: 0,
    title: 'Sales Report',
    value: 15,
    footer: 'Calculating x-axis bias... 65%',
    color: 'primary',
  },
  {
    id: 1,
    title: 'Personal Responsibility',
    value: 20,
    footer: 'Provide required notes',
    color: 'danger',
  },
])

const sidebarOpened = computed(() => !layoutStore.sidebarStatic)
const activeItem = computed(() => layoutStore.sidebarActiveElement)
const sidebarPosition = computed(() => layoutStore.sidebarPosition)

function setActiveByRoute() {
  const paths = route.fullPath.split('/')
  paths.pop()
  layoutStore.changeSidebarActive(paths.join('/') as unknown as number)
}

onMounted(() => {
  setActiveByRoute()
})

watch(() => route.fullPath, () => {
  setActiveByRoute()
})
</script>

<template>
  <BCollapse
    id="sidebar-collapse"
    class="sidebar-collapse"
    :visible="sidebarOpened"
  >
    <nav :class="{ sidebar: true, 'sidebar-right': sidebarPosition === 'right' }">
      <header class="logo">
        <router-link to="/app">
          Light <span class="fw-bold">Blue</span>
        </router-link>
      </header>

      <ul class="nav">
        <h5 class="navTitle groupTitle">
          APP
        </h5>
        <NavLink
          :active-item="activeItem"
          header="Dashboard"
          link="/app/main"
          :icon-svg="sidebarIcons.dashboard"
          index="main"
          :children-links="[
            { header: 'Analytics', link: '/app/main/analytics' },
            { header: 'Visits', link: '/app/main/visits' },
            { header: 'Widgets', link: '/app/main/widgets' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Users"
          link="/app/profile"
          :icon-svg="sidebarIcons.users"
          index="profile"
          label="Real App"
          label-color="primary"
          :children-links="[
            { header: 'User Management', link: '/app/admin/users' },
            { header: 'My Profile', link: '/app/profile' },
            { header: 'Edit Profile', link: '/app/profile/edit' },
            { header: 'Change Password', link: '/app/profile/change-password' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="E-commerce"
          link="/app/ecommerce"
          :icon-svg="sidebarIcons.ecommerce"
          index="ecommerce"
          :children-links="[
            { header: 'Product Management', link: '/app/ecommerce/management' },
            { header: 'Products Grid', link: '/app/ecommerce/products' },
            { header: 'Product Page', link: '/app/ecommerce/product' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="LB Package"
          link="/app/package"
          :icon-svg="sidebarIcons.package"
          index="package"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Email"
          link="/app/email"
          :icon-svg="sidebarIcons.email"
          index="email"
          badge="9"
          badge-color="danger"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Documentation"
          link="/documentation"
          :icon-svg="sidebarIcons.documentation"
          index="documentation"
          label="new"
          label-color="success"
          is-header
        />
        <h5 class="navTitle">
          TEMPLATE
        </h5>
        <NavLink
          :active-item="activeItem"
          header="Core"
          link="/app/core"
          :icon-svg="sidebarIcons.core"
          index="core"
          :children-links="[
            { header: 'Typography', link: '/app/core/typography' },
            { header: 'Colors', link: '/app/core/colors' },
            { header: 'Grid', link: '/app/core/grid' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="UI Elements"
          link="/app/ui"
          :icon-svg="sidebarIcons.uiElements"
          index="ui"
          :children-links="[
            { header: 'Alerts', link: '/app/ui/alerts' },
            { header: 'Badge', link: '/app/ui/badge' },
            { header: 'Buttons', link: '/app/ui/buttons' },
            { header: 'Card', link: '/app/ui/card' },
            { header: 'Carousel', link: '/app/ui/carousel' },
            { header: 'Jumbotron', link: '/app/ui/jumbotron' },
            { header: 'Icons', link: '/app/ui/icons' },
            { header: 'List Groups', link: '/app/ui/list-groups' },
            { header: 'Modal', link: '/app/ui/modal' },
            { header: 'Nav', link: '/app/ui/nav' },
            { header: 'Navbar', link: '/app/ui/navbar' },
            { header: 'Notifications', link: '/app/ui/notifications' },
            { header: 'Pagination', link: '/app/tables/dynamic' },
            { header: 'Popovers & Tooltips', link: '/app/ui/popovers' },
            { header: 'Progress', link: '/app/ui/progress' },
            { header: 'Tabs & Accordion', link: '/app/ui/tabs' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Forms"
          link="/app/forms"
          :icon-svg="sidebarIcons.forms"
          index="forms"
          :children-links="[
            { header: 'Form Elements', link: '/app/forms/elements' },
            { header: 'Form Validation', link: '/app/forms/validation' },
            { header: 'Forms Wizard', link: '/app/forms/wizard' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Charts"
          link="/app/charts"
          :icon-svg="sidebarIcons.charts"
          index="charts"
          :children-links="[
            { header: 'Charts Overview', link: '/app/charts/overview' },
            { header: 'Apex Charts', link: '/app/charts/apex' },
            { header: 'Echarts', link: '/app/charts/echarts' },
            { header: 'Highcharts', link: '/app/charts/highcharts' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Grid"
          link="/app/grid"
          :icon-svg="sidebarIcons.grid"
          index="grid"
          is-header
        />
        <NavLink
          :active-item="activeItem"
          header="Tables"
          link="/app/tables"
          :icon-svg="sidebarIcons.tables"
          index="tables"
          :children-links="[
            { header: 'Tables Basic', link: '/app/tables/basic' },
            { header: 'Tables Dynamic', link: '/app/tables/dynamic' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Maps"
          link="/app/maps"
          :icon-svg="sidebarIcons.maps"
          index="maps"
          :children-links="[
            { header: 'Google Maps', link: '/app/maps/google' },
            { header: 'Vector Maps', link: '/app/maps/amcharts' },
          ]"
        />
        <NavLink
          :active-item="activeItem"
          header="Extra"
          link="/app/extra"
          :icon-svg="sidebarIcons.extra"
          index="extra"
          :children-links="[
            { header: 'Calendar', link: '/app/extra/calendar' },
            { header: 'Invoice', link: '/app/extra/invoice' },
            { header: 'Login Page', link: '/login-demo' },
            { header: 'Error Page', link: '/error' },
            { header: 'Gallery', link: '/app/extra/gallery' },
            { header: 'Search Result', link: '/app/extra/search' },
            { header: 'Time Line', link: '/app/extra/time-line' },
          ]"
        />
      </ul>

      <h5 class="navTitle groupTitle d-sm-down-none">
        LABELS
      </h5>
      <ul class="sidebarLabels d-sm-down-none">
        <li>
          <a href="#">
            <i class="fa-solid fa-circle text-success me-2" />
            <span class="labelName">My Recent</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-circle text-primary me-2" />
            <span class="labelName">Starred</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="fa-solid fa-circle text-danger me-2" />
            <span class="labelName">Background</span>
          </a>
        </li>
      </ul>

      <h5 class="navTitle groupTitle d-sm-down-none">
        PROJECTS
      </h5>
      <div class="sidebarAlerts d-sm-down-none">
        <BAlert
          v-for="alert in alerts"
          :key="alert.id"
          class="sidebarAlert"
          variant="light"
          :model-value="true"
          dismissible
        >
          <span>{{ alert.title }}</span><br />
          <BProgress
            class="sidebarProgress progress-xs mt-1"
            :variant="alert.color"
            :value="alert.value"
            :max="100"
          />
          <small>{{ alert.footer }}</small>
        </BAlert>
      </div>
    </nav>
  </BCollapse>
</template>

<style src="./Sidebar.scss" lang="scss" scoped />
