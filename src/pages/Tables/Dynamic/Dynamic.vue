<template>
  <div class="dynamic-tables">
    <h2 class="page-title">
      Tables - <span class="fw-semi-bold">Dynamic</span>
    </h2>

    <!-- First Table - Datatable -->
    <Widget
      title="<h4>The <span class='fw-semi-bold'>Vue</span> Way</h4>"
      collapse
      close
      custom-header
    >
      <p>
        Fully customizable Table. Built with <a
          href="https://tanstack.com/table/v8"
          target="_blank"
          rel="noopener noreferrer"
        >TanStack Table</a>
      </p>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th
                v-for="header in datatableTable.getHeaderGroups()[0].headers"
                :key="header.id"
                :style="{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                {{ header.column.columnDef.header }}
                <span v-if="header.column.getIsSorted() === 'asc'">
                  <i class="fa fa-chevron-up text-muted" />
                </span>
                <span v-else-if="header.column.getIsSorted() === 'desc'">
                  <i class="fa fa-chevron-down text-muted" />
                </span>
                <span v-else-if="header.column.getCanSort()">
                  <i class="fa fa-sort text-muted" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in datatableTable.getRowModel().rows"
              :key="row.id"
            >
              <td>{{ row.original.id }}</td>
              <td>{{ row.original.name }}</td>
              <td>
                <small>Type: <span class="fw-semi-bold">{{ row.original.info.type }}</span></small>
                <br />
                <small>Dimensions: <span class="fw-semi-bold">{{ row.original.info.dimensions }}</span></small>
              </td>
              <td><a href="#">{{ row.original.description }}</a></td>
              <td>
                <BProgress
                  :variant="(row.original.status.type || 'primary') as any"
                  :value="Number(row.original.status.progress)"
                  :max="100"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination for first table -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {{ datatableTable.getState().pagination.pageIndex * datatableTable.getState().pagination.pageSize + 1 }}
          to {{ Math.min((datatableTable.getState().pagination.pageIndex + 1) * datatableTable.getState().pagination.pageSize, datatableData.length) }}
          of {{ datatableData.length }} entries
        </div>
        <nav>
          <ul class="pagination mb-0">
            <li
              class="page-item"
              :class="{ disabled: !datatableTable.getCanPreviousPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.previousPage()"
              >Previous</a>
            </li>
            <li
              v-for="page in datatableTable.getPageCount()"
              :key="page"
              class="page-item"
              :class="{ active: datatableTable.getState().pagination.pageIndex === page - 1 }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.setPageIndex(page - 1)"
              >{{ page }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: !datatableTable.getCanNextPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="datatableTable.nextPage()"
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </Widget>

    <!-- Second Table - Employee Table -->
    <Widget
      title="<h4>Vue <span class='fw-semi-bold'>Tables</span></h4>"
      collapse
      close
      custom-header
    >
      <p>
        Another table built with <a
          href="https://tanstack.com/table/v8"
          target="_blank"
          rel="noopener noreferrer"
        >TanStack Table</a>
      </p>

      <!-- Filter inputs -->
      <div class="row mb-3">
        <div class="col-md-2">
          <input
            v-model="filters.name"
            class="form-control form-control-sm"
            placeholder="Filter name"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.position"
            class="form-control form-control-sm"
            placeholder="Filter position"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.office"
            class="form-control form-control-sm"
            placeholder="Filter office"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.ext"
            class="form-control form-control-sm"
            placeholder="Filter ext"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.startDate"
            class="form-control form-control-sm"
            placeholder="Filter start date"
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="filters.salary"
            class="form-control form-control-sm"
            placeholder="Filter salary"
          />
        </div>
      </div>

      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th
                v-for="header in employeeTable.getHeaderGroups()[0].headers"
                :key="header.id"
                :style="{ cursor: header.column.getCanSort() ? 'pointer' : 'default' }"
                @click="header.column.getToggleSortingHandler()?.($event)"
              >
                {{ header.column.columnDef.header }}
                <span v-if="header.column.getIsSorted() === 'asc'">
                  <i class="fa fa-chevron-up text-muted" />
                </span>
                <span v-else-if="header.column.getIsSorted() === 'desc'">
                  <i class="fa fa-chevron-down text-muted" />
                </span>
                <span v-else-if="header.column.getCanSort()">
                  <i class="fa fa-sort text-muted" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in employeeTable.getRowModel().rows"
              :key="row.id"
            >
              <td
                v-for="cell in row.getVisibleCells()"
                :key="cell.id"
              >
                {{ cell.getValue() }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination for second table -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {{ employeeTable.getState().pagination.pageIndex * employeeTable.getState().pagination.pageSize + 1 }}
          to {{ Math.min((employeeTable.getState().pagination.pageIndex + 1) * employeeTable.getState().pagination.pageSize, filteredEmployeeData.length) }}
          of {{ filteredEmployeeData.length }} entries
        </div>
        <nav>
          <ul class="pagination mb-0">
            <li
              class="page-item"
              :class="{ disabled: !employeeTable.getCanPreviousPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="employeeTable.previousPage()"
              >Previous</a>
            </li>
            <li
              v-for="page in Math.min(employeeTable.getPageCount(), 10)"
              :key="page"
              class="page-item"
              :class="{ active: employeeTable.getState().pagination.pageIndex === page - 1 }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="employeeTable.setPageIndex(page - 1)"
              >{{ page }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: !employeeTable.getCanNextPage() }"
            >
              <a
                class="page-link"
                href="#"
                @click.prevent="employeeTable.nextPage()"
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </Widget>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  useVueTable,
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type SortingState,
} from '@tanstack/vue-table'
import Widget from '@/components/Widget/Widget.vue'
import { vueTableData, vueDatatableData } from './data'

interface DatatableRow {
  id: string
  name: string
  info: {
    type: string
    dimensions: string
  }
  description: string
  date: string
  status: {
    progress: string
    type?: string
  }
}

interface EmployeeRow {
  name: string
  position: string
  office: string
  ext: string
  startDate: string
  salary: number
}

const datatableData = vueDatatableData() as DatatableRow[]
const employeeData = vueTableData() as EmployeeRow[]

const filters = ref({
  name: '',
  position: '',
  office: '',
  ext: '',
  startDate: '',
  salary: '',
})

const filteredEmployeeData = computed(() => {
  return employeeData.filter(row => {
    const matchName = row.name.toLowerCase().includes(filters.value.name.toLowerCase())
    const matchPosition = row.position.toLowerCase().includes(filters.value.position.toLowerCase())
    const matchOffice = row.office.toLowerCase().includes(filters.value.office.toLowerCase())
    const matchExt = row.ext.includes(filters.value.ext)
    const matchStartDate = row.startDate.includes(filters.value.startDate)
    const matchSalary = filters.value.salary === '' || row.salary.toString().includes(filters.value.salary)
    return matchName && matchPosition && matchOffice && matchExt && matchStartDate && matchSalary
  })
})

const datatableColumnHelper = createColumnHelper<DatatableRow>()
const employeeColumnHelper = createColumnHelper<EmployeeRow>()

const datatableSorting = ref<SortingState>([])
const employeeSorting = ref<SortingState>([])

const datatableColumns = [
  datatableColumnHelper.accessor('id', { header: 'ID' }),
  datatableColumnHelper.accessor('name', { header: 'Name' }),
  datatableColumnHelper.accessor(row => row.info, { id: 'info', header: 'Info' }),
  datatableColumnHelper.accessor('description', { header: 'Description' }),
  datatableColumnHelper.accessor(row => row.status, { id: 'status', header: 'Status' }),
]

const employeeColumns = [
  employeeColumnHelper.accessor('name', { header: 'Name' }),
  employeeColumnHelper.accessor('position', { header: 'Position' }),
  employeeColumnHelper.accessor('office', { header: 'Office' }),
  employeeColumnHelper.accessor('ext', { header: 'Ext.' }),
  employeeColumnHelper.accessor('startDate', { header: 'Start Date' }),
  employeeColumnHelper.accessor('salary', {
    header: 'Salary',
    cell: info => `$${info.getValue().toFixed(2)}`,
  }),
]

const datatableTable = useVueTable({
  data: datatableData,
  columns: datatableColumns,
  state: {
    get sorting() {
      return datatableSorting.value
    },
  },
  onSortingChange: updater => {
    datatableSorting.value = typeof updater === 'function' ? updater(datatableSorting.value) : updater
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: { pageSize: 10 },
  },
})

const employeeTable = useVueTable({
  get data() {
    return filteredEmployeeData.value
  },
  columns: employeeColumns,
  state: {
    get sorting() {
      return employeeSorting.value
    },
  },
  onSortingChange: updater => {
    employeeSorting.value = typeof updater === 'function' ? updater(employeeSorting.value) : updater
  },
  getCoreRowModel: getCoreRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  initialState: {
    pagination: { pageSize: 10 },
  },
})
</script>

<style src="./Dynamic.scss" lang="scss" scoped />
