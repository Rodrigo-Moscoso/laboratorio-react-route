import React from "react";
import { Link, useParams } from "react-router-dom";

function Personaje() {
  let { idPersonaje } = useParams();
  let infoPersonaje = "";
  if (idPersonaje === "Gates") {
    infoPersonaje =
      "Es un empresario, informático y filántropo estadounidense, conocido por haber creado y fundado junto con Paul Allen, la empresa Microsoft. De igual forma es conocido por haber creado, también con Paul Allen, el sistema operativo para computadoras Windows";
  } else if (idPersonaje === "Jobs") {
    infoPersonaje =
      "Steven Paul Jobs ​​​​ fue un empresario, diseñador industrial, magnate empresarial, propietario de medios e inversor estadounidense. Fue cofundador y presidente ejecutivo de Apple​ y máximo accionista individual de The Walt Disney Company";
  } else if (idPersonaje === "Lovelace") {
    infoPersonaje =
      "Británica, 1815–1852. Su padre fue el famoso poeta Lord Byron, a quien no conoció porque se separó de su madre, la poeta y matemática Anna Isabella Milbanke, al mes de nacer. ";
  } else if (idPersonaje === "Turing") {
    infoPersonaje =
      "Británico, 1912–1954. Es considerado uno de los padres de la computación moderna y de la Inteligencia Artificial. Siendo joven destacó por su afición a los deportes, pues participaba en maratones y recorría más de 100 km en bicicleta.";
  } else if (idPersonaje === "Knuth") {
    infoPersonaje =
      "Estadounidense (1938-act.). El padre del análisis de algoritmos. Fue Premio Turing en 1974 y algunos le llaman el Yoda de la programación. Sus trabajos ayudaron a crear los modernos compiladores que se usan hoy día para crear software (convierten el lenguaje de los programadores al lenguaje binario).";
  }

  return (
    <div>
      <Link to="/ListaPersonajes">Lista de Personajes</Link>
      <p>
        Introduzca en la url el apellido para desplegar información del
        personaje.
      </p>

      <p>
        El personaje <b>{idPersonaje} </b>tiene esta información:
      </p>
      <p> {infoPersonaje} </p>
    </div>
  );
}

export default Personaje;
