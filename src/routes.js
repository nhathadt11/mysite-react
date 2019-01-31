import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Question from './containers/Question';

const Routes = () => (
  <Switch>
    <Route path="/questions" component={Question} />
    <Route path="/choices" component={null} />
  </Switch>
);

export default Routes;
