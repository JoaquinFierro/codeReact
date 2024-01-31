import React from 'react';

export const data = [
    {name:"Apiux", value: 2400},
    {name:"Apiux2", value: 3400},
    {name:"Apiux3", value: 4400},
    {name:"Apiux4", value: 5400},
    {name:"Apiux5", value: 6400},
    {name:"Apiux6", value: 4600},
    {name:"Apiux7", value: 34400},
    {name:"Apiux8", value: 41400},
    {name:"Apiux9", value: 52400},
    {name:"Apiux10", value: 63400},
    {name:"Apiux11", value: 24400},
    {name:"Apiux12", value: 34500},
    {name:"Apiux13", value: 41400},
    {name:"Apiux14", value: 56400},
    {name:"Apiux15", value: 61400},
]

const Top10Tabla = () => {
  // Ordena los datos en orden descendente según el valor
  const arreglo = [...data].sort((a, b) => b.value - a.value); 
  // const arreglo = [...data].sort((a, b) => a.value - b.value);


  // Toma los primeros 10 elementos después de ordenar
  const top10Data = arreglo.slice(0, 10);

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {top10Data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Top10Tabla;

