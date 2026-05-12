<template>
  <b-row>
    <b-col
      lg="9"
      xs="12"
    >
      <h2>Tabs</h2>
      <p class="mb-4">
        Activates a tab element and content container.
      </p>
      <vue-code-highlight>import { BTabs, BTab } from 'bootstrap-vue';</vue-code-highlight>
      <h4 class="mt-5">
        Example
      </h4>
      <b-tabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <b-tab
          title="Tab 1"
          active
        >
          First tab content
        </b-tab>
        <b-tab title="Tab 2">
          Second tab content
        </b-tab>
      </b-tabs>
      <h4>Code</h4>
      <vue-code-highlight>{{ tabCode }}</vue-code-highlight>
      <p class="py-4">
        For more examples please refer to <a
          href="https://bootstrap-vue.js.org/docs/components/tabs/"
          target="_blank"
          rel="noopener noreferrer"
        >Bootstrap Vue Tabs</a>
      </p>
      <h2 class="mt-5">
        Accordion
      </h2>
      <p class="mb-4">
        Activates a tab element and content container.
      </p>
      <vue-code-highlight>import { BCollapse } from 'bootstrap-vue';</vue-code-highlight>
      <h4 class="mt-5">
        Example
      </h4>
      <b-card
        no-body
        class="mb-1"
      >
        <b-card-header
          v-b-toggle.accordion-1
          class="bg-light no-border"
          role="button"
        >
          <a role="button">Collapsible Group Item
          </a>
        </b-card-header>
        <b-collapse
          id="accordion-1"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <p>
              Get base styles and flexible support for collapsible components like accordions and navigation.
              Using the collapse plugin, we built a simple accordion by extending the panel component.
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card
        no-body
        class="mb-1"
      >
        <b-card-header
          v-b-toggle.accordion-2
          class="bg-light no-border"
          role="button"
        >
          <a role="button">Normal Text Insertion
          </a>
        </b-card-header>
        <b-collapse
          id="accordion-2"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <p>
              Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I
              think the opposite actually.
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>

      <b-card
        no-body
        class="mb-1"
      >
        <b-card-header
          v-b-toggle.accordion-3
          class="bg-light no-border"
          role="button"
        >
          <a role="button">Random from the Web
          </a>
        </b-card-header>
        <b-collapse
          id="accordion-3"
          accordion="my-accordion"
          role="tabpanel"
        >
          <b-card-body>
            <p>
              <span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
              on the latest Metro design. There are few reasons we want to tell you, why we have created it:
              We didn't like the darkness of most of admin templates, so we created this light one.
              We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
              We searched for a solution of how to make widgets look like real widgets, so we decided that
              deep background - is what makes widgets look real.
            </p>
            <p class="m-0 text-muted">
              <em>- Some One</em>
            </p>
          </b-card-body>
        </b-collapse>
      </b-card>
      <h4 class="mt-5">
        Code
      </h4>
      <vue-code-highlight>{{ accordionCode }}</vue-code-highlight>
      <p class="py-4">
        For more examples please refer to <a
          href="https://bootstrap-vue.js.org/docs/components/collapse/"
          target="_blank"
          rel="noopener noreferrer"
        >Bootstrap Vue Collapse</a>
      </p>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
const tabCode = `<b-tabs nav-class="bg-transparent">
  <b-tab title="Tab 1" active>
    First tab content
  </b-tab>
  <b-tab title="Tab 2">
    Second tab content
  </b-tab>
</b-tabs>`

const accordionCode = `<b-card no-body class="mb-1">
  <b-card-header class="bg-light no-border" role="button" v-b-toggle.accordion-1>
    <a role="button">Collapsible Group Item
    </a>
  </b-card-header>
  <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
    <b-card-body>
      <p>Get base styles and flexible support for collapsible components like accordions and navigation.
        Using the collapse plugin, we built a simple accordion by extending the panel component.
      </p>
    </b-card-body>
  </b-collapse>
</b-card>

<b-card no-body class="mb-1">
  <b-card-header class="bg-light no-border" role="button" v-b-toggle.accordion-2>
    <a role="button">Normal Text Insertion
    </a>
  </b-card-header>
  <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
    <b-card-body>
      <p>Why don't use Lore Ipsum? I think if some one says don't use lore ipsum it's very controversial point. I
        think the opposite actually.
      </p>
    </b-card-body>
  </b-collapse>
</b-card>

<b-card no-body class="mb-1">
  <b-card-header class="bg-light no-border" role="button" v-b-toggle.accordion-3>
    <a role="button">Random from the Web
    </a>
  </b-card-header>
  <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
    <b-card-body>
      <p><span class="fw-semi-bold">Light Blue</span> - is a next generation admin template based
        on the latest Metro design. There are few reasons we want to tell you, why we have created it:
        We didn't like the darkness of most of admin templates, so we created this light one.
        We didn't like the high contrast of most of admin templates, so we created this unobtrusive one.
        We searched for a solution of how to make widgets look like real widgets, so we decided that
        deep background - is what makes widgets look real.
      </p>
      <p class="m-0 text-muted"><em>- Some One</em></p>
    </b-card-body>
  </b-collapse>
</b-card>`
</script>
