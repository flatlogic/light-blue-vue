<template>
<div :class="{root: true}">
  <Helper />
  <Header />
  <Sidebar />
  <div ref="content" class="content animated fadeInUp">
    <transition name="router-animation">
      <router-view />
    </transition>
  </div>
  <footer class="contentFooter">
    Light Blue Vue Admin Dashboard Template - Made by <a href="https://flatlogic.com" target="_blank">Flatlogic</a>
  </footer>
</div>
</template>

<script>

import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('layout');

import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import Helper from '@/components/Helper/Helper';

import './Layout.scss';

export default {
  name: 'Layout',
  components: { Sidebar, Header, Helper },
  methods: {
    ...mapActions([
      'layout'/'switchSidebar', 'changeSidebarActive',
    ]),
    setTheme(){
      let theme = localStorage.getItem("theme")
      document.querySelector('body').setAttribute("class", `light-blue ${'theme--' + (theme || 'dark')}`)
    }
  },
  computed: {
    ...mapState(['layout']),
  },
  created() {
    this.setTheme()
  },
  mounted() {
    this.$refs.content.addEventListener('animationend', () => {
      this.$refs.content.classList.remove('animated');
      this.$refs.content.classList.remove('fadeInUp');
    });
  }
};
</script>

<style src="./Layout.scss" lang="scss" />
