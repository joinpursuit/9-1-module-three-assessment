import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Locations from "./components/Locations";
import People from "./components/People";


function App() {
 
  return (
    <div className="app">
      <Router>
        <div className="header" >
          <Nav />
        </div>
        <br />
        <div className="wrapper">
        <main>
        <Routes>
          <Route path="/" element={ <Home /> } />

          <Route path="/movies" element={ <Movies /> } />

          <Route path="/people" element={ <People /> } />

          <Route path="/locations" element={ <Locations /> } />
        </Routes>
      </main>
      </div>
      </Router>
    </div>
  );
}

export default App;
