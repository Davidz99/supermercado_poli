import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VueFire from "vuefire"

var cart= [];
export default cart;

loadFonts()

createApp(App).use(router)
  .use(vuetify, VueFire)
  .mount('#app')

  
