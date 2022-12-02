import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import NavBar from './NavBar';
import Locations from "./Locations";
import Movies from "./Movies";
import People from "./People";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People />} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
