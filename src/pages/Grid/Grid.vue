<template>
  <div class="grid-page">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="breadcrumb-item active">
        Grid
      </li>
    </ol>
    <h1 class="page-title">
      Grid - <span class="fw-semi-bold">Options</span>
    </h1>
    <BRow>
      <BCol cols="12">
        <Widget title="Draggable Grid">
          <div>
            <p>
              <strong>Widgster</strong> is a plugin that allows to easily implement
              basic widget functions that
              lots of our customers have requested. For now it has the following essential
              widget features:
            </p>
            <ul class="text-list">
              <li>
                <strong>Collapse/Expand</strong> - all widgets can be collapsed to
                fill only header&apos;s vertical space;
              </li>
              <li>
                <strong>Close</strong> - closable. Any widget may be
                removed by clicking the close btn;
              </li>
              <li>
                <strong>Full Screen</strong> - an option to make widget
                fill the whole window (just like OS);
              </li>
              <li>
                <strong>Update</strong> - the hottest option allowing
                to update widget data
                asynchronously. You just
                need to provide an api to fetch the data from. With loader delivered.
              </li>
            </ul>
          </div>
        </Widget>
      </BCol>
    </BRow>
    <BRow>
      <BCol
        class="widget-container"
        xl="6"
        xs="12"
      >
        <draggable
          v-model="leftWidgets"
          v-bind="sortOptions"
          item-key="id"
        >
          <template #item="{ element }">
            <div>
              <!-- Default Widget -->
              <Widget
                v-if="element.id === 'default'"
                title="<h6>Default <span class='fw-semi-bold'>Widget</span></h6>"
                refresh
                collapse
                fullscreen
                close
                custom-header
                show-tooltip
                :tooltip-placement="tooltipPlacement"
                :fetching-data="widgetFetchingData.default"
                @load="updateWidget('default')"
              >
                <div>
                  <p
                    v-for="item in gridData.default"
                    :key="item.value"
                    :class="item.extraClass"
                  >
                    {{ item.value }}
                  </p>
                </div>
              </Widget>

              <!-- Shares Widget -->
              <Widget
                v-else-if="element.id === 'shares'"
                ref="sharesWidget"
                class="shares-widget"
                show-tooltip
                :tooltip-placement="tooltipPlacement"
                title="<h6>
                  <span class='badge badge-primary'><i class'fa fa-facebook' /></span> &nbsp;
                  Latest <span class='fw-semi-bold'>Shares</span>
                </h6>"
                close="Close"
                refresh="Reload"
                custom-header
                body-class="p-0"
                :fetching-data="widgetFetchingData.shares"
                @load="updateWidget('shares')"
              >
                <div class="list-group list-group-lg">
                  <a
                    v-for="item in gridData.shares"
                    :key="item.name"
                    href="#"
                    class="list-group-item"
                    :class="item.extraClass"
                  >
                    <span class="thumb-sm me-1">
                      <img
                        class="rounded-circle"
                        :src="item.img"
                        :alt="item.name"
                      />
                    </span>
                    <div>
                      <h6 class="m-0">{{ item.name }}</h6>
                      <small class="text-muted">{{ item.comment }}</small>
                    </div>
                    <i
                      class="fa fa-circle ms-auto"
                      :class="'text-' + item.type"
                    />
                  </a>
                </div>
              </Widget>

              <!-- Autoload Widget -->
              <Widget
                v-else-if="element.id === 'autoload'"
                id="autoload-widget"
                :title="'<h6>Autoload <span class=fw-semi-bold>Widget</span></h6>'"
                :show-loader="false"
                :autoload="2000"
                custom-header
                custom-controls="
                  <div>
                    <div class='dropdown'>
                      <i class='fa fa-cog' id='dropdownMenuButton' data-toggle='dropdown'
                        aria-haspopup='true' aria-expanded='false'></i>
                      <div class='dropdown-menu dropdown-menu-right' aria-labelledby='dropdownMenuButton'>
                        <button class='dropdown-item' control='load' title='Reload'>
                          Reload &nbsp;&nbsp;
                          <span class='badge badge-pill badge-success animated bounceIn'>
                            <strong>9</strong>
                          </span>
                        </button>
                        <button class='dropdown-item' control='fullscreen' title='Full Screen'>
                          Fullscreen
                        </button>
                        <button class='dropdown-item' control='restore' title='Restore'>
                          Restore
                        </button>
                        <div class='dropdown-divider'></div>
                        <button class='dropdown-item' control='close' title='Close'>Close</button>
                      </div>
                    </div>
                  </div>
                "
                @load="updateWidget('autoload')"
              >
                <div>
                  <span v-safe-html="gridData.autoload.title" />
                  <p class="lead text-muted text-center">
                    Faith makes it possible to achieve that which
                    man&apos;s mind can conceive and believe.
                  </p>
                  <BForm>
                    <BFormGroup>
                      <label for="exampleInputEmail1"><i class="fa fa-circle text-warning" /> &nbsp; Email
                        address</label>
                      <BFormInput
                        id="exampleInputEmail1"
                        type="email"
                        placeholder="Enter email"
                      />
                    </BFormGroup>
                    <BFormGroup>
                      <label for="pswd"><i class="fa fa-circle text-danger" /> &nbsp; Password</label>
                      <BFormInput
                        id="pswd"
                        type="text"
                        placeholder="Min 8 characters"
                      />
                    </BFormGroup>
                    <p>
                      To make a widget automatically load it&apos;s content you just need to set
                      <strong>autoload</strong> attribute and provide an api to update the widget content.
                    </p>
                    <pre><code>&lt;Widget :autoload=&quot;true&quot; ...&gt;</code></pre>
                    <p>
                      <strong>autoload</strong> may be set to an integer
                      value. If set, for example, to
                      2000 will refresh widget every 2 seconds.
                    </p>
                    <div class="clearfix">
                      <div class="btn-toolbar float-end">
                        <BButton variant="light">
                          Cancel
                        </BButton>
                        <BButton
                          variant="success"
                          :class="gridData.autoload.btnExtraClass"
                        >
                          &nbsp;Submit&nbsp;
                        </BButton>
                      </div>
                    </div>
                  </BForm>
                </div>
              </Widget>

              <!-- Custom Loader Widget -->
              <Widget
                v-else-if="element.id === 'custom-loader'"
                :fetching-data="true"
                :title="'<h6>Custom <span class=fw-semi-bold>Loader</span></h6>'"
                custom-header
              />
            </div>
          </template>
        </draggable>
      </BCol>
      <BCol
        xl="6"
        class="widget-container"
      >
        <draggable
          v-model="rightWidgets"
          v-bind="sortOptions"
          item-key="id"
        >
          <template #item="{ element }">
            <div>
              <!-- News Widget -->
              <Widget
                v-if="element.id === 'news'"
                id="news-widget"
                :title="'<div><h6> News <span class=badge badge-pill badge-success>17</span></h6><span class=text-muted>spinning refresh button close prompt</span></div>'"
                custom-header
                refresh
                collapse
                close
                body-class="p-0"
                :fetching-data="widgetFetchingData.news"
                :show-loader="false"
                @load="updateWidget('news')"
                @close="closePrompt"
              >
                <ul class="news-list list-group px-2">
                  <li
                    v-for="item in gridData.news"
                    :key="item.title"
                    :class="item.extraClass"
                    class="list-group-item"
                  >
                    <span
                      class="icon text-white"
                      :class="'bg-'+item.background"
                    >
                      <i
                        class="fa"
                        :class="'fa-'+item.icon"
                      />
                    </span>
                    <div class="news-item-info">
                      <h5 class="name m-0 mb-xs">
                        <a href="#">{{ item.title }}</a>
                      </h5>
                      <p class="fs-mini">
                        {{ item.description }}
                      </p>
                      <time class="help-block">{{ item.date }}</time>
                    </div>
                  </li>
                </ul>
                <BModal
                  id="news-close-modal"
                  v-model="modal"
                  :change="toggleModal"
                  title="Sure?"
                  body-bg-variant="light"
                >
                  Do you really want to unrevertably remove this super news widget?
                  <template #modal-footer>
                    <div class="w-100 text-end">
                      <BButton
                        variant="secondary"
                        data-dismiss="modal"
                        @click="toggleModal"
                      >
                        No
                      </BButton>&nbsp;
                      <BButton
                        ref="newsWidgetRemove"
                        variant="danger"
                        @click="null"
                      >
                        Yes,
                        remove widget
                      </BButton>
                    </div>
                  </template>
                </BModal>
              </Widget>

              <!-- Collapsed Widget -->
              <Widget
                v-else-if="element.id === 'collapsed'"
                class="locked"
                :title="'<h6>Collapsed by default & locked</h6>'"
                :collapsed="true"
                collapse
                close
                custom-header
              >
                <div class="widget-body">
                  <blockquote>
                    There are no limits. There are plateaus, but you must not
                    stay there, you must go beyond
                    them. If it kills you, it kills you. A man must constantly exceed his level.
                    <footer>
                      Bruce Lee
                    </footer>
                  </blockquote>
                  <p>
                    To make a widget initially collapsed just add
                    <code>:collapsed=&quot;true&quot;</code> attribute
                    to <code>&lt;Widget&gt;</code>.
                  </p>
                  <p>To make it locked (prevent dragging) add <code>.locked</code> class.</p>
                </div>
              </Widget>

              <!-- Jumbotron Widget -->
              <Widget
                v-else-if="element.id === 'jumbotron'"
                ref="jumbotronWidget"
                class="p-0"
              >
                <div class="jumbotron handle text-white mb-0">
                  <div class="container">
                    <h1>Draggable story!</h1>
                    <p class="lead">
                      <em>Build</em> your own
                      interfaces! Sit back and relax.
                    </p>
                    <p class="text-center">
                      <a
                        class="btn btn-danger btn-lg"
                        control="fullscreen"
                        @click="jumbotronWidget?.changeState($event, 'fullscreen')"
                      >
                        Fullscreen me! &nbsp;
                        <i class="fa fa-check" />
                      </a>
                    </p>
                    <a
                      class="btn btn-danger btn-lg"
                      control="restore"
                      @click="jumbotronWidget?.changeState($event, 'default')"
                    >
                      Want to go back?
                    </a>
                  </div>
                </div>
              </Widget>
            </div>
          </template>
        </draggable>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import mock from './mock'
