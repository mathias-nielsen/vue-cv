<template>
  <v-container>

  </v-container>
</template>

<script>
import { titleMixins } from "../shared/standard-mixins";

export default {
  name: "cv",

  mixins: [titleMixins],

  data() {
    return {
      title: "CV"
    };
  }
};
</script>
