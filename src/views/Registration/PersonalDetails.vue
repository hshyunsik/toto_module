<template>
  <v-container class="fill-height">
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="1"> </v-col>
      <v-col class="mb-4" cols="11" align="left">
        <div class="title">Vul je gegevens aan</div>
        <div class="subheader">
          Je gegevens dienen overeen te komen met je ID en bankgegevens.
        </div>
        <div>* = verplicht</div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-divider />
    </v-row>
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="4" align="left">
        <div class="title">Persoonlijke gegevens</div>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="6">
        <v-text-field
          label="Voornaam*"
          placeholder="Bob"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Tussenvoegsel"
          placeholder="van"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Achternaam*"
          placeholder="Dijk"
          outlined
          dense
        ></v-text-field>
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              label="Geboortedatum*"
              placeholder="1990-01-01"
              append-icon="mdi-calendar-month"
              readonly
              outlined
              v-bind="attrs"
              v-on="on"
              dense
            ></v-text-field>
          </template>
          <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PersonalDetails',
  data: () => ({
    date: '',
    menu2: false
  })
});
</script>

<style lang="scss"></style>
