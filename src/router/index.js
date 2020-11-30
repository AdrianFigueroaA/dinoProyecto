import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import firebase from "firebase";
Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/especies",
    name: "Especies",
    component: () =>
      import(/* webpackChunkName: "especies" */ "../views/Especies.vue"),
  },
  
  {
    path: "/tablainfo",
    name: "TablaInfo",
    component: () =>
      import(/* webpackChunkName: "tablainfo" */ "../views/TablaInfo.vue"),
      meta: {
             autentificado: true,
          },
  },
  {
    path: "/articulos",
    name: "Articulos",
    component: () =>
      import(/* webpackChunkName: "articulos" */ "../views/Articulos.vue"),
     
  },
  {
    path: "/portada",
    name: "Portada",
    component: () =>
      import(/* webpackChunkName: "portada" */ "../views/Portada.vue"),
     
  },
  {
    path: "/articulo1",
    name: "Articulo1",
    component: () =>
      import(/* webpackChunkName: "articulo1" */ "../views/Articulo1.vue"),
     
  },
  {
    path: "/articulo2",
    name: "Articulo2",
    component: () =>
      import(/* webpackChunkName: "articulo2" */ "../views/Articulo2.vue"),
     
  },
  {
    path: "/articulo3",
    name: "Articulo3",
    component: () =>
      import(/* webpackChunkName: "articulo3" */ "../views/Articulo3.vue"),
     
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
 
  {
    path: "/preguntas",
    name: "Preguntas",
    component: () =>
      import(/* webpackChunkName: "preguntas" */ "../views/Preguntas.vue"),
  },
  {
    path: "/loginadmin",
    name: "LoginAdmin",
    component: () =>
      import(/* webpackChunkName: "loginAdmin" */ "../views/LoginAdmin.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

});

router.beforeEach((to, from, next) => {
  let usuario = firebase.auth().currentUser;
  let autorizacion = to.matched.some((record) => record.meta.autentificado);

  if (!autorizacion && usuario) {
    next();
  } else if (autorizacion && !usuario) {
    next("home");
  } else {
  //   
   }
   next();
});



export default router
