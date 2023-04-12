<template>
  <div class="home">
    <v-row class="text-center row" style="height: 250px">
      <v-col cols="12">
        <label id="label_tienda">
          Los mejores <br />
          productos a tu <br />
          alcance
        </label>
        <v-img cover src="@/assets/tienda.jpg" style="height: 30%; width: 100%" />
      </v-col>
    </v-row>

    <v-row class="row" style="">
      <v-col cols="3">
        <p>
          Punto supermercado, el mejor lugar para comprar todo lo que necesitas.
          <br />
          <br />
          Con más de diez años ofreciendo productos de calidad.
          <br />
          <br />
        </p>

        <v-btn to="store" style="color: green !important"> COMPRAR AHORA </v-btn>
      </v-col>

      <v-col cols="3">
        <v-img src="@/assets/tienda_2.jpg" height="200" />
      </v-col>

      <v-col cols="3">
        <v-img src="@/assets/tienda_3.jpg" height="200" />
      </v-col>

      <v-col cols="3">
        <v-img src="@/assets/tienda_4.jpg" height="200" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home_vue",
};
</script>

<style>
#label_tienda {
  position: absolute !important;
  color: white;
  z-index: 9999;
  top: 30%;
  left: 7%;
  font-size: 20pt;
}

.row {
  margin: 2px !important;
}
</style>
