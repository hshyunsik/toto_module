<template>
  <v-container class="fill-height">
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <div class="font-weight-bold">Controleer je gegevens</div>
        <div>
          We zijn er bijna. Check nog even of je alles goed hebt ingevuld.
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <div>E-mail</div>
        <div class="font-weight-bold">
          {{ emailAddress }}
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <div>Geslacht</div>
        <div class="font-weight-bold">
          {{ gender }}
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-divider />
      </v-col>
    </v-row>
    <!-- <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <div>Naam</div>
        <div class="font-weight-bold">
          blabla
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-divider />
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <div>Geboortedatum</div>
        <div class="font-weight-bold">
          blabla
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-divider />
      </v-col>
    </v-row> -->
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="12" align="left">
        <v-checkbox
          v-model="agreement"
          :label="
            `Ik ga akkoord met het deelnemersreglement en het privacybeleid en verklaar dat ik dit formulier naar waarheid heb ingevuld`
          "
        ></v-checkbox>
      </v-col>
      <v-divider />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DetailsOverview',
  data: () => ({
    agreement: ''
  }),
  computed: {
    emailAddress() {
      return this.$store.state.registrant.loginDetails.emailAddress;
    },
    gender() {
      return this.$store.state.registrant.personalDetails.gender;
    }
  },
  mounted() {
    this.$store.dispatch('setRegistrationStep', 3);
  }
});
</script>

<style lang="scss"></style>
