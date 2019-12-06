<template>
  <v-container fluid fill-height>
    <!-- centers items -->
    <v-row no-gutters>
      <v-col align="center" justify="center">
        <!-- Title -->
        <v-row no-gutters>
          <v-col>
            <h1 class="display-2 font-weight-bold mb-3">
              Kontakt
            </h1>
          </v-col>
        </v-row>
        <!-- Title -->

        <!-- linkedin -->
        <v-row no-gutters>
          <v-col>
            <v-btn text large @click="initiateLinkedin()">
              <v-icon>mdi-linkedin-box</v-icon> /mathias-n-nielsen/
            </v-btn>
          </v-col>
        </v-row>
        <!-- linkedin -->

        <!-- email -->
        <v-row no-gutters>
          <v-col>
            <v-btn text large @click="initiateMail()">
              <v-icon>mdi-email</v-icon> {{ mail }}
            </v-btn>
          </v-col>
        </v-row>
        <!-- email -->

      </v-col>
    </v-row>
    <!-- centers items -->
  </v-container>
</template>

<script>
import { titleMixins } from "../shared/standard-mixins";

export default {
  name: "ContactPage",

  mixins: [titleMixins],

  data() {
    return {
      title: "Kontakt",
      hover: false,
      mail: "kontakt@mathias-nielsen.me"
    };
  },

  methods: {
    initiateMail() {
      window.location.href = "mailto:" + this.mail;
      // window.open("mailto:"+this.mail);
    },

    initiateLinkedin() {
      window.open("https://www.linkedin.com/in/mathias-n-nielsen/");
    }
  }
};
</script>
