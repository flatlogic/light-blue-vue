<template>
  <div class="edit-profile-page">
    <h1 class="page-title">
      Edit <span class="fw-semi-bold">Profile</span>
    </h1>
    <BRow>
      <BCol lg="8">
        <Widget>
          <BForm @submit.prevent="handleSubmit">
            <BRow>
              <BCol md="6">
                <BFormGroup label="First Name">
                  <BFormInput
                    v-model="form.firstName"
                    placeholder="Enter first name"
                  />
                </BFormGroup>
              </BCol>
              <BCol md="6">
                <BFormGroup label="Last Name">
                  <BFormInput
                    v-model="form.lastName"
                    placeholder="Enter last name"
                  />
                </BFormGroup>
              </BCol>
            </BRow>
            <BFormGroup label="Email">
              <BFormInput
                v-model="form.email"
                type="email"
                placeholder="Enter email"
              />
            </BFormGroup>
            <BFormGroup label="Phone">
              <BFormInput
                v-model="form.phone"
                placeholder="Enter phone number"
              />
            </BFormGroup>
            <BFormGroup label="Bio">
              <BFormTextarea
                v-model="form.bio"
                rows="4"
                placeholder="Tell us about yourself"
              />
            </BFormGroup>
            <BButton
              type="submit"
              variant="primary"
            >
              Save Changes
            </BButton>
          </BForm>
        </Widget>
      </BCol>
      <BCol lg="4">
        <Widget>
          <div class="text-center">
            <img
              :src="avatarImage"
              alt="Profile"
              class="rounded-circle mb-3"
              width="120"
              height="120"
            />
            <h5>{{ form.firstName }} {{ form.lastName }}</h5>
            <p class="text-muted">
              {{ form.email }}
            </p>
            <BButton
              variant="outline-primary"
              size="sm"
            >
              Change Avatar
            </BButton>
          </div>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import avatarImage from '@/assets/people/a5.jpg'

const form = reactive({
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  bio: 'Software developer passionate about creating great user experiences.',
})

function handleSubmit() {
  console.log('Form submitted:', form)
}
</script>
