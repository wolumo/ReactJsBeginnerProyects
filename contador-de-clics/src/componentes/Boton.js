import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton ({ texto, esBotonDeClic,esSuma, manejarClic }) {
  return (
    <button
     className={ esBotonDeClic ? esSuma ? "boton-clic-suma" : "boton-clic-resta" : "boton-reiniciar" }
     onClick={manejarClic}>
      {texto}
    </button>
  );
}

export default Boton;