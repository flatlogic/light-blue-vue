<template>
  <div class="col-lg-3 col-xl-2 col-xs-12">
    <div class="d-grid gap-2">
      <b-button
        variant="danger"
        @click="compose(true)"
      >
        Compose
      </b-button>
    </div>
    <div class="mb mt">
      <b-button
        v-for="button in mainButtons"
        :class="{ button: true, buttonActive: button.id === activeButtonId }"
        :key="button.id"
        @click="handleButtonClick(button.id, button.filter)"
        variant="transparent"
      >
        {{button.title}}
        <b-badge v-if="button.notifications" :variant="button.label || 'default'"  :class="`bg-${button.label || 'default'}`" pill>
          {{button.notifications}}
        </b-badge>
      </b-button>
    </div>
    <div>
      <h6>QUICK VIEW</h6>
        <b-button
          v-for="button in quickViewButtons"
          class="button"
          :key="button.id"
          variant="transparent"
        >
          {{button.title}}
          <i :class="`fa fa-circle text-${button.colour}`" />
        </b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Filters',
  props: ['filter', 'openMessage', 'compose'],
  data() {
    return {
      activeButtonId: 0,
      mainButtons: [
        {
          id: 0, title: 'Inbox', notifications: 2, label: 'primary', filter: null,
        },
        { id: 1, title: 'Starred', filter: 'starred' },
        { id: 2, title: 'Sent Mail', filter: 'sent' },
        {
          id: 3, title: 'Draft', notifications: 3, label: 'danger', filter: 'draft',
        },
        { id: 4, title: 'Trash', filter: 'trash' },
      ],
      quickViewButtons: [
        { id: 0, title: 'Work', colour: 'danger' },
        { id: 1, title: 'Private', colour: 'primary' },
        { id: 2, title: 'Saved', colour: 'primary' },
      ],
    };
  },
  methods: {
    handleButtonClick(id, filterCond) {
      const { filter, openMessage } = this;

      Vue.set(this, 'activeButtonId', id);

      openMessage(null);
      filter(filterCond);
    },
  },
};
</script>

<style src="./Filters.scss" lang="scss" scoped />
