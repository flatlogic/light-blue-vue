<script setup lang="ts">
const popoverTitle = 'Popover Title'
const popoverBody = 'Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.'
const tooltipBody = 'Hello World'

const popoverCode = `<BButton variant="success" id="popover_bottom">Bottom</BButton>
<BPopover
  :title="popoverTitle"
  :content="popoverBody"
  placement="bottom"
  target="popover_bottom"
  triggers="click"
/>`

const tooltipCode = `<BButton variant="success" id="tooltip_bottom">Bottom</BButton>
<BTooltip
  placement="bottom"
  :title="tooltipBody"
  target="tooltip_bottom"
  triggers="hover"
/>`
</script>

<template>
  <BRow>
    <BCol
      lg="9"
      xs="12"
    >
      <h2>Popovers</h2>
      <p class="mb-4">
        The Popover is similar to Tooltip; it is a pop-up box that appears when the user clicks on an
        element. The difference is that the popover can contain much more content.
      </p>
      <vue-code-highlight>import { BPopover, BTooltip } from 'bootstrap-vue-next';</vue-code-highlight>
      <BTabs
        nav-class="bg-transparent"
        class="mb-5"
      >
        <BTab
          title="Example"
          active
        >
          <BButtonToolbar>
            <BButton
              id="popover_bottom"
              variant="success"
            >
              Bottom
            </BButton>
            <BButton
              id="popover_right"
              variant="danger"
            >
              Right
            </BButton>
            <BButton
              id="popover_top"
              variant="warning"
            >
              Top
            </BButton>
            <BButton
              id="popover_left"
              variant="info"
            >
              Left
            </BButton>
          </BButtonToolbar>
          <BPopover
            :title="popoverTitle"
            custom-class="popover-text-gray"
            :content="popoverBody"
            placement="bottom"
            target="popover_bottom"
            triggers="click"
          />
          <BPopover
            :title="popoverTitle"
            custom-class="popover-text-gray"
            :content="popoverBody"
            placement="right"
            target="popover_right"
            triggers="click"
          />
          <BPopover
            :title="popoverTitle"
            custom-class="popover-text-gray"
            :content="popoverBody"
            placement="top"
            target="popover_top"
            triggers="click"
          />
          <BPopover
            :title="popoverTitle"
            custom-class="popover-text-gray"
            :content="popoverBody"
            placement="left"
            target="popover_left"
            triggers="click"
          />
        </BTab>
        <BTab title="Code">
          <vue-code-highlight>{{ popoverCode }}</vue-code-highlight>
        </BTab>
      </BTabs>
      <BTabs nav-class="bg-transparent">
        <BTab
          title="Example"
          active
        >
          <BButtonToolbar>
            <BButton
              id="tooltip_bottom"
              variant="success"
            >
              Bottom
            </BButton>
            <BButton
              id="tooltip_right"
              variant="danger"
            >
              Right
            </BButton>
            <BButton
              id="tooltip_top"
              variant="warning"
            >
              Top
            </BButton>
            <BButton
              id="tooltip_left"
              variant="info"
            >
              Left
            </BButton>
          </BButtonToolbar>
          <BTooltip
            placement="bottom"
            :title="tooltipBody"
            target="tooltip_bottom"
            triggers="hover"
          />
          <BTooltip
            placement="right"
            :title="tooltipBody"
            target="tooltip_right"
            triggers="hover"
          />
          <BTooltip
            placement="top"
            :title="tooltipBody"
            target="tooltip_top"
            triggers="hover"
          />
          <BTooltip
            placement="left"
            :title="tooltipBody"
            target="tooltip_left"
            triggers="hover"
          />
        </BTab>
        <BTab title="Code">
          <vue-code-highlight>{{ tooltipCode }}</vue-code-highlight>
        </BTab>
      </BTabs>
    </BCol>
    <p class="p-4">
      For more examples please refer to <a
        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/popover"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap Vue Next Popovers</a> and
      <a
        href="https://bootstrap-vue-next.github.io/bootstrap-vue-next/docs/components/tooltip"
        target="_blank"
        rel="noopener noreferrer"
      >Bootstrap Vue Next Tooltips</a>
    </p>
  </BRow>
</template>
