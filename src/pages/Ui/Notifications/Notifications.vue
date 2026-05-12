<template>
  <div>
    <h1 class="page-title">
      Messages - <span class="fw-semi-bold">Notifications</span>
    </h1>

    <Widget
      title="<h6> Toast Notifications </h6>"
      close
      collapse
      settings
      custom-header
    >
      <b-row>
        <b-col
          lg="4"
          xs="12"
        >
          <h5 class="m-t-1">
            Layout options
          </h5>
          <p>
            There are few position options available for notifications. You can click any of
            them
            to change notifications position:
          </p>
          <div class="location-selector">
            <div
              class="bit top left"
              @click="toggleLocation('top-left')"
            />
            <div
              class="bit top right"
              @click="toggleLocation('top-right')"
            />
            <div
              class="bit top"
              @click="toggleLocation('top')"
            />
            <div
              class="bit bottom left"
              @click="toggleLocation('bottom-left')"
            />
            <div
              class="bit bottom right"
              @click="toggleLocation('bottom-right')"
            />
            <div
              class="bit bottom"
              @click="toggleLocation('bottom')"
            />
          </div>
        </b-col>

        <b-col
          lg="4"
          xs="12"
        >
          <h5 class="m-t-1">
            Notification Types
          </h5>
          <p>
            Different types of notifications for lots of use cases. Custom classes are also
            supported.
          </p>
          <p>
            <b-button
              id="show-info-message"
              variant="info"
              @click="addInfoNotification"
            >
              Info
              Message
            </b-button>
          </p>
          <p>
            <b-button
              id="show-error-message"
              variant="danger"
              @click="addErrorNotification"
            >
              Error
              Message
            </b-button>
          </p>
          <p>
            <b-button
              id="show-success-message"
              variant="success"
              @click="addSuccessNotification"
            >
              Success Message
            </b-button>
          </p>
        </b-col>

        <b-col
          lg="4"
          xs="12"
        >
          <h5 class="m-t-1">
            Dead Simple Usage
          </h5>
          <p>
            Just a few lines of code to show a notification. Import the composable and call the method:
          </p>
          <pre><code>import { useToast } from 'vue-toast-notification'

const $toast = useToast()
$toast.open('Thanks for checking out Messenger!')</code></pre>
          <p class="mt-3">
            More complex example:
          </p>
          <pre><code>$toast.error('There was an explosion!', {
  duration: 5000,
  position: 'top-right'
})</code></pre>
        </b-col>
      </b-row>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useToast } from 'vue-toast-notification'
import Widget from '@/components/Widget/Widget.vue'

const $toast = useToast()
const currentPosition = ref<'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right')

onMounted(() => {
  $toast.open({
    message: 'Thanks for checking out Messenger!',
    position: currentPosition.value,
  })
})

function addSuccessNotification() {
  $toast.success('Showing success message was successful!', {
    position: currentPosition.value,
    duration: 5000,
  })
}

function addInfoNotification() {
  $toast.info('Launching thermonuclear war...', {
    position: currentPosition.value,
    duration: 5000,
  })
}

function addErrorNotification() {
  $toast.error('There was an explosion while processing your request.', {
    position: currentPosition.value,
    duration: 5000,
  })
}

function toggleLocation(position: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left') {
  currentPosition.value = position
  $toast.open({
    message: `Position changed to ${position}`,
    position: position,
    duration: 2000,
  })
}
</script>

<style src="./Notifications.scss" lang="scss" scoped />
