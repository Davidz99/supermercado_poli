<template>
    <v-card style="overflow-y: auto !important" variant="text" elevation="0" max-height="500">
        <h1>Tu Carrito de compras <v-icon>mdi-cart</v-icon> </h1>

    <v-row class="mt-n6 pa-5" id="contenedor_productos">
    <v-col v-for="producto in productosCargados" :key="producto.id" cols="2" class="vino">
        <v-card border style="font-size: 10px" class="mb-2 producto" density="compact" variant="text" elevation="3">
        <!--<v-img :src="require(`@/assets/${fila.img}`)" height="140"></v-img>-->

        <v-card-title style="font-size: 14px"> {{ producto.nombre }} </v-card-title>
        <v-card-text style="font-size: 15pt"> {{ producto.precio }} </v-card-text>

        <v-btn @click="removeItemFromCart(producto)" class="mt-n2" block color="green" variant="text"> ELIMINAR DEL CARRITO
        </v-btn>

        </v-card>
    </v-col>
    </v-row>
    </v-card>
</template>

<script>


import cart from "../main.js";

export default {
name: "store_vue",
data: () => ({
    productosCargados:cart,
    categories: null,
    categoriaSeleccionada: null,
    dialog: false,

    // productos base de datos
    productos: [],
    productosEnCarrito: [],
}),
methods:{
    removeItemFromCart(producto){
        console.log(cart.length + " Cart antes")
        console.log(this.productosCargados.length + " Products antes")
        const index = this.productosCargados.indexOf(producto)
        if (index !== -1) {
        this.productosCargados.splice(index, 1);
    }

        console.log(cart.length + "  Cart despues")
        console.log(this.productosCargados.length + " Products despues")

},


}

};
</script>


