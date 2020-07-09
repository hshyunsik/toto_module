<template>
  <v-container class="fill-height">
    <v-row class="text-center" align="center">
      <v-col class="mb-4" cols="1"> </v-col>
      <v-col class="mb-4" cols="11" align="left">
        <div class="title">Inloggegevens</div>
        <span>* = verplicht</span>
      </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-divider />
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="12"> </v-col>
    </v-row>
    <v-row class="text-center" align="center">
      <v-col cols="6">
        <v-text-field
          label="Email*"
          placeholder="example@mail.com"
          ty
          outlined
          :rules="[rules.required, rules.email]"
          dense
          v-model="emailAddress"
        ></v-text-field>
        <v-text-field
          label="Wachtwoord*"
          placeholder="*********"
          type="password"
          outlined
          :rules="[rules.required]"
          dense
          v-model="password"
        ></v-text-field>
        <v-checkbox
          v-model="checkPromotionalMail"
          :label="`Stuur mij per e-mail promoties`"
        ></v-checkbox>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LoginDetails',
  data: () => ({
    rules: {
      required: (value: string) => !!value || 'Required.',
      email: (value: string) => /.+@.+\..+/.test(value) || 'Invalid Email.'
    }
  }),
  computed: {
    checkPromotionalMail: {
      get(): boolean {
        return this.$store.state.registrant.personalDetails.promotionalMail;
      },
      set(checkedPromotionalMail: boolean) {
        this.$store.dispatch('setPromotionalMail', checkedPromotionalMail);
      }
    },
    emailAddress: {
      get(): boolean {
        return this.$store.state.registrant.loginDetails.emailAddress;
      },
      set(emailAddress: string) {
        this.$store.dispatch('setEmail', emailAddress);
      }
    },
    password: {
      get(): boolean {
        return this.$store.state.registrant.loginDetails.password;
      },
      set(password: boolean) {
        this.$store.dispatch('setPassword', password);
      }
    }
  },
  mounted() {
    this.$store.dispatch('setRegistrationStep', 1);
  }
});
</script>

<style lang="scss"></style>
