import GraficoTortaReChart from "./GraficoTortaReChart.js";
import GraficoTortaVersion2 from "./GraficoTortaVersion2.js";
import GraficoBarrasReChart from "./GraficoBarrasReChart.js";
import GraficoBarrasVersion2 from "./GraficoBarrasVersion2.js";
import TablaTop10 from "./TablaTop10.js";
// import TablaTop10V2 from "./components/TablaTop10V2.js";
import React from 'react';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


const ComponentePadre = () => {
    return (

    // <div>
        <div class="flex flex-wrap" style={{maxWidth: '600px'}}>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px', minHeight: '100px' }}><GraficoBarrasReChart/></div>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px;', minHeight: '100px'}}><GraficoBarrasVersion2/></div>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px;', minHeight: '100px'}}><GraficoTortaVersion2/></div>
        </div>  
        
        /* <div class="flex flex-wrap" style={{maxWidth: '600px'}}>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px;', minHeight: '100px'}}><GraficoBarrasReChart/></div>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px;', minHeight: '100px'}}><GraficoBarrasVersion2/></div>
            <div class="flex align-items-center justify-content-center bg-primary font-bold m-2 border-round" style={{ minWidth: '200px;', minHeight: '100px'}}><GraficoTortaVersion2/></div>
        </div> */
    /* </div> */

    )
}

export default ComponentePadre;