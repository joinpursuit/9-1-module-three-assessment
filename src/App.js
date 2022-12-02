import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import People from "./components/People";
import Locations from "./components/Locations";
import Movies from "./components/Movies";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </Router>
  );
};

export default App;
