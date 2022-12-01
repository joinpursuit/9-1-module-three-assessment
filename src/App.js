import { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav.js";
import Locations from "./Locations";
import Movies from "./Movies";
import People from "./People";

function App() {

  const [allMovies,setMovies]=useState([]);

  const getMovies=()=>{
    fetch('films.json'
    ,{
      headers : { 
        'Content-Type': 'films/json',
        'Accept': 'films/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(movies) {
        // console.log(movies);
        setMovies(movies)
      });
  }
  useEffect(()=>{
    getMovies()
  },[])



  return (
    <div className="app">
      <Router>

        <Nav/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/locations' element={<Locations/>}/>
          <Route path='/movies' element={<Movies allMovies={allMovies}/>}/>
          <Route path='/people' element={<People/>}/>
  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
