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
                  @change="convertImg"
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
          <v-btn color="green" variant="text" @click="terminar"> CERRAR </v-btn>
          <v-btn color="green" variant="text" @click="evaluarAccion"> GUARDAR </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="alert.show">
      {{ alert.msj }}

      <template v-slot:actions>
        <v-btn color="green" variant="text" @click="alert.show = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-row>

  <!-- Confirmacion de borrado  -->
  <v-row justify="center" v-if="novedad_lnk == 9">
    <v-dialog v-model="borrar_producto" persistent width="auto">
      <template v-slot:activator="{ props }">
        <v-btn color="green" v-bind="props"> Borrar Producto </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Esta seguro de borrar el producto? </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red-darken-1"
            variant="text"
            @click="
              borrar_producto = false;
              terminar();
            "
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green-darken-1"
            variant="text"
            @click="
              borrar_producto = false;
              borrarItem();
            "
          >
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    borrar_producto: null,
  }),
  created() {
    // Borra el producto - novedad 9
    if (this.novedad_lnk == 9) {
      this.dialog = false;
      this.borrar_producto = true;
    } else {
      this.leerProductos();
    }
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
        this.mostrarAlerta({ type: "success", msj: "Producto creado!" });
      } catch (err) {
        console.error(err);
        this.mostrarAlerta({ type: "warning", msj: "Error creando producto" });
      }
    },

    actualizarItem() {
      try {
        api.actualizarProducto(this.producto);
        setTimeout(() => (this.dialog = false), 300);
        this.mostrarAlerta({ type: "success", msj: "Producto actualizado!" });
      } catch (err) {
        console.error(err);
        this.mostrarAlerta({ type: "warning", msj: "Error actualizando producto" });
      }
    },

    borrarItem() {
      try {
        api.removerProducto(this.id_lnk);
        this.mostrarAlerta({ type: "success", msj: "Producto borrado!" });
      } catch (err) {
        console.error(err);
        this.mostrarAlerta({ type: "warning", msj: "Error borrando producto" });
      }
    },

    terminar() {
      this.dialog = false;
      this.$emit("callback");
      setTimeout(() => location.reload(), 200);
    },

    mostrarAlerta({ type = "", msj = "" } = {}) {
      this.alert.type = type || "warning";
      this.alert.show = true;
      this.alert.msj = msj || "Error";

      setTimeout(() => {
        this.alert.show = false;
        this.terminar();
      }, 1000);
    },

    async convertImg() {
      let base64 = await api.toDataURL(this.files[0]);
      this.producto.foto = base64;
    },
  },
};
</script>
