<template>
  <div>
    <b-container>
      <div class="formulario1">
        <h2>Inicio de Sesión</h2>
        <form @submit.prevent="login" class="formulario">
          <h5 class="mx-auto">Ingresa tus Datos</h5>
          <input  id="usuario" v-model="usuario" type="text" placeholder="Usuario" />
          <input
          id="pass"
            v-model="contrasena"
            type="password"
            placeholder="Contraseña"
          />
        </form>

        <div class="botones">
          <b-button id="botonlog" size="sm" variant="info" @click="login()">
            Entrar Como Administrador
          </b-button>
        
          
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LoginAdmin",
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
          (user) => {
          
          
            
          this.$router.push("Tablainfo")
          
          },
          (error) => console.error(error)
        );
    },



///////////////////////////////////////////////////
    // logInGoogle() {
    //   const provider = new firebase.auth.GoogleAuthProvider();
    //   firebase
    //     .auth()
    //     .signInWithPopup(provider)
    //     .then((result) => {
    //       this.$router.push("Tablainfo");
          //   let user = {
          //     name: result.user.displayName,
          //     photoURL: result.user.providerData[0].photoURL,
          //     email: result.user.email,
          //   };
          //   this.createdUser(user);
        // });
      // .catch((error) => {
      //   console.log(error);
      // });
    // },

    //////////////////////////////////////////

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
  },
};
</script>

<style lang="scss">


.formulario1 {
  padding-top: 100px;
  text-align: center;
  font-family: "Fjalla One", sans-serif;
}
.botones {
  text-align: center;
  padding: 30px;
}
</style>
