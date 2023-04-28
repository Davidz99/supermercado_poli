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
import api from "./database/api";

export default {
  name: "App",

  components: {
    Header,
    Footer,
  },

  created() {
    this.leerCategorias();
  },

  methods: {
    async leerCategorias() {
      try {
        let categorias = await api.getCategorias();
        console.log(categorias, "categorias");
        this.leerProductos();
      } catch (err) {
        console.error(err);
      }
    },

    async leerProductos() {
      try {
        let productos = await api.getProductos();
        console.log(productos, "productos");
      } catch (err) {
        console.error(err);
      }
    },
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
