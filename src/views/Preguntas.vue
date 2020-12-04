<template>
  <div class="preguntas">
    <b-container >

      
      <h1>Preguntas Frecuentes</h1>
      <br />

      <div class="respuestas">
      <h1>
         ¿Los seres humanos vieron a los dinosaurios?
      </h1>
      <p>
        El último dinosaurio camino sobre la Tierra hace unos 66 millones de
        años, al final del periodo Cretácico. Los primeros seres humanos
        parecidos a nosotros no aparecieron hasta hace unos 150.000 años, es
        decir, 65.850.000 años mas tarde. Por lo tanto, es imposible que alguien
        haya visto un dinosaurio vivo.
      </p>

      <h1> Los dinosaurios formaban rebaños?</h1>
      <p>
        Existen numerosas pruebas de que muchas especies de dinosaurios formaban
        rebaños. En algunas zonas se han encontrado cientos e incluso miles de
        huesos de una misma especie de dinosaurio, en lo que los científicos
        llaman “lechos de huesos». Estos montones de huesos se reunieron
        probablemente cuando toda una gran manada de dinosaurios murió por una
        inundación repentina o un corrimiento de tierras.
      </p>
      <br />

      <h1> ¿Eran inteligentes los dinosaurios?</h1>
      <p>
        Aunque en ciertas especies el cráneo fuera de tamaño reducido, los
        dinosaurios no solo no carecían de inteligencia, sino que algunos la
        tenían muy desarrollada y poseían cerebros sorprendentemente voluminosos
        para un reptil.
      </p>
      <br />

      <h1> ¿Donde ponían sus huevos los dinosaurios?</h1>
      <p>
        Los dinosaurios ponían sus huevos principalmente en nidos. Los
        Maiasaura, por ejemplo, construían su nido en forma de cúpula y lo
        cubrían de vegetación. Otros eran mucho menos cuidadosos en la
        construcción de sus nidos. Algunos dinosaurios no ponían sus huevos en
        lugar determinado alguno, pero siempre los dejaban a salvo de los
        depredadores.
      </p>

      <br />

      <h1> ¿Los dinosaurios emigraban?</h1>

      <p>
        Los dinosaurios emigraban a grandes distancias, buscando nuevos
        territorios de caza, pastos o lugares para reproducirse. Los científicos
        saben por los restos que han encontrado que algunos dinosaurios incluso
        cruzaban continentes enteros, de forma similar a como lo hacen los
        animales que viven hoy en día.
      </p>
      <br />

      <h1> ¿Cuál fue el mayor dinosaurio?</h1>
      <p>
        El Seismosaurus quizá fuera el dinosaurio más grande que ha existido.
        Aun están excavando para desenterrar parte de un esqueleto encontrado en
        EE.UU. Este fenómeno pudo medir 36,5 metros de longitud, como una pista
        de tenis y media. Probablemente pesaba unas 51 toneladas, más que nueve
        elefantes africanos juntos.
      </p>
      <br />

      <h1> ¿Cuál es el mayor esqueleto completo?</h1>
      <p>
        El esqueleto completo más grande que se ha encontrado es de un
        Brachiosaurus, hallado en Tanzania, África. Medía 16,6 metros de alto, y
        23 metros de longitud. El Brachiosaurus podía haber pesado hasta 30
        toneladas, lo mismo que 22 coches grandes.
      </p>

      <br />

      <h1>
         ¿Los dinosaurios vivían en el mar?
      </h1>
      <p>
        No hubo dinosaurios que permanecieran siempre en el mar, como las
        ballenas y los delfines actuales. Por supuesto, podían vadear aguas poco
        profundas, o incluso nadar por el mar a cortas distancias, como los
        caballos de hoy. Pero no vivían en el mar; Así animales como el
        Plesiosaurus, que era marino, no era un dinosaurio.
      </p>

      <br />

      <h1> ¿Cuánto vivía un dinosaurio?</h1>
      <p>
        Es prácticamente imposible averiguar la edad exacta que tenían al morir
        los dinosaurios encontrados. Aun así, varios científicos intentan
        descubrir el ritmo de crecimiento de los huesos de algunos grupos, algo
        parecido a contar los anillos del tronco de un árbol para saber su edad.
        Creen que el Massospondylus, uno de los primeros dinosaurios, vivía
        entre 30 y 70 años, casi como los humanos.
      </p>
      <br />

      <h1>
         ¿Cuántas clases de dinosaurios hubo?
      </h1>
      <p>
        Hasta ahora se conocen unos 1.000 tipos de dinosaurios, pero las únicas
        pruebas que tenemos son huesos fósiles, y quizá no se haya conservado
        ningún resto de muchos grupos. Por eso, nunca sabremos exactamente
        cuántas clases de dinosaurios existían.
      </p>

      <br />

      <h1>
         ¿Los dinosaurios trepaban a los árboles?
      </h1>
      <p>
        Algunos de los dinosaurios mas pequeños eran agiles y pesaban poco, y
        quizá correteaban entre las ramas. No obstante, en su gran mayoría los
        dinosaurios eran demasiado corpulentos como para instalarse cómodamente
        en los arboles.
      </p>
      </div>
      
      <br />

      Fuente: Paleontólogos del Museo de Ciencias Naturales "Bernardino
      Rivadavia"
    </b-container>
  </div>
</template>

<script>
export default {
name:"Preguntas"

};
</script>

<style lang="scss">
.preguntas {
  
  margin: auto;
  padding-bottom: 20px;
  text-align: justify;
  font-family: "Open Sans", sans-serif;
  padding-top: 80px;

 
}


.respuestas{

 color: black;
 

  h1 {
    font-size: 30px;
    color: #099745;
  }

}

h1 {
  text-align: center;
}


@media (max-width: 500px) {

.preguntas{

padding-top: 60px;

}

}




</style>
