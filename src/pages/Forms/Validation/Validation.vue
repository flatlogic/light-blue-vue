<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="breadcrumb-item active">
        Form Validation
      </li>
    </ol>
    <h1 class="page-title">
      Form - <span class="fw-semi-bold">Validation</span>
    </h1>
    <b-row>
      <b-col>
        <Widget
          title="<h5>
            Dead simple validation
            <small> No JS needed to tune-up</small>
          </h5>"
          custom-header
          close
          collapse
        >
          <form @submit="onSubmit">
            <fieldset>
              <legend>
                By default validation is started only after at least 3 characters have been input.
              </legend>

              <b-row class="mb-3">
                <label class="col-3 col-form-label text-start">
                  Simple required
                </label>

                <b-col md="9">
                  <input
                    id="basic"
                    v-model="simple"
                    name="simple"
                    :class="{ 'form-control': true, 'is-invalid': simpleError }"
                    type="text"
                    @blur="validateSimple"
                  />
                  <span
                    v-if="simpleError"
                    class="text-danger"
                  >
                    {{ simpleError }}
                  </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 col-form-label text-start">
                  Min-length On Change <br />
                  <span class="help">At least 10</span>
                </label>

                <b-col md="9">
                  <input
                    id="minlength"
                    v-model="minlength"
                    name="minlength"
                    :class="{ 'form-control': true, 'is-invalid': minlengthError }"
                    type="text"
                    @change="validateMinlength"
                  />
                  <span
                    v-if="minlengthError"
                    class="text-danger"
                  >
                    {{ minlengthError }}
                  </span>
                </b-col>
              </b-row>

              <legend>
                <b-badge
                  variant="warning"
                  class="bg-warning"
                >
                  HTML5
                </b-badge> input types supported
              </legend>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  E-mail
                  <span class="help">
                    This one is triggered even when 1 character has been input
                  </span>
                </label>

                <b-col md="9">
                  <input
                    id="email"
                    v-model="email"
                    name="email"
                    :class="{ 'form-control': true, 'is-invalid': emailError }"
                    type="text"
                    @blur="validateEmail"
                  />
                  <span
                    v-if="emailError"
                    class="text-danger"
                  >
                    {{ emailError }}
                  </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Number
                </label>

                <b-col md="9">
                  <input
                    id="number"
                    v-model="number"
                    name="number"
                    :class="{ 'form-control': true, 'is-invalid': numberError }"
                    type="text"
                    @blur="validateNumber"
                  />
                  <span
                    v-if="numberError"
                    class="text-danger"
                  >
                    {{ numberError }}
                  </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Range
                </label>

                <b-col md="9">
                  <input
                    id="range"
                    v-model="range"
                    name="range"
                    :class="{ 'form-control': true, 'is-invalid': rangeError }"
                    type="text"
                    @blur="validateRange"
                  />
                  <span
                    v-if="rangeError"
                    class="text-danger"
                  >
                    {{ rangeError }}
                  </span>
                </b-col>
              </b-row>

              <legend>
                More validation
              </legend>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Password helpers
                </label>

                <b-col md="9">
                  <input
                    id="password"
                    v-model="password"
                    name="password"
                    :class="{ 'form-control': true, 'is-invalid': passwordError }"
                    type="password"
                    @blur="validatePassword"
                  />
                  <span
                    v-if="passwordError"
                    class="text-danger"
                  >
                    {{ passwordError }}
                  </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column" />
                <b-col md="9">
                  <input
                    id="password_repeat"
                    v-model="passwordRepeat"
                    name="password_repeat"
                    :class="{ 'form-control': true, 'is-invalid': passwordRepeatError }"
                    type="password"
                    @blur="validatePasswordRepeat"
                  />
                  <span
                    v-if="passwordRepeatError"
                    class="text-danger"
                  >
                    {{ passwordRepeatError }}
                  </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Website
                </label>
                <b-col md="9">
                  <input
                    id="website"
                    v-model="website"
                    name="website"
                    :class="{ 'form-control': true, 'is-invalid': websiteError }"
                    type="text"
                    @blur="validateWebsite"
                  />
                  <span
                    v-if="websiteError"
                    class="text-danger"
                  >
                    {{ websiteError }}
                  </span>
                </b-col>
              </b-row>
            </fieldset>
            <div class="form-action">
              <b-button
                type="submit"
                variant="danger"
                class="btn-rounded float-end ms-3"
              >
                Validate & Submit
              </b-button>
              <b-button
                type="button"
                variant="secondary"
                class="btn-rounded float-end "
              >
                Cancel
              </b-button>
            </div>
          </form>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

