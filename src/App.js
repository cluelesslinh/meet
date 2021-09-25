import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents, extractLocations } from './api';
import './nprogress.css';

class App extends Component {

 state = {
   events: [],
   locations: [],
   numberOfEvents: 32,
 }

 componentDidMount() {
  this.mounted = true;
  getEvents().then((events) => {
    if (this.mounted) {
      this.setState({
        events: events.slice(0, this.state.eventCount),
        locations: extractLocations(events)
      });
     }
   })
   .catch(error => {
    console.log(error);
  })
}

  componentWillUnmount() {
    this.mounted = false;
  }

 updateEvents = (location, eventCount) => {
   let locationEvents = [];
   getEvents().then((events) => {
     if (location ==='all' && eventCount === 0) {
       locationEvents = events;
     } else if (location !== 'all' && eventCount === 0) {
       locationEvents = events.filter((event) => event.location === location);
     } else if (location === '' && eventCount > 0) {
       locationEvents = events.slice(0, eventCount);
     }
     this.setState({
       events: locationEvents,
       numberOfEvents: eventCount
     });
   });
 }

 updateEventCount = (eventCount) => {
   this.setState({
     numberOfEvents: eventCount
   });
   this.updateEvents(eventCount);
 };

  render() {
    const { numberOfEvents, locations, events } = this.state;
    return (
      <div className="App">
        <div className="navbar"></div>
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <EventList events={events}/>
        <NumberOfEvents updateEventCount={(e) => this.updateEventCount(e)} numberOfEvents={numberOfEvents} />
      </div>
    );
  }
}

export default App;
