import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./navbar.jsx";

import Home from "./pages/home.jsx";
import AboutMe from "./pages/aboutme.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <NavBar />
    <div id='page' className="px-5 d-flex pt-5">
      <Routes>
        <Route path="portfolio-keuzedeel/" element={<Home />} />
        <Route path="portfolio-keuzedeel/aboutme" element={<AboutMe />} />
        <Route path="portfolio-keuzedeel/projects" element={<Projects />} />
        <Route path="/portfolio-keuzedeel/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>,
)
