import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";
import Navbar from "../components/nav/Navbar";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron>
          <h1 className="text-center mt-5">Welcome to TLD-APP</h1>
          <div className="text-center mt-5">
            <Link to="/application">
              <button type="button" className="btn btn-primary">Go to Application</button>
            </Link>
            
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
