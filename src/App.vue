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
    <v-main class="background">
      <v-dialog v-model="dialog" persistent max-width="800">
        <v-card>
          <v-card-text>
            <v-container class="fill-height">
              <v-row
                class="text-center onlyRow"
                justify="center"
                align="center"
              >
                <v-col class="mb-12" cols="5">
                  <v-list shaped>
                    <h1>Create an Account</h1>
                    <br />
                    <br />
                    <v-list-item-group color="primary">
                      <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-icon>
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="item.text"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
                <v-col class="mb-4" cols="7">
                  <router-view name="modal" class="container--overwrite" />
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions
            ><v-btn color="red darken-1" text @click="closeDialog()"
              >Close</v-btn
            ><v-spacer /><v-btn color="green darken-1" text @click="nextPage()"
              >Next</v-btn
            ></v-card-actions
          >
        </v-card>
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

  data: () => ({
    items: [
      { text: 'Start with email', icon: 'mdi-mail' },
      { text: 'Set logins', icon: 'mdi-account' },
      { text: 'Get your bonus', icon: 'mdi-cash' }
    ]
  }),
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
        this.routeTo('register');
      }
    }
  },
  methods: {
    routeTo(routePath: string) {
      this.$router.push({ path: routePath });
    },
    setLoginStatus(loggedIn: boolean): void {
      this.$store.dispatch('setLoginStatus', loggedIn);
    },
    setDialog(dialogStatus: boolean) {
      this.$store.dispatch('setDialogStatus', dialogStatus);
      this.routeTo('register');
    },
    closeDialog() {
      this.$store.dispatch('setDialogStatus', false);
      if (this.$route.path === '/register') {
        this.$router.go(-1);
      } else {
        this.$router.go(-2);
      }
    },
    nextPage() {
      if (this.$route.path === '/register') {
        this.routeTo('/register/phone');
      } else {
        this.$store.dispatch('setDialogStatus', false);
        this.routeTo('/games');
      }
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
