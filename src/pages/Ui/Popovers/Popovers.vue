<template>
  <div>
    <h1 class="page-title">
      Popovers & Tooltips
    </h1>
    <b-row>
      <b-col
        xs="12"
        md="6"
      >
        <Widget
          class="mb-xlg"
          title="<h5>Popover <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <b-button
            id="p-1"
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            class="me-3"
            size="lg"
            variant="danger"
            title="Popover Title"
          >
            Click to toggle popover
          </b-button>
          <b-button
            id="p-2"
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            variant="danger"
            disabled
            title="Popover Title"
          >
            Disabled button
          </b-button>
        </Widget>
        <Widget
          title="<h5>Popover <span class='fw-semi-bold'>Directions</span></h5>"
          close
          collapse
          custom-header
        >
          <b-button
            id="p-3"
            v-b-popover.top="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            class="me-3 mb-3"
            variant="info"
            title="Popover Title"
          >
            Popover on top
          </b-button>
          <b-button
            id="p-4"
            v-b-popover.right="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            class="me-3 mb-3"
            variant="warning"
            title="Popover Title"
          >
            Popover on right
          </b-button>
          <b-button
            id="p-5"
            v-b-popover.bottom="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            class="me-3 mb-3"
            variant="dark"
            title="Popover Title"
          >
            Popover on bottom
          </b-button>
          <b-button
            id="p-6"
            v-b-popover.left="`Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.`"
            class="me-3 mb-3"
            variant="secondary"
            title="Popover Title"
          >
            Popover on left
          </b-button>
        </Widget>
      </b-col>
      <b-col
        xs="12"
        md="6"
      >
        <Widget
          class="mb-xlg"
          title="<h5>Tooltip <span class='fw-semi-bold'>Example</span></h5>"
          close
          collapse
          custom-header
        >
          <b-button
            id="t-1"
            v-b-tooltip
            class="me-3"
            size="lg"
            variant="success"
            title="Hello World!"
          >
            Tooltip
          </b-button>
          <b-button
            id="t-2"
            v-b-tooltip
            variant="success"
            disabled
            title="Hello World!"
          >
            Disabled button
          </b-button>
        </Widget>
        <Widget
          title="<h5>Tooltip <span class='fw-semi-bold'>Directions</span></h5>"
          close
          collapse
          custom-header
        >
          <b-button
            id="t-3"
            v-b-tooltip.top
            class="me-3 mb-3"
            variant="info"
            title="Top"
          >
            Tooltip on top
          </b-button>
          <b-button
            id="t-4"
            v-b-tooltip.right
            class="me-3 mb-3"
            variant="warning"
            title="Right"
          >
            Tooltip on right
          </b-button>
          <b-button
            id="t-5"
            v-b-tooltip.bottom
            class="me-3 mb-3"
            variant="dark"
            title="Bottom"
          >
            Tooltip on bottom
          </b-button>
          <b-button
            id="t-6"
            v-b-tooltip.left
            class="me-3 mb-3"
            variant="secondary"
            title="Left"
          >
            Tooltip on left
          </b-button>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
</script>
