import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Application() {
  return (
    <Container>
      <h2 className="text-center" style={{ marginTop: "20px" }}>
        Application For Trade License
      </h2>

      <hr></hr>

      <br />
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
                    defaultValue="option1"
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
                    defaultValue="option2"
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
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
    </Container>
  );
}
