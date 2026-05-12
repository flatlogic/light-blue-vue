<template>
  <b-row>
    <b-col
      lg="9"
      xs="12"
    >
      <Widget id="Overview">
        <h1>Overview</h1>
        <p class="lead">
          Light Blue Vue is an admin dashboard template built with Vue 3. Light Blue goes beyond usual admin
          templates and provides you entire intuitive programming framework. Vite and Node.js backend
          will even further speed up your development. You can use Light Blue Vue to build any type of web
          applications
          like SAAS, CMS, financial dashboards, project management tools, etc.
        </p>
        <p class="lead">
          Moreover, there is a version of <a
            rel="noreferrer noopener"
            href="https://flatlogic.com/templates/light-blue-vue-nodejs"
            target="_blank"
          >Light Blue Vue with Node.js</a>, enhanced with working
          node.js
          backend with authentication, login strategies and basic CRUD functions. Please refer to <a
            href="https://github.com/flatlogic/nodejs-backend"
            rel="noopener noreferrer"
            target="_blank"
          >backend
            documentation</a> for details
        </p>
        <img
          class="img-responsive w-100 border"
          src="../../../assets/documentation/screenshot.png"
          alt="screenshot"
        />
        <router-link to="/app">
          Live demo
        </router-link>
      </Widget>
      <Widget id="Features">
        <h3 class="">
          Features
        </h3>
        <ul class="mt">
          <li class="lead">
            <i class="la la-check" /> Hundreds of Pages
          </li>
          <li class="lead">
            <i class="la la-check" /> Fully Responsive
          </li>
          <li class="lead">
            <i class="la la-check" /> Vue 3 + Vite
          </li>
          <li class="lead">
            <i class="la la-check" /> 8 Charts Library
          </li>
          <li class="lead">
            <i class="la la-check" /> 2 Dashboards
          </li>
          <li class="lead">
            <i class="la la-check" /> Theme Support
          </li>
          <li class="lead">
            <i class="la la-check" /> E-Commerce Section
          </li>
          <li class="lead">
            <i class="la la-check" />
            <a
              href="https://github.com/flatlogic/nodejs-backend"
              rel="noopener noreferrer"
              target="_blank"
            > Node.js
              backend support</a> <span class="small text-muted">(Only in full stack version)</span>
          </li>
          <li class="lead">
            <i class="la la-check" /> Static & Hover Sidebar
          </li>
          <li class="lead">
            <i class="la la-check" /> Fully Documented Codebase
          </li>
          <li class="lead">
            <i class="la la-check" /> And even more coming soon!
          </li>
        </ul>
      </Widget>
      <Widget id="Support">
        <h2>Support forum</h2>
        <p class="lead">
          For any additional information please go to our support forum and raise your questions or feedback provide there. We highly appreciate your participation!
        </p>
        <a
          href="https://flatlogic.com/forum"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-default fw-semi-bold"
        >
          Support forum
        </a>
      </Widget>
      <b-row>
        <b-col md="5">
          <Widget title="Continue with">
            <router-link to="/documentation/getting-started/licences">
              <h4>Licences <i class="la la-arrow-right" /></h4>
            </router-link>
          </Widget>
        </b-col>
        <b-col md="5">
          <Widget title="Or learn about">
            <router-link to="/documentation/getting-started/quick-start">
              <h4>How to start project <i class="la la-arrow-right" /></h4>
            </router-link>
          </Widget>
        </b-col>
      </b-row>
    </b-col>
    <b-col
      lg="3"
      xs="12"
    >
      <Scrollspy
        title="OVERVIEW"
        :ids="['Overview', 'Features', 'Support']"
      />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue'
import Scrollspy from '@/documentation/Scrollspy.vue'
</script>
