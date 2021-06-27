import React, { Component } from "react";
import { Jumbotron, Table } from "react-bootstrap";
import Navbar from "../components/nav/Navbar";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import constants from "../constants/constants";
import Axios from "axios";

class MyApplications extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired,
    };
    constructor() {
        super();
        this.state = {
            data: []
        };
        this.getApplicationData = this.getApplicationData.bind(this);
    }

    componentDidMount() {
        if (localStorage.getItem("auth-token") == "") {
            this.props.history.push("/");
        }else{
            this.getApplicationData();
        }
    }

    //get application data according to the loged in user email
    getApplicationData() {
        let email = localStorage.getItem("auth-email")
        Axios.get(constants.backend_url + "/application/" + email)
            .then((res) => {
                this.setState({
                    data: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron>
                    <h2 className="text-center mt-5">My Applications</h2>
                    <div className="text-center mt-5">
                        <div className="container">
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>UID</th>
                                        <th>Application Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.data.map((item,index)=>{
                                            return(
                                                <tr>
                                                    <td>{item.UID}</td>
                                                    <td>{item.status}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default MyApplications;
