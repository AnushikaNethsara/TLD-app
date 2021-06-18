import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="text-center mt-5">Welcome to TLD-APP</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
