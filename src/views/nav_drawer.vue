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

    <v-col> </v-col>
  </v-row>
</template>

<script>
export default {
  name: "",
  data: () => ({
    categories: [
      { nombre: "Despensa", valor: "despensa" },
      { nombre: "Pollo, carnes y pescado", valor: "carnes" },
      { nombre: "Frutas y verduras", valor: "frutas" },
      { nombre: "Panaderia", valor: "panaderia" },
      { nombre: "Vinos y licores", valor: "vinos" },
      { nombre: "Pets food", valor: "pets_food" },
    ],
  }),
};
</script>
