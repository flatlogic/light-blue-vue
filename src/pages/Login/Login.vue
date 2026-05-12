<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth'
import { isAuthenticated } from '@/composables/useAuth'
import Widget from '@/components/Widget/Widget.vue'
import config from '@/config'

const route = useRoute()
const authStore = useAuthStore()

const email = ref<HTMLInputElement | null>(null)
const password = ref<HTMLInputElement | null>(null)

const isFetching = computed(() => authStore.isFetching)
const errorMessage = computed(() => authStore.errorMessage)

function login() {
  const emailValue = email.value?.value || ''
  const passwordValue = password.value?.value || ''

  if (emailValue.length !== 0 && passwordValue.length !== 0) {
    authStore.loginUser({ email: emailValue, password: passwordValue })
  }
}

function googleLogin() {
  authStore.loginUser({ email: '', password: '', social: 'google' })
}

function microsoftLogin() {
  authStore.loginUser({ email: '', password: '', social: 'microsoft' })
}

function setTheme() {
  const theme = localStorage.getItem('theme')
  document.querySelector('body')?.setAttribute('class', `light-blue theme--${theme || 'dark'}`)
}

onMounted(() => {
  // Check for token in URL (social login callback)
  const token = route.query.token as string | undefined
  if (token) {
    // Handle token from social login
    localStorage.setItem('token', token)
    authStore.initialize()
  } else if (isAuthenticated(localStorage.getItem('token'))) {
    // Already authenticated, redirect will happen via router guard
  }

  // Set default credentials for demo
  const creds = config.auth
  if (email.value) email.value.value = creds.email
  if (password.value) password.value.value = creds.password

  setTheme()
})
</script>

<template>
  <div class="auth-page light-blue theme--dark">
    <BContainer>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Login to your Web App</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Use your email to sign in.
        </p>
        <BAlert
          class="alert-sm text-center mt-2 widget-middle-overflow rounded-0"
          variant="secondary"
          :model-value="true"
        >
          This is a real app with Node.js backend - use
          <br />
          <span class="font-weight-bold">"admin@flatlogic.com / password"</span>
          <br />
          to login!
        </BAlert>
        <form
          class="mt"
          @submit.prevent="login"
        >
          <BAlert
            class="alert-sm"
            variant="danger"
            :model-value="!!errorMessage"
          >
            {{ errorMessage }}
          </BAlert>
          <BFormGroup
            label="Email"
            label-for="email"
          >
            <BInputGroup class="mb-3">
              <BInputGroupText><i class="la la-user text-white" /></BInputGroupText>
              <input
                id="email"
                ref="email"
                class="form-control input-transparent pl-3"
                type="email"
                required
                placeholder="Email"
              />
            </BInputGroup>
          </BFormGroup>
          <BFormGroup
            label="Password"
            label-for="password"
          >
            <BInputGroup class="mb-3">
              <BInputGroupText><i class="la la-lock text-white" /></BInputGroupText>
              <input
                id="password"
                ref="password"
                class="form-control input-transparent pl-3"
                type="password"
                required
                placeholder="Password"
              />
            </BInputGroup>
          </BFormGroup>
          <div class="bg-widget auth-widget-footer">
            <BButton
              type="submit"
              variant="danger"
              class="auth-btn"
              size="sm"
            >
              <span class="auth-btn-circle">
                <i class="la la-caret-right" />
              </span>
              {{ isFetching ? 'Loading...' : 'Login' }}
            </BButton>
            <p class="widget-auth-info mt-4">
              Don't have an account? Sign up now!
            </p>
            <router-link
              class="d-block text-center mb-4"
              to="/register"
            >
              Create an Account
            </router-link>
            <div class="social-buttons">
              <BButton
                variant="primary"
                class="social-button"
                @click="googleLogin"
              >
                <i class="social-icon social-google" />
                <p class="social-text">
                  GOOGLE
                </p>
              </BButton>
              <BButton
                variant="success"
                class="social-button"
                @click="microsoftLogin"
              >
                <i class="social-icon social-microsoft" />
                <p class="social-text">
                  MICROSOFT
                </p>
              </BButton>
            </div>
          </div>
        </form>
      </Widget>
    </BContainer>
    <footer class="auth-footer">
      Light Blue Vue Admin Dashboard Template - Made by
      <a
        href="https://flatlogic.com"
        target="_blank"
      >Flatlogic</a>
    </footer>
  </div>
</template>
