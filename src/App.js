import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Locations from "./Locations";
import Movies from "./Movies";
import Navbar from "./Navbar";
import People from "./People";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
