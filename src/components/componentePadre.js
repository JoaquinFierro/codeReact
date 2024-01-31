import GraficoTortaReChart from "./GraficoTortaReChart.js";
import GraficoTortaVersion2 from "./GraficoTortaVersion2.js";
import GraficoBarrasReChart from "./GraficoBarrasReChart.js";
import GraficoBarrasVersion2 from "./GraficoBarrasVersion2.js";
import TablaTop10 from "./TablaTop10.js";
// import TablaTop10V2 from "./components/TablaTop10V2.js";
import React from 'react';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import Top10Tabla from "./TablaTop10.js";


const ComponentePadre = () => {
    return (
    <div>
        <div className="p-flex p-flex-wrap" style={{ display: 'flex', flexDirection: 'row', maxWidth: 'auto' }}>
            <div className="p-flex p-flex-wrap" style={{ display: 'flex', flex: '1', flexDirection: 'row', maxWidth: 'auto' }}>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoBarrasReChart style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 2</h2>
                    <GraficoBarrasVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 3</h2>
                    <GraficoBarrasVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoBarrasVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 1</h2>
                    <Top10Tabla style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
            </div>
        </div>

        <div className="p-flex p-flex-wrap" style={{ display: 'flex', flexDirection: 'row', maxWidth: 'auto' }}>
            <div className="p-flex p-flex-wrap" style={{ display: 'flex', flex: '1', flexDirection: 'row', maxWidth: 'auto'}}>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden', maxHeight: '500px'}}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoTortaVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' , maxHeight: '500px' }}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoTortaVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' ,maxHeight: '500px'}}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoTortaVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' ,maxHeight: '500px'}}>
                    <h2>Título del Gráfico 1</h2>
                    <GraficoTortaVersion2 style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <h2>Título del Gráfico 1</h2>
                    <Top10Tabla style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>  

        {/* <div className="p-flex p-flex-wrap" style={{ display: 'flex', flexDirection: 'row', maxWidth: 'auto' }}>
            <div className="p-flex p-flex-wrap" style={{ display: 'flex', flex: '1', flexDirection: 'row', maxWidth: 'auto' }}>
                <div className="p-flex-1 p-align-center p-justify-center p-bg-primary p-font-bold p-m-2 p-border-round" style={{ flex: '1', minWidth: '200px', minHeight: '100px', overflow: 'hidden' }}>
                    <GraficoBarrasReChart style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>     */}
    </div>
    )
}

export default ComponentePadre;