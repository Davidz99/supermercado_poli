<template>
  <v-row class="text-center header" style="margin: 1px; background-color: #f3f0f0">
    <v-col cols="2" style="display: flex !important">
      <v-img class="shrink mr-2" contain src="@/assets/logo.jpg" />
    </v-col>

    <v-col style="margin-top: 50px">
      <v-card :elevation="0" style="background-color: #f3f0f0">
        <v-tabs v-model="tab" align-tabs="end">
          <v-tab to="/" class="tab" :value="1">INICIO</v-tab>
          <v-tab to="categories" class="tab" :value="2">CATEGORIAS</v-tab>
          <v-tab to="store" class="tab" :value="3">TIENDA</v-tab>
          <v-tab to="contact" class="tab" :value="4">CONTACTO</v-tab>
        </v-tabs>
      </v-card>
    </v-col>
  </v-row>

  <v-divider :thickness="3" class="border-opacity-10 header"></v-divider>
</template>

<script>
export default {
  name: "header_vue",
  data: () => ({}),
};
</script>

<style>
.tab {
  color: rgb(98, 153, 98) !important;
}
</style>
