import {BrowserRouter as Router,Routes, Route, } from 'react-router-dom'
import Home from './Home';
import Nav from './Nav'
import Movies from './Movies';
import People from './People';
import Locations from './Locations';

function App() {
  return (
    <>
    <Nav/>
    <Router>
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/Movies' element={ <Movies /> } />
      <Route path='/People' element={ <People /> } />
      <Route path='/Locations' element={ <Locations /> } />
    </Routes>
    </Router>
    </>
  );
}

export default App;
