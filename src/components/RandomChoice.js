import React, {Component} from 'react';

class RandomChoice extends Component {

  render() {
    const { randomChoice } = this.props;
    return (
      <div className="randomChoice">
          <div className="randomChoice__details">
            <h2 className="randomChoice__details--name">{randomChoice.name}</h2>
            <h3 className="randomChoice__details--cuisine">{randomChoice.cuisine}</h3>
          </div>
          <img src={randomChoice.image_url}
          alt={randomChoice.name}
          className="randomChoice__image--large"/>

      </div>
    )
  }


}

export default RandomChoice;
