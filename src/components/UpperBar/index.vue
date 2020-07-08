<template>
  <v-app-bar app color="white" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Toto Logo"
        class="shrink mr-2"
        contain
        src="https://portal-header-cdn.toto.nl/logos/logo-toto-navigation-portal.svg"
        transition="scale-transition"
        width="100"
      />
    </div>

    <div v-for="item in navigationItems" class="nav" :key="item.name" id="menu">
      <v-btn
        color="#007a33"
        @click="routeToSection(item.path, item.sectionId)"
        text
      >
        <span class="mr-2" id="menuItemText">{{ item.name }}</span>
      </v-btn>
    </div>
    <v-spacer></v-spacer>
    <v-btn target="_blank" class="darkgreen margin--right">
      <span class="mr-2 text--boldweight">Registreren</span>
    </v-btn>
    <v-btn target="_blank" class="orange">
      <span class="mr-2 text--boldweight">Inloggen</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { MenuItem } from '@/store/types.ts';

export default Vue.extend({
  name: 'UpperBar',
  components: {},
  data() {
    return {
      upperSlickMenu: true
    };
  },
  props: {
    navigationItems: {
      type: Array as () => MenuItem[]
    }
  },
  methods: {
    routeTo(path: string) {
      this.$router.push(path);
    },
    routeToSection(basePath: string, sectionId?: string) {
      if (!sectionId) {
        this.routeTo(basePath);
      } else {
        const path = `${basePath}#${sectionId}`;
        this.$router.push({ path: path });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@media screen and (max-width: 767px) {
  #menu {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  #right_menu {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  // #menuItemText {
  //   font-size: 10px;
  // }
  #title {
    font-size: x-large;
  }
}
@media screen and (min-width: 1024px) {
  #title {
    font-size: xx-large;
  }
}
#title {
  font-weight: 750;
  text-transform: uppercase;
}
// header > div {
//   justify-content: space-between !important;
//   background-color: red;
// } https://www.w3schools.com/css/css_rwd_mediaqueries.asp
</style>
