import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

const Routes = () => {
  return(
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/" exact={true}>
        <Home />
      </Route>
    </Switch>
  );
}

export default Routes
