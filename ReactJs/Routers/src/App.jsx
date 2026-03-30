import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { About } from './components/About'
import { Home } from './components/Home'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { UserProfile } from './components/UserProfile'


function App() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <Link to="/services" style={{ marginRight: "10px" }}>Services</Link>
        <Link to="/contact" style={{ marginRight: "10px" }} >Contact</Link>
        <Link to="/users/143">UserProfile</Link>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;