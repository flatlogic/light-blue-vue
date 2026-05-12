<script setup lang="ts">
import { ref } from 'vue'
import NotificationsList from './NotificationsDemo/NotificationsList.vue'
import NewNotificationsList from './NotificationsDemo/NewNotificationsList.vue'
import Messages from './NotificationsDemo/Messages.vue'
import Progress from './NotificationsDemo/Progress.vue'

const notificationsTabSelected = ref(1)
const newNotifications = ref<string | null>(null)
const isLoad = ref(false)

function loadNotifications() {
  isLoad.value = true

  setTimeout(() => {
    newNotifications.value = 'new notifications component'
    isLoad.value = false
  }, 1500)
}
</script>

<template>
  <section class="notifications navbar-notifications">
    <header class="header">
      <h6 class="my-3 text-center">
        You have 13 notifications
      </h6>
      <BNav
        tabs
        justified
        class="notifications-tabs"
      >
        <BNavItem
          :active="notificationsTabSelected === 1"
          @click.stop="notificationsTabSelected = 1"
        >
          Notifications
        </BNavItem>
        <BNavItem
          :active="notificationsTabSelected === 2"
          @click.stop="notificationsTabSelected = 2"
        >
          Messages
        </BNavItem>
        <BNavItem
          :active="notificationsTabSelected === 3"
          @click.stop="notificationsTabSelected = 3"
        >
          Progress
        </BNavItem>
      </BNav>
    </header>
    <NewNotificationsList v-if="newNotifications" />
    <NotificationsList v-else-if="notificationsTabSelected === 1" />
    <Messages v-else-if="notificationsTabSelected === 2" />
    <Progress v-else-if="notificationsTabSelected === 3" />
    <footer class="text-sm footer px-4 py-2">
      <span class="fs-mini">Synced at: 21 Apr 2019 18:36</span>
      <BButton
        variant="link"
        :class="{ disabled: isLoad, 'btn-xs float-end py-0': true }"
        @click="loadNotifications"
      >
        <span v-if="isLoad"><i class="la la-refresh la-spin" /> Loading...</span>
        <i
          v-else
          class="la la-refresh"
        />
      </BButton>
    </footer>
  </section>
</template>

<style src="./Notifications.scss" lang="scss" />
