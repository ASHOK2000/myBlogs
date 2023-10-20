import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./../../NavBar";
import CardList from "./../../inThisArticle";
import "../../../css/PhonePe.express.css";
import Contact from "./../../Contact-us";
import Footer from "./../../Footer";
import TopThreeBlog from "./../../Blog.topThree";
import phonePeTitle from "./../../../InThisSection/phonepe.express.title";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";

export default function PhonePeExpress() {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const firstDiv = document.getElementById("firstDiv");
    const secondDiv = document.getElementById("secondDiv");

    if (firstDiv && secondDiv) {
      const rect = firstDiv.getBoundingClientRect();

      if (rect.bottom <= 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const code = `const express = require('express')
  const bodyparser = require('body-parser')
  const path = require('path')
  const app = express()
   
  var Publishable_Key = 'Your_Publishable_Key'
  var Secret_Key = 'Your_Secret_Key'
   
  const stripe = require('stripe')(Secret_Key)
   
  const port = process.env.PORT || 3000
   
  app.use(bodyparser.urlencoded({extended:false}))
  app.use(bodyparser.json())
   
  // View Engine Setup
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
   
  app.get('/', function(req, res){
      res.render('Home', {
         key: Publishable_Key
      })
  })`;

  return (
    <>
      {/* allways put section name by series of heading Eg. id="section1  */}

      <div className="Header">
        <NavBar />
      </div>

      <Container fluid>
        <Row>
          {/* first Column */}
          <Col md={3} className=" mb-5">
            {/* Left Column */}
            <div id="leftCol" className={isSticky ? "sticky" : ""}>
              {/* IN THIS ARTICLE CARD LIST  */}
              <CardList data={phonePeTitle} />
            </div>
          </Col>
          {/*  ----------------------------------------- second Column---------------------------------------------------------*/}
          <Col md={7}>
            <div>
              <h2 style={{ fontFamily: "cursive" }}>
                How to Integrate PhonePe Payment Gateway in Node.js (Express) ?
                <hr></hr>
              </h2>
            </div>
            <div id="firstDiv">
              <div id="section1">
                <h6>Introduction</h6>
              </div>
            </div>
            <div id="secondDiv">
              <div id="section2">
                <h6>Installation Of PhonePe Module</h6>
                <SyntaxHighlighter className="code_bg">
                  npm install react-syntax-highlighter --save <p></p>
                </SyntaxHighlighter>
              </div>
              <div id="section3">
                <h6>PhonePe Key Secrets</h6>
              </div>
              <div id="section3">
                <h6>PhonePe Payload</h6>
                <SyntaxHighlighter className="code_bg">
                  {`{
  "merchantId": "MERCHANTUAT",
  "merchantTransactionId": "MT7850590068188104",
  "merchantUserId": "MU933037302229373",
  "amount": 10000,
  "callbackUrl": "https://webhook.site/callback-url",
  "mobileNumber": "9999999999",
  "deviceContext": {
    "deviceOS": "ANDROID"
  },
  "paymentInstrument": {
    "type": "UPI_INTENT",
    "targetApp": "com.phonepe.app"
  }
}`}
                </SyntaxHighlighter>
              </div>
              <div id="section3">
                <h6>Payload to BASE64 Encoding</h6>
              </div>
              <div id="section3">
                <h6>BASE64 to SHA256 Encoding</h6>
              </div>
              <div id="section3">
                <h6>POST payload Using Axios</h6>
                <div className="code_bg">
                  <SyntaxHighlighter language="javascript">
                    {`const express = require('express')
  const bodyparser = require('body-parser')
  const path = require('path')
  const app = express()
   
  var Publishable_Key = 'Your_Publishable_Key'
  var Secret_Key = 'Your_Secret_Key'
   
  const stripe = require('stripe')(Secret_Key)
   
  const port = process.env.PORT || 3000
  app.use(bodyparser.urlencoded({extended:false}))
  app.use(bodyparser.json())
   
  // View Engine Setup
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
   
  app.get('/', function(req, res){
      res.render('Home', {
         key: Publishable_Key
      })
  })`}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </Col>

          {/*  ----------------------------------------- third Column---------------------------------------------------------*/}
          <Col md={2}>
            {/* Right Column */}
            {/* <p>
              this is third div 
              place yofdur add here</p> */}
          </Col>
        </Row>
      </Container>
      <div>
        <Contact />
      </div>

      <div>
        <TopThreeBlog />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
