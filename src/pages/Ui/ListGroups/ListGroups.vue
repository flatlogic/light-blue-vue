<template>
  <div class="list-groups-page">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        YOU ARE HERE
      </li>
      <li class="breadcrumb-item active">
        UI List Groups
      </li>
    </ol>
    <h1 class="page-title">
      Lists - <span class="fw-semi-bold">Sortable Groups</span>
    </h1>
    <Widget
      title="<h4> Grouped <span class='fw-semi-bold'>Lists</span></h4>"
      close
      refresh
      settings
      custom-header
    >
      <h3>Closest <span class="fw-semi-bold">Stars</span></h3>
      <p>
        Try to play around with this list. Are you ready to pass an exam on astronomy?
      </p>
      <draggable
        v-model="sortableList"
        item-key="id"
        tag="div"
        ghost-class="ghost"
      >
        <template #item="{ element }">
          <div
            class="px-4 py-3 border mb-sm list-element d-flex
            justify-content-between align-items-center"
          >
            <div>
              <i class="fa fa-sort me-2" />
              <span class="me-2">{{ element.id }}</span>{{ element.text }}
            </div>
            <i class="fa fa-times text-muted" />
          </div>
        </template>
      </draggable>
    </Widget>
    <Widget
      title="<h3>Nestable <span class='fw-semi-bold'>List</span></h3>"
      close
      refresh
      settings
      custom-header
    >
      <p class="fs-mini">
        There is a scientific theory that you can arrange this list in such way that there will
        be no more saddness
        in the whole world. Can you? Touch devices supported
      </p>
      <BRow class="nestable">
        <BCol
          md="6"
          xs="12"
          class="mb-xs"
        >
          <div class="tree">
            <NestableList :items="nestableFirstItems" />
          </div>
        </BCol>
        <BCol md="6">
          <div class="tree">
            <NestableList :items="nestableSecondItems" />
          </div>
        </BCol>
      </BRow>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { ref, defineComponent, h } from 'vue'
import draggable from 'vuedraggable'
import Widget from '@/components/Widget/Widget.vue'

interface SortableItem {
  id: string
  text: string
}

interface NestableItem {
  id: number
  text: string
  expanded?: boolean
  children?: NestableItem[]
}

const sortableList = ref<SortableItem[]>([
  { id: '03', text: ' Barnard\'s Star' },
  { id: '01', text: 'The Sun' },
  { id: '04', text: 'Wolf 359' },
  { id: '02', text: 'Proxima Centauri' },
  { id: '05', text: 'Lalande 21185' },
])

const nestableFirstItems = ref<NestableItem[]>([
  { id: 1, text: 'Item 1' },
  {
    id: 2,
    expanded: true,
    text: 'Item 2',
    children: [
      { id: 3, text: 'Item 3' },
      { id: 4, text: 'Item 4' },
      {
        id: 5,
        text: 'Item 5',
        expanded: true,
        children: [
          { id: 6, text: 'Item 6' },
          { id: 7, text: 'Item 7' },
          { id: 8, text: 'Item 8' },
        ],
      },
      { id: 9, text: 'Item 9' },
    ],
  },
])

const nestableSecondItems = ref<NestableItem[]>([
  { id: 13, text: 'Item 13' },
  { id: 14, text: 'Item 14' },
  {
    id: 15,
    expanded: true,
    text: 'Item 15',
    children: [
      { id: 16, text: 'Item 16' },
      { id: 17, text: 'Item 17' },
      { id: 18, text: 'Item 18' },
    ],
  },
])

// Simple recursive nestable list component using draggable
const NestableList = defineComponent({
  name: 'NestableList',
  props: {
    items: {
      type: Array as () => NestableItem[],
      required: true
    }
  },
  setup(props) {
    const localItems = ref([...props.items])

    return () => h(draggable, {
      modelValue: localItems.value,
      'onUpdate:modelValue': (val: NestableItem[]) => { localItems.value = val },
      itemKey: 'id',
      group: 'nested',
      tag: 'div',
      class: 'nested-list'
    }, {
      item: ({ element }: { element: NestableItem }) => h('div', {
        class: 'd-flex align-items-start flex-column mb-2'
      }, [
        h('div', {
          class: 'px-4 py-3 border list-element d-flex'
        }, [
          h('div', { class: 'drag bg-default px-4 py-3' }, [
            h('i', { class: 'la la-lg la-bars' })
          ]),
          h('span', { class: 'ms-1' }, element.text)
        ]),
        element.children && element.children.length > 0 && h('div', {
          class: 'ms-4 mt-2'
        }, [
          h(NestableList, { items: element.children })
        ])
      ])
    })
  }
})
</script>

<style src="./ListGroups.scss" lang="scss" />
