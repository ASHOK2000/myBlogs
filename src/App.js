import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlogs from "./Resource/Home";
import About from "./Resource/About";
import Contact from "./Resource/Contact-us";
import Footer from "./Resource/Footer";
import PhonePeExpress from "./Resource/Blogs/integration/PhonePe.Express";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />}></Route>

        <Route path="/Contact_us" element={<Contact></Contact>}>
          {" "}
        </Route>
        <Route path="/" element={<AllBlogs></AllBlogs>}></Route>
        <Route path="#" element={<Footer></Footer>}></Route>
        <Route
          path="/Phonepewithexpress"
          element={<PhonePeExpress></PhonePeExpress>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
