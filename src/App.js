import React, { Component } from 'react';
import MapContainer from './MapContainer';
import Earthquakes from './Earthquakes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      earthquakes: []
    }
  }

  getEarthquakes = async () => {
    try {
      const earthquakes = await fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
      const earthquakeJson = await earthquakes.json();
      return earthquakeJson
    } catch(err) {
      return err
    }
  }

  componentDidMount(){
    this.getEarthquakes().then((earthquakes) => {
      console.log(earthquakes, ' this is earthquakes');

    this.setState({earthquakes: earthquakes.features})
 }).catch((err) => {
      console.log(err);
 })
}

  render() {
    return (
      <div className="app">
        <div className="mapContainer">
          <MapContainer />
        </div>
        <div className="quakeContainer">
          <h1>Earthquakes from the past week: </h1>
          // <Earthquakes earthquakes={this.state.earthquakes}/>
        </div>
      </div>
    );
  }
}

export default App;
