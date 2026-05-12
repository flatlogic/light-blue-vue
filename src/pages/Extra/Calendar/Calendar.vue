<template>
  <div class="calendar-page">
    <b-row>
      <b-col
        lg="4"
        xs="12"
        md="6"
      >
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            YOU ARE HERE
          </li>
          <li class="breadcrumb-item active">
            Calendar
          </li>
        </ol>
        <h1 class="page-title">
          {{ currentMonth }} - <span class="fw-semi-bold">{{ currentDay }}</span>
        </h1>
        <h3>Draggable <span class="fw-semi-bold">Events</span></h3>
        <p>Just drap and drop events from there directly into the calendar.</p>
        <div
          ref="externalEvents"
          class="calendar-external-events mb-lg"
        >
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-success&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Make a tea&quot; }"
          >
            <i class="fa fa-circle fa-fw text-success ms-1 me-1" />
            Make a tea
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-primary&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Open windows&quot; }"
          >
            <i class="fa fa-circle fa-fw text-warning ms-1 me-1" />
            Open windows
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-gray&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Some stuff&quot; }"
          >
            <i class="fa fa-circle fa-fw text-info ms-1 me-1" />
            Some stuff
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-danger&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Study UX engineering&quot; }"
          >
            <i class="fa fa-square fa-fw text-danger ms-1 me-1" />
            Study UX engineering
          </div>
          <div
            class="external-event"
            data-event="{ &quot;classNames&quot;: [&quot;bg-gray&quot;, &quot;text-white&quot;], &quot;title&quot;: &quot;Another stuff&quot; }"
          >
            <i class="fa fa-circle-o fa-fw text-gray-light ms-1 me-1" />
            Another stuff
          </div>
        </div>
      </b-col>
      <b-col
        md="6"
        lg="8"
        xs="12"
      >
        <Widget>
          <div class="calendar-controls d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex align-items-center gap-2">
              <b-button-group>
                <b-button
                  variant="secondary"
                  @click="prev"
                >
                  <i class="fas fa-chevron-left" />
                </b-button>
                <b-button
                  variant="secondary"
                  @click="next"
                >
                  <i class="fas fa-chevron-right" />
                </b-button>
              </b-button-group>
              <b-button
                variant="secondary"
                @click="today"
              >
                Today
              </b-button>
            </div>
            <div>
              <b-button-group>
                <b-button
                  variant="secondary"
                  :class="{ active: calendarView === 'dayGridMonth' }"
                  @click="changeView('dayGridMonth')"
                >
                  Month
                </b-button>
                <b-button
                  variant="secondary"
                  :class="{ active: calendarView === 'timeGridWeek' }"
                  @click="changeView('timeGridWeek')"
                >
                  Week
                </b-button>
                <b-button
                  variant="secondary"
                  :class="{ active: calendarView === 'timeGridDay' }"
                  @click="changeView('timeGridDay')"
                >
                  Day
                </b-button>
              </b-button-group>
            </div>
          </div>
          <FullCalendar
            ref="fullCalendar"
            :options="calendarOptions"
          />
        </Widget>
      </b-col>
    </b-row>
    <b-modal v-model="createEventModal">
      <template #title>
        Create New Event
        <br />
        <small class="text-gray">
          Just enter event name to create a new one
        </small>
      </template>
      <b-row>
        <b-col>
          <b-form-input
            v-model="eventTitle"
            placeholder="Title"
          />
        </b-col>
      </b-row>
      <template #footer>
        <b-button
          variant="success"
          class="mt-3"
          @click="createEvent"
        >
          Create
        </b-button>
        <b-button
          variant="secondary"
          class="mt-3"
          @click="createEventModal = false"
        >
          Close
        </b-button>
      </template>
    </b-modal>
    <b-modal v-model="showEventModal">
      <template #title>
        {{ event.title }}
      </template>
      <b-row>
        <b-col>
          <p>
            <i class="la la-calendar" />
            {{ getFormattedDate(event.start as string | Date | undefined) }}
          </p>
          <p>{{ (event.extendedProps as Record<string, string> | undefined)?.description }}</p>
        </b-col>
      </b-row>
      <template #footer>
        <b-button
          variant="secondary"
          class="mt-3"
          @click="showEventModal = false"
        >
          OK
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, useTemplateRef } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import dayjs from 'dayjs'

import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { Draggable } from '@fullcalendar/interaction'
import type { CalendarApi, EventClickArg, DateSelectArg } from '@fullcalendar/core'

interface CalendarEvent {
  start?: Date
  end?: Date
  allDay?: boolean
  backgroundColor?: string
  textColor?: string
  editable?: boolean
  title?: string
  extendedProps?: Record<string, string>
}

