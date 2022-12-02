import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Location from "./Components/Locations"
import Movie from "./Components/Movies"
import People from "./Components/People"
import Nav from './Components/Nav';
import Home from './Components/Home';


function App() {
  return (
    <div className="app">
     <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movies' element={<Movie/>}/>
        <Route path='/people' element={<People/>}/>
        <Route path='/location' element={<Location/>}/>
      </Routes>
    </Router> 

    </div>
  );
}

export default App

