import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/nav/Navbar";
import Axios from "axios";
import constants from "../constants/constants";
import { useHistory } from "react-router-dom";

export default function Application() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pCode, setPCode] = useState("");
  const [city, setCity] = useState("");
  const [accountName, srtAccountName] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [securityPin, setSecurityPin] = useState("");
  const [idealWeight, setIdealWeight] = useState(0);
  const [medicalHistory, setMedicalHistory] = useState("");
  const [submitedEmail, setSubmitedEmail] = useState(localStorage.getItem("auth-email"));
  
  const [error, setError] = useState();

  const history = useHistory();

  //application submit
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newApplication = {
        name,
        pCode,
        accountName,
        securityPin,
        city,
        address,
        sortCode,
        idealWeight,
        medicalHistory,
        submitedEmail,
        status: "New",
      };

      console.log(newApplication);

      await Axios.post(
        constants.backend_url + "/application/register",
        newApplication
      ).then((res) => console.log(res.data));

      history.push("/home");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth-token") == "") {
      history.push("/");
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div className="my-5">
        <Container>
          <h2 className="text-center" style={{ marginTop: "20px" }}>
            Gym Membership Registration
          </h2>
          <form onSubmit={submit}>
            <br />

            {/* Trade Owner Details part */}
            <Container>
              <h4>User Information</h4>
              <br />
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Name :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={name}
                          id="inputPassword6"
                          className="form-control form-control-sm"
                          aria-describedby="passwordHelpInline"
                          required
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                  {/* <br></br> */}
                </Col>
                <br></br>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Address :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={address}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Post Code :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={pCode}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setPCode(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          City :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={city}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <hr/>
              <h4>Bank Details</h4>
              <br />
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Account Name :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={accountName}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => srtAccountName(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Sort Code :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={sortCode}
                          class="form-control form-control-sm"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          size="sm"
                          required
                          onChange={(e) => setSortCode(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Security Pin :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="number"
                          value={securityPin}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setSecurityPin(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <hr />
              <h4>General Gym Information</h4>
              <br />
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Ideal Weight :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="number"
                          value={idealWeight}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setIdealWeight(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
                <Col md={6}></Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <div className="col-auto">
                        <label
                          htmlFor="inputPassword6"
                          className="col-form-label"
                        >
                          Medical History :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="text"
                          value={medicalHistory}
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setMedicalHistory(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br></br>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </Container>
            <br />
          </form>
        </Container>
      </div>
    </div>
  );
}
