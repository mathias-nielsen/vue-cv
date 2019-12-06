<template>
  <v-container>
    <v-row text-center wrap>
      <v-flex xs12>
        <v-img :src="profilePicture" class="my-3" contain height="200"></v-img>
      </v-flex>
    </v-row>
  </v-container>
</template>

<script>
import { PROFILE_URL } from "../data/constants";
import { titleMixins } from "../shared/standard-mixins";


export default {
  name: 'about-me',

  mixins: [titleMixins],

  data() {
    return {
      title: "Om mig",
      profilePicture: PROFILE_URL
    };
  }
};
</script>
