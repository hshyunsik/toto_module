<template>
  <v-container class="fill-height">
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="4">
        <div class="title">Inloggegevens</div>
      </v-col>
      <v-col cols="8"> </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-divider />
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="2">
        * = verplicht
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="6">
        <v-text-field
          label="Email*"
          placeholder="example@mail.com"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="6"> </v-col>
      <v-col cols="6">
        <v-text-field
          label="Wachtwoord*"
          placeholder="*********"
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'BankDetails'
});
</script>

<style lang="scss"></style>
