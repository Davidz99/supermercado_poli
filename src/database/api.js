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

export default {
  getCategorias,
  getUsuarios,
  getProductos,
};
