import React, { Component, useState } from "react";
import Sidebar from "../components/Sidebar/sidebar";
import { Jumbotron, Modal, Box } from "react-bootstrap";


const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");

  const handleModal = () => {
    setShow(!show);
  }
  const update = () => {
    console.log("sra: " + status)
  }
  return (
    <div>
      <Jumbotron>
        <h1 className="text-center mt-5">Welcome to TLD-APP</h1>
        <div className="text-center mt-5">
          <button type="button" className="btn btn-primary" onClick={() => {
            handleModal();
          }}>
            Update
          </button>

          {/* ***model*** */}
          <div className="text-center my-3">
            <div >
              <Modal
                id="one"
                show={show}
                onHide={() => handleModal()}
              >
                <Modal.Header>Update Status</Modal.Header>
                <Modal.Body>
                  <div>
                    <div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio1"
                          value={"Pending"}
                          onChange={(e) => { setStatus(e.target.value) }}
                        />
                        <label className="form-check-label" htmlFor="radio1">
                          Pending
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio2"  
                          value={"Accept"}
                          onChange={(e) => { setStatus(e.target.value) }}
                        />
                        <label className="form-check-label" htmlFor="radio2">
                          Accept
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="radio3" defaultChecked={true} 
                          value={"Reject"}
                          onChange={(e) => { setStatus(e.target.value) }}
                        />
                        <label className="form-check-label" htmlFor="radio3">
                          Reject
                        </label>
                      </div>
                    </div>

                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <button
                    class="btn btn-primary"
                    onClick={(e) => {
                      update();
                    }}
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    onClick={() => {
                      handleModal();
                    }}
                  >
                    No
                  </button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          {/* ***end model*** */}
        </div>
      </Jumbotron>
    </div>
  );
}

export default Dashboard;


