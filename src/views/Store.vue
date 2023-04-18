<style scoped>
  .producto{
    text-align: center;
  }
</style>
<template>
  <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">

    <h2 align="center" class="ma-5" style="color: green padding: 7px background-color: white">Supermercado</h2>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col v-for="fila in array_productos" :key="fila" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2 producto" density="compact" variant="text" elevation="3">
          <v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>

          <v-card-title style="font-size: 14px"> {{ fila.title }} </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ fila.price }} </v-card-text>

          <v-btn class="mt-n2" block color="green" variant="text">AÑADIR AL CARRITO</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  name: "store_vue",
  data: () => ({
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    array_productos: [
    { title: "VINO SABROSO", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO CASA BLANCA", price: "$120,000", img: "vino_casa_blanca.png", category: "vino" },
      { title: "VINO SIETE SOLES", price: "$200,000", img: "vino_siete_soles.jpg", category: "vino"},
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino" },
      { title: "VINO SANTA HELENA", price: "$200,000", img: "vino_santa_helena.png", category: "vino"},
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png", category: "vino" },
      { title: "VINO CASA BLANCA", price: "$170,000", img: "vino_casa_blanca.png", category: "vino" },
      { title: "ARROZ DIANA", price: "$12,000", img: "arrozCatellano.png", category: "despensa" },
      { title: "PASTA DORIA", price: "$5,000", img: "pasta_doria.png", category: "despensa" },
      { title: "AVENA QUAKER", price: "$10,700", img: "avena_quaker.png", category: "despensa" },
      { title: "ACEITE PREMIER", price: "$48,990", img: "aceite_premier.png", category: "despensa" },
    ],
  }),

 
};
</script>
