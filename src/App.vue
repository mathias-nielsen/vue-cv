<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <router-link to="home" tag="div">
          <NavBarItemList iconName="mdi-home" itemTitle="Hjem" />
        </router-link>

        <router-link to="cv" tag="div">
          <NavBarItemList iconName="mdi-file-account" itemTitle="CV" />
        </router-link>

        <router-link to="contact" tag="div">
          <NavBarItemList iconName="mdi-contact-mail" itemTitle="Kontakt" />
        </router-link>

        <router-link to="about-me" tag="div">
          <NavBarItemList iconName="mdi-account" itemTitle="Om mig" />
        </router-link>
      </v-list>
    </v-navigation-drawer>

    <!-- header -->
    <v-app-bar app color="#002366" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <!-- header -->

    <!-- content -->
    <v-content overflow="auto">
        <router-view @newTitle="setTitle"></router-view>
    </v-content>
    <!-- content -->

    <!-- footer -->
    <v-footer color="#002366" app>
      <span class="white--text">&copy; 2019</span>
    </v-footer>
    <!-- footer -->
  </v-app>
</template>

<script>
import NavBarItemList from "./components/nav-bar-list-item";

export default {
  name: "App",

  components: {
    NavBarItemList
  },

  data: () => ({
    drawer: null,
    title: ""
  }),

  methods: {
    setTitle(title) {
      console.log("setTitle called");
      this.title = title;
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gelasio&display=swap');

.v-divider {
  margin: 10px 10px 10px 10px;
}

.company-logo {
  width: 5;
  height: 5;
}

h1, h2, h3, h4, p {
  font-family: 'Gelasio', sans-serif;
}

.vertical-center {
  margin-top: auto;
  margin-bottom: auto;
}

.object-center {
  margin: auto;
}

</style>
