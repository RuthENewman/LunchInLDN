import React, {Component} from 'react';
import './App.css';
import Restaurants from './restaurants.js';
import Main from './components/Main';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      restaurants: [],
      filteredRestaurants: [],
      randomChoice: {
        "id": 2,
        "name": "Kimchee",
        "starRating": 4,
        "cuisine": "Korean",
        "image_url": "https://media.timeout.com/images/105155613/630/472/image.jpg"
      }
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

  makeRandomChoice(event) {
    event.preventDefault();
    const {restaurants, filteredRestaurants} = this.state
    if (filteredRestaurants.length > 0) {
      const randomChoiceNum = Math.floor(Math.random() * filteredRestaurants.length);
      this.setState(() => ({
        randomChoice: filteredRestaurants[randomChoiceNum]
      })
    )
    } else {
      const randomChoiceNum = Math.floor(Math.random() * restaurants.length);
       this.setState(() => ({
         randomChoice: restaurants[randomChoiceNum]
       })
     )
    }
    this.props.history.push(`/randomChoice/${this.state.randomChoice.id}`);
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
