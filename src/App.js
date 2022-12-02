import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home"
import Movies from "./Components/Movies"
import People from "./Components/People"
import Locations from "./Components/Locations"
import Nav from "./Components/Nav"

function App() {
  return (
    <Router>
    <div className="app">
       <Nav /> 
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People/>} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
    </div>
    </Router>
  );
}

export default App;
