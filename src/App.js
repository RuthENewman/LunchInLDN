import React, {Component} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import './App.css';
import Restaurants from './restaurants.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      filteredRestaurants: [],
    }
  }

  fetchRestaurants() {
    this.setState({
        restaurants: Restaurants
      })
  }

  resetFilteredRestaurants() {
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

  componentDidMount() {
    this.fetchRestaurants()
  }

  render() {
    let {restaurants, filteredRestaurants} = this.state;
    return (
    <div className="App">
      <Header />
      <Form
      fetchRestaurants={this.fetchRestaurants}
      filterByCuisine={this.filterByCuisine}
      resetFilteredRestaurants={this.resetFilteredRestaurants}
      />
      <Results
      restaurants={restaurants}
      filteredRestaurants={filteredRestaurants}
      resetFilteredHotels={this.resetFilteredRestaurants}
      />
    </div>
  );
  }
}

export default App;
