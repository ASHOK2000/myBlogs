import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Alumani from "./Resource/Alumani";
import Career from "./Resource/Careers";
import Login from "./Resource/Login";
import WhyUs from "./Resource/Why-us";
import Admisson from "./Resource/Admisson";
import Home from "./Resource/Home";
import Location from "./Resource/Location";
import About from "./Resource/About";
import Contact from "./Resource/Contact-us";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />}>

        </Route>

        <Route path="/Admisson" element={<Admisson></Admisson>}> </Route>
        <Route path="/Alumni" element={<Alumani></Alumani>}></Route>
        <Route path="/Careers" element={<Career></Career>}> </Route>
        <Route path="/Contact_us" element={<Contact></Contact>}> </Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/location" element={<Location></Location>}></Route>
        <Route path="/whyIPS" element={<WhyUs></WhyUs>}></Route>
        <Route path="/Login" element={<Login></Login>}> </Route>
      </Routes>


    </BrowserRouter>
  )
}

export default App;