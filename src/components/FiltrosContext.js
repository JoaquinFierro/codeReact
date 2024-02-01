// import React, { createContext, useContext, useReducer } from 'react';
// import { Santander, Falabella , meses } from "./data.ts";

// const initialState = {
//   currentData: [], 
//   showPlaceholder: false,
//   filtroPorFechas: '',
// //   mesSeleccionado: '',
//   rangoFechas: {
//     desde: '',
//     hasta: '',
//   },
// };

// const FiltrosContext = createContext();

// const filtrosReducer = (state, action) => {
//     switch (action.type) {
//       case 'TOGGLE_DATA_PRUEBA':
//         const selectedData =
//           action.selectedData === 'Santander'
//             ? Santander
//             : action.selectedData === 'Falabella'
//             ? Falabella
//             : [];
//         return {
//           ...state,
//           currentData: selectedData,
//           showPlaceholder: selectedData.length === 0,
//         };
  
//       case 'FILTRAR_POR_FECHA':
//         const { item, filtroPorFechas, rangoFechas } = action;
//         const fechaActual = new Date();
//         const anioActual = fechaActual.getFullYear();
  
//         switch (filtroPorFechas) {
//         //   case 'mes':
//         //     return {
//         //       ...state,
//         //       filtroPorFechas,
//         //       mesSeleccionado: mesSeleccionado === '' ? true : item.fecha.split('-')[1] === mesSeleccionado,
//         //     };
//         //   case 'busquedaDia':
//         //     return {
//         //       ...state,
//         //       filtroPorFechas,
//         //       diaSelecionado: diaSelecionado === '' ? true : item.fecha === diaSelecionado,
//         //     };
//           case 'Ultimas24horas':
//             const hace24Horas = new Date();
//             hace24Horas.setHours(hace24Horas.getHours() - 24);
//             const fecha = new Date(item.fecha);
//             return {
//               ...state,
//               filtroPorFechas,
//               fechaActual,
//               ultimas24Horas: fecha >= hace24Horas && fecha <= new Date(),
//             };
//           case 'rangoFechas':
//             const desde = new Date(rangoFechas.desde);
//             const hasta = new Date(rangoFechas.hasta);
//             const fechaItem = new Date(item.fecha);
//             return {
//               ...state,
//               filtroPorFechas,
//               rangoFechas: fechaItem >= desde && fechaItem <= hasta,
//             };
//           case 'ultimos30Dias':
//             const haceTreintaDias = new Date(fechaActual);
//             haceTreintaDias.setDate(fechaActual.getDate() - 30);
//             return {
//               ...state,
//               filtroPorFechas,
//               fechaActual,
//               ultimos30Dias: new Date(item.fecha) >= haceTreintaDias && new Date(item.fecha) <= fechaActual && new Date(item.fecha).getFullYear() === anioActual,
//             };
//           case 'añoAnterior':
//             const anioAnterior = anioActual - 1;
//             return {
//               ...state,
//               filtroPorFechas,
//               fechaActual,
//               añoAnterior: new Date(item.fecha).getFullYear() === anioAnterior,
//             };
//           case 'ultimos5Años':
//             const ultimosCincoAnios = anioActual - 5;
//             return {
//               ...state,
//               filtroPorFechas,
//               fechaActual,
//               ultimos5Años: new Date(item.fecha).getFullYear() >= ultimosCincoAnios && new Date(item.fecha).getFullYear() <= anioActual,
//             };
//           default:
//             return state;
//         };
  
//       default:
//         return state;
//     }
//   };
  

// export const FiltrosProvider = ({ hijo }) => {
//   const [state, dispatch] = useReducer(filtrosReducer, initialState);

//   return (
//     <FiltrosContext.Provider value={{ state, dispatch }}>
//       {hijo}
//     </FiltrosContext.Provider>
//   );
// };

// export const useFiltros = () => {
//     const context = useContext(FiltrosContext);
//     if (!context) {
//       throw new Error('useFiltros debe ser utilizado dentro de un FiltrosProvider');
//     }
//     return context;
//   };
  
