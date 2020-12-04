<template>
  <div class="especies">
    <b-container>
      <hr />
      <h1>Especies</h1>

      <h2 class="sub">Descubre a estos animales que poblaron América!</h2>

      <b-row xs="12" md="12">
        <b-col v-for="(dino, i) in Dinosaurios" :key="i" md="4">
          <b-card>
            <b-img
              :src="dino.img"
              fluid-grow
              alt="Imagen Dinosaurio"
              style="height: 200px;"
            ></b-img>
            <b-card-text>
              {{ dino.nombre }}
            </b-card-text>

            <b-button
              variant="success"
              id="show-btn"
              @click="$bvModal.show(dino.id)"
              >Quieres Saber Mas?</b-button
            >

            <b-modal :id="dino.id" hide-footer>
              <b-row>
                <b-col> </b-col>
              </b-row>
              <template #modal-title class="d-block text-center">
                Using <code>$bvModal</code> Methods
              </template>
              <div class="d-block text-center">
                <h1>{{ dino.nombre }}</h1>

                <div class="descripcion">
                  <p>
                    {{ dino.curiosidades }}
                  </p>

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
                      </b-tr>
                    </b-thead>

                    <b-tbody>
                      <b-tr>
                        <b-td>{{ dino.nombre }}</b-td>
                        <b-td>{{ dino.altura }}</b-td>
                        <b-td>{{ dino.largo }}</b-td>
                        <b-td>{{ dino.peso }}</b-td>
                        <b-td>{{ dino.datacion }}</b-td>
                        <b-td>{{ dino.habitat }}</b-td>
                        <b-td>{{ dino.tipo }}</b-td>
                        <b-td>{{ dino.alimentacion }}</b-td>
                      </b-tr>
                    </b-tbody>
                  </b-table-simple>
                </div>
                <div class="imagen" fluid alt="Responsive image">
                  <b-img :src="dino.img" fluid alt="Fluid image"></b-img>
                </div>
              </div>

              <b-button
                class="mt-3"
                variant="success"
                block
                @click="$bvModal.hide(dino.id)"
                >Cerrar</b-button
              >
            </b-modal>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import firebase from "firebase";
export default {
  name: "Especies",

  data() {
    return {
      dinosaurios: {
        data: {
          nombre: "",
          altura: "",
          alimentacion: "",
          habitat: "",
          datacion: "",
          peso: "",
          tipo: "",
          curiosidades: "",
          img: "",
          id: "",
          largo: "",
        },
      },
    };
  },

  computed: {
    ...mapState("Datos", ["Dinosaurios"]),
  },
  methods: {
    ...mapActions("Datos", ["getData"]),
  },
};
</script>

<style lang="scss">
.especies {
  padding-top: 80px;
  padding-bottom: 20px;
  margin: auto;
  text-align: center;
  background: #e2e3ba;
}
.modal-header {
  display: none !important;
}

.modal-body {
  padding: 5px !important;
}
.descripcion {
  margin: 20px;

  > p {
    text-align: justify;
    font-family: "Open Sans", sans-serif;
  }
}

.imagen {
  margin-top: 10px;
}

.modal-dialog {
  max-width: 800px !important;
}

h1,
h2 {
  font-family: "Anton", sans-serif;
  font-size: 36px;
}

.sub {
  margin-bottom: 30px;
  margin-top: 25px;
}

.card {
  margin-bottom: 20px;
}

.card-text {
  font-family: "Fjalla One", sans-serif;
  font-size: 20px;
}

@media (max-width: 500px) {
  .table {
    display: none;
  }

  .especies {
    padding-top: 45px;
  }
}
</style>
