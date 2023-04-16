<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent width="400">
      <v-card>
        <v-card-title>
          <h5 class="text-center" style="color: green"> {{ novedad_lnk == 7 ? "CREAR PRODUCTO" : "ACTUALIZAR PRODUCTO" }} </h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="my-n2 pa-0">
                <v-text-field label="Número identificador" required></v-text-field>
              </v-col>
              <v-col cols="12" class="my-n2 pa-0">
                <v-text-field label="Nombre" required></v-text-field>
              </v-col>
              <v-col cols="4" class="my-n2 pa-0">
                <v-switch color="green" label="Activo"></v-switch>
              </v-col>
              <v-col cols="8" class="my-n2 pa-0">
                <v-text-field label="Cantidad" required></v-text-field>
              </v-col>
              <v-col cols="12" class="my-n2 pa-0">
                <v-text-field label="Proveedor" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Complete todos los campos</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green" variant="text" @click="salir"> Close </v-btn>
          <v-btn color="green" variant="text" @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "product_vue",
  props: {
    novedad_lnk: {
      Type: String,
      default: () => {
        return "";
      },
    },
    producto_lnk: {
      Type: Object,
      default: () => {
        return {};
      },
    },
  },
  data: () => ({
    dialog: true,
  }),
  created() {
    console.log("INICIA PRODUCT");
  },
  methods: {
    salir() {
      this.dialog = false;
      this.$emit("callback");
    },
  },
};
</script>
