<template>
  <div>
    <div class="modalAgregar">
      <b-button
        variant="success"
        id="show-btn"
        class="boton-agregar"
        @click="$bvModal.show('bv-modal-Agregar')"
        >Agregar Especie +</b-button
      >

      <b-modal id="bv-modal-Agregar" hide-footer>
        <div class="d-block text-center ">
          <h3>Agregar Especie</h3>
        </div>

        <div class="d-block text-center">
          <b-form class="mx-2">
            <b-form-input
              v-model="dinosaurio.nombre"
              label="Nombre"
              placeholder="Nombre"
              id="nombre"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.habitat"
              label="Habitat"
              placeholder="Habitat"
              id="habitat"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.altura"
              label="altura"
              placeholder="Altura"
              id="altura"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.largo"
              label="largo"
              placeholder="Largo"
              id="largo"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.peso"
              label="peso"
              placeholder="Peso"
              id="peso"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.datacion"
              label="datacion"
              placeholder="Datacion"
              id="datacion"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.alimentacion"
              label="alimentacion"
              placeholder="Alimentacion"
              id="alimentacion"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.tipo"
              label="tipo"
              placeholder="Tipo"
              id="tipo"
            ></b-form-input>

            <b-form-input
              v-model="dinosaurio.curiosidades"
              label="curiosidades"
              placeholder="curiosidades"
              id="curiosidades"
            ></b-form-input>

        
          </b-form>
        </div>
        <b-button
          id="agregarEspecimen"
          variant="success"
          class="mt-3 button-add"
          block
          @click="
            AgregarDino(),
              ClearData(),
              $bvModal.hide('bv-modal-Agregar'),
             subirImagen() 
          "
          >Agregar Especimen</b-button
        >
        <b-button
          class="mt-3 button-close "
          variant="danger"
          block
          @click="$bvModal.hide('bv-modal-Agregar')"
          >Cancelar</b-button
        >
      </b-modal>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import firebase from "firebase";
export default {
  name: "AgregarDinos",
  data: () => ({
    dinosaurio: {
      nombre: "",
      altura: "",
      alimentacion: "",
      habitat: "",
      datacion: "",
      peso: "",
      tipo: "",
      curiosidades: "",
      largo: "",
    },
    
  }),
  methods: {
    ...mapActions("Datos", ["addData"]),
    AgregarDino() {
      this.addData(this.dinosaurio);
    },
    ClearData() {
      this.dinosaurio.nombre = "";
      this.dinosaurio.altura = "";
      this.dinosaurio.alimentacion = "";
      this.dinosaurio.habitat = "";
      this.dinosaurio.datacion = "";
      this.dinosaurio.peso = "";
      this.dinosaurio.tipo = "";
      this.dinosaurio.curiosidades = "";
      this.dinosaurio.largo = "";
    },
  },
};
</script>
<style lang="scss">
.modalAgregar {
  text-align: center;
  font-family: "Open Sans", sans-serif;
  color: black;
  font-weight: bold;
}

h3 {
  font-family: "Fjalla One", sans-serif;
}
.boton-agregar {
  margin-top: 15px;
}

.btn {
  font-family: "Fjalla One", sans-serif;
  font-size: 16px;
  border-radius: 50px !important;
}
</style>
