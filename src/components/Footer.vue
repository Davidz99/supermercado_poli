<template>
  <v-card elevation="0" id="footer">
    <v-divider :thickness="3" class="border-opacity-10 header"></v-divider>

    <v-row class="pt-2">
      <v-col cols="3" align="center">
        <v-icon color="blue" icon="mdi-facebook"></v-icon>
        <label> punto supermercado </label>
      </v-col>
      <v-col cols="3" align="center">
        <v-icon color="purple" icon="mdi-instagram"></v-icon>
        <label> @puntosuperm </label>
      </v-col>
      <v-col cols="3" align="center">
        <v-icon color="red" icon="mdi-gmail"></v-icon>
        <label> puntosuperm@gmail.com </label>
      </v-col>
      <v-col cols="3" align="center">
        <v-icon color="green" icon="mdi-whatsapp"></v-icon>
        <label> +57 3100000555 </label>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "footer_vue",
  data: () => {},
};
</script>

<style>
#footer {
  position: absolute;
  background-color: #f3f0f0;
  bottom: 2%;
  width: 93%;
}
</style>
