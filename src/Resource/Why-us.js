import React, { useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import Fade from "react-bootstrap/Fade";
// import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import headImage from "../res_images/whyUs.jpeg";
import fourthImage from "../res_images/Ethics.png";
import thirdImage from "../res_images/extracurricular.png";
import secondImage from "../res_images/innovative.png";
import firstImage from "../res_images/culture.png";

export default function WhyUs() {
  const [openSection, setOpenSection] = useState(null);
  // const [isReadMore, setIsReadMore] = useState(true);

  const sections = [
    {
      title: "Strong Values and Ethics",
      id: "collapse-text-fourth",
      text: " Character education is a cornerstone of our philosophy. We instill values such as integrity, responsibility, and ethical behavior in our students. Our aim is to produce not just successful individuals but responsible citizens who contribute positively to society.",
      image: fourthImage,
    },
    {
      title: "Rich Heritage and Tradition",
      id: "collapse-text-first",
      text: " Indian Public School has a legacy of educational excellence that spans decades. Our institution has stood the test of time, consistently producing graduates who excel in various fields, whether it's academics, sports, or the arts. We take pride in our traditions, blending them seamlessly with modern pedagogical methods to provide a holistic learning experience.",
      image: firstImage,
    },
    {
      title: "Innovative Teaching Methods",
      id: "collapse-text-second",
      text: " We recognize that the world is evolving rapidly, and education must keep pace. Our curriculum is designed to be dynamic, integrating the latest educational technologies and teaching methodologies. We encourage critical thinking, problem-solving, and creativity, preparing students to thrive in a rapidly changing world.",
      image: secondImage,
    },
    {
      title: "Robust Extracurricular Programs",
      id: "collapse-text-third",
      text: "Education at Indian Public School is not limited to the classroom. We offer a wide range of extracurricular activities, including sports, music, drama, and community service, to help students discover and develop their talents and passions outside of academics.",
      image: thirdImage,
    },
  ];

  const handleButtonClick = (sectionId) => {
    setOpenSection(sectionId === openSection ? null : sectionId);
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Container>
        <div>
          <Image
            src={headImage}
            alt="Indian Public School"
            className=""
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        {/* this is for  heading  */}
        <div className="text-center mt-5 mb-5 ">
          <span
            className="shadow p-3 mb-5 bg-body rounded"
            style={{
              fontFamily: "satisfies",
              fontWeight: "bold",
              fontSize: "20px",
              color: "#8a129c",
            }}>
            Why Indian Public School?
          </span>

          {/* this is for title  with button  */}
        </div>
        <div className="mt-5">
          <Row xs={1} md={4}>
            {sections.map((section) => (
              <Col key={section.title}>
                <div
                  style={{
                    fontWeight: "bold",
                    marginBottom: "10px",
                    fontSize: "17px",
                  }}>
                  {" "}
                  {section.title}:{" "}
                  <button
                    className="btn btn-info btn-rounded"
                    style={{ color: "#860caf" }}
                    onClick={() => handleButtonClick(section.id)}
                    aria-controls={section.id}
                    aria-expanded={section.id === openSection}>
                    <div style={{ fontWeight: "bolder" }}>
                      {" "}
                      {section.id === openSection ? "-" : "+"}
                    </div>
                  </button>
                </div>
              </Col>
            ))}
          </Row>

          {/* image and test of title  */}
          <div style={{ minHeight: "100px" }} className="mt-5">
            {sections.map((section) => (
              <div
                key={section.id}
                className={section.id === openSection ? "open" : "closed"}>
                {section.id === openSection && (
                  <Fade in={true} dimension="width">
                    <div id={section.id}>
                      <Row>
                        <Col sm={5}>
                          {" "}
                          <img
                            src={section.image}
                            alt={section.title}
                            style={{
                              maxWidth: "20rem",
                              minWidth: "18.5rem",
                              width: "18rem",
                              height: "18rem",
                            }}
                          />
                        </Col>
                        <Col sm={7}>
                          <div style={{ maxHeight: "38rem" }} className="mt-2">
                            <h1 style={{ fontFamily: "fantasy" }}>
                              {section.title}:
                            </h1>
                            <p
                              style={{
                                fontFamily: "san-serif",
                                fontSize: "22px",
                                lineHeight: "1.6",
                                marginTop: "3rem",
                              }}>
                              {section.text}

                              {/* {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"} */}
                              {/* </span> */}
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Fade>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div>
        <Footer />
      </div>
    </div>
  );
}
