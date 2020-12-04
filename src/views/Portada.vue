<template>
  <div>
    
      <div class="portada">
        <h1 class="titulo">DinoAustral</h1>

        <span class="subtext">Dinosaurios de Chile y Latinoamérica</span>
      </div>
   
  </div>
</template>

<script>
export default {
  name: "Portada",
};
</script>

<style lang="scss">
.portada {
  height: 650px;
  background-image: url("../assets/fondo-portada.jpg");
  display: flex;
  align-items: center;
  padding-left: 70px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;

  > div {
    margin-bottom: 130px;
    margin-left: 50px;
  }
}



h1.titulo {
  font-size: 55px;
  color: white;
  background: black;
  padding: 15px 25px;
  margin-bottom: 130px;
}

.subtext {
  background: #2ecc71;
margin-left: -235px;
  padding: 5px 10px;
  font-size: 25px;

  
}


@media (max-width: 500px) {
    .portada {
      height: 350px;
      
      display: flex;
      align-items: flex-end;
      padding-left: 0px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: right;


      align-items: center;
    }

    .subtext {
        background: #2ecc71;
        padding: 4px 10px;
        font-size: 25px;
    }

    h1.titulo {
        font-size: 35px;
        color: white;
        background: black;
        padding: 10px 37px;
        margin-bottom: 86px;
    }

.navbar {
    background-image: none;
}





  }
</style>
