<template>
  <v-container class="background--home">
    <v-app-bar color="#007a33"
      ><v-spacer />
      <div v-for="(gameType, index) in gameTypes" :key="index">
        <v-btn color="white" text>
          <span class="mr-2 font-weight-light" id="menuItemText">{{
            gameType
          }}</span>
        </v-btn>
      </div>

      <v-spacer />
    </v-app-bar>
    <v-row class="text-center ">
      <v-list> </v-list>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Games',
  components: {
    // HelloWorld
  },
  computed: {
    gameTypes(): string[] {
      return this.$store.state.gameTypes;
    }
  }
});
</script>

<style scoped lang="scss">
.background--home {
  background-image: url('../assets/GamePage2.png');
  background-size: 105%;
  background-position-x: right;
  height: 500%;
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
.container {
  padding: 0px;
}
</style>
