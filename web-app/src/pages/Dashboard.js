import React, { Component } from "react";
import Sidebar from "../components/Sidebar/sidebar";
import PropTypes from "prop-types";

class Dashboard extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Sidebar />
        Test dashboard
      </div>
    );
  }
}

export default Dashboard;
