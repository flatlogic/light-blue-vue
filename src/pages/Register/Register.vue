<script setup lang="ts">
import { ref, computed, inject } from 'vue'
import { useRegisterStore } from '@/store/register'
import { useAuthStore } from '@/store/auth'
import Widget from '@/components/Widget/Widget.vue'

interface ToastInterface {
  success: (message: string) => void
  error: (message: string) => void
  warning: (message: string) => void
  info: (message: string) => void
}

const registerStore = useRegisterStore()
const authStore = useAuthStore()
const $toast = inject<ToastInterface | undefined>('$toast')

const email = ref<HTMLInputElement | null>(null)
const password = ref<HTMLInputElement | null>(null)
const confirmPassword = ref<HTMLInputElement | null>(null)

const isFetching = computed(() => registerStore.isFetching)
const errorMessage = computed(() => registerStore.errorMessage)

function isPasswordValid() {
  return password.value?.value && password.value.value === confirmPassword.value?.value
}

function checkPassword() {
  if (!isPasswordValid()) {
    if (!password.value?.value) {
      // Password field is empty - error will be shown via form validation
    } else {
      $toast?.error('Passwords are not equal')
    }
  }
}

function register() {
  const emailValue = email.value?.value || ''
  const passwordValue = password.value?.value || ''

  if (!isPasswordValid()) {
    checkPassword()
  } else {
    registerStore.registerUser({ email: emailValue, password: passwordValue })
  }
}

function googleLogin() {
  authStore.loginUser({ email: '', password: '', social: 'google' })
}

function microsoftLogin() {
  authStore.loginUser({ email: '', password: '', social: 'microsoft' })
}
</script>

<template>
  <div class="auth-page">
    <BContainer>
      <Widget
        class="widget-auth mx-auto"
        title="<h3 class='mt-0'>Create an account</h3>"
        custom-header
      >
        <p class="widget-auth-info">
          Please fill all fields below
        </p>
        <form
          class="mt"
          @submit.prevent="register"
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
            <BInputGroup>
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
            <BInputGroup>
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
          <BFormGroup
            label="Confirm Password"
            label-for="confirmPassword"
          >
            <BInputGroup>
              <BInputGroupText><i class="la la-lock text-white" /></BInputGroupText>
              <input
                id="confirmPassword"
                ref="confirmPassword"
                class="form-control input-transparent pl-3"
                type="password"
                required
                placeholder="Confirm"
                @blur="checkPassword"
              />
            </BInputGroup>
          </BFormGroup>
          <div class="bg-widget-transparent auth-widget-footer">
            <BButton
              type="submit"
              variant="danger"
              class="auth-btn"
              size="sm"
            >
              {{ isFetching ? 'Loading...' : 'Register' }}
            </BButton>
            <p class="widget-auth-info mt-4">
              Already have the account? Login now!
            </p>
            <router-link
              class="d-block text-center mb-4"
              to="/login"
            >
              Enter the Account
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
