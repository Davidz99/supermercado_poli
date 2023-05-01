<template>
  <v-card
    style="overflow-y: auto !important"
    variant="text"
    elevation="0"
    max-height="500"
  >
    <v-navigation-drawer floating permanent>
      <v-list dense nav>
        <v-list-item
          @click="categoriaSeleccionada = 'Despensa'"
          prepend-icon="mdi-barley"
          title="Despensa"
          value="despensa"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'Pollo, carnes y pescado'"
          prepend-icon="mdi mdi-cow"
          title="Carnes, Pollo y Pescado"
          value="carnes"
        ></v-list-item>
        <v-list-item
          @click="categoriaSeleccionada = 'frutas'"
          prepend-icon="mdi-food-apple"
          title="Frutas y Verduras"
          value="frutas"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'panaderia'"
          prepend-icon="mdi mdi-baguette"
          title="Panadería"
          value="panaderia"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'Vinos y licores'"
          prepend-icon="mdi-glass-wine"
          title="Vinos"
          value="vino"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'pets'"
          prepend-icon="mdi mdi-dog"
          title="Pets"
          value="pets"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'snaks'"
          prepend-icon="mdi mdi-popcorn"
          title="snaks"
          value="snaks"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'aseo'"
          prepend-icon="mdi-spray-bottle"
          title="Aseo"
          value="aseo"
        ></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <h2
      align="center"
      class="ma-5"
      style="color: green padding: 7px background-color: white"
    >
      Productos <v-icon>mdi-cart</v-icon>({{ a }})
      <v-btn @click="navegateTo('ShoppingCart')">Ver Carrito</v-btn>
    </h2>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col
        v-for="producto in productosFiltrados"
        :key="producto.id"
        cols="5"
        class="vino"
      >
        <v-card
          border
          style="font-size: 10px"
          class="mb-2 producto"
          density="compact"
          variant="text"
          elevation="3"
        >
          <!--<v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>-->
          <v-img
            :src="producto.foto"
            height="140"
            style="cursor: pointer"
            @click="
              productoSeleccionado = producto;
              dialog = true;
            "
          ></v-img>
          <v-card-title style="font-size: 14px">
            {{ producto.nombre }}
          </v-card-title>
          <v-card-text style="font-size: 15pt">
            {{ producto.precio }}
          </v-card-text>

          <v-btn
            @click="agregarProductosCarrito(producto)"
            class="mt-n2"
            block
            color="green"
            variant="text"
            >AÑADIR AL CARRITO</v-btn
          >
        </v-card>
      </v-col>
      <v-col
        v-if="productos.length % 3 !== 0"
        :cols="12 - (productos.length % 3) * 4 + 'px'"
        class="offset-md-1"
      ></v-col>
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
</template>

<script>
import api from "../database/api";
import cart from "../main.js";
export default {
  name: "categories_vue",
  data: () => ({
    a: "",
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    // productos base de datos
    productos: [],
    productosEnCarrito: [],
    productoSeleccionado: {},
  }),
  /* Cargar productos desde la BD */
  created() {
    api
      .getProductos()
      .then((productos) => {
        this.productos = productos;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  computed: {
    productosFiltrados() {
      if (this.categoriaSeleccionada) {
        return this.productos.filter(
          (producto) => producto.categoria_1 === this.categoriaSeleccionada
        );
      } else {
        return this.productos;
      }
    },
  },
  methods: {
    agregarProductosCarrito(producto) {
      //this.productosEnCarrito.push(producto)
      cart.push(producto);
      this.a = cart.length;
      console.log(cart);
    },
    navegateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
.my-dialog {
  position: fixed;
  z-index: 9999;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1500px;
  height: 480px;
}
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
  max-width: 1700px;
}
.producto {
  text-align: center;
}
</style>
