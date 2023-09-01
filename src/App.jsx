import React from 'react';
import Props from './Temario/Props';
/*Desde el componente App le estoy mandando informacion 
al componente props*/
const App = () => {
  return (
    <>
      <Props nombre={"Cecilia"} apellido={"Cafferata"} />
    </>
  );
};

export default App;