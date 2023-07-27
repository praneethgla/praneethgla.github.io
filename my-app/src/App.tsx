import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import Home from "./components/home/home";

function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
function GoogleHtml() {
  return <>google-site-verification: google7c471d28facd7f9e.html</>;
}

function CustomHeader() {
  return (
    <>
      <div className="p-4 row">
        <div className="col-3">
          <Link to="/">Home</Link>
        </div>
        <div className="col-3">
          <Link to="/about.html">About</Link>
        </div>
        <div className="col-3"></div>
      </div>
    </>
  );
}
function App() {
  return (
    <>
    
      <Router>
      <CustomHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about.html" element={<About />} />
          <Route
            path="/google7c471d28facd7f9e.html"
            element={<GoogleHtml />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
