<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="500">
      <v-card>
        <v-card-title>
          <h5 class="text-center" style="color: green">{{ novedad_lnk == 7 ? "CREAR PRODUCTO" : "ACTUALIZAR PRODUCTO" }}</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="3" class="my-n2 pa-0">
                <v-text-field disabled v-model="producto.id" label="Id" required></v-text-field>
              </v-col>
              <v-col cols="9" class="my-n2 pa-0 pl-2">
                <v-text-field v-model="producto.nombre" label="Nombre" required></v-text-field>
              </v-col>
              <v-col cols="12" class="my-n2 pa-0">
                <v-text-field v-model="producto.descripcion" label="Descripción" required></v-text-field>
              </v-col>
              <v-col cols="4" class="my-n2 pa-0">
                <v-switch v-model="producto.activo" color="green" label="Activo"></v-switch>
              </v-col>
              <v-col cols="3" class="my-n2 pa-0">
                <v-text-field v-model="producto.cantidad" label="Cantidad" type="number" required></v-text-field>
              </v-col>
              <v-col cols="5" class="my-n2 pa-0 pl-2">
                <v-text-field v-model="producto.precio" label="Precio" type="number" required></v-text-field>
              </v-col>
              <v-col cols="12" class="my-n2 pa-0">
                <v-text-field v-model="producto.proveedor" label="Proveedor" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0">
                <v-text-field v-model="producto.categoria_1" label="Categoria 1" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0 pl-2">
                <v-text-field v-model="producto.categoria_4" label="Categoria 4" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0">
                <v-text-field v-model="producto.categoria_2" label="Categoria 2" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0 pl-2">
                <v-text-field v-model="producto.categoria_5" label="Categoria 5" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0">
                <v-text-field v-model="producto.categoria_3" label="Categoria 3" required></v-text-field>
              </v-col>
              <v-col cols="6" class="my-n2 pa-0 pl-2">
                <v-file-input
                  v-model="files"
                  :rules="rules"
                  accept="image/png, image/jpeg, image/bmp"
                  prepend-icon="mdi-camera"
                  label="Imagen"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
          <small>*Complete todos los campos</small>
        </v-card-text>
        <v-card-actions class="mt-n4">
          <v-spacer></v-spacer>
          <v-btn color="green" variant="text" @click="salir"> CERRAR </v-btn>
          <v-btn color="green" variant="text" @click="evaluarAccion"> GUARDAR </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="alert.show">
      {{ alert.msj }}

      <template v-slot:actions>
        <v-btn color="green" variant="text" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-row>
</template>

<script>
import getObjProduct from "./reg_product.js";
import api from "../database/api.js";

export default {
  name: "product_vue",
  props: {
    novedad_lnk: {
      Type: String,
      default: () => {
        return "";
      },
    },
    id_lnk: {
      Type: String,
      default: () => {
        return "";
      },
    },
  },
  data: () => ({
    dialog: true,
    producto: getObjProduct(),
    productos: [],
    alert: {
      type: "success",
      show: null,
      msj: "",
    },
    files: [],
  }),
  created() {
    this.leerProductos();
  },
  methods: {
    async leerProductos() {
      try {
        this.productos = await api.getProductos();
        this.evaluarNovedad();
      } catch (err) {
        console.error(err);
      }
    },

    evaluarNovedad() {
      if (this.novedad_lnk == 7) {
        this.producto.id = this.productos.length + 1;
      } else {
        this.producto = this.productos.find((e) => e.id == this.id_lnk);
      }
    },

    evaluarAccion() {
      if (this.novedad_lnk == 7) this.crearItem();
      else this.actualizarItem();
    },

    crearItem() {
      try {
        api.agregarProducto(this.producto);
        setTimeout(() => (this.dialog = false), 300);
      } catch (err) {
        console.error(err);
        this.mostrarAlerta({ type: "warning", msj: "Error prueba" });
      }
    },

    actualizarItem() {},

    salir() {
      this.dialog = false;
      this.$emit("callback");
    },

    terminar() {
      this.dialog = false;
      this.$emit("callback", this.productos_lnk);
    },

    mostrarAlerta({ type = "", msj = "" } = {}) {
      this.alert.type = type || "warning";
      this.alert.show = true;
      this.alert.msj = msj || "Error";

      setTimeout(() => (this.alert.show = false), 3000);
    },

    async convertImg() {
      // console.log(files)
      // console.log("llega");
      // console.log(this.files);
      // let base64 = await api.toDataURL(this.files[0]);
      // console.log(base64);
    },
  },
};
</script>
