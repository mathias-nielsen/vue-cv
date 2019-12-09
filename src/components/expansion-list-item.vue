<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <!-- class="pa-1" -->
      <v-row no-gutters>
        <!-- logo and company. -->
        <v-col cols="4">
          <v-row no-gutters>
            <v-img :src="companyLogo" contain max-width="30"/>
            <h3 class="mx-2 vertical-center">{{ companyName }}</h3>
          </v-row>
        </v-col>

        <!-- periode  -->
        <v-col class="object-center">
          <v-row no-gutters>
            <v-col cols="1"><h4>Periode:</h4></v-col>
            <v-col> {{ startDate }} - {{ endDate }} </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-expansion-panel-header>
    <v-expansion-panel-content>asd</v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: "ExpansionListItem",

  props: {
    companyName: {
      type: String,
      default: () => "itminds.png"
    },
    logoName: {
      type: String,
      default: () => ""
    },
    startDate: {
      type: String,
      default: () => ""
    },
    endDate: {
      type: String,
      default: () => ""
    }
  },

  computed: {
      companyLogo() {
          return require(`../shared/pics/${this.logoName}`);
      }
  },
};
</script>

<style lang="scss" scoped></style>
