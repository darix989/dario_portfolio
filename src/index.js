// import React from 'react';
// import ReactDOM from 'react-dom';
// import { renderRoutes } from 'react-router-config';
// import { BrowserRouter} from 'react-router-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// let render = () => {
//     // Need to require these on the fly for HMR to work.
//     const routes = require('./config/routes');
//     console.log('routes', routes);
//     const mountNode = document.getElementById('root');
//     const router = <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>;
//     ReactDOM.render(<App content={router} />, mountNode);
// };

// if (module.hot) {
//     const renderApp = render;
//     render = (styles) => renderApp(styles, Math.random());

//     module.hot.accept('./config/routes', () => render());
// }

// render();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter} from 'react-router-dom';
import App from './App';

import routes from "./config/routes"

ReactDOM.render(
  <App
  content={routes}
  >
    {/* kick it all off with the root route */}
    {/* {renderRoutes(routes)} */}
    
  </App>,
  document.getElementById("root")
);
