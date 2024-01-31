import React from 'react';

function Toolbar() {
  return (
    <div style={{ backgroundColor: '#333', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <button style={botones}>Tipo de Parque</button>
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
