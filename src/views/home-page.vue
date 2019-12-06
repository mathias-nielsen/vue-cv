<template>
  <v-container fluid fill-height>
    <!-- centers items -->
    <v-row no-gutters>
      <v-col align="center" justify="center">
        <!-- picture -->
        <v-row>
          <v-col>
            <v-img
              :src="profilePicture"
              class="my-5"
              contain
              height="200"
            ></v-img>
          </v-col>
        </v-row>

        <!-- Headline -->
        <v-row>
          <v-col>
            <h1 class="display-2 font-weight-bold mb-3">
              Velkommen
            </h1>
            <p
            style="width:70%"
            class="subheading font-weight-regular">
              Dette projekt startede ud som mit første Vue.js projekt, og har nu
              udviklet sig til min egen hjemmeside hvor jeg tester workflowet i
              at have og udvikle en webapp, fra udvikling til produktion.
            </p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { PROFILE_URL } from "../data/constants";
import { titleMixins } from "../shared/standard-mixins";

export default {
  name: "HomePage",

  mixins: [titleMixins],

  data() {
    return {
      title: "Hjem",
      profilePicture: PROFILE_URL
    };
  }
};
</script>
