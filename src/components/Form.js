import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form
      className="cuisines-form"
      // onSubmit={(event) => this.props.randomChoice(event)}
      >
        <div className="cuisines-form__buttons">
          <div className="cuisines-form__buttons--italian">
            <label htmlFor="italian">Italian</label>
            <input type="radio"
            className="input-button"
            id="italian"
            name="cuisine"
            value="italian"
            onChange={() => this.props.filterByCuisine("Italian")}
            ></input>
          </div>
          <div className="cuisines-form__buttons--indian">
            <label htmlFor="indian">Indian</label>
            <input type="radio"
            className="input-button"
            id="indian"
            name="cuisine"
            value="indian"
            onChange={() => this.props.filterByCuisine("Indian")}
            ></input>
          </div>
          <div className="cuisines-form__buttons--japanese">
            <label htmlFor="japanese">Japanese</label>
            <input type="radio" className="input-button"
            id="japanese"
            name="cuisine"
            value="japanese"
            onChange={() => this.props.filterByCuisine("Japanese")}
            ></input>
          </div>
          <div className="cuisines-form__buttons--korean">
            <label htmlFor="korean">Korean</label>
            <input type="radio"
            className="input-button"
            id="korean"
            name="cuisine"
            value="korean"
            onChange={() => this.props.filterByCuisine("Korean")}
            ></input>
          </div>
          <div className="cuisines-form__buttons--vietnamese">
            <label htmlFor="vietnamese">Vietnamese</label>
            <input type="radio"
            className="input-button"
            id="vietnamese"
            name="cuisine"
            value="vietnamese"
            onChange={() => this.props.filterByCuisine("Vietnamese")}
            ></input>
          </div>
          <div className="cuisines-form__buttons--mexican">
            <label htmlFor="mexican">Mexican</label>
            <input type="radio"
            className="input-button"
            id="mexican"
            name="cuisine"
            value="mexican"
            onChange={() => this.props.filterByCuisine("Mexican")}
            ></input>
          </div>
          <input
          id="submitButton"
          type="submit"
          value="Random Choice"
          ></input>
        </div>
      </form>
    )
  }


}

export default Form;
