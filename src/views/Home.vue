<template class="container">
  <v-container class="fill-height background--home">
    <v-row class="text-center onlyRow" justify="center" align="center">
      <v-col class="mb-12" cols="12"> </v-col>
      <v-col class="mb-4" cols="12">
        <h1 class="display-2 font-weight-bold mb-3 text--white">
          Welcome bij Toto
        </h1></v-col
      >
      <v-col cols="3"> </v-col>
      <v-col cols="6">
        <p class="subheading font-weight-regular text--white">
          Alle nieuwe spelers krijgen tot <b>€1000 gratis speelgeld</b> en
          <b>100 gratis spins</b>.
          <br />
          Maak een <b>gratis account</b> aan om te beginnen!
        </p>
        <p class="subheading font-weight-regular text--white"></p>
      </v-col>
      <v-col cols="3"> </v-col>

      <v-col class="mb-5" cols="12">
        <v-btn
          target="_blank"
          class="darkgreen margin--right"
          @click="register()"
        >
          <span class="mr-2 text--white">Registreren</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  methods: {
    routeTo(routePath: string) {
      if (this.$route.path === routePath) {
        return;
      }
      this.$router.push({ path: routePath });
    },
    register() {
      this.$store.dispatch('setDialogStatus', true);
      this.routeTo('register');
    }
  }
});
</script>

<style scoped lang="scss">
.onlyRow {
  // width: 400px;
  background-color: #6eaa7b;
  border-radius: 50%;
}
.background--home {
  background-image: url('../assets/Kaart.png');
  background-size: 105%;
  background-position: right;
}
@media (min-width: 960px) {
  .row {
    max-width: 900px !important;
    margin: auto;
  }
}
@media (min-width: 1264px) {
  .row {
    max-width: 1185px !important;
    margin: auto;
  }
}
</style>
