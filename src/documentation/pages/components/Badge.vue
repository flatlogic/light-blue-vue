<script setup lang="ts">
// Static documentation page - no reactive state needed
</script>

<template>
  <BRow>
    <BCol
      lg="9"
      xs="12"
    >
      <h2>Badges</h2>
      <p class="mb-4">
        Documentation and examples for badges, our small count and labeling component.
      </p>
      <vue-code-highlight>import { BBadge } from 'bootstrap-vue-next';</vue-code-highlight>
      <BTabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <BTab
          title="Example"
          active
        >
          <h1>
            Example heading <BBadge variant="primary">
              Primary
            </BBadge>
          </h1>
          <h2>
            Example heading <BBadge variant="info">
              Info
            </BBadge>
          </h2>
          <h3>
            Example heading <BBadge variant="warning">
              Warning
            </BBadge>
          </h3>
          <h4>
            Example heading <BBadge variant="success">
              Success
            </BBadge>
          </h4>
          <h5>
            Example heading <BBadge variant="danger">
              Danger
            </BBadge>
          </h5>
          <h6>
            Example heading <BBadge variant="secondary">
              Secondary
            </BBadge>
          </h6>
          <p>Badges can be used as part of links or buttons to provide a counter.</p>
          <BButton variant="primary">
            Notifications <BBadge variant="danger">
              4
            </BBadge>
          </BButton>
        </BTab>
        <BTab title="Code">
          <vue-code-highlight>
            &lt;h1&gt;Example heading &lt;BBadge variant="primary"&gt;Primary&lt;/BBadge&gt;&lt;/h1&gt;
            &lt;h2&gt;Example heading &lt;BBadge variant="info"&gt;Info&lt;/BBadge&gt;&lt;/h2&gt;
            &lt;h3&gt;Example heading &lt;BBadge variant="warning"&gt;Warning&lt;/BBadge&gt;&lt;/h3&gt;
            &lt;h4&gt;Example heading &lt;BBadge variant="success"&gt;Success&lt;/BBadge&gt;&lt;/h4&gt;
            &lt;h5&gt;Example heading &lt;BBadge variant="danger"&gt;Danger&lt;/BBadge&gt;&lt;/h5&gt;
            &lt;h6&gt;Example heading &lt;BBadge variant="secondary"&gt;Secondary&lt;/BBadge&gt;&lt;/h6&gt;
            &lt;p&gt;Badges can be used as part of links or buttons to provide a counter.&lt;/p&gt;
            &lt;BButton variant="primary"&gt;
            Notifications &lt;BBadge variant="danger"&gt;4&lt;/BBadge&gt;
            &lt;/BButton&gt;
          </vue-code-highlight>
        </BTab>
      </BTabs>
      <BTabs nav-class="bg-transparent">
        <BTab
          title="Example"
          active
        >
          <h4>Pill badges</h4>
          <p>
            <BBadge
              class="me-1"
              variant="primary"
              pill
            >
              Primary
            </BBadge>
            <BBadge
              class="me-1"
              variant="info"
              pill
            >
              Info
            </BBadge>
            <BBadge
              class="me-1"
              variant="warning"
              pill
            >
              Warning
            </BBadge>
            <BBadge
              class="me-1"
              variant="success"
              pill
            >
              Success
            </BBadge>
            <BBadge
              class="me-1"
              variant="danger"
              pill
            >
              Danger
            </BBadge>
            <BBadge
              class="me-1"
              variant="secondary"
              pill
            >
              Secondary
            </BBadge>
            <BBadge
              class="me-1"
              variant="light"
              pill
            >
              Light
            </BBadge>
            <BBadge
              class="me-1"
              variant="dark"
              pill
            >
              Dark
            </BBadge>
          </p>
          <h4>Badges with link</h4>
          <p>
            <BBadge
              class="me-1"
              href="#"
              variant="primary"
            >
              Primary
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="info"
            >
              Info
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="warning"
            >
              Warning
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="success"
            >
              Success
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="danger"
            >
              Danger
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="secondary"
            >
              Secondary
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="light"
            >
              Light
            </BBadge>
            <BBadge
              class="me-1"
              href="#"
              variant="dark"
            >
              Dark
            </BBadge>
          </p>
        </BTab>
        <BTab title="Code">
          <vue-code-highlight>
            &lt;BBadge class="me-1" variant="primary" pill&gt;Primary&lt;/BBadge&gt;
            &lt;BBadge class="me-1" href="#" variant="primary"&gt;Primary&lt;/BBadge&gt;
          </vue-code-highlight>
        </BTab>
      </BTabs>
    </BCol>
    <p class="p-4">
      For more examples please refer to <a
        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/badge"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap Vue Next Badge</a>
    </p>
  </BRow>
</template>
