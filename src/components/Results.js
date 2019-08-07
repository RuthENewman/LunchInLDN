import React, { Component } from 'react';
import Restaurant from './Restaurant';
import RandomChoice from './RandomChoice';

class Results extends Component {

  render() {
    let {restaurants, filteredRestaurants} = this.props;
    return (
      <div className="results">
        {
          (!this.props.randomChoice && filteredRestaurants.length > 0) ? filteredRestaurants.map((restaurant) =>
          <Restaurant
          restaurant={restaurant}
          key={restaurant.id}
          />
        ) : (!this.props.randomChoice && filteredRestaurants.length === 0) ? restaurants.map((restaurant) =>
        <Restaurant
          restaurant={restaurant}
          key={restaurant.name}
          />
        ) : <RandomChoice randomChoice={this.props.randomChoice}/>
        }
      </div>
    )
  }

}

export default Results;
