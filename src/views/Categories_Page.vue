<template>
  <v-card
    style="overflow-y: auto !important"
    variant="text"
    elevation="0"
    max-height="500"
  >
    <v-navigation-drawer floating permanent>
      <v-list dense nav>
        <v-list-item
          @click="categoriaSeleccionada = 'despensa'"
          prepend-icon="mdi-barley"
          title="Despensa"
          value="despensa"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'carnes'"
          prepend-icon="mdi mdi-cow"
          title="Carnes, Pollo y Pescado"
          value="carnes"
        ></v-list-item>
        <v-list-item
          @click="categoriaSeleccionada = 'frutas'"
          prepend-icon="mdi-food-apple"
          title="Frutas y Verduras"
          value="frutas"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'panaderia'"
          prepend-icon="mdi mdi-baguette"
          title="Panadería"
          value="panaderia"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'vino'"
          prepend-icon="mdi-glass-wine"
          title="Vinos"
          value="vino"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'pets'"
          prepend-icon="mdi mdi-dog"
          title="Pets"
          value="pets"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'snaks'"
          prepend-icon="mdi mdi-popcorn"
          title="snaks"
          value="snaks"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item
          @click="categoriaSeleccionada = 'aseo'"
          prepend-icon="mdi-spray-bottle"
          title="Aseo"
          value="aseo"
        ></v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
      <v-col
        v-for="fila in productosFiltrados"
        :key="fila"
        cols="4"
        class="vino"
      >
        <v-card
          border
          style="font-size: 10px"
          class="mb-2"
          density="compact"
          variant="text"
          elevation="3"
        >
          <v-img
            :src="require(`@/assets/${fila.img}`)"
            height="140"
            style="cursor: pointer;"
            @click="
              productoSeleccionado = fila;
              dialog = true;
            "
          ></v-img>
          <v-card-title style="font-size: 14px">
            {{ fila.title }}
          </v-card-title>
          <v-card-text style="font-size: 15pt"> {{ fila.price }} </v-card-text>
          <v-btn class="mt-n2" block color="green" variant="text"
            >AÑADIR AL CARRITO</v-btn
          >
        </v-card>
      </v-col>
    </v-row>

    <!-- V-DIALOG DE CADA PRODUCTO -->
    <v-dialog v-model="dialog" class="my-dialog">
      <v-card class="my-card">
        <v-card-title class="text-center">
          {{ productoSeleccionado.title }}
        </v-card-title>
        <v-card-subtitle>{{ productoSeleccionado.price }}</v-card-subtitle>
        <v-card-text>
          <v-img
            :src="require(`@/assets/${productoSeleccionado.img}`)"
            width="300px"
            height="200px"
          />
          {{ productoSeleccionado.description }}
        </v-card-text>
        <v-btn class="mt-n2" block color="green" variant="text"
          >AÑADIR AL CARRITO</v-btn
        >
      </v-card>
      <v-card height="10%">
        <!--Boton de cierre de dialog-->
        <v-card-actions>
          <v-btn color="red" text @click="dialog = false"> Cerrar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "categories_vue",
  data: () => ({
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    array_productos: [
      {
        id: 1,
        title: "VINO SABROSO",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 2,
        title: "VINO SANTA HELENA",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 3,
        title: "VINO SANTA HELENA",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 4,
        title: "VINO SANTA HELENA",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 5,
        title: "VINO SANTA HELENA",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 6,
        title: "VINO SANTA HELENA",
        price: "$200,000",
        img: "vino_santa_helena.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 7,
        title: "VINO CASA BLANCA",
        price: "$170,000",
        img: "vino_casa_blanca.png",
        cant: 10,
        category: "vino",
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 8,
        title: "VINO CASA BLANCA",
        price: "$170,000",
        img: "vino_casa_blanca.png",
        category: "vino",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 9,
        title: "ARROZ DIANA",
        price: "$12,000",
        img: "arrozCatellano.png",
        category: "despensa",
        cant: 10,
        description: "El arroz es un producto bueno",
      },
      {
        id: 10,
        title: "PASTA DORIA",
        price: "$5,000",
        img: "pasta_doria.png",
        category: "despensa",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 11,
        title: "AVENA QUAKER",
        price: "$10,700",
        img: "avena_quaker.png",
        category: "despensa",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 12,
        title: "ACEITE PREMIER",
        price: "$48,990",
        img: "aceite_premier.png",
        category: "despensa",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
      {
        id: 13,
        title: "ACEITE PREMIER",
        price: "$48,990",
        img: "aceite_premier.png",
        category: "frutas",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },

      {
        id: 12,
        title: "ACEITE PREMIER",
        price: "$48,990",
        img: "aceite_premier.png",
        category: "frutas",
        cant: 10,
        description:
          "Este es el espacio de descripción, este información se cargará desde el CRUD e irá conectado con la base de datos, aquí se describirán brevemente las propiedades del producto",
      },
    ],
    productoSeleccionado: {},
  }),

  computed: {
    productosFiltrados() {
      if (this.categoriaSeleccionada) {
        return this.array_productos.filter(
          (producto) => producto.category === this.categoriaSeleccionada
        );
      } else {
        return this.array_productos;
      }
    },
  },
};
</script>

<style>
.my-dialog {
  position: fixed;
  z-index: 9999;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 1500px;
  height: 480px;
}
.my-card {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 520px;
  max-width: 1700px;
}
</style>
