import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { LinkContainer } from "react-router-bootstrap";
import logoImage from "../res_images/ips_logo.png";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";

import "../css/navbar.css";

export default function NavBar() {
  // const centerStyle = {
  //   color: "rgb(96, 2, 133)",
  //   fontFamily: "gothamhtf-medium ",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

 
  return (
    <>
      <div>
        <Navbar bg="" expand="lg">
          <Navbar.Brand href="/">
            <div className="navbar_logo">
              <Image
                src={logoImage}
                alt="indian Public school"
                className="navbar_logo"
              />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="nav_link">
            <Nav className="ml-auto ">
              <LinkContainer to="/">
                <Nav.Link>HOME</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/About">
                {/* <Nav.Link>About</Nav.Link> */}
                <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/aboutIndianPublicSchool">
                    About Indian Public School
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/ChairmanMsg">
                    ChairMan's Massage
                  </NavDropdown.Item>

                  <NavDropdown.Item href="/transportPolicy">
                    Transport Policy
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="/blogs">Blogs</NavDropdown.Item>
                </NavDropdown>
              </LinkContainer>

              <LinkContainer to="/whyIPS">
                <Nav.Link>WHY US </Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/Alumni">
                <Nav.Link>ALUMNI</Nav.Link>
              </LinkContainer> */}

              <LinkContainer to="/Admisson">
                <Nav.Link>ADMISSON</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/careers">
                <Nav.Link>CAREERS</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Contact_us">
                <Nav.Link>CONTACT US</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/location">
                <Nav.Link>LOCATION</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Login">
                <Nav.Link>LOGIN</Nav.Link>
              </LinkContainer>

              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}
