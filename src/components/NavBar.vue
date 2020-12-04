<template>
  <div class="barra-navegacion">
    <b-navbar toggleable="lg" type="dark" pb-5>
      <b-navbar-brand @click="scroll()" :to="{ name: 'Home' }">
        <img class="imagen_patas" src="../assets/icono_dino.svg" alt="Huella" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav
          v-if="
            $route.name === 'Home' ||
              $route.name === 'Especies' ||
              $route.name === 'Preguntas' ||
              $route.name === 'About' ||
              $route.name === 'Articulos' ||
              $route.name === 'Articulo1' ||
              $route.name === 'Articulo2' ||
              $route.name === 'Articulo3'
          "
        >
          <b-nav-item id="inicio" @click="scroll()" :to="{ name: 'Home' }">
            <span>Inicio</span>
          </b-nav-item>
          <b-nav-item
            id="especies"
            @click="scroll()"
            :to="{ name: 'Especies' }"
          >
            <span>Especies</span>
          </b-nav-item>
          <b-nav-item
            id="articulos"
            @click="scroll()"
            :to="{ name: 'Articulos' }"
          >
            <span>Artículos</span>
          </b-nav-item>
          <b-nav-item
            id="preguntas"
            @click="scroll()"
            :to="{ name: 'Preguntas' }"
          >
            <span>Preguntas Frecuentes</span>
          </b-nav-item>
          <b-nav-item id="about" @click="scroll()" :to="{ name: 'About' }">
            <span>Sobre Nosotros</span>
          </b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "NavBar",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.push("Tablainfo"),
          (error) => console.error(error)
        );
    },

    logOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push("/");
        })
        .catch((e) => {
          console.error("Sign Out Error", e);
        });
    },

    scroll() {
      // window.scrollTo(0,0)
      scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
  font-family: "Fjalla One", sans-serif;
}

.barra-navegacion {
  position: sticky;
  top: 0;
  z-index: 900;
}
span {
  font-family: "Fjalla One", sans-serif;
}

.navbar {
  background-image: url("../assets/portada.png");
  background-position: 99%;
  background-repeat: no-repeat;
  background-size: 32%;
  background-color: #27ae60;
  font-size: 20px;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
  justify-content: center;
  align-items: center;
}

.modal-footer {
  margin: auto;
}

.imagen_patas {
  width: 50px;
  transform: rotate(40deg);
}

.dropdown-item {
  text-align: center !important;
  font-family: "Fjalla One", sans-serif;
}

@media (max-width: 500px) {
  .navbar-nav.ml-auto {
    display: none;
  }
}
</style>
