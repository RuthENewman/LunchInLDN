import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Results extends Component {

  render() {
    let {restaurants, filteredRestaurants} = this.props;
    return (
      <div className="results">
        {
          (filteredRestaurants.length > 0) ? filteredRestaurants.map((restaurant) =>
          <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          />
        ) : restaurants.map((restaurant) =>
        <Restaurant
          restaurant={restaurant}
          key={restaurant.name}
          />
        )
        }
      </div>
    )
  }

}

export default Results;
