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
      <v-col cols="6">
        <v-radio-group v-model="gender" label="Geslacht*">
          <v-radio
            v-for="n in genders"
            :key="n"
            :label="n"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="6"> </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GenderDetails',
  data: () => ({
    genders: ['Man', 'Vrouw', 'Overig']
  }),
  computed: {
    gender: {
      get(): boolean {
        return this.$store.state.registrant.personalDetails.gender;
      },
      set(gender: boolean) {
        this.$store.dispatch('setGender', gender);
      }
    }
  },
  mounted() {
    this.$store.dispatch('setRegistrationStep', 2);
  }
});
</script>

<style lang="scss"></style>
