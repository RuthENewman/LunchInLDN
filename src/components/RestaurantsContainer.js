import React, {Component} from 'react';
import Form from './Form';
import Results from './Results';

class RestaurantsContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomChoice: undefined
    }
  }

  makeRandomChoiceForm = (event) => {
    event.preventDefault();
    const {restaurants} = this.props
      const randomChoiceNum = Math.floor(Math.random() * restaurants.length);
       this.setState(() => ({
         randomChoice: restaurants[randomChoiceNum]
       })
     )
    // this.props.history.push(`/randomchoice/${this.state.randomChoice.id}`);
  }

  render() {
    const {restaurants, filteredRestaurants, fetchRestaurants,
      filterByCuisine, resetFilteredRestaurants, history
    } = this.props;
    const {makeRandomChoiceForm} = this;
    return (
    <div className="container">
      <Form
      restaurants={restaurants}
      fetchRestaurants={fetchRestaurants}
      filterByCuisine={filterByCuisine}
      filteredRestaurants={filteredRestaurants}
      resetFilteredRestaurants={resetFilteredRestaurants}
      makeRandomChoiceForm={makeRandomChoiceForm}
      randomChoice={this.state.randomChoice}
      history={history}
      />
      <Results
      restaurants={restaurants}
      filteredRestaurants={filteredRestaurants}
      randomChoice={this.state.randomChoice}
      />
    </div>
  );
  }
}

export default RestaurantsContainer;
