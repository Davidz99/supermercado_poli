<template>
  <div id="contact">
    <h3>Nuestras redes sociales y contactos:</h3>

    <v-row class="pt-5 pl-15">
      <v-col cols="6">
        <h3 class="pl-2"> Facebook: </h3>
        <v-icon size="100" color="blue" icon="mdi-facebook"></v-icon>
        <a href="https://facebook.com" target="_blank"> punto supermercado </a>
      </v-col>

      <v-col cols="6">
        <h3 class="pl-2"> Instagram: </h3>
        <v-icon size="100" color="purple" icon="mdi-instagram"></v-icon>
        <a href="https://instagram.com" target="_blank"> @puntosuperm </a>
      </v-col>
    </v-row>

    <v-row class="mt-n4 pl-15">
      <v-col cols="6">
        <h3 class="pl-2"> Gmail: </h3>
        <v-icon size="100" color="red" icon="mdi-gmail"></v-icon>
        <a href="https://gmail.com" target="_blank"> puntosuperm@gmail.com </a>
      </v-col>

      <v-col cols="6">
        <h3 class="pl-2"> Whatsapp: </h3>
        <v-icon size="100" color="green" icon="mdi-whatsapp"></v-icon>
        <a href="https://whatsapp.com" target="_blank"> +57 3100000555 </a>
      </v-col>
    </v-row>

    <v-row class="mt-n4 pl-15">
      <v-col cols="6">
        <h3 class="pl-2"> Ubicación: </h3>
        <v-icon size="100" icon="mdi-home-circle"></v-icon>
        <a href="https://www.google.com/maps/?hl=es" target="_blank"> Carrera 30 # 25-23 </a>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "contact_vue",
};
</script>

<style>
#contact {
  margin: 2px !important;
}
</style>
