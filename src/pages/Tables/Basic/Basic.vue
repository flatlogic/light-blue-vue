<template>
  <div class="tables-basic">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Static</span>
    </h2>
    <BRow>
      <BCol>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">
                    #
                  </th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th class="hidden-sm-down">
                    Info
                  </th>
                  <th class="hidden-sm-down">
                    Date
                  </th>
                  <th class="hidden-sm-down">
                    Size
                  </th>
                  <th class="hidden-sm-down">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="row in tableStyles"
                  :key="row.id"
                >
                  <td>{{ row.id }}</td>
                  <td>
                    <img
                      class="img-rounded"
                      :src="row.picture"
                      :alt="'picture'"
                      height="50"
                    />
                  </td>
                  <td>
                    {{ row.description }}
                    <div v-if="row.label">
                      <BBadge :variant="row.label.colorClass">
                        {{ row.label.text }}
                      </BBadge>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">Type:</span>
                        <span class="text-muted">&nbsp; {{ row.info.type }}</span>
                      </small>
                    </p>
                    <p>
                      <small>
                        <span class="fw-semi-bold">Dimensions:</span>
                        <span class="text-muted">&nbsp; {{ row.info.dimensions }}</span>
                      </small>
                    </p>
                  </td>
                  <td class="text-muted">
                    {{ parseDate(row.date) }}
                  </td>
                  <td class="text-muted">
                    {{ row.size }}
                  </td>
                  <td class="width-150">
                    <BProgress
                      :variant="row.progress.colorClass"
                      :value="row.progress.percent"
                      :max="100"
                      class="progress-sm mb-xs"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-end">
              <BButton
                variant="secondary"
                class="me-3"
                size="sm"
              >
                Send to...
              </BButton>
              <BDropdown
                variant="dark"
                class="me-1"
                size="sm"
                text="Clear"
                right
              >
                <BDropdownItem>Clear</BDropdownItem>
                <BDropdownItem>Move ...</BDropdownItem>
                <BDropdownItem>Something else here</BDropdownItem>
                <BDropdownDivider />
                <BDropdownItem>Separated link</BDropdownItem>
              </BDropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
      </BCol>
    </BRow>
    <BRow>
      <BCol lg="6">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Stripped <span class="fw-semi-bold">Table</span></h3>
          <p>
            Each row is highlighted. You will never lost
            there. Just <code>.table-striped</code> it.
          </p>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox1"
                      type="checkbox"
                      :checked="checkboxes1[0]"
                      @change="event => checkAll(event, 'checkboxes1')"
                    />
                    <label for="checkbox1" />
                  </div>
                </th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox2"
                      type="checkbox"
                      :checked="checkboxes1[1]"
                      @change="event => changeCheck(event, 'checkboxes1', 1)"
                    />
                    <label for="checkbox2" />
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <BBadge variant="success">
                    Online
                  </BBadge>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox3"
                      type="checkbox"
                      :checked="checkboxes1[2]"
                      @change="event => changeCheck(event, 'checkboxes1', 2)"
                    />
                    <label for="checkbox3" />
                  </div>
                </td>
                <td>
                  Jacob <BBadge
                    variant="warning"
                    class="text-gray-dark bg-warning"
                  >
                    ALERT!
                  </BBadge>
                </td>
                <td>Thornton</td>
                <td>
                  <BBadge variant="secondary">
                    Away
                  </BBadge>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox4"
                      type="checkbox"
                      :checked="checkboxes1[3]"
                      @change="event => changeCheck(event, 'checkboxes1', 3)"
                    />
                    <label for="checkbox4" />
                  </div>
                </td>
                <td>Larry</td>
                <td>the Bird</td>
                <td>
                  <BBadge variant="danger">
                    Construct
                  </BBadge>
                </td>
              </tr>
            </tbody>
          </table>
          <br /><br />
          <h3>Hover <span class="fw-semi-bold">Table</span></h3>
          <p>Trace only what's really important. <code>.table-hover</code> is made for it.</p>
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td><a href="#">ottoto@example.com</a></td>
                  <td>
                    <BBadge
                      variant="secondary"
                      pill
                    >
                      Pending
                    </BBadge>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td><a href="#">fat.thor@example.com</a></td>
                  <td>
                    <BBadge
                      variant="secondary"
                      pill
                    >
                      Unconfirmed
                    </BBadge>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td><a href="#">larry@example.com</a></td>
                  <td>
                    <BBadge
                      variant="primary"
                      pill
                    >
                      New
                    </BBadge>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Peter</td>
                  <td>Horadnia</td>
                  <td><a href="#">peter@example.com</a></td>
                  <td>
                    <BBadge
                      variant="success"
                      pill
                    >
                      Active
                    </BBadge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </BCol>
      <BCol lg="6">
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Bordered <span class="fw-semi-bold">Table</span></h3>
          <p>
            Each row is highlighted. You will never lost there. That&apos;s how
            all of us learned in school the table should look like. Just add
            <code>.table-bordered</code> to it.
          </p>
          <table class="table table-bordered table-lg mt-lg mb-0">
            <thead class="text-uppercase">
              <tr>
                <th>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox10"
                      type="checkbox"
                      :checked="checkboxes2[0]"
                      @change="event => checkAll(event, 'checkboxes2')"
                    />
                    <label for="checkbox10" />
                  </div>
                </th>
                <th>Product</th>
                <th class="text-end">
                  Price
                </th>
                <th class="text-center">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox11"
                      type="checkbox"
                      :checked="checkboxes2[1]"
                      @change="event => changeCheck(event, 'checkboxes2', 1)"
                    />
                    <label for="checkbox11" />
                  </div>
                </td>
                <td>On the Road</td>
                <td class="text-end">
                  $25 224.2
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox12"
                      type="checkbox"
                      :checked="checkboxes2[2]"
                      @change="event => changeCheck(event, 'checkboxes2', 2)"
                    />
                    <label for="checkbox12" />
                  </div>
                </td>
                <td>HP Core i7</td>
                <td class="text-end">
                  $87 346.1
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox13"
                      type="checkbox"
                      :checked="checkboxes2[3]"
                      @change="event => changeCheck(event, 'checkboxes2', 3)"
                    />
                    <label for="checkbox13" />
                  </div>
                </td>
                <td>Let&apos;s Dance</td>
                <td class="text-end">
                  $57 944.6
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox14"
                      type="checkbox"
                      :checked="checkboxes2[4]"
                      @change="event => changeCheck(event, 'checkboxes2', 4)"
                    />
                    <label for="checkbox14" />
                  </div>
                </td>
                <td>Air Pro</td>
                <td class="text-end">
                  $118 533.1
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <div class="abc-checkbox">
                    <input
                      id="checkbox15"
                      type="checkbox"
                      :checked="checkboxes2[5]"
                      @change="event => changeCheck(event, 'checkboxes2', 5)"
                    />
                    <label for="checkbox15" />
                  </div>
                </td>
                <td>Version Control</td>
                <td class="text-end">
                  $72 854.5
                </td>
                <td class="text-center">
                  <Sparklines
                    :data="getRandomData()"
                    :options="getRandomColor()"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Widget>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          custom-header
          settings
          close
        >
          <h3>Overflow <span class="fw-semi-bold">Table</span></h3>
          <p>
            Add any non-bordered .table within a widget for a seamless design.
            Awesome look for no cost.
            Just wrap the table with simple css class <code>.widget-table-overflow</code> inside
            of widget
          </p>
          <div class="widget-table-overflow">
            <table class="table table-striped table-lg mt-lg mb-0">
              <thead>
                <tr>
                  <th>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox20"
                        type="checkbox"
                        :checked="checkboxes3[0]"
                        @change="event => checkAll(event, 'checkboxes3')"
                      />
                      <label for="checkbox20" />
                    </div>
                  </th>
                  <th>Product</th>
                  <th class="text-end">
                    Price
                  </th>
                  <th class="text-center">
                    Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox21"
                        type="checkbox"
                        :checked="checkboxes3[1]"
                        @change="event => changeCheck(event, 'checkboxes3', 1)"
                      />
                      <label for="checkbox21" />
                    </div>
                  </td>
                  <td>On the Road</td>
                  <td class="text-end">
                    $25 224.2
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox22"
                        type="checkbox"
                        :checked="checkboxes3[2]"
                        @change="event => changeCheck(event, 'checkboxes3', 2)"
                      />
                      <label for="checkbox22" />
                    </div>
                  </td>
                  <td>HP Core i7</td>
                  <td class="text-end">
                    $87 346.1
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox23"
                        type="checkbox"
                        :checked="checkboxes3[3]"
                        @change="event => changeCheck(event, 'checkboxes3', 3)"
                      />
                      <label for="checkbox23" />
                    </div>
                  </td>
                  <td>Let&apos;s Dance</td>
                  <td class="text-end">
                    $57 944.6
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox24"
                        type="checkbox"
                        :checked="checkboxes3[4]"
                        @change="event => changeCheck(event, 'checkboxes3', 4)"
                      />
                      <label for="checkbox24" />
                    </div>
                  </td>
                  <td>Air Pro</td>
                  <td class="text-end">
                    $118 533.1
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="abc-checkbox">
                      <input
                        id="checkbox25"
                        type="checkbox"
                        :checked="checkboxes3[5]"
                        @change="event => changeCheck(event, 'checkboxes3', 5)"
                      />
                      <label for="checkbox25" />
                    </div>
                  </td>
                  <td>Version Control</td>
                  <td class="text-end">
                    $72 854.5
                  </td>
                  <td class="text-center">
                    <Sparklines
                      :data="getRandomData()"
                      :options="getRandomColor()"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Widget>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Widget from '@/components/Widget/Widget.vue'
