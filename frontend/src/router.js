import Vue from "vue";
import firebase from "firebase";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Signup from "./components/Signup.vue";
import Signin from "./components/Signin.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "signin"
    },
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    {
      path: "/signin",
      name: "signin",
      component: Signin
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
