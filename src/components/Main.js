import React from 'react';
import RestaurantsContainer from './RestaurantsContainer';
import RandomChoice from './RandomChoice';
import NotFound from './NotFound';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

const Main = (props) => (
    <div>
     <Header />
  <Switch>
    <Route exact path="/" component={(routerProps) => <RestaurantsContainer
    restaurants={props.restaurants}
    filteredRestaurants={props.filteredRestaurants}
    filterByCuisine={props.filterByCuisine}
    resetFilteredRestaurants={props.resetFilteredRestaurants}
    makeRandomChoice={props.makeRandomChoice}
    randomChoice={props.randomChoice}
    {...routerProps}
    />} />
    <Route path="/randomChoice/:id" component={(routerProps) => <RandomChoice
    randomChoice={props.randomChoice}
    {...routerProps}
    />}/>
    <Route component={NotFound} />
  </Switch>
  </div>
);

export default Main;
