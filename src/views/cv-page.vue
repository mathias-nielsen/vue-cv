<template>
  <v-container fluid fill-height>
    <v-card class="page-card" width="100%" height="100%">
      <!-- cv header  -->
      <v-row no-gutters>
        <!-- info  -->
        <v-col cols="4">
          <h1>Mathias Nielsen</h1>
          <h3>Software Developer</h3>
          <p>B.Eng. Softwareteknologi</p>
        </v-col>

        <!-- blank space -->
        <v-col></v-col>

        <!-- picture -->
        <v-col cols="3">
          <v-card class="image-card">
            <v-img
              :src="profilePicture"
              class="ma-0"
              contain
              width="200"
              height="200"
              border="5"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <!-- cv header  -->

      <v-row no-gutters>
        <h1>Erhvervserfaring</h1>
      </v-row>
      <v-row no-gutters>
        <v-expansion-panels>
          <ExpansionListItem
            logoName="itminds.png"
            companyName="IT-Minds"
            startDate="01/05/2019"
            endDate="Nu"
          />
        </v-expansion-panels>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { titleMixins } from "../shared/standard-mixins";
import { PROFILE_URL } from "../data/constants";
import ExpansionListItem from "../components/expansion-list-item";

export default {
  name: "cv",

  mixins: [titleMixins],

  components: {
    ExpansionListItem,
  },

  data() {
    return {
      title: "CV",
      profilePicture: PROFILE_URL
    };
  }
};
</script>

<style lang="scss" scoped>
.page-card {
  margin: 50px !important;
  padding: 10px !important;
}

.image-card {
  height: 200px;
  width: 200px;
  margin-left: auto;
}
</style>
