<script setup lang="ts">
const emit = defineEmits<{
  search: [value: string]
  'choose-all': []
  'choose-none': []
  'choose-read': []
  'choose-unread': []
  'mark-read': []
  'mark-unread': []
  'delete-msg': []
}>()
</script>

<template>
  <div class="messageTableHeader">
    <div class="header-dropdowns">
      <BDropdown
        text="Select"
        size="sm"
        class="email-dropdown"
      >
        <BDropdownItemButton @click="emit('choose-all')">
          All
        </BDropdownItemButton>
        <BDropdownItemButton @click="emit('choose-none')">
          None
        </BDropdownItemButton>
        <BDropdownDivider />
        <BDropdownItemButton @click="emit('choose-read')">
          Read
        </BDropdownItemButton>
        <BDropdownItemButton @click="emit('choose-unread')">
          Unread
        </BDropdownItemButton>
      </BDropdown>
      <BDropdown
        text="Actions"
        size="sm"
        class="email-dropdown"
      >
        <BDropdownItemButton>Reply</BDropdownItemButton>
        <BDropdownItemButton>Forward</BDropdownItemButton>
        <BDropdownItemButton>Archive</BDropdownItemButton>
        <BDropdownDivider />
        <BDropdownItemButton @click="emit('mark-read')">
          Mark As Read
        </BDropdownItemButton>
        <BDropdownItemButton @click="emit('mark-unread')">
          Mark As Unread
        </BDropdownItemButton>
        <BDropdownDivider />
        <BDropdownItemButton @click="emit('delete-msg')">
          Delete
        </BDropdownItemButton>
      </BDropdown>
    </div>
    <BFormInput
      placeholder="Search Messages"
      size="sm"
      class="search-input"
      @input="(e: Event) => emit('search', (e.target as HTMLInputElement).value)"
    />
  </div>
</template>

<style src="./MessageTableHeader.scss" lang="scss" />
