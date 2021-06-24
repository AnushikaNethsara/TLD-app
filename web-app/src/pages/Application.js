import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/nav/Navbar"
import Axios from "axios";
import constants from "../constants/constants";
import { useHistory } from "react-router-dom";

export default function Application() {


  const [uid, setUid] = useState("");
  const [citizenRagistrationNumber, setCitizenRagistrationNumber] = useState("");
  const [uniqueApplicationId, setUniqueApplicationId] = useState("");
  const [ownerFirstName, setOwnerFirstName] = useState();
  const [odistrict, setOdistrict] = useState();
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
  const [tradeAddressLine1 , setTradeAddressLine1 ] = useState();
  const [assessmentNo, setAssessmentNo] = useState();
  const [tradeAddressLine2, setTradeAddressLine2] = useState();
  const [tCity, setTCity] = useState();
  const [tradeLicenseRequiredFormData, setTradeLicenseRequiredFormData] = useState();
  const [tDistrict, setTDistrict] = useState();
  const [zoneNo, setZoneNo] = useState();

  const [error, setError] = useState();

  const history = useHistory();


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
        district: odistrict,
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
        permissionNo:  buildingPermissionNo,
        assessmentNo: assessmentNo,
        tCity: tCity,
        tDistrict :tDistrict, 
        tradeDoorNo: tradeDoorNo,
        revenueWardNo: revenueWardNo
      };

      console.log(newApplication);

      await Axios.post(constants.backend_url + "/application/register", newApplication).then((res) => console.log(res.data));
      
      
      ///history.push("/home");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };




  return (
    <div>
      <Navbar/>
      <div className="my-5">
        <Container>
          <h2 className="text-center" style={{ marginTop: "20px" }}>
            Application For Trade License
          </h2>

          <hr></hr>

          <br />

<form onSubmit={submit}>
<div className="row g-3 align-items-center">
            <div className="col-auto">
              <label
                htmlFor="inputPassword6"
                className="col-form-label"
                style={{ width: "208px" }}
              >
                UID :
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                onChange={(e) => setUid(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Citizen Ragistration Number :
              </label>
            </div>
            <div className="col-auto">
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                onChange={(e) => setCitizenRagistrationNumber(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="row g-3 align-items-center">
            <div className="col-auto">
              <label htmlFor="inputPassword6" className="col-form-label">
                Unique Application Id :
              </label>
            </div>
            <div className="col-auto" style={{ marginLeft: "45px" }}>
              <input
                type="text"
                id="inputPassword6"
                className="form-control"
                aria-describedby="passwordHelpInline"
                onChange={(e) => setUniqueApplicationId(e.target.value)}
              />
            </div>
          </div>
          <br />
          <hr></hr>

          {/* Trade Owner Details part */}

          <Container>
            <h4>Trade Owner Details</h4>
            <br />
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Owner First Name :
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
                        onChange={(e) => setOwnerFirstName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                {/* <br></br> */}
              </Col>
              <br></br>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        District :
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
                        onChange={(e) => setOdistrict(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Middle Name :
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
                        onChange={(e) => setOMiddleName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Father/Husband First Name :
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
                        onChange={(e) => setFatherHusbandFirstName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Last Name :
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
                        onChange={(e) => setOLastName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Middle Name :
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
                        onChange={(e) => setSMiddleName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Pla Code :
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
                        onChange={(e) => setPlaCode(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Last Name :
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
                        onChange={(e) => setSLastName(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Owner SSSID No. :
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
                        onChange={(e) => setOwnerSSSIDNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Father/Husband :
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
                        onChange={(e) => setFatherHusband(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Email (if any) :
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
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Residence Door No :
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
                        onChange={(e) => setResidenceDoorNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Phone No. :
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
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Residence Address ( Line 1 ) :
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
                        onChange={(e) => setResidenceAddressLine1(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Fax :
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
                        onChange={(e) => setFax(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Residence Address ( Line 2 ) :
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
                        onChange={(e) => setResidenceAddressLine2(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        City :
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
                        onChange={(e) => setOCity(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <br />
          <hr></hr>

          {/* Trade Details Part */}
          <Container>
            <h4>Trade Owner Details</h4>
            <br />
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Title :
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
                        onChange={(e) => setTradeTitle(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
                {/* <br></br> */}
              </Col>
              <br></br>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Revenue Ward No :
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
                        onChange={(e) => setRevenueWardNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Type :
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
                        onChange={(e) => setTradeType(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Zone No. :
                      </label>
                    </div>
                  </Col>
                  <Col>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        value="Temporary"
                        onChange={(e) => setZoneNo(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox1">
                        Temporary
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        value="Permenent"
                        onChange={(e) => setZoneNo(e.target.value)}
                      />
                      <label className="form-check-label" htmlFor="inlineCheckbox2">
                        Permenent
                      </label>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Nature :
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
                        onChange={(e) => setTradeNature(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Election Ward No :
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
                        onChange={(e) => setElectionWardNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Door No :
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
                        onChange={(e) => setTradeDoorNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Building Permission No :
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
                        onChange={(e) => setBuildingPermissionNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Address ( Line 1 ) :
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
                        onChange={(e) => setTradeAddressLine1(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Assessment No :
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
                        onChange={(e) => setAssessmentNo(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade Address ( Line 2 ) :
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
                        onChange={(e) => setTradeAddressLine2(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        City :
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
                        onChange={(e) => setTCity(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        Trade License Required Form Data :
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
                        onChange={(e) => setTradeLicenseRequiredFormData(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6}>
                <Row>
                  <Col>
                    <div className="col-auto">
                      <label htmlFor="inputPassword6" className="col-form-label">
                        District :
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
                        onChange={(e) => setTDistrict(e.target.value)}
                      />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <br />
            <Button type="submit">Submit</Button>
            <br />
            <br />
            <br />
          </Container>
</form>

   
           
        </Container>
      </div>
    </div>
  );
}
