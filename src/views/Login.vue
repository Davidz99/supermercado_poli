<template>
  <div class="py-4">
    <v-card color="green" class="mx-auto pa-2 pb-2 text-center" elevation="6" width="448"> INICIO DE SESIÓN </v-card>

    <v-card class="mx-auto pa-4 px-8 pb-0" elevation="6" max-width="448">
      <div class="text-subtitle-1 text-medium-emphasis text-center" style="font-weight: 600">ROL</div>

      <v-select label="Seleccionar rol" :items="['ADMINISTRADOR', 'PROVEEDOR']"></v-select>

      <div class="text-subtitle-1 text-medium-emphasis text-center mt-n2" style="font-weight: 600">USUARIO</div>

      <v-text-field density="compact" placeholder="Usuario" prepend-inner-icon="mdi  mdi-account" variant="outlined"></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis text-center mt-n2" style="font-weight: 600">CONTRASEÑA</div>

      <v-text-field
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="****************"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
      ></v-text-field>

      <p class="text-caption text-decoration-none">
        Olvidaste tu contraseña? Haz click
        <a class="text-caption text-decoration-none text-green" href="#" rel="noopener noreferrer" target="_blank"> aqui</a>
      </p>

      <v-row class="mt-2">
        <v-col cols="6">
          <v-checkbox label="Recordarme"></v-checkbox>
        </v-col>

        <v-col cols="6">
          <v-btn block class="mb-0" color="green" size="large"> INGRESAR </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "login_vue",
};
</script>
