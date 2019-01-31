import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Question from './containers/Question';
import Choice from './containers/Choice';
import Home from './components/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/questions" component={Question} />
    <Route path="/choices" component={Choice} />
  </Switch>
);

export default Routes;
