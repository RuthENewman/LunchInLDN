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
    const {restaurants, filteredRestaurants} = this.state;
    const { history } = this.props;
    const { filterByCuisine, resetFilteredRestaurants } = this;
    return (
    <div className="App">
      <Main
      history={history}
      restaurants={restaurants}
      filteredRestaurants={filteredRestaurants}
      filterByCuisine={filterByCuisine}
      resetFilteredRestaurants={resetFilteredRestaurants}
      />
    </div>
  );
  }
}

export default App;
