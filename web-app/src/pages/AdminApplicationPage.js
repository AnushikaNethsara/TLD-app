import React from "react";
import Sidebar from "../components/Sidebar/sidebar";
import { Container, Row, Col, Table } from "react-bootstrap";

export default function AdminApplicationPage() {
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
      </Container>
    </div>
  );
}
