import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import People from './People';
import Location from './Location';
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="people" element={<People />} />
        <Route path="location" element={<Location />} />
      </Routes>
    </Router>
  );
}

export default App;
