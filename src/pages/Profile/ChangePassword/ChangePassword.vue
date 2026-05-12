<template>
  <div class="change-password-page">
    <h1 class="page-title">
      Change <span class="fw-semi-bold">Password</span>
    </h1>
    <BRow>
      <BCol lg="6">
        <Widget>
          <BForm @submit.prevent="handleSubmit">
            <BFormGroup label="Current Password">
              <BFormInput
                v-model="form.currentPassword"
                type="password"
                placeholder="Enter current password"
              />
            </BFormGroup>
            <BFormGroup label="New Password">
              <BFormInput
                v-model="form.newPassword"
                type="password"
                placeholder="Enter new password"
              />
            </BFormGroup>
            <BFormGroup label="Confirm New Password">
              <BFormInput
                v-model="form.confirmPassword"
                type="password"
                placeholder="Confirm new password"
              />
            </BFormGroup>
            <BButton
              type="submit"
              variant="primary"
            >
              Update Password
            </BButton>
          </BForm>
        </Widget>
      </BCol>
      <BCol lg="6">
        <Widget title="Password Requirements">
          <ul class="mb-0">
            <li>Minimum 8 characters long</li>
            <li>At least one uppercase letter</li>
            <li>At least one lowercase letter</li>
            <li>At least one number</li>
            <li>At least one special character</li>
          </ul>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

const form = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

function handleSubmit() {
  if (form.newPassword !== form.confirmPassword) {
    alert('Passwords do not match')
    return
  }
  console.log('Password change submitted')
}
</script>
