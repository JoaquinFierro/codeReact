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
    <div className='mt-8 mx-auto '>

        <div className="sticky top-0 z-50 bg-white p-4">
            <h1 className="text-center text-2xl font-semibold">GRAFICOS CON RECHART</h1>
        </div>

        <div className='p-8'>
            <div className="grid grid-cols-3 gap-4 justify-stretch pb-2">
                <div>
                    <GraficoBarrasReChart/>
                </div>
                <div>
                    <GraficoBarrasVersion2/>
                </div>
                <div>
                    <GraficoBarrasVersion2/>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pb-4 ">
                <div className=''>
                    <h1 className='text-center font-semibold'>3</h1>
                    <GraficoTortaReChart/>
                </div>
                <div className=''>
                    <h1 className='text-center font-semibold'>4</h1>
                    <GraficoTortaVersion2/>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-10">
           
        </div>
        <div className="grid grid-cols-2 gap-10">
            <TablaTop10 />
           
        </div>
        
    </div>
    )
}

export default ComponentePadre;