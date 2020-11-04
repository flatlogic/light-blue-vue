<template>
  <div class="bag" >
    <b-button class="add mr-2" variant="success">
      add to bag
      <img src="../../../../../assets/bag.svg" alt="bag" />
    </b-button>
    <b-button class="star" variant="outline-dark" @click="toggle">
      <i v-if="favourite" class="la la-star"></i>
      <i v-else class="la la-star-o"></i>
    </b-button>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'Bag',
  data() {
    return {
      favourite: false,
    };
  },
  methods: {
    toggle() {
      Vue.set(this, 'favourite', !this.favourite);
    },
  },
};
</script>

<style src="./Bag.scss" lang="scss" scoped />
