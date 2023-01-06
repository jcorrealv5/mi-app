import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
     <App />
   </React.StrictMode>
 );
// const Li =({children, estado, casa, edad})=>{
//   console.log(casa,edad)
//   return(
//     <li>{children} estoy S{estado}</li>
//   )   
// }  
// const X = () =>
// <ul>
//   <Li 
//     estado={'feliz'}
//     casa={false}
//     edad={24}
//     >
//       Feliz
//   </Li>
//   <Li
//     estado={'triste'}
//     casa={true}
//     edad={39}
//     >
//     Triste
//   </Li>
//   <Li
//     estado={'divrociado'}
//     casa={false}
//     edad={50}
//     >
//     Felipe
//   </Li>
// </ul>

// ReactDOM.render(
//   <X />, document.getElementById('root')
// )
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
