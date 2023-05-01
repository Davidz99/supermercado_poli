<template>
  <div class="py-4">
    <v-card color="green" class="mx-auto pa-2 pb-2 text-center" elevation="6" width="448"> INICIO DE SESIÓN </v-card>

    <v-card class="mx-auto pa-4 px-8 pb-0" elevation="6" max-width="448">
      <div class="text-subtitle-1 text-medium-emphasis text-center" style="font-weight: 600">ROL</div>

      <v-select v-model="form.rol" label="Seleccionar rol" :items="['ADMINISTRADOR', 'PROVEEDOR']"></v-select>

      <div class="text-subtitle-1 text-medium-emphasis text-center mt-n2" style="font-weight: 600">USUARIO</div>

      <v-text-field
        v-model="form.usuario"
        density="compact"
        placeholder="Usuario"
        prepend-inner-icon="mdi  mdi-account"
        variant="outlined"
      ></v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis text-center mt-n2" style="font-weight: 600">CONTRASEÑA</div>

      <v-text-field
        v-model="form.contraseña"
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
        :type="visible ? 'text' : 'password'"
        density="compact"
        placeholder="****************"
        prepend-inner-icon="mdi-lock-outline"
        variant="outlined"
        @click:append-inner="visible = !visible"
        @keydown.enter="validarInicio"
      ></v-text-field>

      <p class="text-caption text-decoration-none">
        Olvidaste tu contraseña? Haz click
        <a class="text-caption text-decoration-none text-green" href="#" rel="noopener noreferrer" @click="restablecerContraseña">
          aqui</a
        >
      </p>

      <v-row class="mt-2">
        <v-col cols="6">
          <v-checkbox v-model="form.recordar" label="Recordarme"></v-checkbox>
        </v-col>

        <v-col cols="6">
          <v-btn @click="validarInicio" block class="mb-0" color="green" size="large"> INGRESAR </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>

  <v-snackbar v-model="alert.show">
    {{ alert.msj }}

    <template v-slot:actions>
      <v-btn color="green" variant="text" @click="alert.show = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import api from "../database/api.js";

export default {
  name: "login_vue",
  data: () => ({
    form: {
      rol: "",
      usuario: "",
      contraseña: "",
      recordar: null,
    },

    visible: null,

    alert: {
      type: "success",
      show: null,
      msj: "",
    },
  }),
  created() {
    if (sessionStorage.rol) {
      this.form.rol = sessionStorage.rol;
      this.form.usuario = sessionStorage.usuario;
      this.form.contraseña = sessionStorage.contraseña;
      this.form.recordar = true;
    }

    this.leerUsuarios();
  },
  methods: {
    async leerUsuarios() {
      try {
        this.usuarios = await api.getUsuarios();
        console.log(this.usuarios);
      } catch (err) {
        console.error(err);
      }
    },
    validarInicio() {
      console.log(this.form, "form");

      if (!this.form.rol) {
        return this.mostrarAlerta({ type: "warning", msj: "Rol no seleccionado!" });
      }

      if (!this.form.usuario || !this.form.contraseña) {
        return this.mostrarAlerta({ type: "warning", msj: "Campos sin llenar!" });
      }

      let reg_usuario = this.usuarios.find((e) => e.usuario == this.form.usuario);

      if (!reg_usuario) {
        return this.mostrarAlerta({ type: "warning", msj: "Usuario no existe!" });
      }

      if (this.form.contraseña == reg_usuario.contraseña && this.form.rol.toUpperCase() == reg_usuario.rol.toUpperCase()) {
        console.log(this.form.recordar, "recordar");
        if (this.form.recordar) {
          sessionStorage.rol = this.form.rol;
          sessionStorage.usuario = this.form.usuario;
          sessionStorage.contraseña = this.form.contraseña;
        }

        this.$router.push("crud");
      } else {
        return this.mostrarAlerta({ type: "warning", msj: "Usuario, rol o contraseña incorrectos!" });
      }
    },

    mostrarAlerta({ type = "", msj = "" } = {}) {
      this.alert.type = type || "warning";
      this.alert.show = true;
      this.alert.msj = msj || "Error";

      setTimeout(() => {
        this.alert.show = false;
      }, 2000);
    },

    restablecerContraseña() {
      this.mostrarAlerta({ type: "info", msj: "Opción deshabilitada temporalmente!" });
    },
  },
};
</script>
