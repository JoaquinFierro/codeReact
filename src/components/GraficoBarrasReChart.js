import React, { useState } from 'react';
import { BarChart, CartesianGrid, ResponsiveContainer, XAxis,Bar, YAxis, Tooltip, Legend } from 'recharts'
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
        
import { Button } from 'primereact/button';


//Array que alimenta el grafico de barras.
const Santander = [
    {name:"Juan1", age: 10, weight:80, fecha: "2024-01-04"},
    {name:"Carmen", age:11, weight:60, fecha: "2024-01-10"},
    {name:"Matias", age:13, weight:65, fecha: "2024-01-11",},
    {name:"Miguel", age:15, weight:70, fecha: "2024-01-10"},
    {name:"Ruben", age:17, weight:75, fecha: "2024-01-11"},
    {name:"Pedro", age:19, weight:85, fecha: "2024-01-04"},
    {name:"Juan2", age:19, weight:85, fecha: "2023-01-04"},
    {name:"Juan3", age:19, weight:85, fecha: "2021-12-29"},
    {name:"Pedro", age:29, weight:90, fecha: "2021-12-29"},
    {name:"Claudio", age:25, weight:75, fecha: "2021-12-29"},
    {name:"Claudio1", age:25, weight:75, fecha: "2023-12-29"},
    {name:"Claudio2", age:25, weight:75, fecha: "2024-12-29"},
]

const Falabella = [
    {name:"Santander", age: 20, weight:80, fecha: "2024-01-04"},
    {name:"Falabella", age:12, weight:60, fecha: "2024-01-04"},
    {name:"Itau", age:3, weight:65, fecha: "2024-01-04"},
    {name:"Chile", age:5, weight:70, fecha: "2024-01-04"},
    {name:"Estado", age:7, weight:75, fecha: "2024-01-04"},
    {name:"Estado1", age:25, weight:85, fecha: "2024-01-04"},
]

const meses = [
    "01", "02", "03", "04", "05", "06", 
    "07", "08", "09", "10", "11", "12"
  ];

