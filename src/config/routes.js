// export default routes;
import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
// import ReactDOM from 'react-dom';
import { renderRoutes } from "react-router-config";

const Root = ({ route }) => (
    <div>
      <h1>Root</h1>
      {/* child routes won't render without this */}
      {renderRoutes(route.routes)}
    </div>
  );
  
const Child = ({ route }) => (
  <div>
    <h2>Child</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
  </div>
);

const GrandChild = ({ someProp }) => (
  <div>
    <h3>Grand Child</h3>
    <div>{someProp}</div>
  </div>
);

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home
      },
      {
        path: "/about",
        exact: true,
        component: About
      },
      {
        path: "/child/:id",
        component: Child,
        routes: [
          {
            path: "/child/:id/grand-child",
            component: GrandChild
          }
        ]
      }
    ]
  }
];

export default routes;