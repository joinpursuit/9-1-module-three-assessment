import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import Locations from "./Components/Locations";
import People from "./Components/People";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/people" element={<People />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
