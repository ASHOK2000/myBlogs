import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import textcss from "../css/admisson.css";
import AdmissonForm from "./sub-pages/admissonForm";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { Container } from "react-bootstrap";

function Admisson() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const paragraphText = `
  <ol>
    <li>
      Complete the online application form.</li>
    <li>
      Please ensure that the following documents are uploaded
      while filling the online application form :
    </li>
    <ul>
      <li>
        Photocopy of the student’s birth certificate and Aadhaar
        Card (if applicable).
      </li>
      <li>
        School leaving certificate (can be submitted later if
        not currently available).
      </li>
      <li>
        UDISE Number (Unified District information System for
        Education) from current school.
      </li>
      <li>
        Photocopy of the previous and current class Report Card.
      </li>
      <li>
        Photocopy of Address proof and Parent's Pan Card.
      </li>
      <li>Passport size photograph of the student.</li>
    </ul>

    <li>
      After submitting the online application form, if there are
      seats available in the standard that you have applied in,
      an email with a payment link for the first term fees will
      be sent to you. Parents are requested to make the
      necessary payment online.
    </li>
  </ol>`;



  return (
    <Container>
      <div className="Header">
        <NavBar />
      </div>

      <Row>
        <Col className={textcss.AdmissonFormhead}>
          <div>ONLINE APPLICATION FORM - ACADEMIC YEAR 2023-24</div>

          <div className="Admisson-Form">
            For the Online Application form, please fill all nessesry fields and
            submit a Hard Copy of Document in School .
          </div>
        </Col>
      </Row>

      <AdmissonForm />

      <div>HERE ARE THE MUST-KNOWS FOR A SMOOTH ADMISSION PROCESS.</div>

      {/* Online Application Form */}
      <Row>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          // style={{ maxWidth: "1200" }}
          size="lg"
        >
          Online process
        </Button>

        <Col>
          <div style={{ minHeight: "20px" }}>
            <Collapse in={open} dimension="width">
              <div id="example-collapse-text">
                <Card body style={{ maxWidth: "device-width" }}>
                  <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
                </Card>
              </div>
            </Collapse>
          </div>
        </Col>
      </Row>

      {/* offline process */}

      <Row>
        <Button
          onClick={() => setOpen1(!open1)}
          aria-controls="Offline-collapse-text"
          aria-expanded={open1}
          // style={{ maxWidth: "1200" }}
          size="lg"
        >
          Offline process{" "}
        </Button>

        <Col>
          <div style={{ minHeight: "20px" }}>
            <Collapse in={open1} dimension="width">
              <div id="Offline-collapse-text">
                <Card body style={{ maxWidth: "device-width" }}>
                  <p dangerouslySetInnerHTML={{ __html: paragraphText }} />
                </Card>
              </div>
            </Collapse>
          </div>
        </Col>
      </Row>

      <div className="Footer">
        <Footer />
      </div>
    </Container>
  );
}

export default Admisson;
