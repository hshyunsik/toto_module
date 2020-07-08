<template>
  <v-app>
    <upper-bar :navigationItems="menuItems" id="UpperBar"></upper-bar>
    <v-main class="background">
      <transition name="fade" mode="out-in">
        <router-view class="container--overwrite" />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UpperBar from '@/components/UpperBar/index.vue';
// import HelloWorld from './components/HelloWorld.vue';
import { MenuItem } from '@/store/types';

export default Vue.extend({
  name: 'App',

  components: {
    // HelloWorld
    UpperBar
  },

  data: () => ({
    //
  }),
  computed: {
    menuItems(): MenuItem[] {
      return this.$store.state.menuItems;
    }
  }
});
</script>

<style lang="scss">
.text--white {
  color: white;
}
.text--boldweight {
  font-weight: bold;
}
.text--lightweight {
  font-weight: 400;
}
.background {
  background-color: #007a33;
}
.lightgreen {
  background-color: #6eaa7b !important;
}
.darkgreen {
  background-color: #009739 !important;
}
.orange {
  background-color: #ff6900 !important;
}
.darkgreen:nth-last-of-type(2) {
  margin-right: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.container--overwrite {
  max-width: 100% !important;
}
</style>
