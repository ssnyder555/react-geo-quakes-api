import React, { Component } from 'react';
import Earthquakes from './Earthquakes'


// our quakes data lives here
class App extends Component {
  constructor(){
    super();

    this.state = {
      quakes: []
    }
  }
getQuakes = async () => {

  try{

    // by default fetch is making a Get request
    const quakes = await fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson');
    // Not sure if the api is a json file
    // will write out the jason file
    const quakesJson = await quakes.json();
    return quakesJson

  } catch(err){
    return err
  }
}

componentDidMount(){

  // use a promise, then  after this function returns
  // whatever it is returning
  this.getQuakes().then((quakes) => {
    console.log(quakes, ' this is data');

    this.setState({getQuakes: quakes});
    console.log(this.state.quakesData, 'State Data Current');
  }).catch((err) => {
    console.log(err);
  });
}

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Earthquakes;
