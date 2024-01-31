import React, { useState } from 'react';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Cell, Legend } from 'recharts';

import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


export const data = [
    {name:"Apiux", value: 2400},
    {name:"Apiux2", value: 3400},
    {name:"Apiux3", value: 4400},
    {name:"Apiux4", value: 5400},
    {name:"Apiux5", value: 6400},
]
export const data2 = [
    {name:"Grupo A", value: 1400},
    {name:"Grupo B", value: 2400},
    {name:"Grupo C", value: 3400},
    {name:"Grupo D", value: 2400},
    {name:"Grupo F", value: 10000},
]

export const data3 = [
    {name:"Santander", value: 2800},
    {name:"Falabella", value: 3200},
    {name:"Itau", value: 4000},
    {name:"Chile", value: 1400},
    {name:"Estado", value: 6700},
]

const buttonStyle = {
  border: "1px solid #9a6fb0",
  borderRadius: "5px",
  padding: "0px 8px",
  margin: "10px 2px",
  fontSize: 14,
  color: "#9a6fb0",
  opacity: 0.7,
};

const COLORS = ['#7270bc', '#332edd', '#dd2ed4', '#2eddc7', '#9fdd2e', '#dda92e'];

const GraficoTortaReChart = () => {
  const [currentData, setCurrentData] = useState(data);

  const toggleDataBotones = () => {
    setCurrentData(currentData === data ? data2 : data);
  };

const toggleData = (event) => {
    const selectedData = event.target.value === "data" ? data : data2;
    setCurrentData(selectedData);
  };

  const toggleDataPrueba = (event) => {
    const selectedData = event.target.value === "data" ? data : event.target.value === "data2" ? data2 : data3;
    setCurrentData(selectedData);
  };


  return (
    <div style={{ width: '100%', height: 300 }}>
      <Button label="Primary"/>
      <button className="buttonStyle" onClick={toggleDataBotones}>Banco Bci</button>
      <button onClick={toggleDataBotones}>Banco Santander</button>
      <button onClick={toggleDataBotones}>Bancos</button>
    <br></br><br></br>

       <select onChange={toggleData}>
        <option value="data">Banco Bci</option>
        <option value="data2">Banco Santander</option>
        <option value="data3">Bancos</option>
      </select>

      <select onChange={toggleDataPrueba}>
        {data3.map((banco, index) => (
          <option key={index} value={banco.name}>{banco.name}</option>
        ))}
      </select>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={currentData}
            dataKey="value"
            innerRadius={70}
            outerRadius={125}
            fill="#82ca9d"
          >
            {currentData.map((entry, index) => (
              <Cell key={`cell=${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoTortaReChart;
