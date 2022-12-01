// create the navigation flow 
// import BrowserRouter, Router, Routes, Route

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from "./Nav"
import Home from './Home';
import Movies from './Movies'
import People from './People'
import Location from "./Location" 
import "./index.css"




function App() {
  return (
    <div className="nav">
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/people' element={<People/>}/>
          <Route path='/location' element={<Location/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
