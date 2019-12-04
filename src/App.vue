<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>

        <router-link to="home" tag="div">
          <NavBarItemList iconName="mdi-home" itemTitle="Hjem" />
        </router-link>

        <router-link to="contact" tag="div">
          <NavBarItemList iconName="mdi-contact-mail" itemTitle="Kontakt" />
        </router-link>

        <router-link to="about-vue" tag="div">
          <NavBarItemList iconName="mdi-vuejs" itemTitle="Vue" />
        </router-link>

      </v-list>
    </v-navigation-drawer>

    <!-- header -->
    <v-app-bar app color="indigo" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Online CV: Mathias Nielsen</v-toolbar-title>
    </v-app-bar>
    <!-- header -->

    <!-- content -->
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- content -->

    <!-- footer -->
    <v-footer color="indigo" app>
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
    drawer: null
  })
};
</script>
