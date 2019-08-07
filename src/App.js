import React, {Component} from 'react';
import './App.css';
import Restaurants from './restaurants.js';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      filteredRestaurants: []
    }
  }

  componentDidMount() {
    this.fetchRestaurants()
  }

  fetchRestaurants() {
    this.setState({
        restaurants: Restaurants
      })
  }

  resetFilteredRestaurants = () => {
    this.setState({
      filteredRestaurants: []
    })
  }

  filterByCuisine = (cuisine) => {
     this.setState({
         filteredRestaurants: this.state.restaurants.filter((restaurant) =>
         restaurant.cuisine === cuisine)
       })
  }

  render() {
    let {restaurants, filteredRestaurants} = this.state;
    return (
    <div className="App">
      <Main
      restaurants={restaurants}
      filteredRestaurants={filteredRestaurants}
      filterByCuisine={this.filterByCuisine}
      resetFilteredRestaurants={this.resetFilteredRestaurants}
      makeRandomChoice={this.makeRandomChoice}
      randomChoice={this.state.randomChoice}
      />
    </div>
  );
  }
}

export default App;
