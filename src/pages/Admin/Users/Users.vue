<template>
  <div class="users-page">
    <h1 class="page-title">
      User <span class="fw-semi-bold">Management</span>
    </h1>
    <Widget
      title="<h5>All <span class='fw-semi-bold'>Users</span></h5>"
      collapse
      close
      custom-header
    >
      <div class="table-responsive">
        <table class="table table-striped users-table">
          <thead>
            <tr>
              <th>AVATAR</th>
              <th
                class="sortable"
                @click="toggleSort('firstName')"
              >
                FIRST NAME <i :class="getSortIcon('firstName')" />
              </th>
              <th
                class="sortable"
                @click="toggleSort('lastName')"
              >
                LAST NAME <i :class="getSortIcon('lastName')" />
              </th>
              <th
                class="sortable"
                @click="toggleSort('phone')"
              >
                PHONE NUMBER <i :class="getSortIcon('phone')" />
              </th>
              <th
                class="sortable"
                @click="toggleSort('email')"
              >
                E-MAIL <i :class="getSortIcon('email')" />
              </th>
              <th
                class="sortable"
                @click="toggleSort('role')"
              >
                ROLE <i :class="getSortIcon('role')" />
              </th>
              <th
                class="sortable"
                @click="toggleSort('disabled')"
              >
                DISABLED <i :class="getSortIcon('disabled')" />
              </th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="user in sortedUsers"
              :key="user.id"
            >
              <td>
                <span
                  class="avatar-circle"
                  :style="{ backgroundColor: user.avatarColor }"
                >
                  {{ user.firstName.charAt(0).toUpperCase() }}
                </span>
              </td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.phone }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role }}</td>
              <td>{{ user.disabled ? 'Yes' : 'No' }}</td>
              <td>
                <BButton
                  size="sm"
                  variant="success"
                  class="me-1"
                >
                  View
                </BButton>
                <BButton
                  size="sm"
                  variant="info"
                  class="me-1"
                >
                  Edit
                </BButton>
                <BButton
                  size="sm"
                  variant="danger"
                >
                  Delete
                </BButton>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination -->
      <div class="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing 1 to {{ sortedUsers.length }} of {{ sortedUsers.length }} entries
        </div>
        <nav>
          <ul class="pagination mb-0">
            <li class="page-item disabled">
              <a
                class="page-link"
                href="#"
              >Previous</a>
            </li>
            <li class="page-item active">
              <a
                class="page-link"
                href="#"
              >1</a>
            </li>
            <li class="page-item disabled">
              <a
                class="page-link"
                href="#"
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
import Widget from '@/components/Widget/Widget.vue'

interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  role: string
  disabled: boolean
  avatarColor: string
}

type SortKey = keyof Omit<User, 'id' | 'avatarColor'>
type SortDirection = 'asc' | 'desc' | null

const avatarColors = ['#4285f4', '#ea4335', '#fbbc05', '#34a853', '#ff6d00', '#9c27b0']

const sortColumn = ref<SortKey | null>(null)
const sortDirection = ref<SortDirection>(null)

const users = ref<User[]>([
  { id: 1, firstName: 'zidanzacky14', lastName: '', phone: '', email: 'zidanzacky14@g...', role: 'user', disabled: false, avatarColor: avatarColors[0] },
  { id: 2, firstName: 'rostomatri', lastName: '', phone: '', email: 'rostomatri@gmai...', role: 'user', disabled: false, avatarColor: avatarColors[1] },
  { id: 3, firstName: 'visitor', lastName: '', phone: '', email: 'visitor@yopmail.c...', role: 'user', disabled: false, avatarColor: avatarColors[2] },
  { id: 4, firstName: 'diaguira', lastName: '', phone: '', email: 'diaguira@gmail.c...', role: 'user', disabled: false, avatarColor: avatarColors[3] },
  { id: 5, firstName: 'shyakafleury', lastName: '', phone: '', email: 'shyakafleury@g...', role: 'user', disabled: false, avatarColor: avatarColors[2] },
  { id: 6, firstName: 'fleurymanzi', lastName: '', phone: '', email: 'fleurymanzi@gm...', role: 'user', disabled: false, avatarColor: avatarColors[1] },
  { id: 7, firstName: 'fleuryshyaka', lastName: '', phone: '', email: 'fleuryshyaka@g...', role: 'user', disabled: false, avatarColor: avatarColors[3] },
  { id: 8, firstName: 'alainjoseph.rutaha', lastName: '', phone: '', email: 'alainjoseph.rutah...', role: 'user', disabled: false, avatarColor: avatarColors[2] },
])

const sortedUsers = computed(() => {
  if (!sortColumn.value || !sortDirection.value) {
    return users.value
  }

  const sorted = [...users.value].sort((a, b) => {
    const aVal = a[sortColumn.value!]
    const bVal = b[sortColumn.value!]

    if (typeof aVal === 'boolean') {
      return aVal === bVal ? 0 : aVal ? 1 : -1
    }

    const comparison = String(aVal).localeCompare(String(bVal))
    return sortDirection.value === 'asc' ? comparison : -comparison
  })

  return sorted
})

function toggleSort(column: SortKey) {
  if (sortColumn.value === column) {
    if (sortDirection.value === 'asc') {
      sortDirection.value = 'desc'
    } else if (sortDirection.value === 'desc') {
      sortDirection.value = null
      sortColumn.value = null
    } else {
      sortDirection.value = 'asc'
    }
  } else {
    sortColumn.value = column
    sortDirection.value = 'asc'
  }
}

function getSortIcon(column: SortKey): string {
  if (sortColumn.value !== column) {
    return 'fa fa-sort'
  }
  if (sortDirection.value === 'asc') {
    return 'fa fa-sort-up'
  }
  if (sortDirection.value === 'desc') {
    return 'fa fa-sort-down'
  }
  return 'fa fa-sort'
}
</script>

<style lang="scss" scoped>
@import '@/styles/app';

.users-page {
  .users-table {
    --bs-table-bg: transparent;
    --bs-table-color: #{$text-color};
    --bs-table-striped-bg: rgba(255, 255, 255, 0.03);
    --bs-table-striped-color: #{$text-color};
    --bs-table-hover-bg: rgba(255, 255, 255, 0.05);
    --bs-table-hover-color: #{$text-color};
    border-color: rgba(255, 255, 255, 0.1);

    th {
      text-transform: uppercase;
      font-size: 0.8rem;
      font-weight: 600;
      white-space: nowrap;
      color: $text-color;
      border-color: rgba(255, 255, 255, 0.1);

      &.sortable {
        cursor: pointer;
        user-select: none;

        &:hover {
          background-color: rgba(255, 255, 255, 0.05);
        }
      }

      .fa {
        margin-left: 5px;
        opacity: 0.5;
      }

      .fa-sort-up,
      .fa-sort-down {
        opacity: 1;
      }
    }

    td {
      vertical-align: middle;
      color: $text-color;
      border-color: rgba(255, 255, 255, 0.1);
      font-weight: 500;
    }
  }

  .avatar-circle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    color: #fff;
    font-weight: 600;
    font-size: 1rem;
  }
}
</style>
