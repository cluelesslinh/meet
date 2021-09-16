import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    query: 32
  }

  handleChange = (event) => {
    const value = event.target.value;
    if(value !== 0) {
      this.setState({
        query: value
      });
    } else {
      this.setState({
        query: 32
      });
    }
  }

  render() {
    return (
      <div className="numberOfEvents">
        <label for="fname">Events per page:
          <input
          type="text"
          id="number"
          value={this.state.query}
          onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default NumberOfEvents;
