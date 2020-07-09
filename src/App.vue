<template>
  <v-app>
    <upper-bar
      :navigationItems="menuItems"
      :loginStatus="loginStatus"
      @login="setLoginStatus(true)"
      @logout="setLoginStatus(false)"
      @register="setDialog(true)"
      id="UpperBar"
    ></upper-bar>
    <v-main class="darkergreen">
      <v-dialog v-model="dialog" persistent max-width="800">
        <router-view name="modal" class="container--overwrite" />
      </v-dialog>
      <transition name="fade" mode="out-in">
        <router-view class="container--overwrite" />
      </transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import UpperBar from '@/components/UpperBar/index.vue';
import { MenuItem } from '@/store/types';

export default Vue.extend({
  name: 'App',
  components: {
    UpperBar
  },
  computed: {
    menuItems(): MenuItem[] {
      return this.$store.state.menuItems;
    },
    loginStatus(): boolean {
      return this.$store.state.loginStatus;
    },
    dialog: {
      get(): boolean {
        return this.$store.state.dialogStatus;
      },
      set(dialogStatus: boolean) {
        this.$store.dispatch('setDialogStatus', dialogStatus);
        this.routeTo('registration');
      }
    }
  },
  methods: {
    routeTo(routePath: string) {
      if (this.$route.path === routePath) {
        return;
      }
      this.$router.push({ path: routePath });
    },
    setLoginStatus(loggedIn: boolean): void {
      this.$store.dispatch('setLoginStatus', loggedIn);
    },
    setDialog(dialogStatus: boolean) {
      this.$store.dispatch('setDialogStatus', dialogStatus);
      this.routeTo('registration');
    }
  }
});
</script>

<style lang="scss">
.darkergreen {
  background-color: #007a33 !important;
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
