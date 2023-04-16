<template>
  <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">
    <v-navigation-drawer v-model="categories" temporary>
      <v-list dense nav>
        <v-list-item @click="categoriaSeleccionada = 'despensa', dialog = true" prepend-icon="mdi-barley" title="Despensa"  value="despensa"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'carnes'" prepend-icon="mdi mdi-cow"   title="Carnes, Pollo y Pescado" value="carnes"></v-list-item>
        <v-list-item @click="categoriaSeleccionada = 'frutas'" prepend-icon="mdi-food-apple" title="Frutas y Verduras" value="frutas"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'panaderia'" prepend-icon="mdi mdi-baguette" title="Panadería" value="panaderia"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'vino'" prepend-icon="mdi-glass-wine" title="Vinos" value="vino"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'pets'" prepend-icon="mdi mdi-dog" title="Pets" value="pets"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'snaks'" prepend-icon="mdi mdi-popcorn" title="snaks" value="snaks"></v-list-item>
        <v-divider></v-divider>
        <v-list-item @click="categoriaSeleccionada = 'aseo'" prepend-icon="mdi-spray-bottle" title="Aseo" value="aseo"></v-list-item>
        <v-divider></v-divider>
  
      </v-list>
    </v-navigation-drawer>

    <h2 align="center" class="ma-5" style="color: green">TIENDA</h2>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col v-for="fila in productosFiltrados" :key="fila" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2" density="compact" variant="text" elevation="3">
          <v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>

          <v-card-title style="font-size: 14px"> {{ fila.title }} </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ fila.price }} </v-card-text>

          <v-btn class="mt-n2" block color="green" variant="text">AÑADIR AL CARRITO</v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!--Es lo de v-dialog y no funciona-->
    <v-dialog v-model="dialog">
  <v-card>
    <v-card-title>
      {{ categoriaSeleccionada.toUpperCase() }}
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col v-for="(producto, index) in productosFiltrados" :key="index">
          <v-card>
            <v-card-title>{{ producto.title }}</v-card-title>
            <v-card-subtitle>{{ producto.price }}</v-card-subtitle>
            <v-card-text>
              <v-img :src="require(`@/assets/${producto.img}`)" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <!--Boton de cierre de dialog-->
    <v-card-actions>
      <v-btn color="primary" text @click="dialog = false">
        Cerrar
      </v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>


  </v-card>
</template>


<script>
export default {
  name: "store_vue",
  data: () => ({
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    array_productos: [
    { title: "VINO SABROSO", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino"},
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino"},
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png", category: "vino" },
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png", category: "vino" },
      { title: "ARROZ DIANA", price: "$12,000", img: "arrozCatellano.png", category: "despensa" },
      { title: "PASTA DORIA", price: "$5,000", img: "pasta_doria.png", category: "despensa" },
      { title: "AVENA QUAKER", price: "$10,700", img: "avena_quaker.png", category: "despensa" },
      { title: "ACEITE PREMIER", price: "$48,990", img: "aceite_premier.png", category: "despensa" },
    ],
  }),

  computed: {
    productosFiltrados() {
      if (this.categoriaSeleccionada) {
      return this.array_productos.filter((producto) => producto.category === this.categoriaSeleccionada);
    } else {
      return this.array_productos;
      }
    },
  },
  created() {
    if (this.$route.name == "categories") {
      this.categories = true;
    }
  },
  methods: {
  clickCategoria(categoria) {
    this.categoriaSeleccionada = categoria;
    this.dialog = true;
  },
  }, 
};
</script>