import draggable from 'vuedraggable'

const newsWidgetRemove = useTemplateRef<HTMLElement>('newsWidgetRemove')
const jumbotronWidget = useTemplateRef<InstanceType<typeof Widget>>('jumbotronWidget')

const gridData = ref(mock.mainData)
const updatedData = mock.updatedData
const widgetFetchingData = ref<Record<string, boolean>>({})
const modal = ref(false)
const tooltipPlacement = 'bottom'

const sortOptions = {
  group: 'grid',
  handle: 'header',
  filter: '.locked',
  opacity: '0.8',
  ghostClass: 'widget-placeholder',
  animation: '200',
}

// Widget lists for draggable
const leftWidgets = ref([
  { id: 'default' },
  { id: 'shares' },
  { id: 'autoload' },
  { id: 'custom-loader' },
])

const rightWidgets = ref([
  { id: 'news' },
  { id: 'collapsed' },
  { id: 'jumbotron' },
])

function closePrompt(callback: () => void) {
  modal.value = true
  setTimeout(() => {
    if (newsWidgetRemove.value) {
      newsWidgetRemove.value.addEventListener('click', () => {
        modal.value = false
        callback()
      })
    }
  })
}

function toggleModal() {
  modal.value = !modal.value
}

function updateWidget(widget: string) {
  widgetFetchingData.value = { ...widgetFetchingData.value, [widget]: true }
  gridData.value = { ...gridData.value, [widget]: (updatedData as unknown as Record<string, unknown>)[widget] }
  setTimeout(() => {
    widgetFetchingData.value = { ...widgetFetchingData.value, [widget]: false }
  }, 200)
}
</script>

<style src="./Grid.scss" lang="scss" />
