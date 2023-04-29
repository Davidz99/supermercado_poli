import config from "../config.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp(config);
const db = app.firestore();

const getCategorias = async () => {
  const categorias = db.collection("categorias");
  let data = await categorias.get();
  return new Promise((resolve, reject) => {
    try {
      let array_categorias = [];

      for (let item of data.docs) {
        array_categorias.push(item.data());
      }

      resolve(array_categorias);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const getUsuarios = async () => {
  const usuarios = db.collection("usuarios");
  let data = await usuarios.get();
  return new Promise((resolve, reject) => {
    try {
      let array_usuarios = [];

      for (let item of data.docs) {
        array_usuarios.push(item.data());
      }

      resolve(array_usuarios);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const getProductos = async () => {
  const productos = db.collection("productos");
  let data = await productos.get();
  return new Promise((resolve, reject) => {
    try {
      let array_productos = [];

      for (let item of data.docs) {
        array_productos.push(item.data());
      }

      resolve(array_productos);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const agregarProducto = async (registro) => {
  return new Promise((resolve, reject) => {
    try {
      const productos = db.collection("productos");

      productos.add({
        id: parseInt(registro.id),
        nombre: registro.nombre,
        descripcion: registro.nombre,
        activo: registro.activo,
        cantidad: parseInt(registro.cantidad),
        precio: parseInt(registro.precio),
        proveedor: registro.proveedor,
        foto: registro.foto,
        categoria_1: registro.categoria_1,
        categoria_2: registro.categoria_2,
        categoria_3: registro.categoria_3,
        categoria_4: registro.categoria_4,
        categoria_5: registro.categoria_5,
      })

      resolve(true);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const actualizarProducto = async (registro) => {
  return new Promise((resolve, reject) => {
    try {
      const productos = db.collection("productos");

      productos.doc(registro.id).set({
        id: parseInt(registro.id),
        nombre: registro.nombre,
        descripcion: registro.nombre,
        activo: registro.activo,
        cantidad: parseInt(registro.cantidad),
        precio: parseInt(registro.precio),
        proveedor: registro.proveedor,
        foto: registro.foto,
        categoria_1: registro.categoria_1,
        categoria_2: registro.categoria_2,
        categoria_3: registro.categoria_3,
        categoria_4: registro.categoria_4,
        categoria_5: registro.categoria_5,
      })

      resolve(true);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const removerProducto = async (registro) => {
  return new Promise((resolve, reject) => {
    try {
      const productos = db.collection("productos");

      productos.doc(registro.id).delete({
        id: parseInt(registro.id),
        nombre: registro.nombre,
        descripcion: registro.nombre,
        activo: registro.activo,
        cantidad: parseInt(registro.cantidad),
        precio: parseInt(registro.precio),
        proveedor: registro.proveedor,
        foto: registro.foto,
        categoria_1: registro.categoria_1,
        categoria_2: registro.categoria_2,
        categoria_3: registro.categoria_3,
        categoria_4: registro.categoria_4,
        categoria_5: registro.categoria_5,
      })

      resolve(true);
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

const toDataURL = (url) => {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        resolve(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }) 
}

export default {
  getCategorias,
  getUsuarios,
  getProductos,
  agregarProducto,
  actualizarProducto,
  removerProducto,
  toDataURL
};