import Sparklines from '../../../components/Sparklines/Sparklines.vue'

// Import images for Vite
import table1 from '../../../assets/tables/1.jpg'
import table2 from '../../../assets/tables/2.jpg'
import table3 from '../../../assets/tables/3.jpg'
import table4 from '../../../assets/tables/4.jpg'
import table5 from '../../../assets/tables/5.jpg'

type VariantColor = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

interface TableStyle {
  id: number
  picture: string
  description: string
  info: {
    type: string
    dimensions: string
  }
  date: Date
  size: string
  progress: {
    percent: number
    colorClass: VariantColor
  }
  label?: {
    colorClass: VariantColor
    text: string
  }
}

// Static table data
const tableStyles: TableStyle[] = [
  {
    id: 1,
    picture: table1,
    description: 'Palo Alto',
    info: { type: 'JPEG', dimensions: '200x150' },
    date: new Date('September 14, 2018'),
    size: '45.6 KB',
    progress: { percent: 29, colorClass: 'success' },
  },
  {
    id: 2,
    picture: table2,
    description: 'The Sky',
    info: { type: 'PSD', dimensions: '2400x1455' },
    date: new Date('November 14, 2018'),
    size: '15.3 MB',
    progress: { percent: 33, colorClass: 'warning' },
  },
  {
    id: 3,
    picture: table3,
    description: 'Down the road',
    label: { colorClass: 'danger', text: 'INFO!' },
    info: { type: 'JPEG', dimensions: '200x150' },
    date: new Date('September 14, 2018'),
    size: '49.0 KB',
    progress: { percent: 38, colorClass: 'dark' },
  },
  {
    id: 4,
    picture: table4,
    description: 'The Edge',
    info: { type: 'PNG', dimensions: '210x160' },
    date: new Date('September 15, 2018'),
    size: '69.1 KB',
    progress: { percent: 17, colorClass: 'danger' },
  },
  {
    id: 5,
    picture: table5,
    description: 'Fortress',
    info: { type: 'JPEG', dimensions: '1452x1320' },
    date: new Date('October 1, 2018'),
    size: '2.3 MB',
    progress: { percent: 41, colorClass: 'primary' },
  },
]

