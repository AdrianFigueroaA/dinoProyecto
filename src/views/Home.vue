<template>
  <div class="home">
    <Portada />
    <Articulos />
    <Especies />
    <Preguntas />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Portada from "@/views/Portada.vue";
import Especies from "@/views/Especies.vue";
import Articulos from "@/views/Articulos.vue";
import Preguntas from "@/views/Preguntas.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Especies,
    Preguntas,
    Portada,
    Articulos,
    Footer
  },
};
</script>
