<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">YOU ARE HERE</li>
      <li class="breadcrumb-item active">Form Validation</li>
    </ol>
    <h1 class="page-title">Form - <span class="fw-semi-bold">Validation</span>
    </h1>
    <b-row>
      <b-col>
        <Widget
          title="<h5>
            Dead simple validation
            <small> No JS needed to tune-up</small>
          </h5>"
          customHeader close collapse
        >
          <b-form @submit="onSubmit">
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
                      v-validate="'required'"
                      name="simple"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('simple')}"
                      type="text"
                      id="basic"
                  />
                  <span class="text-danger" v-if="errors.has('simple')">
                  {{ errors.first('simple') }}
                </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 col-form-label text-start">
                  Min-length On Change <br>
                  <span class="help">At least 10</span>
                </label>

                <b-col md="9">
                  <input
                      data-vv-validate-on="change"
                      v-validate="'required|min:10'"
                      name="minlength"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('minlength')}"
                      type="text"
                      id="minlength"
                  />
                  <span class="text-danger" v-if="errors.has('minlength')">
                    {{ errors.first('minlength') }}
                  </span>
                </b-col>
              </b-row>

              <legend>
                <b-badge variant="warning" class="bg-warning">HTML5</b-badge> input types supported
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
                    v-validate="'required|email'"
                    name="email"
                    :class="{ 'form-control': true, 'is-invalid': errors.has('email')}"
                    type="text"
                    id="email"
                  />
                  <span class="text-danger" v-if="errors.has('email')">
                  {{ errors.first('email') }}
                </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Number
                </label>

                <b-col md="9">
                  <input
                      v-validate="'required|numeric'"
                      name="number"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('number')}"
                      type="text"
                      id="number"
                  />
                  <span class="text-danger" v-if="errors.has('number')">
                  {{ errors.first('number') }}
                </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Range
                </label>

                <b-col md="9">
                  <input
                      v-validate="'required|numeric|between:10,100'"
                      name="range"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('range')}"
                      type="text"
                      id="range"
                  />
                  <span class="text-danger" v-if="errors.has('range')">
                  {{ errors.first('range') }}
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
                      v-validate="'required|min:6'"
                      name="password"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('password')}"
                      type="password"
                      id="password"
                      ref="password"
                  />
                  <span class="text-danger" v-if="errors.has('password')">
                  {{ errors.first('password') }}
                </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">

                </label>
                <b-col md="9">
                  <input
                      v-validate="'required|min:6|confirmed:password'"
                      name="password_repeat"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('password_repeat')}"
                      type="password"
                      id="password_repeat"
                  />
                  <span class="text-danger" v-if="errors.has('password_repeat')">
                  {{errors.first('password_repeat')}}
                </span>
                </b-col>
              </b-row>

              <b-row class="mb-3">
                <label class="col-3 d-flex flex-column">
                  Website
                </label>
                <b-col md="9">
                  <input
                      v-validate="'required|url'"
                      name="website"
                      :class="{ 'form-control': true, 'is-invalid': errors.has('website')}"
                      type="text"
                      id="website"
                  />
                  <span class="text-danger" v-if="errors.has('website')">
                    {{ errors.first('website') }}
                  </span>
                </b-col>
              </b-row>

            </fieldset>
            <div class="form-action">
              <b-button type="submit" variant="danger" class="btn-rounded float-end ms-3">
                Validate & Submit
              </b-button>
              <b-button type="button" variant="default" class="btn-rounded float-end ">
                Cancel
              </b-button>
            </div>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'FormValidation',
  components: { Widget },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$validator.validateAll();
    },
  },
};
</script>
