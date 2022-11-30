import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
      <div> <Nav /> </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/people" element={<People/>} />
          <Route path="/locations" element={<Locations />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
