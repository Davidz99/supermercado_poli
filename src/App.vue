<template>
  <v-app style="background-color: #f3f0f0">
    <v-main style="max-height: 150px" id="main_app">
      <Header />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },
};
</script>

<style>
html {
  overflow-y: hidden !important;
}

#main_app {
  margin-left: 50px !important;
  margin-right: 50px !important;
}
</style>
