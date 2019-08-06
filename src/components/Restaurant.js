import React, {Component} from 'react';

class Restaurant extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { restaurant } = this.props;
    return (
      <div className="restaurant">
          <div className="restaurant__details">
            <h2 className="restaurant__details--name">{restaurant.name}</h2>
            <h3 className="restaurant__details--starRating">
              {restaurant.starRating} stars
            </h3>
          </div>
          <img src={restaurant.image_url} alt={restaurant.name} className="restaurant__image"/>
      </div>
    )
  }


}

export default Restaurant;
