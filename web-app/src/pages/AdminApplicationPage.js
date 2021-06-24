import React, { Component }  from "react";
import Sidebar from "../components/Sidebar/sidebar";
import { Container, Row, Col, Table } from "react-bootstrap";
import Axios from "axios";
import constants from "../constants/constants";
import {SortableTbl, ImageLoader} from "react-sort-search-table"



class AdminApplicationPage extends Component {

  constructor(props) {
    super(props);

    this.state = { applications: [],};
  }

  //get the list ofapplications from database
  componentDidMount() {
    //getting all theapplications and puting in theapplications array we declared in the constructor
    Axios
      .get(
        constants.backend_url +
          "/application/getAllDetails"
      )
      .then((res) => {
        this.setState({ applications: res.data });
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

render(){
  console.log(this.state.applications);
  let tHead = [
    'UID' ,
    'regNo' ,
    'applicationId' ,
    'fName' ,
    'mName' ,
    'lName',
    'pCode' ,
    'ssId' ,
    'email' ,
    'phone' ,
    'fax' ,
    'city' ,
    'district' ,
    'spouseFName' ,
    'spouseMName' ,
    'spouseLName' ,
    'relationship' ,
    'doorNo' ,
    'line1' ,
    'line2' ,
    'tradeTitle' ,
    'tradeType' ,
    'tradeNature' ,
    'tLine1' ,
    'tLine2' ,
    'licenseDetails' ,
    'wardNo' ,
    'zoneNo' ,
    'permissionNo' ,
    'assessmentNo' ,
    'tCity' ,
    'tDistrict' ,
    'tradeDoorNo' ,
    'revenueWardNo' 
  ];

  return (
    <div>
      <Sidebar />
      <br />
      <Container style={{ marginTop: "20px" }}>
        <h3>Apllications Submitted</h3>
        <br />
        <Table responsive="sm">
          <thead>
            <tr>
              <th></th>
              <th>Applicant Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Progress</th>
              {/* <th>Table heading</th> */}
              {/* <th>Table heading</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Shanelle</td>
              <td>Fri Jun 11 2021 </td>
              <td>14:44:52</td>
              <td>Submitted</td>
              {/* <td>Table cell</td> */}
              {/* <td>Table cell</td> */}
            </tr>
            <tr>
              <td>2</td>
              <td>Imelda</td>
              <td>Wed Dec 23 2020</td>
              <td>19:38:10</td>
              <td>Submitted</td>
              {/* <td>Table cell</td> */}
              {/* <td>Table cell</td> */}
            </tr>
            <tr>
              <td>3</td>
              <td>Flossie</td>
              <td>Mon Oct 26 2020</td>
              <td>08:24:05</td>
              <td>Submitted</td>
              {/* <td>Table cell</td> */}
              {/* <td>Table cell</td> */}
            </tr>
          </tbody>
        </Table>

        {/* <SortableTbl
			tblData={this.state.applications}
			tHead={tHead}
		
			dKey={tHead}
		/> */}
      </Container>
    </div>
  );
}

  
}

export default AdminApplicationPage;
