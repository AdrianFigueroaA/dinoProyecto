import firebase from "firebase";

export default {
  namespaced: true,
  state: {
    Dinosaurios: [],
    add: false,
  },
  getters: {
    datos(state) {
      return state.Dinosaurios;
    },
  },
  mutations: {
    setData(state, payload) {
      state.Dinosaurios = payload;
    },
    AddData(state, payload) {
      state.Dinosaurios.push(payload);
    },
    MostrarAdd(state) {
      state.add = !state.add;
    },
  },
  actions: {
    async getData({ commit }) {

     await firebase
        .firestore()
        .collection("especies")
        .onSnapshot((snapshot) => {
          let listadoEspecies = [];
          snapshot.forEach((p) => {
            listadoEspecies.push({
              id: p.id,
              nombre: p.data().nombre,
              altura: p.data().altura,
              largo: p.data().largo,
              alimentacion: p.data().alimentacion,
              habitat: p.data().habitat,
              datacion: p.data().datacion,
              peso: p.data().peso,
              tipo: p.data().tipo,
              curiosidades:p.data().curiosidades,
              img:p.data().img
            });
          });
          commit("setData", listadoEspecies);
          
        });
    },
    async addData({ commit }, payload) {
      const Dino = {
        peso: payload.peso,
        largo: payload.largo,
        altura: payload.altura,
        datacion: payload.datacion,
        nombre: payload.nombre.toLowerCase(),
        alimentacion: payload.alimentacion.toLowerCase(),
        tipo: payload.tipo.toLowerCase(),
        habitat: payload.habitat.toLowerCase(), 
        curiosidades: payload.curiosidades.toLowerCase(),       
      };

      try {
        await firebase
          .firestore()
          .collection("especies")
          .add(Dino);
      } catch (error) {
        console.error("Hay un error en la carga del Dinosaurio:", error);
      }
    },

     borrarDino({ commit }, id) {
      try {
         firebase
          .firestore()
          .collection("especies")
          .doc(id)
          .delete();
      } catch (error) {
        console.error("Hay un error en la eliminacion del Dinosaurio:", error);
      }
    },

     editDino({ commit }, dino ) {
      try {
         firebase
          .firestore()
          .collection("especies")
          .doc(dino.id)
          .update(dino.data);
      } catch (error) {
        console.error("hay un error en la edicion del Dinosaurio:", error);
      }
    },
  },
  
};
