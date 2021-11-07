import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Navbar from "../components/nav/Navbar";
import Axios from "axios";
import constants from "../constants/constants";
import { useHistory } from "react-router-dom";

export default function Application() {
  const [uid, setUid] = useState("");
  const [citizenRagistrationNumber, setCitizenRagistrationNumber] =
    useState("");
  const [uniqueApplicationId, setUniqueApplicationId] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState();
  const [ocountry, setOCountry] = useState();
  const [omiddleName, setOMiddleName] = useState();
  const [olastName, setOLastName] = useState();
  const [plaCode, setPlaCode] = useState();
  const [ownerSSSIDNo, setOwnerSSSIDNo] = useState();
  const [email, setEmail] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [fax, setFax] = useState();
  const [ocity, setOCity] = useState();
  const [fatherHusbandFirstName, setFatherHusbandFirstName] = useState();
  const [sMiddleName, setSMiddleName] = useState();
  const [sLastName, setSLastName] = useState();
  const [fatherHusband, setFatherHusband] = useState();
  const [residenceDoorNo, setResidenceDoorNo] = useState();
  const [residenceAddressLine1, setResidenceAddressLine1] = useState();
  const [residenceAddressLine2, setResidenceAddressLine2] = useState();

  const [tradeTitle, setTradeTitle] = useState();
  const [revenueWardNo, setRevenueWardNo] = useState();
  const [tradeType, setTradeType] = useState();
  const [tradeNature, setTradeNature] = useState();
  const [electionWardNo, setElectionWardNo] = useState();
  const [tradeDoorNo, setTradeDoorNo] = useState();
  const [buildingPermissionNo, setBuildingPermissionNo] = useState();
  const [tradeAddressLine1, setTradeAddressLine1] = useState();
  const [assessmentNo, setAssessmentNo] = useState();
  const [tradeAddressLine2, setTradeAddressLine2] = useState();
  const [tCity, setTCity] = useState();
  const [tradeLicenseRequiredFormData, setTradeLicenseRequiredFormData] =
    useState();
  const [tCountry, setTCountry] = useState();
  const [zoneNo, setZoneNo] = useState();

  const [error, setError] = useState();

  const history = useHistory();

  //application submit
  const submit = async (e) => {
    e.preventDefault();
    try {
      const newApplication = {
        UID: uid,
        regNo: citizenRagistrationNumber,
        applicationId: uniqueApplicationId,
        fName: ownerFirstName,
        mName: omiddleName,
        lName: olastName,
        pCode: plaCode,
        ssId: ownerSSSIDNo,
        email: email,
        phone: phoneNo,
        fax: fax,
        city: ocity,
        country: ocountry,
        spouseFName: fatherHusbandFirstName,
        spouseMName: sMiddleName,
        spouseLName: sLastName,
        relationship: fatherHusband,
        doorNo: residenceDoorNo,
        line1: residenceAddressLine1,
        line2: residenceAddressLine2,
        tradeTitle: tradeTitle,
        tradeType: tradeType,
        tradeNature: tradeNature,
        tLine1: tradeAddressLine1,
        tLine2: tradeAddressLine2,
        licenseDetails: tradeLicenseRequiredFormData,
        wardNo: electionWardNo,
        zoneNo: zoneNo,
        permissionNo: buildingPermissionNo,
        assessmentNo: assessmentNo,
        tCity: tCity,
        tCountry: tCountry,
        tradeDoorNo: tradeDoorNo,
        revenueWardNo: revenueWardNo,
        status: "New",
        submitedEmail: localStorage.getItem("auth-email"),
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
            Application For Trade License
          </h2>
          <form onSubmit={submit}>            
            <br />

            {/* Trade Owner Details part */}
            <Container>
              <h4>Trade Owner Details</h4>
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
                          id="inputPassword6"
                          className="form-control form-control-sm"
                          aria-describedby="passwordHelpInline"
                          required
                          onChange={(e) => setOwnerFirstName(e.target.value)}
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
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setOMiddleName(e.target.value)}
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
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setOLastName(e.target.value)}
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
                          type="number"
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setPlaCode(e.target.value)}
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
                          Account Number :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="number"
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setOwnerSSSIDNo(e.target.value)}
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
                          type="email"
                          class="form-control form-control-sm"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          size="sm"
                          required
                          onChange={(e) => setEmail(e.target.value)}
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
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setPhoneNo(e.target.value)}
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
                          Ideal Weight :
                        </label>
                      </div>
                    </Col>
                    <Col>
                      <div className="col-auto">
                        <input
                          type="number"
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setFax(e.target.value)}
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
                          id="inputPassword6"
                          className="form-control form-control-sm "
                          aria-describedby="passwordHelpInline"
                          size="sm"
                          required
                          onChange={(e) => setOCity(e.target.value)}
                        />
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            <br />
          </form>
        </Container>
      </div>
    </div>
  );
}
