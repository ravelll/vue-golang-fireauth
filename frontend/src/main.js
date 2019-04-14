import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

const config = {
  apiKey: "AIzaSyDOn8M_bRwfVeujXPN9F8pqw_tHPvM08HA",
  authDomain: "vue-golang-fireauth-b6b00.firebaseapp.com",
  databaseURL: "https://vue-golang-fireauth-b6b00.firebaseio.com",
  projectId: "vue-golang-fireauth-b6b00",
  storageBucket: "vue-golang-fireauth-b6b00.appspot.com",
  messagingSenderId: "959649760033"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
})

