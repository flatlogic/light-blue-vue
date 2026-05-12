<script setup lang="ts">
import { computed } from 'vue'
import { useLayoutStore, LayoutComponents } from '@/store/layout'
import { themeColors } from '@/config'
import Colorpicker from '../Colorpicker/Colorpicker.vue'

const layoutStore = useLayoutStore()

const helperOpened = computed(() => layoutStore.helperOpened)
const sidebarColorName = computed(() => layoutStore.sidebarColorName)

const appConfig = {
  themeColors
}

function toggleHelper(opened: boolean) {
  layoutStore.toggleHelper(opened)
}

function updateLayoutComponentColor(event: { component: string; color: readonly [string, string] }) {
  layoutStore.updateLayoutComponentColor({
    component: LayoutComponents.NAVBAR,
    color: event.color
  })
}
</script>

<template>
  <div :class="{ 'theme-helper': true, 'theme-helper-opened': helperOpened }">
    <div
      id="v-step-3"
      class="theme-helper-toggler"
      @click="toggleHelper(!helperOpened)"
    >
      <div class="theme-helper-spinner bg-primary text-white">
        <i class="la la-cog" />
        <i class="la la-cog fs-smaller" />
      </div>
    </div>
    <section class="widget theme-helper-content">
      <div class="widget-body mt-3">
        <h3 class="mb-3">
          Theme
        </h3>
        <div class="theme-settings">
          <h5 id="v-step-7">
            Theme Color
          </h5>
          <Colorpicker
            :colors="appConfig.themeColors"
            :active-color="sidebarColorName"
            @change="updateLayoutComponentColor({ component: 'layoutComponent', color: $event })"
          />
        </div>
        <div class="d-grid mt-4">
          <a
            id="v-step-8"
            href="https://flatlogic.com/templates/light-blue-vue"
            target="_blank"
            role="button"
            class="btn btn-info btn-rounded-f fs-mini text-white"
          >
            Purchase
          </a>
          <a
            href="https://demo.flatlogic.com/light-blue-vue/#/documentation/"
            target="_blank"
            role="button"
            class="btn btn-primary btn-rounded-f mt-4 fs-mini"
          >
            Documentation
          </a>
        </div>
        <div class="d-flex justify-content-between mt-lg">
          <a
            role="button"
            target="_blank"
            href="https://flatlogic.com/forum"
            class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
          >
            <i class="glyphicon glyphicon-headphones mr-xs" />
            Support
          </a>
          <a
            role="button"
            target="_blank"
            href="https://github.com/flatlogic/light-blue-dashboard"
            class="btn btn-outline-default btn-rounded-f fs-mini text-muted d-flex align-items-center"
          >
            <i class="fa fa-github mr-xs" />
            Github
          </a>
        </div>
        <div class="mt-lg d-flex flex-column align-items-center theme-sharing">
          <span class="fs-sm">Thank you for sharing!</span>
          <div class="d-flex justify-content-center text-light mt-2">
            <a
              target="_blank"
              href="https://twitter.com/intent/tweet?text=Admin%20dashboard%20template%20built%20with%20NodeJS,%20React%20and%20Bootstrap%204!&url=https://demo.flatlogic.com/sing-app/html-bs4/&via=flatlogic"
            >
              <i class="fa fa-twitter pr-1" />
            </a>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https://demo.flatlogic.com/sing-app/html-bs4/"
              target="_blank"
            >
              <i class="fa fa-facebook pl-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style src="./Helper.scss" lang="scss" />
