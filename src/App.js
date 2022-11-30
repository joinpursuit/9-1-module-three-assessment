import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./common/Navbar";
import Movies from "./components/Movies";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to GhibliApp</h1>} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<h1>People</h1>} />
          <Route path="/locations" element={<h1>Locations</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
