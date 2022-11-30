import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import Movies from './Components/Movies'
import People from './Components/People'
import Locations from './Components/Locations'

function App() {
  const [movies, setMovies] = useState([])
  const [people, setPeople] = useState([])
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch(('films.json'))
    .then(res => res.json())
    .then(res => {
      setMovies(res)
      console.log(res)
    })
    .catch(err => console.log(err))
    
    fetch(('people.json'))
    .then(res => res.json())
    .then(res => {
      setPeople(res)
      console.log(res)
    })
    .catch(err => console.log(err))
    
    fetch(('locations.json'))
    .then(res => res.json())
      .then(res => {
        setLocations(res)
        console.log(res)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <Router>
      <div className="app">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies movies={movies}/>} />
          <Route path='/people' element={<People people={people}/>} />
          <Route path='/locations' element={<Locations locations={locations}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
