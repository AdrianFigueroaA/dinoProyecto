<template>
  <div id="app">
    <NavBar />


      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    

    
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "app",
  components: {
    NavBar,
  },

  created() {
    this.getData()
  },

  methods: {
    ...mapActions("Datos", ["getData"]),
  },



  
};
</script>

<style lang="scss">
// configuracion de la transicion de las vistas
.fade-enter-active {
  transition: all 1s ease;
}
.fade-leave-active {
  transition: all 1s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateY(30px);
  opacity: 0;
}
</style>