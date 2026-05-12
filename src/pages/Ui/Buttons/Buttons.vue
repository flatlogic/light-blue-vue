<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="active breadcrumb-item">
        UI Buttons
      </li>
    </ol>
    <h1 class="page-title">
      Buttons - <span class="fw-semi-bold">Styles </span>
    </h1>
    <b-row>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Color <span class='fw-semi-bold'>Options</span></h5>"
          custom-header
          close
          collapse
        >
          <div>
            <p class="fs-mini text-muted">
              Use any of the available button classes to quickly create a styled button.
              Semantically distinguishable beauty.
            </p>
            <p class="text-start">
              <b-button
                variant="secondary"
                class="width-100 mb-3 me-3"
              >
                Default
              </b-button>
              <b-button
                variant="primary"
                class="width-100 mb-3 me-3"
              >
                Primary
              </b-button>
              <b-button
                variant="info"
                class="width-100 mb-3 me-3"
              >
                Info
              </b-button>
              <b-button
                variant="success"
                class="width-100 mb-3 me-3"
              >
                Success
              </b-button>
              <b-button
                variant="warning"
                class="width-100 mb-3 me-3"
              >
                Warning
              </b-button>
              <b-button
                variant="danger"
                class="width-100 mb-3 me-3"
              >
                Danger
              </b-button>
              <b-button
                variant="secondary"
                class="width-100 mb-3 me-3"
              >
                Gray
              </b-button>
              <b-button
                variant="dark"
                class="width-100 mb-3 me-3"
              >
                Inverse
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Size <span class='fw-semi-bold'>Variants</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Fancy larger or smaller buttons?
              Four separate sizes available for all use cases:
              from tiny 10px button to large one.
            </p>
            <p>
              <b-button
                variant="secondary"
                size="lg"
                class="mb-3 me-3"
              >
                Large button
              </b-button>
              <b-button
                variant="primary"
                class="mb-3 me-3"
              >
                Default button
              </b-button>
              <b-button
                variant="info"
                size="sm"
                class="mb-3 me-3"
              >
                Small button
              </b-button>
              <b-button
                variant="success"
                size="sm"
                class="mb-3 me-3"
              >
                Tiny button
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>

      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini">
              In need of a button, but not the hefty background colors they bring?
              Use <code /> property to remove all
              background images and colors on any button.
            </p>
            <p>
              <b-button
                variant="outline-secondary"
                class="width-100 mb-3 me-3"
              >
                Default
              </b-button>
              <b-button
                variant="outline-primary"
                class="width-100 mb-3 me-3"
              >
                Primary
              </b-button>
              <b-button
                variant="outline-info"
                class="width-100 mb-3 me-3"
              >
                Info
              </b-button>
              <b-button
                variant="outline-success"
                class="width-100 mb-3 me-3"
              >
                Success
              </b-button>
              <b-button
                variant="outline-warning"
                class="width-100 mb-3 me-3"
              >
                Warning
              </b-button>
              <b-button
                variant="outline-danger"
                class="width-100 mb-3 me-3"
              >
                Danger
              </b-button>
              <b-button
                variant="outline-secondary"
                class="width-100 mb-3 me-3"
              >
                Gray
              </b-button>
              <b-button
                variant="outline-dark"
                class="width-100 mb-3 me-3"
              >
                Inverse
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5>Rounded <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini">
              Use any of the available button properties to quickly create a styled button.
              Semantically distinguishable beauty. Use
              <code>.btn-rounded</code> or <code>.btn-rounded-f</code>.
            </p>
            <p>
              <b-button
                variant="secondary"
                class="btn-rounded-f width-100 mb-3 me-3"
              >
                Default
              </b-button>
              <b-button
                variant="primary"
                class="btn-rounded-f width-100 mb-3 me-3"
              >
                Primary
              </b-button>
              <b-button
                variant="info"
                class="btn-rounded-f width-100 mb-3 me-3"
              >
                Info
              </b-button>
              <b-button
                variant="success"
                class="btn-rounded-f width-100 mb-3 me-3"
              >
                Success
              </b-button>
              <b-button
                variant="outline-warning"
                class="btn-rounded width-100 mb-3 me-3"
              >
                Warning
              </b-button>
              <b-button
                variant="outline-danger"
                class="btn-rounded width-100 mb-3 me-3"
              >
                Danger
              </b-button>
              <b-button
                variant="outline-secondary"
                class="btn-rounded width-100 mb-3 me-3"
              >
                Gray
              </b-button>
              <b-button
                variant="outline-dark"
                class="btn-rounded width-100 mb-3 me-3"
              >
                Inverse
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Block <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Create responsive stacks of full-width, “block buttons” like
              those in Bootstrap 4 with a mix of our display and gap utilities.
              By using utilities instead of button specific classes, we have much
              greater control over spacing, alignment, and responsive behaviors.
            </p>
            <div class="d-grid gap-2">
              <b-button
                variant="info"
                block
              >
                Block Button
              </b-button>
              <b-button
                variant="secondary"
                block
              >
                Show Menu &nbsp;&nbsp;&nbsp;<i
                  class="fa fa-bars"
                />
              </b-button>
              <b-button
                variant="primary"
                block
              >
                <i class="fa fa-facebook" />&nbsp;&nbsp;Login mit
                Facebook
              </b-button>
              <b-button
                variant="warning"
                block
              >
                Are you sure?
              </b-button>
            </div>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Disabled <span class='fw-semi-bold'>Buttons</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Make buttons look unclickable by fading them back 50%.
              Add the <code>disabled</code> to <code>&lt;Button&gt;</code> component.
            </p>
            <p>
              <b-button
                variant="primary"
                disabled
                class="me-3"
              >
                Primary button
              </b-button>
              <b-button
                variant="secondary"
                disabled
                class="me-3"
              >
                Button
              </b-button>
            </p>
            <p>
              <b-button
                variant="success"
                size="sm"
                disabled
                class="me-3"
              >
                Primary Link
              </b-button>
              <b-button
                variant="secondary"
                size="sm"
                disabled
                class="me-3"
              >
                Link
              </b-button>
            </p>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Groups</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Group a series of buttons together on a single
              line with the button group.
              Add on optional JavaScript radio and checkbox
              style behavior with Bootstrap buttons plugin.
            </p>
            <b-button-group class="mb-3">
              <b-button variant="secondary">
                Left
              </b-button>
              <b-button variant="secondary">
                Middle
              </b-button>
              <b-button variant="secondary">
                Right
              </b-button>
            </b-button-group>
            <b-button-toolbar class="mb-3">
              <b-button-group>
                <b-button
                  variant="secondary"
                  class="ms-0"
                >
                  1
                </b-button>
                <b-button variant="secondary">
                  2
                </b-button>
                <b-button variant="secondary">
                  3
                </b-button>
                <b-button variant="secondary">
                  4
                </b-button>
              </b-button-group>
              <b-button-group>
                <b-button variant="secondary">
                  5
                </b-button>
                <b-button variant="secondary">
                  6
                </b-button>
                <b-button variant="secondary">
                  7
                </b-button>
              </b-button-group>
              <b-button-group>
                <b-button variant="secondary">
                  8
                </b-button>
              </b-button-group>
            </b-button-toolbar>
          </div>
        </Widget>
      </b-col>
      <b-col
        md="6"
        xs="12"
      >
        <Widget
          title="<h5> Button <span class='fw-semi-bold'>Dropdowns</span></h5>"
          close
          collapse
          custom-header
        >
          <div>
            <p class="fs-mini text-muted">
              Add dropdown menus to nearly anything with
              this simple plugin, including the buttons,
              navbar, tabs, and pills.
              Both solid & segmented dropdown options available.
            </p>

            <div class="mb-3">
              <b-dropdown
                variant="danger"
                text="One"
                class="me-3"
              >
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>

              <b-dropdown
                variant="secondary"
                text="One"
              >
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <div class="mb-3">
              <b-dropdown
                variant="primary"
                split
                text="Primary"
                class="me-3"
              >
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
              <b-dropdown
                variant="secondary"
                split
                text="Gray"
              >
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        md="12"
        xs="12"
      >
        <Widget
          title="<h6> Button <span class='fw-semi-bold'>Options</span></h6>"
          close
          collapse
          custom-header
        >
          <b-row>
            <b-col
              md="4"
              sm="6"
              xs="12"
            >
              <h4> Button <span class="fw-semi-bold">Checkboxes</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like
                toolbars.
                Use <code>ButtonGroup</code> to a group
                of checkboxes for checkbox style toggling on
                btn-group.
              </p>
              <div class="mb-3">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    :class="{ active: checkboxOne[0] }"
                    @click="changeCheckbox('checkboxOne', 0)"
                  >
                    Left way
                  </b-button>
                  <b-button
                    variant="secondary"
                    :class="{ active: checkboxOne[1] }"
                    @click="changeCheckbox('checkboxOne', 1)"
                  >
                    Middle way
                  </b-button>
                  <b-button
                    variant="secondary"
                    :class="{ active: checkboxOne[2] }"
                    @click="changeCheckbox('checkboxOne', 2)"
                  >
                    Right way
                  </b-button>
                </b-button-group>
              </div>
              <div class="mb-3">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: checkboxTwo[0] }"
                    @click="changeCheckbox('checkboxTwo', 0)"
                  >
                    Left way
                  </b-button>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: checkboxTwo[1] }"
                    @click="changeCheckbox('checkboxTwo', 1)"
                  >
                    Middle way
                  </b-button>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: checkboxTwo[2] }"
                    @click="changeCheckbox('checkboxTwo', 2)"
                  >
                    Right way
                  </b-button>
                </b-button-group>
              </div>
            </b-col>
            <b-col
              md="4"
              sm="12"
              xs="12"
            >
              <h4> Button <span class="fw-semi-bold">Radios</span></h4>
              <p class="fs-mini text-muted">
                Do more with buttons. Control button states
                or create groups of buttons for more components like toolbars.
                Use <code>ButtonGroup</code> to a group of radio
                inputs for radio style toggling on btn-group.
              </p>
              <div class="mb-3">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    :class="{ active: radioOne === 0 }"
                    @click="changeRadio('radioOne', 0)"
                  >
                    Left way
                  </b-button>
                  <b-button
                    variant="secondary"
                    :class="{ active: radioOne === 1 }"
                    @click="changeRadio('radioOne', 1)"
                  >
                    Middle way
                  </b-button>
                  <b-button
                    variant="secondary"
                    :class="{ active: radioOne === 2 }"
                    @click="changeRadio('radioOne', 2)"
                  >
                    Right way
                  </b-button>
                </b-button-group>
              </div>
              <div class="mb-3">
                <b-button-group>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: radioTwo === 0 }"
                    @click="changeRadio('radioTwo', 0)"
                  >
                    Left way
                  </b-button>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: radioTwo === 1 }"
                    @click="changeRadio('radioTwo', 1)"
                  >
                    Middle way
                  </b-button>
                  <b-button
                    variant="secondary"
                    size="sm"
                    :class="{ active: radioTwo === 2 }"
                    @click="changeRadio('radioTwo', 2)"
                  >
                    Right way
                  </b-button>
                </b-button-group>
              </div>
            </b-col>
            <b-col
              md="4"
              sm="12"
              xs="12"
            >
              <h4> Use with <span class="fw-semi-bold">Icons</span></h4>
              <p class="fs-mini text-muted">
                Fontawesome and Glyph- icons may be used in buttons,
                button groups for a toolbar, navigation, or prepended form inputs.
                Let your buttons shine!
              </p>
              <div class="mb-sm">
                <b-button
                  variant="secondary"
                  class="width-100 me-3"
                >
                  <i class="glyphicon glyphicon-tree-conifer text-success me-2 mb-2" />
                  Forest
                </b-button>
                <b-button
                  variant="secondary"
                  class="width-100 me-3"
                >
                  <i class="fa fa-check text-danger me-2 mb-2" />
                  Submit
                </b-button>
                <b-button
                  variant="secondary"
                  class="width-100 me-3"
                >
                  <i class="fa fa-facebook text-primary me-2 mb-2" />
                  Login
                </b-button>
              </div>
              <div>
                <b-button
                  variant="dark"
                  class="width-100 me-3"
                >
                  <i class="fa fa-exclamation text-warning me-2 mb-2" />
                  Error
                </b-button>
                <b-button
                  variant="dark"
                  class="width-100 me-3"
                >
                  <i class="glyphicon glyphicon-globe text-info me-2 mb-2" />
                  <span class="text-info">Globe</span>
                </b-button>
                <b-button
                  variant="dark"
                  class="width-100 me-3"
                >
                  <span class="circle bg-white me-3">
                    <i class="fa fa-map-marker text-gray" />
                  </span>
                  Map
                </b-button>
              </div>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

const checkboxOne = ref([false, true, false])
const checkboxTwo = ref([true, false, true])
const radioOne = ref(-1)
const radioTwo = ref(1)

// Checkbox map for dynamic access
const checkboxMap: Record<string, typeof checkboxOne> = {
  checkboxOne,
  checkboxTwo,
}

// Radio map for dynamic access
const radioMap: Record<string, typeof radioOne> = {
  radioOne,
  radioTwo,
}

function changeCheckbox(field: string, index: number) {
  const checkboxRef = checkboxMap[field]
  if (checkboxRef) {
    checkboxRef.value[index] = !checkboxRef.value[index]
  }
}

function changeRadio(field: string, index: number) {
  const radioRef = radioMap[field]
  if (radioRef) {
    radioRef.value = index
  }
}
</script>
