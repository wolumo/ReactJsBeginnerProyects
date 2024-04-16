import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from "react";

function App() {

const [numClics, setNumClics] = useState(0);



  const manejarClic = () => {
    setNumClics(numClics+1);
  }

  const RestarClic = () => {
    setNumClics(numClics-1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de FreeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <div className="contenedor-SumaResta">
        <Boton 
          texto="Suma"
          esBotonDeClic={true}
          esSuma={true}
          manejarClic={manejarClic}/>
          <Boton 
          texto="Resta"
          esBotonDeClic={true}
          esSuma={false}
          manejarClic={RestarClic}/>
        </div> 
          <div className="contenedor-Reiniciar">
          <Boton
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
          </div>
      </div>
     </div>
  );
}

export default App;
