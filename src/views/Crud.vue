<template>
  <v-row style="margin: 5px !important">
    <v-col cols="2" style="padding: 0">
      <v-card>
        <v-layout>
          <v-navigation-drawer floating permanent>
            <v-list density="compact" nav dense>
              <v-list-item @click="categoria_selec = item.nombre" v-for="(item, index) in categorias" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ item.nombre }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-navigation-drawer>
          <v-main style="height: 340px"></v-main>
        </v-layout>
      </v-card>
    </v-col>
    <v-col cols="10" style="padding: 0; padding-left: 3px !important">
      <v-row>
        <v-col cols="2">
          <v-btn
            @click="llamarProducto({ novedad: '7' })"
            height="55px"
            prepend-icon="mdi mdi-pencil-plus"
            width="100%"
            class="mx-2"
            style="background-color: rgb(98, 153, 98); color: white"
          >
            NUEVO
          </v-btn>
        </v-col>
        <v-col cols="10">
          <v-text-field color="green" bg-color="white" v-model="busqueda" label="Busqueda" class="mx-0 pa-0"></v-text-field>
        </v-col>
      </v-row>

      <v-table fixed-header height="400px" class="mt-n6">
        <thead>
          <tr>
            <th width="2%" class="text-left">Id</th>
            <th width="20%" class="text-left">Nombre</th>
            <th width="25%" class="text-left">Descripción</th>
            <th width="4%" class="text-center">Activo</th>
            <th width="6%" class="text-center">Cantidad</th>
            <th width="20%" class="text-left">Proveedor</th>
            <th width="23%" class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list_productos" :key="item.id">
            <td width="2%" class="text-left">{{ item.id }}</td>
            <td width="20%" class="text-left">{{ item.nombre }}</td>
            <td width="25%" class="text-left">{{ item.descripcion.slice(0, 60) }}</td>
            <td width="4%" class="text-center">{{ item.activo == true ? "SI" : "NO" }}</td>
            <td width="6%" class="text-center">{{ item.cantidad }}</td>
            <td width="20%" class="text-left">{{ item.proveedor }}</td>
            <td width="23%" class="text-center">
              <v-row>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn
                    @click="llamarProducto({ novedad: '8', item })"
                    style="background-color: rgb(91 90 183); color: white; font-size: 10pt"
                    width="100%"
                  >
                    EDITAR
                  </v-btn>
                </v-col>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn @click="mostrarProducto({ item })" style="background-color: rgb(98, 153, 98); color: white; font-size: 10pt" width="100%">
                    VER
                  </v-btn>
                </v-col>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn
                    @click="llamarProducto({ novedad: '9', item })"
                    style="background-color: #c0392b; color: white; font-size: 10pt"
                    width="100%"
                  >
                    BORRAR
                  </v-btn>
                </v-col>
              </v-row>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>

  <Product
    v-if="init_producto"
    :novedad_lnk="params_producto.novedad"
    :id_lnk="params_producto.id"
    :productos_lnk="productos"
    @callback="callbackProduct"
  />

  <ShowProduct v-if="init_show_producto" :producto="producto_seleccionado" @callback="callbackShowProduct" />
</template>

<script>
import Product from "../components/Product.vue";
import ShowProduct from "../components/ShowProduct.vue";
import api from "../database/api.js";

export default {
  name: "crud_vue",
  data: () => ({
    productos: [],
    categorias: [],
    busqueda: "",
    init_producto: null,
    params_producto: {
      novedad: "",
      id: null,
    },
    categoria_selec: null,
    id_item: 0,
    init_show_producto: null,
    producto_seleccionado: null,
  }),
  components: {
    Product,
    ShowProduct,
  },
  async created() {
    this.leerProductos();
  },
  computed: {
    list_productos() {
      let productos = this.productos;

      // validacion de categorias
      if (this.categoria_selec) {
        productos = productos.filter((e) =>
          [
            e.categoria_1.toUpperCase(),
            e.categoria_2.toUpperCase(),
            e.categoria_3.toUpperCase(),
            e.categoria_4.toUpperCase(),
            e.categoria_5.toUpperCase(),
          ].includes(this.categoria_selec.toUpperCase())
        );
      }

      if (this.busqueda.length > 0) {
        return productos.filter(
          (e) => e.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) || e.proveedor.toUpperCase().includes(this.busqueda.toUpperCase())
        );
      } else {
        return this.organizeProducts(productos);
      }
    },
  },
  methods: {
    async leerProductos() {
      try {
        this.productos = await api.getProductos();
        this.leerCategorias();
      } catch (err) {
        console.error(err);
      }
    },

    async leerCategorias() {
      try {
        this.categorias = await api.getCategorias();
        // this.leerCategorias();
      } catch (err) {
        console.error(err);
      }
    },

    llamarProducto({ novedad = null, item = {} }) {
      this.params_producto.novedad = novedad;

      if (novedad == 30) {
        this.params_producto.id = null;
      } else {
        this.params_producto.id = item.id;
      }

      setTimeout(() => (this.init_producto = true), 200);
    },

    callbackProduct() {
      this.init_producto = false;
    },

    mostrarProducto({ item = {} }) {
      this.producto_seleccionado = item;
      setTimeout(() => (this.init_show_producto = true), 200);
    },

    callbackShowProduct() {
      this.init_show_producto = false;
    },

    organizeProducts(productos) {
      return productos.sort((a, b) => {
        return a.id - b.id;
      });
    },
  },
};
</script>

<style>
thead tr th {
  color: rgb(98, 153, 98) !important;
  font-size: 11pt;
}

tbody tr td {
  font-size: 11pt;
}
</style>
