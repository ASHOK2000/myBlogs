
import React from 'react';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from 'react-bootstrap/Image';
import { LinkContainer } from "react-router-bootstrap";
import logoImage from '../res_images/ips_logo.png'
import { Container, Form } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';

import '../css/navbar.css'

export default function NavBar() {
  return (
    <Container>
      <Navbar bg="gray" expand="lg" >
        <Navbar.Brand href="/"> <div className="navbar_logo">
          <Image src={logoImage} alt="indian Public school" className="navbar_logo" />
        </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='nav_link'>
          <Nav className="me-auto">


            <LinkContainer to="/">
              <Nav.Link>HOME</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/About">
              {/* <Nav.Link>About</Nav.Link> */}
              <NavDropdown title="ABOUT" id="collasible-nav-dropdown">

                <NavDropdown.Item href="/aboutIndianPublicSchool"
                >About Indian Public School
                </NavDropdown.Item>

                <NavDropdown.Item href="/ChairmanMsg">
                  ChairMan's Massage
                </NavDropdown.Item>

                <NavDropdown.Item href="/transportPolicy">
                  Transport Policy
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="/blogs">
                  Blogs
                </NavDropdown.Item>

              </NavDropdown>
            </LinkContainer>

            <LinkContainer to="/whyIPS">
              <Nav.Link>WHY US </Nav.Link>
            </LinkContainer>

            <LinkContainer to="/Alumni">
              <Nav.Link>ALUMNI</Nav.Link>
            </LinkContainer>

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

            <Navbar className=" justify-content-between ">
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className=" mr-sm-5 mt-1"
                    />
                  </Col>
                  <Col xs="auto">
                    <Button type="submit">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Navbar>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </Container>
  );
}
