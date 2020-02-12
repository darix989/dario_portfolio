import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';
import Hobbies from './Hobbies';

const Pages = (props) => {
  return (
    <Router basename="/dario_portfolio">
      <Switch>
        <Route exact path="/">
          <Me {...props} />
        </Route>
        <Route path="/projects">
          <Projects {...props}/>
        </Route>
        <Route path="/work">
          <Work {...props} />
        </Route>
        <Route path="/education">
          <Education {...props} />
        </Route>
        <Route path="/hobbies">
          <Hobbies {...props}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default Pages;