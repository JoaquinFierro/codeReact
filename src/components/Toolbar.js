import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import GraficoBarrasVersion2 from './GraficoBarrasVersion2.js';


function Toolbar() {
  return (
    <div style={{ backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Dropdown 
            value={GraficoBarrasVersion2.currentData === GraficoBarrasVersion2.Santander ? "Santander" : GraficoBarrasVersion2.currentData === GraficoBarrasVersion2.Falabella ? "Falabella" : null} 
            options={[
                { label: 'Santander', value: 'Santander' },
                { label: 'Falabella', value: 'Falabella' },
            ]} 
            onChange={(e) => GraficoBarrasVersion2.toggleDataPrueba({ target: { value: e.value } })}
            placeholder="Seleccione un banco"
            className="w-full md:w-14rem"
            /> 

      <button style={botones}>Sucursal brinks</button>
      <button style={botones}>ATM</button>
      <button style={botones}>Desde</button>
      <button style={botones}>Hasta</button>
      <button style={botones}>Lupa</button>
    </div>
  );
}

const botones = {
  backgroundColor: '#555',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

export default Toolbar;