//Componente que dibuja el grafico de barras.
const GraficoBarrasReChart = () => {

    const [currentData, setCurrentData] = useState(Santander);
    const [diaSelecionado, setdiaSelecionado] = useState("");
    const [showPlaceholder, setShowPlaceholder] = useState(false);
    const [filtroPorFechas, setFiltroPorFechas] = useState("");
    const [mesSeleccionado, setMesSeleccionado] = useState("");
    // const [filtroPorMes, setFiltroPorMes] = useState(false);
    const [rangoFechas, setRangoFechas] = useState({ desde: "", hasta: "" });


    const toggleDataPrueba = (event) => {
    const selectedData = event.target.value === "Santander" ? Santander : event.target.value === "Falabella" ? Falabella : [];
    setCurrentData(selectedData);
    setShowPlaceholder(selectedData.length === 0);
    
    };
    
    // const filtroDiaEspecifico = item.filter(item => item.fecha === selectedDate);

    const filtrarPorFecha = (item, filtroPorFechas,rangoFechas) => {
        const fechaActual = new Date();
        const anioActual = fechaActual.getFullYear();
        
        switch (filtroPorFechas) {
            case "mes":
            // return item.fecha.split("-")[1] === `${mesActual}`;
            return mesSeleccionado === "" ? true : item.fecha.split("-")[1] === mesSeleccionado;
            case "busquedaDia":
            return diaSelecionado === "" ? true : item.fecha === diaSelecionado;
            case "Ultimas24horas":
            const hace24Horas = new Date();
            hace24Horas.setHours(hace24Horas.getHours() - 24);
            const fecha = new Date(item.fecha);
            return fecha >= hace24Horas && fecha <= new Date();
            case "rangoFechas":
            const desde = new Date(rangoFechas.desde);
            const hasta = new Date(rangoFechas.hasta);
            const fechaItem = new Date(item.fecha);
            return fechaItem >= desde && fechaItem <= hasta;
            case "ultimos30Dias":
            const haceTreintaDias = new Date(fechaActual);
            haceTreintaDias.setDate(fechaActual.getDate() - 30);
            return new Date(item.fecha) >= haceTreintaDias && new Date(item.fecha) <= fechaActual && new Date(item.fecha).getFullYear() === anioActual;
            case "añoAnterior":
            const anioAnterior = anioActual - 1;
            return new Date(item.fecha).getFullYear() === anioAnterior;
            case "ultimos5Años":
            const ultimosCincoAnios = anioActual - 5;
            return new Date(item.fecha).getFullYear() >= ultimosCincoAnios && new Date(item.fecha).getFullYear() <= anioActual;
            default:
            return true;
        }
    };

    const TiposFechas = currentData.filter((item) => {
        return filtrarPorFecha(item, filtroPorFechas, rangoFechas);
      });
    console.log(diaSelecionado,"diaseleccioando");

    return(
        <div>
            <Dropdown 
            value={currentData === Santander ? "Santander" : currentData === Falabella ? "Falabella" : null} 
            options={[
                { label: 'Santander', value: 'Santander' },
                { label: 'Falabella', value: 'Falabella' },
                { label: 'Otro Banco 1', value: 'Otro Banco 1' },
                { label: 'Otro Banco 2', value: 'Otro Banco 2' },
            ]} 
            onChange={(e) => toggleDataPrueba({ target: { value: e.value } })}
            placeholder="Seleccione un banco"
            className="w-full md:w-14rem"
            />

            <Dropdown value={filtroPorFechas}
                options={[
                { label: '-', value: '' },
                { label: 'Por mes', value: 'mes' },
                { label: 'Por Día', value: 'busquedaDia' },
                { label: 'Ultimas 24 horas', value: 'Ultimas24horas' },
                { label: 'Rango de Fechas', value: 'rangoFechas' },
                { label: 'Ultimos 30 Días', value: 'ultimos30Dias' },
                { label: 'Año anterior', value: 'añoAnterior' },
                { label: 'Ultimos 5 años', value: 'ultimos5Años' },
                ]}
                onChange={(e) => setFiltroPorFechas(e.value)}
                placeholder="Seleccione un filtro de fecha"
            />
            {/* <select onChange={(event) => setFiltroPorFechas(event.target.value)}>
                <option value="" style={{ textAlign: 'center' }}>-</option>
                <option value="mes">Por mes</option>
                <option value="busquedaDia">Por Dia</option>
                <option value="Ultimas24horas">Ultimas 24 horas</option>
                <option value="rangoFechas">Rango de Fechas</option>
                <option value="ultimos30Dias">Ultimos 30 Dias</option>
                <option value="añoAnterior">Año anterior</option>
                <option value="ultimos5Años">Ultimos 5 años</option>
            </select> */}
            
            {/* {filtroPorFechas === "mes" && (
                <select value={mesSeleccionado} onChange={e => setMesSeleccionado(e.target.value)}>
                <option value="">Seleccione un mes</option>
                {meses.map(mes => (
                    <option key={mes} value={mes}>{mes}</option>
                ))}
                </select>
            )} */}

            {filtroPorFechas === 'mes' && (
            <Dropdown value={mesSeleccionado}
                options={meses.map((mes) => ({ label: mes, value: mes }))}
                onChange={(e) => setMesSeleccionado(e.value)}
                placeholder="Seleccione un mes"
                />
            )}

            <br></br>
            {/* {filtroPorFechas === "rangoFechas" && (
                    <>
                    <label htmlFor="desde">Desde:</label>
                    <input
                        type="date"
                        id="desde"
                        value={rangoFechas.desde}
                        onChange={(e) => setRangoFechas({ ...rangoFechas, desde: e.target.value })}
                    />

                    <label htmlFor="hasta">Hasta:</label>
                    <input
                        type="date"
                        id="hasta"
                        value={rangoFechas.hasta}
                        onChange={(e) => setRangoFechas({ ...rangoFechas, hasta: e.target.value })}
                    />
                    </>
                )}
             */}
              {filtroPorFechas === 'rangoFechas' && (
                    <>
                    <label htmlFor="rangoFechas">Selecciona un rango de fechas:</label>
                    <Calendar
                        id="rangoFechas"
                        value={rangoFechas.desde}
                        onChange={(e) => setRangoFechas({ ...rangoFechas, desde: e.value })}
                        showIcon
                    />
                    <Calendar
                        id="rangoFechas"
                        value={rangoFechas.hasta}
                        onChange={(e) => setRangoFechas({ ...rangoFechas, hasta: e.value })}
                        showIcon
                    />
                    </>
                )}
            {/* este funciona correctamente, pero el nuevo de primeflex, no funcioa bien por el formato que devuelve */}
            {filtroPorFechas === "busquedaDia" && (
                    <>
                        <label htmlFor="diaSelecionado">Selecciona un día:</label>
                        <input
                        type="date"
                        id="diaSelecionado"
                        value={diaSelecionado}
                        onChange={(e) => setdiaSelecionado(e.target.value)}
                        />
                    </>
                )}

                {filtroPorFechas === 'busquedaDia' && (
                        <>
                        <label htmlFor="diaSelecionado">Selecciona un día:</label>
                        <Calendar
                            id="diaSelecionado"
                            value={diaSelecionado}
                            onChange={(e) => setdiaSelecionado(e.value)}
                            dateFormat="yy-mm-dd"
                            showIcon
                        />
                        </>
                    )}    

            <ResponsiveContainer width="100%" aspect={1.5}>
                <BarChart 
                data={TiposFechas} 
                width={400} 
                height={300}
                margin={{
                    top:5,
                    right:30,
                    left:20,
                    bottom:5
                }}
                >
                {showPlaceholder ? (
                     <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={20} fill="#999">
                     No existen datos para el banco
                   </text>
                ) : (
                    <>
                        <CartesianGrid strokeDasharray="4 1 2"/>
                        <XAxis dataKey="name"/> 
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="weight" fill="#6b48ff"/>
                        <Bar dataKey= "age" fill="#1ee3cf" />
                        {/* <Bar dataKey= "fecha" fill="#6b48ff" /> */}
                    </>
                )}
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default GraficoBarrasReChart



