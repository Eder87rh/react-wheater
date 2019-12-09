import React, { useState } from 'react';

const Formulario = () => {

  // state del componente
  const [ busqueda, guardarBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })
  
  const handleChange = e => {
    // Cambiar el state
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
    
    console.log("TCL: Formulario -> busqueda", busqueda)
  }

  return ( 
    <form action="">
      <div className="input-field col s12">
        <input 
          type="text" 
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
        />
        <label htmlFor="ciudad" > Ciudad: </label>
      </div>

      <div className="input-field col s12">
        <select name="pais" id="pais" onChange={handleChange}>
          <option value="">Selecciona un país</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value ="Buscar Clima"/>
      </div>

    </form> 
  );
}
 
export default Formulario;