// Form values
const simple = ref('')
const minlength = ref('')
const email = ref('')
const number = ref('')
const range = ref('')
const password = ref('')
const passwordRepeat = ref('')
const website = ref('')

// Error messages
const simpleError = ref('')
const minlengthError = ref('')
const emailError = ref('')
const numberError = ref('')
const rangeError = ref('')
const passwordError = ref('')
const passwordRepeatError = ref('')
const websiteError = ref('')

// Validation functions
function validateSimple() {
  if (!simple.value.trim()) {
    simpleError.value = 'This field is required'
  } else {
    simpleError.value = ''
  }
}

function validateMinlength() {
  if (!minlength.value.trim()) {
    minlengthError.value = 'This field is required'
  } else if (minlength.value.length < 10) {
    minlengthError.value = 'Must be at least 10 characters'
  } else {
    minlengthError.value = ''
  }
}

function validateEmail() {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email.value.trim()) {
    emailError.value = 'This field is required'
  } else if (!emailRegex.test(email.value)) {
    emailError.value = 'Please enter a valid email address'
  } else {
    emailError.value = ''
  }
}

function validateNumber() {
  if (!number.value.trim()) {
    numberError.value = 'This field is required'
  } else if (!/^\d+$/.test(number.value)) {
    numberError.value = 'Please enter a valid number'
  } else {
    numberError.value = ''
  }
}

function validateRange() {
  if (!range.value.trim()) {
    rangeError.value = 'This field is required'
  } else if (!/^\d+$/.test(range.value)) {
    rangeError.value = 'Please enter a valid number'
  } else {
    const num = parseInt(range.value, 10)
    if (num < 10 || num > 100) {
      rangeError.value = 'Please enter a number between 10 and 100'
    } else {
      rangeError.value = ''
    }
  }
}

function validatePassword() {
  if (!password.value) {
    passwordError.value = 'This field is required'
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters'
  } else {
    passwordError.value = ''
  }
}

function validatePasswordRepeat() {
  if (!passwordRepeat.value) {
    passwordRepeatError.value = 'This field is required'
  } else if (passwordRepeat.value.length < 6) {
    passwordRepeatError.value = 'Password must be at least 6 characters'
  } else if (passwordRepeat.value !== password.value) {
    passwordRepeatError.value = 'Passwords do not match'
  } else {
    passwordRepeatError.value = ''
  }
}

function validateWebsite() {
  const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
  if (!website.value.trim()) {
    websiteError.value = 'This field is required'
  } else if (!urlRegex.test(website.value)) {
    websiteError.value = 'Please enter a valid URL'
  } else {
    websiteError.value = ''
  }
}

function validateAll(): boolean {
  validateSimple()
  validateMinlength()
  validateEmail()
  validateNumber()
  validateRange()
  validatePassword()
  validatePasswordRepeat()
  validateWebsite()

  return !(
    simpleError.value ||
    minlengthError.value ||
    emailError.value ||
    numberError.value ||
    rangeError.value ||
    passwordError.value ||
    passwordRepeatError.value ||
    websiteError.value
  )
}

function onSubmit(e: Event) {
  e.preventDefault()
  if (validateAll()) {
    console.log('Form is valid! Submitting...')
    // Handle form submission here
  } else {
    console.log('Form has errors')
  }
}
</script>