// Reactive checkbox arrays
const checkboxes1 = ref([false, false, false, false])
const checkboxes2 = ref([false, false, false, false, false, false])
const checkboxes3 = ref([false, false, false, false, false, false])

// Checkbox map for dynamic access
const checkboxMap: Record<string, typeof checkboxes1> = {
  checkboxes1,
  checkboxes2,
  checkboxes3,
}

function parseDate(date: Date): string {
  const dateSet = date.toDateString().split(' ')
  return `${date.toLocaleString('en-us', { month: 'long' })} ${dateSet[2]}, ${dateSet[3]}`
}

function checkAll(ev: Event, checkbox: string) {
  const target = ev.target as HTMLInputElement
  const checkboxRef = checkboxMap[checkbox]
  if (checkboxRef) {
    checkboxRef.value = new Array(checkboxRef.value.length).fill(target.checked)
  }
}

function changeCheck(ev: Event, checkbox: string, id: number) {
  const target = ev.target as HTMLInputElement
  const checkboxRef = checkboxMap[checkbox]
  if (checkboxRef) {
    checkboxRef.value[id] = target.checked
    if (!target.checked) {
      checkboxRef.value[0] = false
    }
  }
}

function getRandomData(): Array<{ data: number[] }> {
  const result: number[] = []
  for (let i = 0; i <= 8; i += 1) {
    result.push(Math.floor(Math.random() * 20) + 1)
  }
  return [{ data: result }]
}

function getRandomColor(): { colors: string[] } {
  const colors = ['#547fff', '#9964e3', '#f55d5d', '#ffc247', '#3abf94']
  return { colors: [colors[Math.floor(Math.random() * colors.length)]] }
}
</script>

<style src="./Basic.scss" lang="scss" scoped />
