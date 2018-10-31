import React, {Component} from 'react';

class Earthquakes extends Component {

  render() {
    const quakeList = this.props.earthquakes.map((earthquakes, i) => {
      return (
        <div key={i}>
        <h1> Earthquakes Container </h1>
        <h2> Title: {earthquakes.properties.title} </h2>
        <h2> coordinates: {earthquakes.geometry.coordinates} </h2>
        <h2> Time: {earthquakes.properties.time} </h2>
        </div>
      )
    });
    return(
      <div>
      {quakeList}
      </div>
    )
  }
}

export default Earthquakes;
