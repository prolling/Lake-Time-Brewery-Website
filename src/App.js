import "./App.css";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Merch from "./components/Merch";
import Beers from "./components/Beers";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/merch">
            <Merch />
          </Route>
          <Route path="/beers">
            <Beers />
          </Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
