import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';


function App() {

  // State principal
  const [ ciudad, guardarCiudad ] = useState("");
  const [ pais, guardarPais ] = useState("");

  const datosConsulta = datos => {
    // Validar que ambos campos esten

    if(datos.ciudad === "" || datos.pais === ""){
      return;
    }

    // Ciudad y pais existen
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
  }

  return (
    <div className="App">
      <Header
        titulo="Clima React App"
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario datosConsulta={datosConsulta} />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;