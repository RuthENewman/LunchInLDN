import React, {Component} from 'react';
import Form from './Form';
import Results from './Results';

class RestaurantsContainer extends Component {

  render() {
    let {restaurants, filteredRestaurants} = this.props;
    return (
    <div className="container">
      <Form
      fetchRestaurants={this.props.fetchRestaurants}
      filterByCuisine={this.props.filterByCuisine}
      filteredRestaurants={filteredRestaurants}
      resetFilteredRestaurants={this.props.resetFilteredRestaurants}
      makeRandomChoice={this.props.makeRandomChoice}
      randomChoice={this.props.randomChoice}
      />
      <Results
      restaurants={restaurants}
      filteredRestaurants={filteredRestaurants}
      />
    </div>
  );
  }
}

export default RestaurantsContainer;
