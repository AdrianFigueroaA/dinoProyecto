<template>
  <div class="infotabla">
    <b-container fluid>

      <div  class="botonLogout">
<b-button  id="botonlogout" variant="danger" @click="logOut()">Cerrar Sesión</b-button>
      </div>
      

      <h1>
        Portal de Modificación de Especímenes
      </h1>
          <AgregarDinos class="agregar" />
       
      <div  class="tabla">
        <b-table-simple>
        
          <b-thead>
            <b-tr>
              <b-th>Nombre</b-th>
              <b-th>Altura</b-th>
              <b-th>Largo</b-th>
              <b-th>Peso</b-th>
              <b-th>Datacion</b-th>
              <b-th>Habitat</b-th>
              <b-th>Tipo</b-th>
              <b-th>Alimentacion</b-th>
              <b-th>curiosidades</b-th>
              <b-th>imagenes</b-th>
              <b-th>Acciones</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr v-for="(especie, index) in Dinosaurios" :key="index">
              <b-td>{{ especie.nombre }}</b-td>
              <b-td>{{ especie.altura }}</b-td>
              <b-td>{{ especie.largo }}</b-td>
              <b-td>{{ especie.peso }}</b-td>
              <b-td>{{ especie.datacion }}</b-td>
              <b-td>{{ especie.habitat }}</b-td>
              <b-td>{{ especie.tipo }}</b-td>
              <b-td>{{ especie.alimentacion }}</b-td>
              <b-td>{{ formatText(especie.curiosidades) }}</b-td>
              <b-td><b-img :src="especie.img" fluid alt="Fluid image"></b-img></b-td>
              <b-td> <EditarDinos :especie="especie" variant="success" class="editar" /></b-td>
              <b-td><b-button pill variant="danger" id="borrar"  @click="borrar(especie.id)">Borrar</b-button></b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </div>
    </b-container>
    <div class="link-id">
          <a href="https://github.com/AdrianFigueroaA">
            Desarrollado  por <span>Adrian Figueroa.</span></a>
        </div>
  </div>
</template>

<script>
import AgregarDinos from "@/components/AgregarDinos.vue";
import EditarDinos from "@/components/EditarDinos.vue";
import { mapActions, mapState } from "vuex";
import firebase from "firebase";
export default {
  name: "Tablainfo",
  components: {
    AgregarDinos,
    EditarDinos,
  },

  data() {
    return {
      dinosaurio: {
        data: {
          nombre: "",
          altura: "",
          largo: "",
          alimentacion: "",
          habitat: "",
          datacion: "",
          peso: "",
          tipo: "",
          curiosidades: "",
          img: "",
        },
      },
    };
  },
  computed: {
    ...mapState("Datos", ["Dinosaurios"]),
  },
  methods: {
    ...mapActions("Datos", ["borrarDino"]),

    borrar(id) {
      this.borrarDino(id);
    },

    formatText(text) {
      return text.slice(0, 70) + "...";
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
  },
};
</script>

<style lang="scss">
.tabla {

  
  font-family: "Open Sans", sans-serif;
  margin-top: 50px;
  th{
    border: 0;
  }


  .table thead th{

     border-bottom: 0;
  }

  td{
    vertical-align: middle;
  }


}



.link-id {
    display: flex;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
      a {
          color: black ;
          span {    

            color: #099745;
          }
      } 

    
}


.btn {
  border-radius: 50px !important;
  
}

h1 {
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.infotabla {
  padding-top: 15px;
  padding-bottom: 40px;
}

.botonLogout{

  display: flex;
justify-content: flex-end;
font-family: "Open Sans", sans-serif;
}
</style>
