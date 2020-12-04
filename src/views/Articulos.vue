<template>
  <div class="articulos">
    <b-container>
      <h1>Artículos</h1>
      <h2>Conoce mas historias sobre la Paleontología</h2>

      <b-card no-body class="overflow-hidden">
        <b-row no-gutters>
          <b-col md="6" >
            <b-img
              fluid
              src="https://firebasestorage.googleapis.com/v0/b/dinosaurios-de-chile.appspot.com/o/articles-37995_imagen_03.jpg?alt=media&token=fbb890c3-fe3c-472e-b32a-614fb4f3518f"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Pelagornis chilensis">
              <b-card-text>
                El Ave mas grande del mundo vivió en Chile
              </b-card-text>
              <b-link :to="{ name: 'Articulo1' }" class="card-link"
                >Leer Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br />

      <b-card no-body class="overflow-hidden" >
        <b-row no-gutters>
          <b-col md="6">
            <b-img
              fluid
              src="https://firebasestorage.googleapis.com/v0/b/dinosaurios-de-chile.appspot.com/o/excavacion%20chilesaurus.jpg?alt=media&token=0ad14e01-a7f3-4416-af55-cf8baf0f02af"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body
              title="El dinosaurio chileno que revolucionó la paleontología mundial"
            >
              <b-card-text>
                El eslabón perdido del parque jurásico patagónico
              </b-card-text>
              <b-link :to="{ name: 'Articulo3' }" class="card-link"
                >Leer Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>

      <br />

      <b-card no-body class="overflow-hidden" >
        <b-row no-gutters>
          <b-col md="6" >
            <b-img
              fluid
              src="https://firebasestorage.googleapis.com/v0/b/dinosaurios-de-chile.appspot.com/o/Cerro-Guido-campan%CC%83a-800x533.jpg?alt=media&token=e26e492d-0252-405c-a134-74b9d1bf8069"
            ></b-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Patrimonio Paleontológico Chileno">
              <b-card-text>
                Una mirada a la paleontología de vertebrados
              </b-card-text>
              <b-link :to="{ name: 'Articulo2' }" class="card-link"
                >Leer Más!</b-link
              >
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style>
.articulos {
  margin: auto;
  font-family: "Fjalla One", sans-serif ;
  text-align: center !important;
  padding-top: 80px;
  padding-bottom: 80px;
}

.card {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.card-link {
  font-size: 25px;
  font-family: "Fjalla One", sans-serif;
  color: green;
}

.card-body:hover {
  background-color: #ecf0f1;
}

h2{

  margin-top: 20px;
  margin-bottom: 25px;
}

@media (max-width: 500px) {
  .articulos {
    padding-top: 50px;
  }
}
</style>
