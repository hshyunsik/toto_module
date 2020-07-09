<template>
  <v-card>
    <v-card-title class="headline">Registreren</v-card-title>
    <!-- Registreren binnen de witte vakken -->
    <v-stepper :value="registrationStep">
      <v-stepper-header>
        <v-stepper-step :complete="registrationStep > 1" step="1"
          >Inloggen</v-stepper-step
        >
        <!-- <v-divider></v-divider> -->
        <v-stepper-step :complete="registrationStep > 2" step="2"
          >Jouw gegevens</v-stepper-step
        >
        <!-- <v-divider></v-divider> -->
        <v-stepper-step step="3">Overzicht</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <v-form ref="form" v-model="valid" lazy-validation>
      <router-view />
    </v-form>
    <v-divider></v-divider>
    <v-card-actions
      ><v-btn text @click="closeDialog()">Sluit</v-btn><v-spacer />
      <span>Stap {{ registrationStep }} van 3</span>
      <v-spacer />
      <v-btn color="#ff6900" dark @click="previousPage()">Vorige</v-btn
      ><v-btn color="#007a33" dark @click="nextPage()"
        >Volgende</v-btn
      ></v-card-actions
    >
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Register',
  data: () => ({
    valid: true
  }),
  computed: {
    registrationStep(): 1 | 2 | 3 {
      return this.$store.state.registrationStep;
    }
  },
  methods: {
    validate(): boolean {
      return (this.$refs.form as Vue & { validate: () => boolean }).validate();
    },
    async routeTo(routePath: string) {
      const valid = await this.validate();
      console.log(valid);
      if (!valid) {
        return;
      }
      if (this.$route.path === routePath) {
        return;
      }
      this.$router.push({ path: routePath });
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
      switch (this.$route.path) {
        case '/register':
          this.routeTo('/register/gender');
          break;
        case '/register/gender':
          this.routeTo('/register/overview');
          break;
        // case '/register/personal':
        //   this.routeTo('/register/address');
        //   break;
        // case '/register/address':
        //   this.routeTo('/register/phone');
        //   break;
        // case '/register/phone':
        //   this.routeTo('/register/bank');
        //   break;
        // case '/register/bank':
        //   this.routeTo('/register/overview');
        //   break;
        case '/register/overview':
          this.$store.dispatch('setDialogStatus', false);
          this.routeTo('/games');
          break;
        default:
      }
    },
    previousPage() {
      if (this.$route.path === '/register') {
        this.$store.dispatch('setDialogStatus', false);
      }
      this.$router.go(-1);
    }
  }
});
</script>

<style lang="scss">
.v-application .primary.v-stepper__step__step {
  background-color: #ff6900 !important;
  border-color: #ff6900 !important;
}
</style>
