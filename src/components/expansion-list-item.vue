<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <!-- class="pa-1" -->
      <v-row no-gutters>
        <!-- logo and company. -->
        <v-col cols="4">
          <v-row no-gutters>
            <div v-if="companyLogo">
              <v-img :src="companyLogo" contain max-width="40" />
            </div>
            <div v-else>
              <v-icon> mdi-alert-circle </v-icon>
            </div>
            <h3 class="mx-2 vertical-center">{{ proffExp.companyName }}</h3>
          </v-row>
        </v-col>

        <!-- periode  -->
        <v-col class="object-center">
          <v-row no-gutters>
            <v-col cols="1"><h4>Periode:</h4></v-col>
            <v-col> {{ proffExp.startDate }} - {{ proffExp.endDate }} </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>{{ proffExp.description }}</v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "ExpansionListItem",

  props: {
    proffExp: {
      type: Object,
      required: true,
      default: () => {}
    }
  },

  computed: {
    companyLogo() {
      let logo = undefined;
      try {
        logo = require(`../shared/pics/${this.proffExp.logoName}`);
      } catch (error) {
        console.log("Could not find logo");
      }
      return logo;
    }
  }
};
</script>

<style lang="scss" scoped></style>
