<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="forms-elements">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="active breadcrumb-item">
        Form Elements
      </li>
    </ol>
    <h1 class="page-title">
      Form - <span class="fw-semi-bold">Inputs & Controls</span>
    </h1>
    <b-row>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6> Inputs </h6>"
          custom-header
          settings
          refresh
          close
        >
          <b-form>
            <legend><strong>Horizontal</strong> form</legend>
            <b-row class="mb-3">
              <label class="col-4 col-form-label text-end">Normal field</label>
              <b-col md="8">
                <b-form-input
                  id="normal-field"
                  class=""
                  type="text"
                  placeholder="May have placeholder"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-4 col-form-label text-end">
                Label hint
                <span class="help-block text-end">Some help text</span>
              </label>

              <b-col md="8">
                <b-form-input
                  id="label-hint"
                  class="form-floating"
                  type="text"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-4 col-form-label text-end">
                Tooltip enabled
              </label>
              <b-col md="8">
                <b-form-input
                  id="tooltip-field"
                  v-b-tooltip.hover
                  class=""
                  type="text"
                  title="Some explanation text here"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-4 col-form-label text-end">
                Disabled input
              </label>
              <b-col md="8">
                <b-form-input
                  id="disabled-field"
                  class="input-transparent"
                  type="text"
                  disabled
                  value="Default value"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-4 col-form-label text-end">
                Max length
              </label>
              <b-col md="8">
                <b-form-input
                  id="length-field"
                  class=""
                  type="text"
                  :formatter="(v: string) => (v.length <= 3 ? v : v.substring(0, 3))"
                  placeholder="Max length 3 characters"
                />
              </b-col>
            </b-row>

            <b-form-group
              class="row mb-3 text-end"
              label="Prepended input"
              label-for="prepended-field"
              label-class="text-md-right px-3"
              label-cols="4"
              breakpoint="md"
            >
              <b-input-group
                id="prepended-field"
                class="input-group-transparent"
              >
                <b-input-group-text>
                  <i class="la la-user" />
                </b-input-group-text>
                <b-form-input
                  type="text"
                  value="admin@flatlogic.com"
                />
              </b-input-group>
            </b-form-group>

            <b-form-group
              class="row mb-3 text-end"
              label="Password"
              label-for="password-field"
              label-class="text-md-right px-3"
              label-cols="4"
              breakpoint="md"
            >
              <b-input-group
                id="password-field"
                class="input-group-transparent"
              >
                <b-input-group-text>
                  <i class="la la-lock" />
                </b-input-group-text>
                <b-form-input
                  type="password"
                  value="password"
                />
              </b-input-group>
            </b-form-group>

            <b-form-group
              class="row mb-3 text-end"
              label="Appended input"
              label-for="append-field"
              label-class="text-md-right px-3"
              label-cols="4"
              breakpoint="md"
            >
              <b-input-group
                id="append-field"
                class="input-group-transparent"
              >
                <b-form-input class="" />
                <b-input-group-text>.00</b-input-group-text>
              </b-input-group>
            </b-form-group>

            <b-form-group
              class="row mb-3 text-end"
              label="Combined input"
              label-for="combined-field"
              label-class="text-md-right px-3"
              label-cols="4"
              breakpoint="md"
            >
              <b-input-group
                id="combined-field"
                class="input-group-transparent"
              >
                <b-input-group-text>$</b-input-group-text>
                <b-form-input class="" />
                <b-input-group-text>.00</b-input-group-text>
              </b-input-group>
            </b-form-group>

            <b-form-group
              class="form-action"
              label=""
              label-for="transparent-field"
              label-cols="4"
              breakpoint="md"
            >
              <b-button
                variant="primary"
                type="submit"
                class="pull-right"
              >
                Save Changes
              </b-button>
              <b-button
                variant="dark"
                class="pull-right me-3"
              >
                Cancel
              </b-button>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6> Prepended and appended inputs </h6>"
          custom-header
          settings
          refresh
          close
        >
          <b-form-group>
            <b-form>
              <legend><strong>Default</strong> form</legend>

              <b-form-group>
                <b-row class="mb-3">
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Search type input
                    </label>
                    <b-input-group>
                      <b-form-input
                        id="search-field"
                        class=""
                        type="text"
                      />
                      <BButton variant="secondary">
                        Search
                      </BButton>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                label-for="bar-field"
                breakpoint="md"
              >
                <b-row class="mb-3">
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Whole bar appended
                    </label>
                    <b-input-group>
                      <b-form-input
                        id="bar-field"
                        type="text"
                      />

                      <BButton variant="danger">
                        <i class="la la-pencil" />
                      </BButton>
                      <BButton variant="warning">
                        <i class="la la-plus" />
                      </BButton>
                      <BButton variant="success">
                        <i class="la la-refresh" />
                      </BButton>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                label-for="actions-field"
                breakpoint="md"
              >
                <b-row class="mb-3">
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Actions dropdown
                    </label>
                    <b-input-group>
                      <b-form-input
                        id="actions-field"
                        type="text"
                      />
                      <template #append>
                        <b-dropdown
                          text="Action"
                          variant="success"
                        >
                          <b-dropdown-item href="#">
                            Action
                          </b-dropdown-item>
                          <b-dropdown-item href="#">
                            Another action
                          </b-dropdown-item>
                          <b-dropdown-item href="#">
                            Something else here
                          </b-dropdown-item>
                          <b-dropdown-divider />
                          <b-dropdown-item href="#">
                            Separated link
                          </b-dropdown-item>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                class="mb-3"
                label-for="segmented-field"
                description="Anything can be appended to the right"
                breakpoint="md"
              >
                <b-row>
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Segmented dropdown
                    </label>
                    <b-input-group>
                      <b-form-input
                        id="segmented-field"
                        type="text"
                      />

                      <b-button variant="warning">
                        Action
                      </b-button>
                      <b-dropdown variant="warning">
                        <b-dropdown-item href="#">
                          Action
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          Another action
                        </b-dropdown-item>
                        <b-dropdown-item href="#">
                          Something else here
                        </b-dropdown-item>
                        <b-dropdown-divider />
                        <b-dropdown-item href="#">
                          Separated link
                        </b-dropdown-item>
                      </b-dropdown>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                class="mb-3"
                label-for="types-field"
                description="You can select some type of a field just right in the place."
                breakpoint="md"
              >
                <b-row>
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Types dropdown
                    </label>
                    <b-input-group>
                      <b-form-input
                        id="types-field"
                        type="text"
                      />
                      <template #append>
                        <b-dropdown
                          variant="primary"
                          :text="typesDropdown"
                        >
                          <b-dropdown-item-button
                            @click="changeTypesDropdown('Another type')"
                          >
                            Another type
                          </b-dropdown-item-button>
                          <b-dropdown-item-button
                            @click="changeTypesDropdown('Type one')"
                          >
                            Type one
                          </b-dropdown-item-button>
                          <b-dropdown-item-button
                            @click="changeTypesDropdown('Next type')"
                          >
                            Next type
                          </b-dropdown-item-button>
                        </b-dropdown>
                      </template>
                    </b-input-group>
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group
                class="mb-3"
                label-for="transparent-field"
                description="With gray-light background. Transparent by default."
                breakpoint="md"
              >
                <b-row>
                  <b-col md="12">
                    <label class="col-4 form-label text-start">
                      Transparent input
                    </label>
                    <b-form-input
                      id="tranparent-field"
                      class=""
                      type="text"
                      placeholder="Search Dashboard"
                    />
                  </b-col>
                </b-row>
              </b-form-group>

              <b-form-group class="form-action">
                <b-button
                  variant="primary"
                  type="submit"
                  class="float-end"
                >
                  Save Changes
                </b-button>
                <b-button
                  variant="dark"
                  class="float-end me-3"
                >
                  Cancel
                </b-button>
              </b-form-group>
            </b-form>
          </b-form-group>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="8"
        md="12"
      >
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settings
          refresh
          close
          custom-header
        >
          <b-form>
            <legend>Control sizing</legend>
            <p>
              Set input heights using parameters like
              <code>size=&apos;lg&apos;</code> and
              <code>size=&apos;sm&apos;</code>. Also works with
              <code>type=&apos;search&apos;</code> inputs, input groups and
              selects.
            </p>
            <br />
            <b-form-group class="mb-3">
              <b-form-input
                type="text"
                placeholder="size=&quot;lg&quot;"
                size="lg"
              />
            </b-form-group>
            <b-form-group class="mb-3">
              <b-form-input
                type="text"
                placeholder="default input"
              />
            </b-form-group>
            <b-form-group class="mb-3">
              <b-form-input
                type="text"
                placeholder="size=&quot;sm&quot;"
                size="sm"
              />
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col
        lg="4"
        md="12"
      >
        <Widget
          title="<h6> Form <span class='fw-semi-bold'>Options</span></h6>"
          settings
          refresh
          close
          custom-header
        >
          <b-form>
            <legend>Input Groups</legend>
            <p>
              Different colors & sizes for any elements including input groups.
              Elements may be easily styled with classes like
              <code>.bg-primary</code> or
              <code>.bg-transparent</code>
            </p>
            <br />
            <b-form-group class="row mb-3">
              <b-input-group>
                <b-input-group-text
                  class="bg-success text-white"
                >
                  <i class="la la-github-alt" />
                </b-input-group-text>
                <b-form-input
                  type="text"
                  placeholder="First Name"
                  size="sm"
                />
              </b-input-group>
            </b-form-group>

            <b-form-group class="row mb-3">
              <b-input-group
                class="input-group-transparent"
                size="lg"
              >
                <b-input-group-text class="header-color">
                  <i class="la la-star" />
                </b-input-group-text>
                <b-form-input
                  class=""
                  type="text"
                  placeholder="Username"
                  size="sm"
                />
              </b-input-group>
            </b-form-group>
            <b-form-group>
              <b-input-group size="sm">
                <b-form-input
                  type="text"
                  placeholder="City"
                />

                <b-input-group-text class="bg-danger text-muted">
                  <i class="la la-code-fork" />
                </b-input-group-text>
              </b-input-group>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="7"
        md="12"
      >
        <Widget
          title="<h6><i class='la la-font'></i>Textareas</h6>"
          custom-header
          settings
          refresh
          close
        >
          <b-form>
            <legend>Small form</legend>
            <b-row class="mb-3">
              <label class="col-3 col-form-label text-end">Default textarea</label>
              <b-col md="9">
                <b-form-textarea
                  id="default-textarea"
                  v-model="textAreaContent"
                  :rows="3"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-3 col-form-label text-end">Auto-growing textarea</label>
              <b-col md="9">
                <b-form-textarea
                  id="autosize-textarea"
                  v-model="autosizeContent"
                  placeholder="Try to add few new lines..."
                  :rows="3"
                  auto-size
                  style="min-height: 75px"
                />
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-3 col-form-label text-end">
                Wysiwyg
                <span class="help-block">With bottom toolbar appended</span>
              </label>
              <b-col md="9">
                <div class="wysiwyg-wrapper">
                  <div class="wysiwyg-toolbar mb-2">
                    <b-button-group size="sm">
                      <b-button
                        variant="outline-secondary"
                        @click="execCommand('bold')"
                      >
                        <i class="fa fa-bold" />
                      </b-button>
                      <b-button
                        variant="outline-secondary"
                        @click="execCommand('italic')"
                      >
                        <i class="fa fa-italic" />
                      </b-button>
                      <b-button
                        variant="outline-secondary"
                        @click="execCommand('underline')"
                      >
                        <i class="fa fa-underline" />
                      </b-button>
                    </b-button-group>
                    <b-button-group
                      size="sm"
                      class="ms-2"
                    >
                      <b-button
                        variant="outline-secondary"
                        @click="execCommand('insertUnorderedList')"
                      >
                        <i class="fa fa-list-ul" />
                      </b-button>
                      <b-button
                        variant="outline-secondary"
                        @click="execCommand('insertOrderedList')"
                      >
                        <i class="fa fa-list-ol" />
                      </b-button>
                    </b-button-group>
                  </div>
                  <div
                    ref="wysiwygEditor"
                    contenteditable="true"
                    class="form-control wysiwyg-content"
                    style="min-height: 150px"
                    @input="updateWygContent"
                  />
                </div>
                <div class="btn-toolbar float-end mt-sm">
                  <b-button
                    variant="danger"
                    class="me-3"
                  >
                    Save
                  </b-button>
                  <b-button
                    variant="secondary"
                    @click="clearWysiwyg"
                  >
                    Clear
                  </b-button>
                </div>
              </b-col>
            </b-row>

            <b-row class="mb-3">
              <label class="col-3 col-form-label text-end">
                Markdown Editor
              </label>
              <b-col md="9">
                <MdEditor
                  id="markdown-editor"
                  v-model="mdContent"
                  language="en-US"
                  :theme="'dark'"
                />
                <a
                  class="text-muted d-flex align-items-center mt-sm"
                  href="http://commonmark.org/help/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <!-- eslint-disable -->
                  <svg
                      aria-hidden="true"
                      class="markdown-help-svg"
                      height="16"
                      version="1.1"
                      viewBox="0 0 16 16"
                      width="16"
                  >
                    <path
                        fill-rule="evenodd"
                        fill="#798892"
                        d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"
                    ></path>
                  </svg>
                  <!-- eslint-enable -->
                  <span class="ms-1">Markdown styling is supported</span>
                </a>
              </b-col>
            </b-row>
          </b-form>
        </Widget>
      </b-col>
      <b-col
        lg="5"
        md="12"
      >
        <Widget
          title="<h6><i class='la la-list-alt'></i> Selects </h6>"
          refresh
          close
          settings
          custom-header
        >
          <b-form class="form-label-left mb-3">
            <legend>Default form with labels on left</legend>
            <b-form-group
              class="row mb-3"
              label="Default select"
              label-for="default-select"
              :label-cols="4"
            >
              <b-row>
                <b-col md="9">
                  <Multiselect
                    id="default-select"
                    v-model="defaultSelect"
                    class="mt-xs bg-transparent"
                    :options="[
                      'Large Magellanic Cloud',
                      'Andromeda Galaxy',
                      'SextansA',
                    ]"
                  />
                </b-col>
              </b-row>
            </b-form-group>
            <b-form-group
              class="row mb-3"
              label="Select with search"
              label-for="search-select"
              :label-cols="4"
            >
              <b-row>
                <b-col md="9">
                  <Multiselect
                    id="search-select"
                    v-model="searchSelect"
                    class="mt-xs"
                    :searchable="true"
                    :options="[
                      'Dallas Cowboys',
                      'New York Giants',
                      'Philadelphia Eagles',
                      'Washington Redskins',
                    ]"
                  />
                </b-col>
              </b-row>
            </b-form-group>
          </b-form>
          <b-form>
            <legend>Dropdown based colored selects</legend>
            <b-form-group
              label="Simple select"
              label-for="simple-select"
              description="Auto size"
              :label-cols="4"
            >
              <b-dropdown
                id="simple-select"
                class="me-2"
                :text="simpleDropdownVariant"
                variant="secondary"
              >
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('simpleDropdownVariant', 'Option One')
                  "
                >
                  Option One
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('simpleDropdownVariant', 'Option Two')
                  "
                >
                  Option Two
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('simpleDropdownVariant', 'Option Three')
                  "
                >
                  Option Three
                </b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
            <b-form-group
              label-for="danger-select"
              :label-cols="4"
            >
              <template #label>
                <div>
                  Colored ones <br />
                  <span class="help">A bit of Japanese</span>
                </div>
              </template>
              <b-dropdown
                id="danger-select"
                class="me-3"
                :text="dangerDropdownVariant"
                variant="danger"
              >
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'Ichi')"
                >
                  Ichi
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'Ni')"
                >
                  Ni
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('dangerDropdownVariant', 'San')"
                >
                  San
                </b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown
                class="me-3"
                :text="warningDropdownVariant"
                variant="warning"
              >
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Shi')"
                >
                  Shi
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Go')"
                >
                  Go
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('warningDropdownVariant', 'Roku')"
                >
                  Roku
                </b-dropdown-item-button>
              </b-dropdown>
              <b-dropdown
                :text="successDropdownVariant"
                variant="success"
              >
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Hichi')"
                >
                  Hichi
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Hachi')"
                >
                  Hachi
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Ku')"
                >
                  Ku
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="changeSelectOption('successDropdownVariant', 'Ju')"
                >
                  Ju
                </b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
            <b-form-group
              label-for="big-select"
              :label-cols="4"
            >
              <template #label>
                <div>
                  Big one <br />
                  <span class="help-block">
                    Size can be controlled with <code>size='lg'</code> &
                    <code>size='sm'</code>
                  </span>
                </div>
              </template>
              <b-dropdown
                id="big-select"
                size="lg"
                :text="bigDropdownVariant"
                variant="secondary"
              >
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('bigDropdownVariant', 'Fourth Item')
                  "
                >
                  Fourth Item
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('bigDropdownVariant', 'Fifth Item')
                  "
                >
                  Fifth Item
                </b-dropdown-item-button>
                <b-dropdown-item-button
                  @click="
                    changeSelectOption('bigDropdownVariant', 'Sixth Item')
                  "
                >
                  Sixth Item
                </b-dropdown-item-button>
              </b-dropdown>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <Widget
          title="<h6> Checkbox <strong>Controls</strong></h6>"
          settings
          refresh
          lose
          custom-header
        >
          <b-row>
            <b-col lg="4">
              <b-form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors:
                  <code>.abc-checkbox-primary</code>,
                  <code>.abc-checkbox-info</code>
                  etc. Pure
                  <abbr title="Cascading Style Sheet">css</abbr> solution with
                  no javascript. Let your checkboxes shine!
                </p>
                <b-form-group class="abc-checkbox abc-checkbox-default">
                  <input
                    id="checkbox-default"
                    type="checkbox"
                  />
                  <label for="checkbox-default">Default</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-primary">
                  <input
                    id="checkbox-primary"
                    type="checkbox"
                    :checked="true"
                  />
                  <label for="checkbox-primary">Primary</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-success">
                  <input
                    id="checkbox-success"
                    type="checkbox"
                  />
                  <label for="checkbox-success">Success</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-info">
                  <input
                    id="checkbox-info"
                    type="checkbox"
                    :checked="true"
                  />
                  <label for="checkbox-info">Info</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-warning">
                  <input
                    id="checkbox-warning"
                    type="checkbox"
                    :checked="true"
                  />
                  <label for="checkbox-warning">Warning</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-danger">
                  <input
                    id="checkbox-danger"
                    type="checkbox"
                    :checked="true"
                  />
                  <label for="checkbox-danger">Check me out</label>
                </b-form-group>
              </b-form>
            </b-col>

            <b-col lg="4">
              <b-form>
                <legend>Circled</legend>
                <p>
                  <code>.abc-checkbox-circle</code> for roundness. No more sad
                  controls controls. Check out this brand-new rounded
                  checkboxes!
                </p>
                <b-form-group
                  class="abc-checkbox abc-checkbox abc-checkbox-circle "
                >
                  <input
                    id="checkbox-circle"
                    type="checkbox"
                  />
                  <label for="checkbox-circle">Simle Rounded</label>
                </b-form-group>
                <b-form-group
                  class="abc-checkbox abc-checkbox-info abc-checkbox-circle "
                >
                  <input
                    id="checkbox-circle-info"
                    type="checkbox"
                    :checked="true"
                  />
                  <label for="checkbox-circle-info">Me too</label>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col lg="4">
              <b-form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack checkbox
                  functionality.
                </p>
                <b-form-group class="abc-checkbox">
                  <input
                    id="checkbox-disabled"
                    type="checkbox"
                    disabled
                  />
                  <label for="checkbox-disabled">Can't check this</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-success">
                  <input
                    id="checkbox-disabled-success"
                    type="checkbox"
                    :checked="true"
                    disabled
                  />
                  <label for="checkbox-disabled-success">This too</label>
                </b-form-group>
                <b-form-group class="abc-checkbox abc-checkbox-warning">
                  <input
                    id="checkbox-disabled-warning"
                    type="checkbox"
                    :checked="true"
                    disabled
                  />
                  <label for="checkbox-disabled-warning">And this</label>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
          <p class="fs-mini">
            Built with
            <a
              href="https://github.com/flatlogic/awesome-bootstrap-checkbox"
              rel="noopener noreferrer"
              target="_blank"
            >awesome-bootstrap-checkbox</a>.
          </p>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="12">
        <Widget
          title="<h6>Radio <strong>Controls</strong></h6>"
          settings
          refresh
          lose
          custom-header
        >
          <b-row>
            <b-col lg="4">
              <b-form>
                <legend>Basic</legend>
                <p>
                  Supports bootstrap brand colors:
                  <code>.abc-radio-primary</code>,
                  <code>.abc-radio-danger</code> etc. Pure css solution with no
                  javascript. Let your radios shine!
                </p>
                <b-row>
                  <b-col md="6">
                    <b-form-group class="radio abc-radio">
                      <input
                        id="radio-small"
                        type="radio"
                        name="radio1"
                        checked
                      />
                      <label for="radio-small">Small</label>
                    </b-form-group>
                    <b-form-group class="radio abc-radio">
                      <input
                        id="radio-big"
                        type="radio"
                        name="radio1"
                      />
                      <label for="radio-big">Big</label>
                    </b-form-group>
                  </b-col>
                  <b-col md="6">
                    <b-form-group class="radio abc-radio abc-radio-danger">
                      <input
                        id="radio-next"
                        type="radio"
                        name="radio2"
                      />
                      <label for="radio-next">Next</label>
                    </b-form-group>
                    <b-form-group class="radio abc-radio abc-radio-danger">
                      <input
                        id="radio-one"
                        type="radio"
                        name="radio2"
                        checked
                      />
                      <label for="radio-one">One</label>
                    </b-form-group>
                  </b-col>
                </b-row>
              </b-form>
            </b-col>

            <b-col lg="4">
              <b-form>
                <legend>Disabled</legend>
                <p>
                  Disabled state also supported. Full stack radios
                  functionality.
                </p>
                <b-form-group class="radio abc-radio">
                  <input
                    id="radio-disabled-next"
                    type="radio"
                    name="radio3"
                    disabled
                  />
                  <label for="radio-disabled-next">Next</label>
                </b-form-group>
                <b-form-group class="radio abc-radio abc-radio-warning">
                  <input
                    id="radio-disabled-one"
                    type="radio"
                    name="radio3"
                    disabled
                    checked
                  />
                  <label for="radio-disabled-one">One</label>
                </b-form-group>
              </b-form>
            </b-col>
            <b-col lg="4">
              <b-form>
                <legend>Cool iOS-like switches</legend>
                <p>
                  Simple component that helps you turn your default HTML
                  checkbox inputs into beautiful iOS 7 style switches in just
                  few simple steps.
                </p>
                <b-form-group class="display-inline-block checkbox-ios me-3">
                  <label
                    for="checkbox-ios1"
                    class="switch  form-control-label"
                  >
                    <input
                      id="checkbox-ios1"
                      type="checkbox"
                      class="ios form-check-input"
                      value="off"
                    />
                    <i />
                  </label>
                </b-form-group>
                <b-form-group class="display-inline-block checkbox-ios">
                  <label
                    for="checkbox-ios2"
                    class="switch  form-control-label"
                  >
                    <input
                      id="checkbox-ios2"
                      type="checkbox"
                      class="ios form-check-input"
                      value="on"
                      checked
                    />
                    <i />
                  </label>
                </b-form-group>
              </b-form>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6>Pickers</h6>"
          custom-header
          close
          refresh
          settings
        >
          <b-form>
            <legend>Date & Time</legend>
            <b-row>
              <b-col
                md="6"
                xs="12"
              >
                <b-form-group>
                  <label
                    for="datetimepicker"
                    class="me-3"
                  >Datepicker</label>
                  <VueDatePicker
                    id="datetimepicker"
                    v-model="datepickerValue"
                    :placeholder="datepickerText || 'Select date'"
                    :dark="true"
                    auto-apply
                  />
                </b-form-group>
              </b-col>
              <b-col
                md="6"
                xs="12"
              >
                <b-form-group>
                  <label
                    for="datetimepicker_withtime"
                    class="me-3"
                  >With time</label>
                  <VueDatePicker
                    id="datetimepicker_withtime"
                    v-model="datetimepickerValue"
                    :placeholder="datetimepickerText || 'Select date and time'"
                    :dark="true"
                    enable-time-picker
                    auto-apply
                  />
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
          <b-form>
            <legend>Colors</legend>
            <b-form-group>
              <label for="built-in-colorpicker">
                Built-in colorpicker
                <span class="help-block">
                  Every browser contains built-in colorpicker
                </span>
                <b-form-input
                  id="built-in-colorpicker"
                  v-model="builtinColor"
                  type="color"
                />
              </label>
            </b-form-group>
            <b-form-group>
              <label for="colorpickeri">
                Simple select
                <span class="help-block">
                  Colorpicker widget powered by
                  <a
                    href="https://github.com/xiaokaike/vue-color"
                    target="_blank"
                  >vue-color</a>
                  plugin
                </span>
                <b-input-group class="colorpicker-wrapper">
                  <input
                    type="text"
                    class="form-control"
                    :value="color.hex"
                  />
                  <Chrome
                    :class="{ colorpicker: true, 'd-none': !isPickerActive }"
                    :model-value="(color as any)"
                    @update:model-value="(val: any) => color = val"
                  />
                  <template #append>
                    <b-input-group-text
                      @click="isPickerActive = !isPickerActive"
                    >
                      <div
                        class="rect"
                        :style="{ backgroundColor: color.hex }"
                      />
                    </b-input-group-text>
                  </template>
                </b-input-group>
              </label>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6> Input <strong>Masks</strong></h6>"
          custom-header
          close
          settings
          refresh
        >
          <b-form class="form-label-left">
            <legend>Masked inputs</legend>
            <b-form-group
              label-for="phone-mask"
              label-cols="4"
              breakpoint="md"
            >
              <template #label>
                <div>
                  Phone
                  <span class="help-block">(123) 456-7890</span>
                </div>
              </template>
              <b-form-input
                id="phone-mask"
                v-model="phoneModel"
                class=""
                type="tel"
                placeholder="(123) 456-7890"
                @input="formatPhone"
              />
            </b-form-group>
            <b-form-group
              label-cols="4"
              breakpoint="md"
              label-for="int-phone-mask"
            >
              <template #label>
                <div>
                  International Phone
                  <span class="help-block">+375 123 456 789</span>
                </div>
              </template>
              <b-form-input
                id="int-phone-mask"
                v-model="intPhoneModel"
                class=""
                type="tel"
                placeholder="+375 123 456 789"
              />
            </b-form-group>
            <b-form-group
              label-cols="4"
              breakpoint="md"
              label-for="date-mask"
            >
              <template #label>
                <div>
                  Date Format
                  <span class="help-block">07-03-2013</span>
                </div>
              </template>
              <b-form-input
                id="date-mask"
                v-model="dateModel"
                class=""
                type="text"
                placeholder="07-03-2013"
              />
            </b-form-group>
            <b-form-group
              label-cols="4"
              breakpoint="md"
              label-for="time-mask"
            >
              <template #label>
                <div>
                  Time
                  <span class="help-block">13:43</span>
                </div>
              </template>
              <b-form-input
                id="time-mask"
                v-model="timeModel"
                class=""
                type="time"
                placeholder="13:43"
              />
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col xs="12">
        <Widget
          title="<h6>Sliders</h6>"
          custom-header
          settings
          close
          refresh
        >
          <b-row>
            <b-col lg="4">
              <h4>Color Options</h4>
              <p>
                Light Blue provides different color options for range sliders:
              </p>
              <b-form>
                <div class="mb-sm">
                  <input
                    type="range"
                    class="form-range"
                    :value="14"
                    :max="20"
                  />
                </div>
                <div class="slider-danger mb-sm">
                  <input
                    type="range"
                    class="form-range range-danger"
                    :value="18"
                    :max="20"
                  />
                </div>
                <div class="slider-warning mb-sm">
                  <input
                    type="range"
                    class="form-range range-warning"
                    :value="7"
                    :max="20"
                  />
                </div>
                <div class="slider-success mb-sm">
                  <input
                    type="range"
                    class="form-range range-success"
                    :value="11"
                    :max="20"
                  />
                </div>
                <div class="slider-inverse mb-sm">
                  <input
                    type="range"
                    class="form-range range-inverse"
                    :value="4"
                    :max="20"
                  />
                </div>
              </b-form>
            </b-col>
            <b-col lg="4">
              <h4>Slider Orientation</h4>
              <p>
                Vertical orientation is also possible using CSS transforms:
              </p>
              <b-row>
                <b-col md="8">
                  <div
                    class="d-flex gap-4 align-items-end"
                    style="height: 150px"
                  >
                    <input
                      type="range"
                      class="form-range vertical-slider"
                      :value="14"
                      :max="20"
                    />
                    <input
                      type="range"
                      class="form-range vertical-slider range-inverse"
                      :value="18"
                      :max="20"
                    />
                    <input
                      type="range"
                      class="form-range vertical-slider"
                      :value="7"
                      :max="20"
                    />
                    <input
                      type="range"
                      class="form-range vertical-slider range-inverse"
                      :value="11"
                      :max="20"
                    />
                    <input
                      type="range"
                      class="form-range vertical-slider"
                      :value="4"
                      :max="20"
                    />
                  </div>
                </b-col>
              </b-row>
            </b-col>
            <b-col lg="4">
              <h4>Range Selector</h4>
              <p>
                Use the native range input for value selection:
              </p>
              <div class="slider-warning">
                <div class="d-flex align-items-center gap-2">
                  <span>$200</span>
                  <input
                    type="range"
                    class="form-range flex-grow-1 range-warning"
                    min="0"
                    :max="2000"
                    :value="1547"
                  />
                  <span>$2000</span>
                </div>
              </div>
            </b-col>
          </b-row>
        </Widget>
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6>Simple <strong>file uploads</strong></h6>"
          custom-header
          settings
          close
          refresh
        >
          <b-form>
            <blockquote class="blockquote blockquote-reverse">
              <p>
                The man who is really serious, with the urge to find out what
                truth is, has no style at all. He lives only in what is.
              </p>
              <footer>Bruce Lee</footer>
            </blockquote>

            <b-form-group
              label="File input widget"
              :label-cols="4"
              label-for="fileupload1"
              label-text-align="right"
              breakpoint="md"
            >
              <b-input-group class="fileinput fileinput-new">
                <input
                  id="fileupload1"
                  type="file"
                  name="file"
                  class="display-none"
                  @change="onChangeInputFiles"
                />
                <label
                  for="fileupload1"
                  class="form-control"
                >
                  <div v-if="inputFiles.length > 0">
                    <span
                      v-for="file in inputFiles"
                      :key="`select-id-${file.name.split('.')[0].toString()}`"
                    >
                      {{ file.name }}
                    </span>
                  </div>
                  <span v-else />
                </label>
                <template #append>
                  <template v-if="inputFiles.length === 0">
                    <b-button
                      type="button"
                      variant="secondary"
                      class="btn-file"
                    >
                      <label for="fileupload1">Select file</label>
                    </b-button>
                  </template>
                  <template v-else>
                    <b-button
                      type="button"
                      variant="secondary"
                    >
                      <label for="fileupload1">Change file</label>
                    </b-button>
                    <b-button
                      type="reset"
                      variant="secondary"
                      @click="removeFiles"
                    >
                      <label>Remove file</label>
                    </b-button>
                  </template>
                </template>
              </b-input-group>
              <span class="help-block">
                Awesome file input plugin allows you to create a visually
                appealing file or image inputs.
              </span>
            </b-form-group>
            <b-form-group
              label="Image upload widget"
              label-for="fileupload2"
              label-text-align="right"
              :label-cols="4"
            >
              <input
                id="fileupload2"
                accept="image/*"
                type="file"
                name="file"
                class="display-none"
                @change="onChangeInputImage"
              />
              <div class="fileinput fileinput-new fileinput-fix">
                <div class="fileinput-new thumbnail">
                  <div v-if="imageFiles.length > 0">
                    <div
                      v-for="image in imageFiles"
                      :key="`img-id-${image.toString()}`"
                      class="image-preview"
                      :style="{ backgroundImage: `url(${image.preview})` }"
                    />
                  </div>
                  <img
                    v-else
                    alt="thumbnail"
                    src="../../../assets/thumb.svg"
                  />
                </div>
              </div>
              <div>
                <b-button
                  type="button"
                  variant="secondary"
                  class="mt-sm"
                >
                  <label for="fileupload2">
                    Select image
                  </label>
                </b-button>
              </div>
              <span class="help-block">
                Showing a thumbnail instead of the filename when uploading an
                image.
              </span>
            </b-form-group>
          </b-form>
        </Widget>
      </b-col>
      <b-col
        lg="6"
        md="12"
      >
        <Widget
          title="<h6><strong>Drop</strong> Zone</h6>"
          custom-header
          settings
          refresh
          close
        >
          <div
            class="dropzone-area"
            v-bind="getRootProps()"
          >
            <input v-bind="getInputProps()" />
            <div class="dropzone-content text-center p-4">
              <i class="la la-cloud-upload la-3x mb-2" />
              <p v-if="isDragActive">
                Drop the files here...
              </p>
              <p v-else>
                Drag &amp; drop files here, or click to select files
              </p>
              <div
                v-if="droppedFiles.length > 0"
                class="mt-3"
              >
                <p class="mb-1">
                  <strong>Files:</strong>
                </p>
                <ul class="list-unstyled">
                  <li
                    v-for="file in droppedFiles"
                    :key="file.name"
                  >
                    {{ file.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Multiselect from '@vueform/multiselect'
import { Chrome } from '@ckpack/vue-color'
import Widget from '@/components/Widget/Widget.vue'
import { MdEditor } from 'md-editor-v3'
import { VueDatePicker } from '@vuepic/vue-datepicker'
import { useDropzone } from 'vue3-dropzone'
import 'md-editor-v3/lib/style.css'
import '@vuepic/vue-datepicker/dist/main.css'

interface ImageFile extends File {
  preview?: string
  toUpload?: boolean
}

interface ColorValue {
  hex: string
  [key: string]: unknown
}

const typesDropdown = ref('Type one')
const wygContent = ref('')
const wysiwygEditor = useTemplateRef<HTMLDivElement>('wysiwygEditor')
const mdContent = ref('')
const defaultSelect = ref('Andromeda Galaxy')
const searchSelect = ref('Dallas Cowboys')
const simpleDropdownVariant = ref('Option One')
const dangerDropdownVariant = ref('Ichi')
const warningDropdownVariant = ref('Shi')
const successDropdownVariant = ref('Hichi')
const bigDropdownVariant = ref('Fourth Item')
const datepickerText = ref('')
const datetimepickerText = ref('')
const datepickerValue = ref<Date | null>(null)
const datetimepickerValue = ref<Date | null>(null)
const timeModel = ref<string | null>(null)
const intPhoneModel = ref<string | null>(null)
const phoneModel = ref<string | null>(null)
const dateModel = ref<string | null>(null)
const inputFiles = ref<File[]>([])
const imageFiles = ref<ImageFile[]>([])
const color = ref<ColorValue>({ hex: '#cccccc' })
const builtinColor = ref('#3498db')
const isPickerActive = ref(false)
const textAreaContent = ref('')
const autosizeContent = ref('')
const droppedFiles = ref<File[]>([])

// Dropzone setup
function onDrop(acceptedFiles: File[]) {
  droppedFiles.value = acceptedFiles
}

const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

// Dropdown variant map for dynamic updates
const dropdownVariants: Record<string, typeof simpleDropdownVariant> = {
  simpleDropdownVariant,
  dangerDropdownVariant,
  warningDropdownVariant,
  successDropdownVariant,
  bigDropdownVariant,
}

function changeTypesDropdown(value: string) {
  typesDropdown.value = value
}

function changeSelectOption(field: string, value: string) {
  const targetRef = dropdownVariants[field]
  if (targetRef) {
    targetRef.value = value
  }
}

function formatPhone(event: Event) {
  const input = event.target as HTMLInputElement
  let value = input.value.replace(/\D/g, '')
  if (value.length > 10) value = value.substring(0, 10)
  if (value.length >= 6) {
    phoneModel.value = `(${value.substring(0, 3)}) ${value.substring(3, 6)}-${value.substring(6)}`
  } else if (value.length >= 3) {
    phoneModel.value = `(${value.substring(0, 3)}) ${value.substring(3)}`
  } else {
    phoneModel.value = value
  }
}

function onChangeInputFiles(e: Event) {
  const target = e.target as HTMLInputElement
  const files: File[] = []

  if (target.files) {
    for (let i = 0; i < target.files.length; i += 1) {
      files.push(target.files[i])
    }
  }

  inputFiles.value = files
}

function onChangeInputImage(e: Event) {
  const target = e.target as HTMLInputElement
  if (!target.files || !target.files[0]) return

  const files: ImageFile[] = []
  const reader = new FileReader()
  const file = target.files[0] as ImageFile
  files.push(file)

  reader.onloadend = () => {
    files[0].preview = reader.result as string
    files[0].toUpload = true
    imageFiles.value = files
  }

  reader.readAsDataURL(target.files[0])
}

function removeFiles() {
  inputFiles.value = []
}

// Wysiwyg editor functions
function execCommand(command: string) {
  document.execCommand(command, false)
}

function updateWygContent(event: Event) {
  const target = event.target as HTMLDivElement
  wygContent.value = target.innerHTML
}

function clearWysiwyg() {
  if (wysiwygEditor.value) {
    wysiwygEditor.value.innerHTML = ''
    wygContent.value = ''
  }
}
</script>

<style src="./Elements.scss" lang="scss" />
