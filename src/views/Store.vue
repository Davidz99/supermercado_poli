<template>
  <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">
    <v-navigation-drawer v-model="categories" temporary>
      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-glass-wine" title="Vinos" value="vinos"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-spray-bottle" title="Aseo" value="aseo"></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-food-apple" title="Frutas" value="frutas"></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <h2 align="center" class="ma-5" style="color: green">TIENDA</h2>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col v-for="fila in array_productos" :key="fila" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2" density="compact" variant="text" elevation="3">
          <v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>

          <v-card-title style="font-size: 14px"> {{ fila.title }} </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ fila.price }} </v-card-text>

          <v-btn class="mt-n2" block color="green" variant="text">AÑADIR AL CARRITO</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "store_vue",

  data: () => ({
    categories: null,

    // productos base de datos
    array_productos: [
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png" },
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png" },
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png" },
    ],
  }),
  created() {
    if (this.$route.name == "categories") {
      this.categories = true;
    }
    this.filtrar();
  },
  methods: {
    filtrar() {},
  },
};
</script>
