import React, {Component} from 'react';
import Header from './components/Header';
import RestaurantsContainer from './components/RestaurantsContainer';
import './App.css';
import Restaurants from './restaurants.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      filteredRestaurants: [],
      randomChoice: ""
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

  resetFilteredRestaurants() {
    this.setState({
      filteredRestaurants: []
    })
  }

  makeRandomChoice = (event) => {
    event.preventDefault();
    const [restaurants, filteredRestaurants] = this.state
    if (filteredRestaurants.length > 0) {
      const randomChoiceNum = Math.floor(Math.random() * filteredRestaurants.length);
      this.setState({
        randomChoice: filteredRestaurants[randomChoiceNum]
      })
    } else {
      const randomChoiceNum = Math.floor(Math.random() * restaurants.length);
       this.setState({
         randomChoice: restaurants[randomChoiceNum]
       })
    }
    this.props.history.push(`/randomChoice/${this.state.randomChoice}`);
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
      <Header />
      <RestaurantsContainer
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
