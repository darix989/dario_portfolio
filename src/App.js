import React from 'react';
import {
  BrowserRouter,
} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "./containers/Header/Header"
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React with Dario
//         </a>
//       </header>
//     </div>
//   );
// }

function App({ content }) {
  console.log('rendering');
  console.log(content);
  return (
    <BrowserRouter>
      <div>
        {/* <Nav/> */}
        <Header />
        {renderRoutes(content)}
      </div>
    </BrowserRouter>
  );
}

export default App;
