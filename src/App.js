import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Location from "./Components/Location";
import Nav from "./Components/Nav";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Home from "./Components/Home";


function App() {
  return (
    <Router>
    <div className="app">
    <Nav />
        <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/people' element={<People />} />
        <Route path="/location" element={<Location />} />
        {/* <Route path="/location/:id" element={<Location />} /> */}
        
        </Routes>
    </div>
    </Router>
  );
}

export default App;
