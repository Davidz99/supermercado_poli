<template>
  <v-row style="margin: 5px !important">
    <v-col cols="2" style="padding: 0">
      <v-card>
        <v-layout>
          <v-navigation-drawer floating permanent>
            <v-list v-for="item in categories" :key="item.id" density="compact" nav>
              <v-list-item :title="item.nombre" :value="item.valor"></v-list-item>
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
            @click="init_producto = true"
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
            <th width="5%" class="text-left">Id</th>
            <th width="25%" class="text-left">Nombre</th>
            <th width="5%" class="text-center">Activo</th>
            <th width="10%" class="text-center">Cantidad</th>
            <th width="25%" class="text-left">Proveedor</th>
            <th width="30%" class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in list_productos" :key="item.id">
            <td width="5%" class="text-left">{{ item.id }}</td>
            <td width="25%" class="text-left">{{ item.nombre }}</td>
            <td width="5%" class="text-center">{{ item.activo }}</td>
            <td width="10%" class="text-center">{{ item.cantidad }}</td>
            <td width="25%" class="text-left">{{ item.proveedor }}</td>
            <td width="30%" class="text-center">
              <v-row>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn style="background-color: rgb(91 90 183); color: white" width="100%"> EDITAR </v-btn>
                </v-col>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn style="background-color: rgb(98, 153, 98); color: white" width="100%"> VER </v-btn>
                </v-col>
                <v-col cols="4" style="padding: 5px !important">
                  <v-btn style="background-color: #c0392b; color: white" width="100%"> BORRAR </v-btn>
                </v-col>
              </v-row>
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-col>
  </v-row>

  <Product v-if="init_producto" :novedad_lnk="novedad" :producto_lnk="product" @callback="callbackProduct" />
</template>

<script>
import Product from "../../src/components/Product.vue";

export default {
  name: "crud_vue",
  data: () => ({
    productos: [
      { id: "1", nombre: "Arroz castellano", activo: "SI", cantidad: "15", proveedor: "Jhon Restrepo", acciones: "" },
      { id: "2", nombre: "Aceite Oliva", activo: "SI", cantidad: "500", proveedor: "Canola", acciones: "" },
      { id: "3", nombre: "Pasta Spaggheti", activo: "SI", cantidad: "25", proveedor: "Prisma", acciones: "" },
      { id: "4", nombre: "Frijoles Diana", activo: "SI", cantidad: "45", proveedor: "Casa blanca", acciones: "" },
      { id: "5", nombre: "Avena Quaker", activo: "SI", cantidad: "13", proveedor: "Jhon Restrepo", acciones: "" },
      { id: "6", nombre: "Aceite de agua", activo: "SI", cantidad: "8", proveedor: "Canola", acciones: "" },
      { id: "7", nombre: "Lentejas Diana", activo: "SI", cantidad: "0", proveedor: "Conservas Doña Maria", acciones: "" },
      { id: "8", nombre: "Harina Pan", activo: "SI", cantidad: "18", proveedor: "Casa blanca", acciones: "" },
      { id: "9", nombre: "Canela Molida", activo: "SI", cantidad: "0", proveedor: "El molinillo", acciones: "" },
    ],
    categories: [
      { nombre: "Despensa", valor: "despensa" },
      { nombre: "Pollo, carnes y pescado", valor: "carnes" },
      { nombre: "Frutas y verduras", valor: "frutas" },
      { nombre: "Panaderia", valor: "panaderia" },
      { nombre: "Vinos y licores", valor: "vinos" },
      { nombre: "Pets food", valor: "pets_food" },
    ],
    busqueda: "",
    init_producto: null,
    novedad: null,
    producto: {},
  }),
  components: {
    Product,
  },
  computed: {
    list_productos() {
      if (this.busqueda.length > 0) {
        return this.productos.filter(
          (e) =>
            e.nombre.toUpperCase().includes(this.busqueda.toUpperCase()) ||
            e.id.includes(this.busqueda) ||
            e.proveedor.toUpperCase().includes(this.busqueda.toUpperCase())
        );
      } else {
        return this.productos;
      }
    },
  },
  methods: {
    callbackProduct() {
      this.init_producto = false;
    },
  },
};
</script>

<style>
thead tr th {
  color: rgb(98, 153, 98) !important;
}
</style>