const fullCalendar = useTemplateRef<InstanceType<typeof FullCalendar>>('fullCalendar')
const externalEvents = useTemplateRef<HTMLElement>('externalEvents')

const date = new Date()
const d = date.getDate()
const m = date.getMonth()
const y = date.getFullYear()

const event = ref<CalendarEvent>({})
const calendarView = ref('dayGridMonth')
const currentMonth = dayjs().format('MMM YYYY')
const currentDay = dayjs().format('dddd')
const showEventModal = ref(false)
const createEventModal = ref(false)
const eventTitle = ref('')

// Event handlers need to be defined before calendarOptions
function selectHandler({ start, end, allDay }: DateSelectArg) {
  createEventModal.value = true
  event.value = {
    start,
    end,
    allDay,
    backgroundColor: '#64bd63',
    textColor: '#fff',
    editable: true,
  }
}

function eventClickHandler(e: EventClickArg) {
  const ev = e.event
  event.value = {
    start: ev.start || undefined,
    end: ev.end || undefined,
    allDay: ev.allDay,
    backgroundColor: ev.backgroundColor,
    textColor: ev.textColor,
    editable: ev.startEditable,
    title: ev.title,
    extendedProps: ev.extendedProps as Record<string, string>,
  }
  showEventModal.value = true
}

function dropHandler(info: { draggedEl: HTMLElement }) {
  info.draggedEl.parentNode?.removeChild(info.draggedEl)
}

const calendarOptions = {
  plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
  initialView: 'dayGridMonth',
  headerToolbar: {
    left: '',
    center: '',
    right: '',
  },
  selectable: true,
  selectMirror: true,
  editable: true,
  droppable: true,
  select: selectHandler,
  eventClick: eventClickHandler,
  drop: dropHandler,
  events: [
    {
      title: 'All Day Event',
      start: new Date(y, m, 1),
      backgroundColor: '#79A5F0',
      textColor: '#fff',
      extendedProps: { description: 'Will be busy throughout the whole day' },
    },
    {
      title: 'Long Event',
      start: new Date(y, m, d + 5),
      end: new Date(y, m, d + 7),
      textColor: '#fff',
      extendedProps: { description: 'This conference should be worse visiting' },
    },
    {
      id: '999',
      title: 'Blah Blah Car',
      start: new Date(y, m, d - 3, 16, 0),
      allDay: false,
      textColor: '#fff',
      extendedProps: { description: 'Agree with this guy on arrival time' },
    },
    {
      id: '1000',
      title: 'Buy this template',
      start: new Date(y, m, d + 3, 12, 0),
      allDay: false,
      backgroundColor: '#555',
      textColor: '#fff',
      extendedProps: { description: 'Make sure everything is consistent first' },
    },
    {
      title: 'Got to school',
      start: new Date(y, m, d + 16, 12, 0),
      end: new Date(y, m, d + 16, 13, 0),
      backgroundColor: '#64bd63',
      textColor: '#fff',
      extendedProps: { description: 'Time to go back' },
    },
    {
      title: 'Study some Node',
      start: new Date(y, m, d + 18, 12, 0),
      end: new Date(y, m, d + 18, 13, 0),
      backgroundColor: '#79A5F0',
      textColor: '#fff',
      extendedProps: {
        description:
          "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.",
      },
    },
    {
      title: 'Click for Flatlogic',
      start: new Date(y, m, 28),
      end: new Date(y, m, 29),
      url: 'http://flatlogic.com/',
      backgroundColor: '#e5603b',
      textColor: '#fff',
      extendedProps: { description: 'Creative solutions' },
    },
  ],
}

const calendar = computed<CalendarApi | null>(() => {
  return fullCalendar.value?.getApi() || null
})

function createEvent() {
  if (calendar.value) {
    calendar.value.addEvent({
      ...event.value,
      title: eventTitle.value,
    })
    calendar.value.unselect()
  }
  createEventModal.value = false
  eventTitle.value = ''
}

function prev() {
  calendar.value?.prev()
}

function next() {
  calendar.value?.next()
}

function today() {
  calendar.value?.today()
}

function changeView(view: string) {
  calendar.value?.changeView(view)
  calendarView.value = view
}

function getFormattedDate(date: Date | string | null | undefined): string {
  return dayjs(date).format('YYYY-MM-DD')
}

onMounted(() => {
  if (externalEvents.value) {
    new Draggable(externalEvents.value, {
      itemSelector: '.external-event',
    })
  }
})
</script>

<style src="./Calendar.scss" lang="scss" />
