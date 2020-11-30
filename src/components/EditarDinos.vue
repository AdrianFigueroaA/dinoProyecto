<template>
  <div>
    <div>
      <b-button
        pill
        variant="primary"
        id="show-btn"
        @click=" editar(especie), $bvModal.show('bv-modal-edit' + especie.id)"
        >Editar</b-button
      >

      <b-modal :id="'bv-modal-edit' + especie.id" hide-footer>
        <div class="d-block text-center">
          <h3>Editar Especie</h3>
        </div>
        <div class="d-block text-center">
          <b-form>
            <b-form-input
              v-model="dinosaurio.data.nombre"
              label="Nombre"
              placeholder="Nombre"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.habitat"
              label="Habitat"
              placeholder="Habitat"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.altura"
              label="altura"
              placeholder="Altura"
            ></b-form-input>
            <b-form-input
             
              v-model="dinosaurio.data.largo"
             label="largo"
              placeholder="largo"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.peso"
              label="peso"
              placeholder="Peso"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.datacion"
              label="datacion"
              placeholder="Datacion"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.alimentacion"
              label="alimentacion"
              placeholder="Alimentacion"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.tipo"
              label="tipo"
              placeholder="Tipo"
            ></b-form-input>
            <b-form-input
              v-model="dinosaurio.data.curiosidades"
              label="curiosidades"
              placeholder="curiosidades"
            ></b-form-input>
          </b-form>
        </div>
        <b-button
        variant="success"
          class="mt-3"
          block
          @click="
            EditarDino(),
              ClearData(),
              $bvModal.hide('bv-modal-edit' + especie.id)
          "
          >Aplicar Cambios</b-button
        >
        <b-button
        variant="danger"
          class="mt-3"
          block
          @click="$bvModal.hide('bv-modal-edit' + especie.id)"
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
  name: "EditarDinos",
  data() {
    return {
      dinosaurio: {
        data: {
          nombre: "",
          altura: "",
          largo:"",
          alimentacion: "",
          habitat: "",
          datacion: "",
          peso: "",
          tipo: "",
          img:"",
          curiosidades:"",
          
        },
      },
    };
  },

  props: {
    especie: Object,
  },

  computed: {
    ...mapState("Datos", ["Dinosaurios"]),
  },

  methods: {
    ...mapActions("Datos", ["editDino"]),

    EditarDino() {
      this.editDino(this.dinosaurio);
      console.log("editando",this.dinosaurio);
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
      this.dinosaurio.img = "";
      this.dinosaurio.largo = "";
    },

    editar(especie) {
      this.dinosaurio.id = especie.id;
      this.dinosaurio.data.tipo = especie.tipo;
      this.dinosaurio.data.nombre = especie.nombre;
      this.dinosaurio.data.altura = especie.altura;
      this.dinosaurio.data.largo = especie.largo;
      this.dinosaurio.data.peso = especie.peso;
      this.dinosaurio.data.habitat = especie.habitat;
      this.dinosaurio.data.alimentacion = especie.alimentacion;
      this.dinosaurio.data.datacion = especie.datacion;
      this.dinosaurio.data.curiosidades = especie.curiosidades;
      this.dinosaurio.data.img = especie.img;
     
    },
  },
};
</script>
