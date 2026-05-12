<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLayoutStore } from '@/store/layout'

interface ChildLink {
  header: string
  link: string
  index?: string
  childrenLinks?: ChildLink[]
}

interface Props {
  badge?: string
  badgeColor?: string
  header?: string
  iconName?: string
  iconSvg?: string
  link?: string
  externalLink?: boolean
  childrenLinks?: ChildLink[] | null
  className?: string
  isHeader?: boolean
  activeItem?: string | number | null
  label?: string
  labelColor?: string
  index?: string
}

const props = withDefaults(defineProps<Props>(), {
  badge: '',
  badgeColor: 'warning',
  header: '',
  iconName: '',
  iconSvg: '',
  link: '',
  externalLink: false,
  childrenLinks: null,
  className: '',
  isHeader: false,
  activeItem: '',
  labelColor: 'warning',
  index: '',
})

const layoutStore = useLayoutStore()
const headerLinkWasClicked = ref(true)

const fullIconName = computed(() => `fi ${props.iconName}`)
const hasSvgIcon = computed(() => !!props.iconSvg)

const isActive = computed(() => {
  const activeItemStr = String(props.activeItem || '')
  return activeItemStr.includes(props.index) && headerLinkWasClicked.value
})

function togglePanelCollapse(link: string) {
  layoutStore.changeSidebarActive(link as unknown as number)
  headerLinkWasClicked.value = !headerLinkWasClicked.value ||
    !String(props.activeItem || '').includes(props.index)
}
</script>

<template>
  <!-- Header link without children, internal -->
  <li
    v-if="!childrenLinks && isHeader && !externalLink"
    :class="{ headerLink: true, [className]: !!className }"
  >
    <router-link
      :to="link"
      class="d-flex sidebar-link"
    >
      <span
        v-if="hasSvgIcon"
        class="icon"
        v-html="iconSvg"
      />
      <span
        v-else
        class="icon"
      >
        <i :class="fullIconName" />
      </span>
      {{ header }}
      <sup
        v-if="label"
        :class="'text-' + labelColor"
        class="headerLabel"
      >{{ label }}</sup>
      <BBadge
        v-if="badge"
        class="badge rounded-f"
        :variant="(badgeColor as any)"
        pill
      >
        {{ badge }}
      </BBadge>
    </router-link>
  </li>

  <!-- Header link without children, external -->
  <li
    v-else-if="!childrenLinks && isHeader && externalLink"
    :class="{ headerLink: true, [className]: !!className }"
  >
    <a
      :href="link"
      class="sidebar-link"
      target="_blank"
      rel="noopener"
    >
      <span
        v-if="hasSvgIcon"
        class="icon"
        v-html="iconSvg"
      />
      <span
        v-else
        class="icon"
      >
        <i :class="fullIconName" />
      </span>
      {{ header }}
      <sup
        v-if="label"
        :class="'text-' + labelColor"
        class="headerLabel"
      >{{ label }}</sup>
    </a>
  </li>

  <!-- Header link with children -->
  <li
    v-else-if="childrenLinks"
    :class="{ headerLink: true, [className]: !!className }"
  >
    <a
      href="#"
      :class="['d-flex', 'sidebar-link', { 'sidebar-link-active': isActive }]"
      @click.prevent="togglePanelCollapse(link)"
    >
      <span
        v-if="hasSvgIcon"
        class="icon"
        v-html="iconSvg"
      />
      <span
        v-else
        class="icon"
      >
        <i :class="fullIconName" />
      </span>
      {{ header }}
      <sup
        v-if="label"
        :class="'text-' + labelColor"
        class="ms-1 headerLabel"
      >{{ label }}</sup>
      <div :class="{ caretWrapper: true, caretActive: isActive }">
        <i class="fa fa-angle-right" />
      </div>
    </a>
    <BCollapse
      :id="'collapse' + index"
      :visible="isActive"
    >
      <ul class="sub-menu">
        <NavLink
          v-for="childLink in childrenLinks"
          :key="childLink.link"
          class="nav-link-nested"
          :active-item="activeItem"
          :header="childLink.header"
          :index="childLink.index"
          :link="childLink.link"
          :children-links="childLink.childrenLinks"
        />
      </ul>
    </BCollapse>
  </li>

  <!-- Simple link -->
  <li v-else>
    <router-link :to="index !== 'menu' ? link : ''">
      {{ header }}
      <sup
        v-if="label"
        :class="'text-' + labelColor"
        class="headerLabel"
      >{{ label }}</sup>
    </router-link>
  </li>
</template>

<script lang="ts">
// Named export for recursive component
export default {
  name: 'NavLink'
}
</script>

<style src="./NavLink.scss" lang="scss" scoped />
