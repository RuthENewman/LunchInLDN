import React from 'react';
import Restaurants from './RestaurantsContainer';
import RandomChoice from './RandomChoice';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';

const Main = () => (

  <BrowserRouter>
    <div>
     <Header />
  <Switch>
    <Route exact path="/" component={RestaurantsContainer} />
    <Route path="randomChoice/:id" component={RandomChoice} />
    <Route component={NotFound} />
  </Switch>
  </div>
 </BrowserRouter>
);

export default Main;
