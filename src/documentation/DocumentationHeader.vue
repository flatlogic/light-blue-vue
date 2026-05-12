<template>
  <b-navbar
    toggleable="lg"
    class="header d-print-none"
  >
    <b-navbar-brand
      href="/#/documentation"
      class="px-4"
    >
      <span class="fw-semi-bold d-sm-down-none">Light Blue Vue</span> &nbsp; Documentation
    </b-navbar-brand>
    <b-navbar-nav class="ms-auto d-md-down-none">
      <b-nav-item
        href="https://twitter.com/flatlogic"
        class="me-1"
      >
        <img
          :src="twitterLogo"
          alt="twitter"
        />
      </b-nav-item>
      <b-nav-item
        href="https://dribbble.com/flatlogic"
        class="me-1"
      >
        <img
          :src="dribbleLogo"
          alt="dribble"
        />
      </b-nav-item>
      <b-nav-item
        href="https://dribbble.com/flatlogic"
        class="me-1"
      >
        <img
          :src="facebookLogo"
          alt="facebook"
        />
      </b-nav-item>
      <b-nav-item
        href="https://instagram.com/flatlogiccom/"
        class="me-1"
      >
        <img
          :src="instagramLogo"
          alt="instagram"
        />
      </b-nav-item>
      <b-nav-item
        href="https://www.linkedin.com/company/flatlogic/"
        class="me-1"
      >
        <img
          :src="linkedinLogo"
          alt="linkedin"
        />
      </b-nav-item>
      <b-nav-item
        href="https://github.com/flatlogic"
        class="me-3"
      >
        <img
          :src="githubLogo"
          alt="github"
        />
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ms-auto ms-lg-0 flex-row">
      <b-nav-item
        href="/"
        class="d-sm-down-none me-md-3 me-lg-0"
      >
        <b-button variant="secondary">
          Live Preview
        </b-button>
      </b-nav-item>
      <b-nav-item
        href="https://flatlogic.com/templates/light-blue-vue"
        target="_blank"
        class="me-4"
      >
        <b-button
          variant="warning"
          class="text-gray fw-semi-bold"
        >
          Buy Now
        </b-button>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script setup lang="ts">
import twitterLogo from '../assets/documentation/twitter-logo.svg'
import dribbleLogo from '../assets/documentation/dribble-logo.svg'
import facebookLogo from '../assets/documentation/facebook-logo.svg'
import instagramLogo from '../assets/documentation/instagram-logo.svg'
import linkedinLogo from '../assets/documentation/linkedin-logo.svg'
import githubLogo from '../assets/documentation/github-logo.svg'
</script>
