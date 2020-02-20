<template>
  <v-app>
    <top-toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <bottom-nav />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import TopToolbar from './components/TopToolbar.vue';
import BottomNav from './components/BottomNav.vue';

export default Vue.extend({
  name: 'App',

  components: {
    TopToolbar, BottomNav,
  },

  data: () => ({
    //
  }),
});
</script>
