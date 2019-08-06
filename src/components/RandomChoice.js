import React, {Component} from 'react';

class RandomChoice extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { restaurant } = this.props.randomChoice;
    return (
      <div className="restaurant">
          <div className="restaurant__details">
            <h2 className="restaurant__details--name">{restaurant.name}</h2>
          </div>
          <img src={restaurant.image_url} alt={restaurant.name} className="restaurant__image"/>
      </div>
    )
  }


}

export default RandomChoice;
