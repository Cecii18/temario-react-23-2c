import React from 'react'

/*
Las props son propiedades que se le pueden pasar a un objeto 
Las props son una manera de pasar información de un 
componente a otro.

const Props = {props} => {
  return <></>Aca llamo al objeto y hago referencia a lo que quiero
}
const Props = ({nombre, apellido }) => {
    return <></>
}

*/
const Props = (props) => {
  return (
    <div> 
      <h1>PROPS</h1>
      <h2>{props.nombre}</h2>
      <h2>{props.apellido}</h2>
    </div>
  );
};


export default Props;