<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="700">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-row>
          <v-col cols="6">
            <v-img class="shrink mr-2" :src="producto.foto"></v-img>
          </v-col>
          <v-col cols="6">
            <v-card-title>
              <span style="font-weight: 600" class="text-h5 text-center"> {{ producto.nombre }} </span>
            </v-card-title>
            <v-card-text class="mt-2" style="text-align: justify">
              {{ producto.descripcion }}
            </v-card-text>

            <v-card-text class="mt-2">
              <layout style="font-weight: 600"> Disponible: </layout> {{ producto.cantidad }} uds
              <v-spacer></v-spacer>
              <layout style="font-weight: 600"> Se encuentra en oferta: </layout> {{ producto.activo ? "SI" : "NO" }}
            </v-card-text>

            <v-card-text style="font-weight: 600; font-size: ">
              <h2>${{ new Intl.NumberFormat("ja-JP").format(producto.precio) }}</h2>
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="salir"> Continuar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import getObjProduct from "./reg_product.js";

export default {
  name: "show_product_vue",
  props: {
    producto: {
      Type: Object,
      default: () => {
        return getObjProduct();
      },
    },
  },
  data: () => ({
    dialog: true,
  }),
  methods: {
    salir() {
      this.dialog = false;
      this.$emit("callback");
    },
  },
};
</script>
