import "./App.css";
import React from "react";
import {
  BrowseRouter,
  Routes,
  Route,
  Router,
  BrowserRouter,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import NavBar from "./components/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events";
import Merch from "./components/Merch";
import Beers from "./components/Beers/Beers";
import Team from "./components/Team"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/team" element={<Team />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
