<template>
  <div class="auth-page">
    <b-container>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Use your email to sign in.
        </p>
        <b-alert
          class="alert-sm text-center mt-2 widget-middle-overflow rounded-0"
          variant="secondary"
          :model-value="true"
        >
          This is a real app with Node.js backend - use
          <br />
          <span class="font-weight-bold">"admin@flatlogic.com / password"</span>
          <br />
          to login!
        </b-alert>
        <form
          class="mt"
          @submit.prevent="login"
        >
          <b-alert
            class="alert-sm"
            variant="danger"
            :model-value="!!errorMessage"
          >
            {{ errorMessage }}
          </b-alert>
          <b-form-group
            label="Email"
            label-for="email"
            class="mb-3"
          >
            <b-input-group>
              <b-input-group-text><i class="la la-user text-white" /></b-input-group-text>
              <input
                id="email"
                ref="emailInput"
                class="form-control input-transparent pl-3"
                type="email"
                required
                placeholder="Email"
              />
            </b-input-group>
          </b-form-group>
          <b-form-group
            label="Password"
            label-for="password"
            class="mb-3"
          >
            <b-input-group>
              <b-input-group-text><i class="la la-lock text-white" /></b-input-group-text>
              <input
                id="password"
                ref="passwordInput"
                class="form-control input-transparent pl-3"
                type="password"
                required
                placeholder="Password"
              />
            </b-input-group>
          </b-form-group>
          <div class="bg-widget auth-widget-footer">
            <b-button
              type="submit"
              variant="danger"
              class="auth-btn"
              size="sm"
            >
              <span class="auth-btn-circle">
                <i class="la la-caret-right" />
              </span>
              {{ isFetching ? 'Loading...' : 'Login' }}
            </b-button>
            <p class="widget-auth-info mt-4">
              Don't have an account? Sign up now!
            </p>
            <router-link
              class="d-block text-center mb-4"
              to="register"
            >
              Create an Account
            </router-link>
            <div class="social-buttons">
              <b-button
                variant="primary"
                class="social-button"
                @click="googleLogin"
              >
                <i class="social-icon social-google" />
                <p class="social-text">
                  GOOGLE
                </p>
              </b-button>
              <b-button
                variant="success"
                class="social-button"
                @click="microsoftLogin"
              >
                <i class="social-icon social-microsoft" />
                <p class="social-text">
                  MICROSOFT
                </p>
              </b-button>
            </div>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      Light Blue Vue Admin Dashboard Template - Made by <a
        href="https://flatlogic.com"
        target="_blank"
      >Flatlogic</a>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import Widget from '@/components/Widget/Widget.vue'
import { useAuthStore } from '@/store/auth'
import config from '@/config'

const authStore = useAuthStore()
const { isFetching, errorMessage } = storeToRefs(authStore)
const { loginUser } = authStore

const emailInput = ref<HTMLInputElement | null>(null)
const passwordInput = ref<HTMLInputElement | null>(null)

function login() {
  const email = emailInput.value?.value || ''
  const password = passwordInput.value?.value || ''

  if (email.length !== 0 && password.length !== 0) {
    loginUser({ email, password })
  }
}

function googleLogin() {
  loginUser({ email: '', password: '', social: 'google' })
}

function microsoftLogin() {
  loginUser({ email: '', password: '', social: 'microsoft' })
}

onMounted(() => {
  const creds = config.auth
  if (emailInput.value) {
    emailInput.value.value = creds.email
  }
  if (passwordInput.value) {
    passwordInput.value.value = creds.password
  }
})
</script>
