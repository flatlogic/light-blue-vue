<template>
  <BRow>
    <BCol
      xl="8"
      lg="12"
    >
      <Widget
        title="
        <div>
          <h4>
            Wizard&nbsp;
            <small>Tunable widget</small>
          </h4>
          <p class='text-muted'>An example of complete wizard form in widget.</p>
        </div>"
        custom-header
        close
        collapse
      >
        <form-wizard
          shape="tab"
          color="#3498db"
          title=""
          subtitle=""
          @on-change="updateProgress"
          @on-loading="updateProgress(1, 1)"
        >
          <BProgress
            class="progress-xs"
            variant="success"
            :value="progress"
            :max="4"
          />
          <template #prev>
            <BButton variant="secondary">
              <i class="fa fa-caret-left" /> Previous
            </BButton>
          </template>
          <template #next>
            <BButton variant="primary">
              Next <i class="fa fa-caret-right" />
            </BButton>
          </template>
          <template #finish>
            <BButton variant="success">
              Finish <i class="fa fa-check" />
            </BButton>
          </template>
          <tab-content title="1. Your Details">
            <BForm>
              <BFormGroup
                class="mb-3"
                label="Username"
                label-for="username"
                description="Username can contain any letters or numbers, without spaces"
              >
                <BFormInput
                  id="username"
                  type="text"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Email"
                label-for="email"
                description="Please provide your E-mail"
              >
                <BFormInput
                  id="email"
                  type="text"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Address"
                label-for="address"
                description="Please provide your address"
              >
                <BFormInput
                  id="address"
                  type="text"
                />
              </BFormGroup>
            </BForm>
          </tab-content>
          <tab-content title="2. Shipping">
            <BForm>
              <BFormGroup
                class="mb-3"
                label="Destination Country"
                label-for="destination"
                description="Please choose your country destination"
              >
                <Multiselect
                  id="destination"
                  v-model="destinationSelect"
                  :searchable="true"
                  :options="countries"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Choose shipping option"
                label-for="shipping"
                description="Please choose your shipping option"
              >
                <Multiselect
                  id="shipping"
                  v-model="shippingSelect"
                  :searchable="true"
                  :options="shipping"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Destination Zip Code"
                label-for="zip"
                description="Please provide your Destination Zip Code"
              >
                <BFormInput
                  id="zip"
                  v-model="zip"
                  type="text"
                  placeholder="123456"
                  maxlength="6"
                  pattern="[0-9]*"
                  inputmode="numeric"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Destination Address"
                label-for="destAdress"
                description="Please provide the destination address"
              >
                <BFormInput id="destAdress" />
              </BFormGroup>
            </BForm>
          </tab-content>
          <tab-content title="3. Pay">
            <BForm>
              <BFormGroup
                class="mb-3"
                label="Name on the Card"
                label-for="cardname"
              >
                <BFormInput id="cardname" />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Credit card type"
                label-for="cardtype"
              >
                <Multiselect
                  id="cardtype"
                  v-model="cardtypeSelect"
                  :searchable="true"
                  :options="cardtype"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Credit Card Number"
                label-for="cardnumber"
              >
                <BFormInput
                  id="cardnumber"
                  v-model="cardnumber"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  maxlength="19"
                  inputmode="numeric"
                  @input="formatCardNumber"
                />
              </BFormGroup>
              <BFormGroup
                class="mb-3"
                label="Expiration Date"
                label-for="exp"
              >
                <BFormInput
                  id="exp"
                  v-model="exp"
                  type="text"
                  placeholder="MM/YY"
                  maxlength="5"
                  inputmode="numeric"
                  @input="formatExpDate"
                />
              </BFormGroup>
            </BForm>
          </tab-content>
          <tab-content title="4. Thank you!">
            <fieldset>
              <h2>Thank you!</h2>
              <p>Your submission has been received.</p>
            </fieldset>
          </tab-content>
        </form-wizard>
      </Widget>
    </BCol>
  </BRow>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Multiselect from '@vueform/multiselect'
import { FormWizard, TabContent } from 'vue3-form-wizard'
import 'vue3-form-wizard/dist/vue3-form-wizard.css'
import Widget from '@/components/Widget/Widget.vue'

import { select2CountriesData, select2ShipmentData, cardTypesData } from './data'

interface SelectOption {
  text: string
  id?: string | number
}

const progress = ref(1)
const destinationSelect = ref('')
const shippingSelect = ref('')
const cardtypeSelect = ref('')
const countries = (select2CountriesData as SelectOption[]).map(c => c.text)
const shipping = (select2ShipmentData as SelectOption[]).map(s => s.text)
const cardtype = (cardTypesData as SelectOption[]).map(c => c.text)
const zip = ref('')
const cardnumber = ref('')
const exp = ref('')

function updateProgress(prevIndex: number, nextIndex: number) {
  if (nextIndex >= 0) {
    progress.value = nextIndex + 1
  }
}

function formatCardNumber(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  value = value.replace(/(.{4})/g, '$1 ').trim()
  cardnumber.value = value.substring(0, 19)
}

function formatExpDate(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  if (value.length >= 2) {
    value = value.substring(0, 2) + '/' + value.substring(2, 4)
  }
  exp.value = value.substring(0, 5)
}
</script>

<style src="./Wizard.scss" lang="scss" />
