import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home View</h2>
      <p>this is home view by praneeth</p>
    </div>
  );
}
function About() {
  return (
    <div style={{ padding: 20 }}>
      <h2>About View</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
  );
}
function GoogleHtml() {
  return (<>
  
    google-site-verification: google7c471d28facd7f9e.html</>
  );
}
function App() {
  return(
    <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about.html" element={<About />} />
    <Route path="/google7c471d28facd7f9e.html" element={<GoogleHtml />} ></Route>
  </Routes>
  </Router>
  )
}

export default App;
