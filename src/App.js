import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
    </Router>
  );
}

export default App;
