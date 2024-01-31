import GraficoTortaReChart from "./components/GraficoTortaReChart.js";
import GraficoTortaVersion2 from "./components/GraficoTortaVersion2.js";
import {DonutDatasetTransition}  from "./components/DonutDatasetTransition.tsx";
import GraficoBarrasReChart from "./components/GraficoBarrasReChart.js";
import GraficoBarrasVersion2 from "./components/GraficoBarrasVersion2.js";
import TablaTop10 from "./components/TablaTop10.js";
// import TablaTop10V2 from "./components/TablaTop10V2.js";
import React from 'react';
import ComponentePadre from './components/componentePadre.js';
import Toolbar from './components/Toolbar';




function App() {
return (
<div>
  <div>
  <Toolbar />
      <div style={{ marginTop: '20px' }}>
        <ComponentePadre />
      </div>
  <ComponentePadre/>
  </div>
</div>

  );

}

export default App;
