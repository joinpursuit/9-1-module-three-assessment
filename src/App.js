import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./Home";
import Nav from "./Nav";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations  from "./components/Locations";

import "./index.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path=" /" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
