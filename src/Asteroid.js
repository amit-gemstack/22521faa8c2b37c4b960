import React from "react";
import {withRouter} from 'react-router-dom'

class Asteroid extends React.Component {
  constructor(props) {
    super(props);
    console.log("Asteroid = ==============", props);
  }

  render() {
    return (
      <div style={{flex: 1, alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
        <h1>Name : {this.props.location.state.data.name ? this.props.location.state.data.name : ""}</h1>
        <h3>
          NASA JPL URL :{" "}
          {this.props.location.state.data.nasa_jpl_url ? this.props.location.state.data.nasa_jpl_url : ""}
        </h3>
        <h3>
          Hazardous :{" "}
          {this.props.location.state.data.is_potentially_hazardous_asteroid ? "Yes" : "No"}
        </h3>
      </div>
    );
  }
}

export default withRouter(Asteroid);
