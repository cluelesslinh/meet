import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      numberOfEvents: value,
    });
    this.props.updateNumberOfEvents(event.target.value);
  };

  render() {
    const numberOfEvents = this.state.numberOfEvents;
    return (
      <div className="numberOfEvents">
        <label>Events per page:
          <input
          type="text"
          id="number"
          className="EventsNumber"
          value={numberOfEvents}
          onChange={(e) => this.handleChange(e)} />
        </label>
      </div>
    );
  }
}
export default NumberOfEvents;
