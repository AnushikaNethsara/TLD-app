import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h2 className="text-center">Welcome to TLD-APP</h2>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
