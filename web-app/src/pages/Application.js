import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Application() {
  return (
    <Container>
      <h1 className="text-center" style={{ marginTop: "20px" }}>
        Application For Trade License
      </h1>

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
                    Owner First Name :
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
                    Owner First Name :
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
                    Owner First Name :
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
                    Owner First Name :
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
