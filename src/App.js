import { useState,useEffect } from "react";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";

import Home from "./Home";
import Nav from "./Nav.js";
import Locations from "./Locations";
import Movies from "./Movies";
import People from "./People";

function App() {

  const [allMovies,setMovies]=useState([]);
  const [allLocations,setLocations]=useState([]);
  const [allPeople,setPeople]=useState([]);

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

  const getPeople=()=>{
    fetch('people.json'
    ,{
      headers : { 
        'Content-Type': 'people/json',
        'Accept': 'people/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(people) {
        // console.log(movies);
       setPeople(people)
      });
  }

  const getLocations=()=>{
    fetch('locations.json'
    ,{
      headers : { 
        'Content-Type': 'locations/json',
        'Accept': 'locations/json'
       }
    }
    )
      .then(function(response){
        // console.log(response)
        return response.json();
      })
      .then(function(locations) {
        // console.log(locations);
       setLocations(locations)
      });
  }


  useEffect(()=>{
    getMovies()
    getLocations()
    getPeople()
  },[])



  return (
    <div className="app">
      <Router>

        <Nav/>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/locations' element={<Locations allLocations={allLocations}/>}/>
          <Route path='/movies' element={<Movies allMovies={allMovies}/>}/>
          <Route path='/people' element={<People allPeople={allPeople}/>}/>
  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
