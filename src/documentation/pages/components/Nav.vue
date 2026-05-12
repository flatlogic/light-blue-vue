<template>
  <b-row>
    <b-col
      lg="9"
      xs="12"
    >
      <h2>Nav</h2>
      <p class="mb-4">
        Change the style of Nav component with modifiers and utilities. Mix and match as needed, or build
        your own.
      </p>
      <vue-code-highlight>import { BNav, BNavItem } from 'bootstrap-vue';</vue-code-highlight>
      <b-tabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <b-tab
          title="Example"
          active
        >
          <b-nav>
            <b-nav-item active>
              Active
            </b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>
              Disabled
            </b-nav-item>
          </b-nav>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{ decodeHtml(navCode1) }}</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <b-tab
          title="Example"
          active
        >
          <b-nav vertical>
            <b-nav-item active>
              Active
            </b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>
              Disabled
            </b-nav-item>
          </b-nav>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{ decodeHtml(navCode2) }}</vue-code-highlight>
        </b-tab>
      </b-tabs>
      <b-tabs nav-class="bg-transparent">
        <b-tab
          title="Example"
          active
        >
          <b-nav pills>
            <b-nav-item active>
              Active
            </b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>
              Disabled
            </b-nav-item>
          </b-nav>
        </b-tab>
        <b-tab title="Code">
          <vue-code-highlight>{{ decodeHtml(navCode3) }}</vue-code-highlight>
        </b-tab>
      </b-tabs>
    </b-col>
    <p class="p-4">
      For more examples please refer to <a
        href="https://bootstrap-vue.js.org/docs/components/nav/"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap Vue Nav</a>
    </p>
  </b-row>
</template>
<script setup lang="ts">
const navCode1 = `<b-nav>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>`

const navCode2 = `<b-nav vertical>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>`

const navCode3 = `<b-nav pills>
  <b-nav-item active>Active</b-nav-item>
  <b-nav-item>Link</b-nav-item>
  <b-nav-item>Another Link</b-nav-item>
  <b-nav-item disabled>Disabled</b-nav-item>
</b-nav>`

function decodeHtml(html: string): string {
  return html
}
</script>
