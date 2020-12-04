<template>
  <div class="about">
    <b-container class="container-article">
      <div class="description-about">
        <h1>Quiénes Somos?</h1>

        <p>
          Somos un portal dedicado a la divulgación de animales
          prehistóricos, sobre todo dinosaurios de chile y latinoamérica, muchas
          veces muy poco conocidos por los habitantes de sudamérica. ¿Que pensarías si
          te contara que en sudamérica existió un dinosaurio de mayor tamaño y
          ferocidad que el famoso T-rex?! o que en Chile se encontró el eslabón
          perdido de los dinosaurios, la separación entre carnívoros y
          herbívoros, todo eso lo encontrarás aquí de forma clara y
          sencilla.
        </p>
      </div>

      <div class="imagenfondo"></div>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "About",

  components: {
    Footer,
  },
};
</script>

<style lang="scss">
.description-about {
  margin: auto;
  max-width: 1000px;
}

.description-about {

  >p{
margin-top: 20px;
  }
  
}

.about {
  margin: 10px;
  padding-top: 80px;
  margin: auto;
  font-family: "Open Sans", sans-serif;
  text-align: justify;   
}

.container-article {
  max-width: 800px;
}
.imagenfondo {
  background: url("https://firebasestorage.googleapis.com/v0/b/dinosaurios-de-chile.appspot.com/o/fondo_about.webp?alt=media&token=da4399e3-f41c-4efe-8d8d-2667223f90c4");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
  height: 400px;
  margin-bottom: 20px;
  margin-top: 50px;
  background-position: center;
}

@media (max-width: 500px) {
  .imagenfondo {
    height: 140px;
  }
}
</style>
