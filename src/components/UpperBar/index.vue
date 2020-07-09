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
    <div v-if="!loginStatus">
      <v-btn
        target="_blank"
        class="darkgreen margin--right"
        id="register"
        @click="register()"
      >
        <span class="mr-2 font-weight-bold">Registreren</span>
      </v-btn>
      <v-btn target="_blank" id="login" class="orange" @click="login()">
        <span class="mr-2 font-weight-bold">Inloggen</span>
      </v-btn>
    </div>
    <div v-else>
      <v-btn target="_blank" class="darkgreen margin--right">
        <span class="mr-2 font-weight-bold">Account</span>
      </v-btn>
      <v-btn target="_blank" class="orange" id="logout" @click="logout()">
        <span class="mr-2 font-weight-bold">Uitloggen</span>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import { MenuItem } from '@/store/types.ts';

export default Vue.extend({
  name: 'UpperBar',
  props: {
    navigationItems: {
      type: Array as () => MenuItem[]
    },
    loginStatus: {
      type: Boolean
    }
  },
  methods: {
    routeTo(path: string) {
      if (this.$route.path === path) {
        return;
      }
      this.$router.push(path);
    },
    routeToSection(basePath: string, sectionId?: string) {
      if (!sectionId) {
        this.routeTo(basePath);
      } else {
        const path = `${basePath}#${sectionId}`;
        this.$router.push({ path: path });
      }
    },
    login() {
      this.$emit('login');
    },
    logout() {
      this.$emit('logout');
    },
    register() {
      this.$emit('register');
    }
  }
});
</script>

<style lang="scss" scoped></style>
