import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import routes from "./config/routes"
import './index.scss'

ReactDOM.render(
  <App
  content={routes}
  >
    {/* kick it all off with the root route */}
    {/* {renderRoutes(routes)} */}
    
  </App>,
  document.getElementById("root")
);
