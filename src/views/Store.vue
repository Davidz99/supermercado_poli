
<template>
  <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">

    <h2 align="center" class="ma-5" style="color: green padding: 7px background-color: white">Productos
    <v-icon>mdi-cart</v-icon>({{a}})
    <v-btn @click="navegateTo('ShoppingCart')">Ver Carrito</v-btn>
  
  </h2>
          

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col v-for="producto in productos" :key="producto.id" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2 producto" density="compact" variant="text" elevation="3">
          <!--<v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>-->

          <v-card-title style="font-size: 14px"> {{ producto.nombre }} </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ producto.precio }} </v-card-text>

          <v-btn @click="agregarProductosCarrito(producto)" class="mt-n2" block color="green" variant="text">AÑADIR AL
            CARRITO</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>


import cart from "../main.js";
import api from "../database/api";
export default {
  name: "store_vue",
  data: () => ({
    a:"",
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    productos: [],
    productosEnCarrito: [],
  }),
/* Cargar productos desde la BD */
  created() {
    api.getProductos().then((productos) => {
      this.productos = productos;
    }).catch((error) => {
      console.error(error);
    });
  },

  methods: {
    agregarProductosCarrito(producto) {
      //this.productosEnCarrito.push(producto)
      cart.push(producto)
      this.a = cart.length
      console.log(cart)
    },
    navegateTo(path){
      this.$router.push(path);
    }
  }

};
</script>

<style scoped>
  .producto{
    text-align: center;
  }
</style>
