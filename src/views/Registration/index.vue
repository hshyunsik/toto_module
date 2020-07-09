<template>
  <v-card>
    <v-card-title class="headline">Registreren</v-card-title>

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
  name: 'Registration',
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
      switch (this.$route.path) {
        case '/registration':
          this.$router.go(-1);
          break;
        case '/registration/gender':
          this.$router.go(-2);
          break;
        case '/registration/overview':
          this.$router.go(-3);
          break;
      }
    },
    nextPage() {
      switch (this.$route.path) {
        case '/registration':
          this.routeTo('/registration/gender');
          break;
        case '/registration/gender':
          this.routeTo('/registration/overview');
          break;
        case '/registration/overview':
          this.$store.dispatch('setLoginStatus', true);
          this.$store.dispatch('setDialogStatus', false);
          this.routeTo('/games');
          break;
        default:
      }
    },
    previousPage() {
      if (this.$route.path === '/registration') {
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
