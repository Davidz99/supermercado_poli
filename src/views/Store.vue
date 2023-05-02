
<template>
  <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">

    <h2 align="center" class="ma-5" style="color: green padding: 7px background-color: white">Productos
    <v-icon>mdi-cart</v-icon>({{a}})
    <v-btn @click="navegateTo('ShoppingCart')">Ver Carrito</v-btn>
  
  </h2>
          

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col v-for="producto in productos" :key="producto.id" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2 producto" density="compact" variant="text" elevation="3">

          <v-img
            :src="producto.foto"
            height="140"
            style="cursor: pointer;"
            @click="
              productoSeleccionado = producto;
              init_show_producto = true;
            "
          ></v-img>
          <v-card-title style="font-size: 14px"> {{ producto.nombre }} </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ producto.precio }} </v-card-text>

          <v-btn @click="agregarProductosCarrito(producto)" class="mt-n2" block color="green" variant="text">AÑADIR AL
            CARRITO</v-btn>
        </v-card>
      </v-col>
      <v-col v-if="(productos.length % 3) !== 0" :cols="(12 - ((productos.length % 3) * 4)) + 'px'" class="offset-md-1"></v-col>
    </v-row>

    <!-- V-DIALOG DE CADA PRODUCTO -->
    <v-dialog v-model="dialog" class="my-dialog">
      <v-card class="my-card">
        <v-card-title class="text-center">
          {{ productoSeleccionado.nombre }}
        </v-card-title>
        <v-card-subtitle>{{ productoSeleccionado.precio }}</v-card-subtitle>
        <v-img :src="productoSeleccionado.foto" height="140" width="120"></v-img>
        <v-text-field> {{ productoSeleccionado.descripcion }}</v-text-field>
        <v-btn class="mt-n2" block color="green" variant="text"
          >AÑADIR AL CARRITO</v-btn
        >
      </v-card>
      <v-card height="10%">
        <!--Boton de cierre de dialog-->
        <v-card-actions>
          <v-btn color="red" text @click="dialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>

  <ShowProduct v-if="init_show_producto" :producto="productoSeleccionado" @callback="callbackShowProduct" />
</template>


<script>


import cart from "../main.js";
import api from "../database/api";
import ShowProduct from "../components/ShowProduct.vue";

export default {
  name: "store_vue",
  data: () => ({
    a:"",
    categories: null,
    categoriaSeleccionada: null,
    init_show_producto: false,

    // productos base de datos
    productos: [],
    productosEnCarrito: [],

    productoSeleccionado: {}

  }),
/* Cargar productos desde la BD */
  created() {
    this.a = cart.length;
    api.getProductos().then((productos) => {
      this.productos = productos;
    }).catch((error) => {
      console.error(error);
    });
  },
  components: {
    ShowProduct,
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
    },
    callbackShowProduct() {
      this.init_show_producto = false;
      this.a = cart.length;
    }
  }

  

};
</script>

<style scoped>
  .producto{
    text-align: center;
  }
</style>
