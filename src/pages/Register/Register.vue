<template>
  <div class="auth-page">
    <b-container>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Create an account</h3>" customHeader>
        <p class="widget-auth-info">
          Please fill all fields below
        </p>
        <form class="mt" @submit.prevent="register">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <b-form-group label="Email" label-for="email">
            <b-input-group>
              <b-input-group-text slot="prepend"><i class="la la-user text-white"></i></b-input-group-text>
              <input id="email"
                     ref="email"
                     class="form-control input-transparent pl-3"
                     type="email"
                     required
                     placeholder="Email"/>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Password" label-for="password">
            <b-input-group>
              <b-input-group-text slot="prepend"><i class="la la-lock text-white"></i></b-input-group-text>
              <input id="password"
                     ref="password"
                     class="form-control input-transparent pl-3"
                     type="password"
                     required
                     placeholder="Password"/>
            </b-input-group>
          </b-form-group>
          <b-form-group label="Confirm Password" label-for="confirmPassword">
            <b-input-group>
              <b-input-group-text slot="prepend"><i class="la la-lock text-white"></i></b-input-group-text>
              <input id="confirmPassword"
                     @blur="checkPassword"
                     ref="confirmPassword"
                     class="form-control input-transparent pl-3"
                     type="password"
                     required
                     placeholder="Confirm"/>
            </b-input-group>
          </b-form-group>
          <div class="bg-widget-transparent auth-widget-footer">
            <b-button type="submit" variant="danger" class="auth-btn" size="sm">
              {{this.isFetching ? 'Loading...' : 'Register'}}
            </b-button>
            <p class="widget-auth-info mt-4">
              Already have the account? Login now!
            </p>
            <router-link class="d-block text-center mb-4" to="login">Enter the Account</router-link>
            <div class="social-buttons">
              <b-button @click="this.googleLogin" variant="primary" class="social-button">
                <i class="social-icon social-google"></i>
                <p class="social-text">GOOGLE</p>
              </b-button>
              <b-button @click="this.microsoftLogin" variant="success" class="social-button">
                <i class="social-icon social-microsoft"></i>
                <p class="social-text">MICROSOFT</p>
              </b-button>
            </div>
          </div>
        </form>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
    </footer>
  </div>
</template>
<script>
  import Widget from '../../components/Widget/Widget';
  import {mapActions, mapState} from 'vuex';

  export default {
    name: 'RegisterPage',
    components: {Widget},
    computed: {
      ...mapState('register', {
        isFetching: state => state.isFetching,
        errorMessage: state => state.errorMessage,
      }),
    },
    methods: {
      ...mapActions('register', ['registerUser', 'registerError']),
      ...mapActions('auth', ['loginUser']),
      register() {
        const email = this.$refs.email.value;
        const password = this.$refs.password.value;

        if (!this.isPasswordValid()) {
          this.checkPassword();
        } else {
          this.registerUser({creds: {email, password}, $toaster: this.$toaster});
        }
      },
      googleLogin() {
        this.loginUser({social: "google"});
      },
      microsoftLogin() {
        this.loginUser({social: "microsoft"});
      },
      checkPassword() {
        if (!this.isPasswordValid()) {
          if (!this.$refs.password.value) {
            this.registerError("Password field is empty");
          } else {
            this.registerError("Passwords are not equal");
          }
          setTimeout(() => {
            this.registerError();
          }, 3 * 1000)
        }
      },
      isPasswordValid() {
        return this.$refs.password.value && this.$refs.password.value === this.$refs.confirmPassword.value;
      }
    },
  }
</script>
