import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Locations from './components/Locations';
import Movies from './components/Movies';
import Nav from './components/Nav'
import People from './components/People';

function App() {
  return (
    <div className="app">
      <Router>
      <div className='App'>
        <Nav/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies'  element={<Movies/>}/>
        <Route path='/people'  element={<People/>}/>
        <Route path='/locations'  element={<Locations/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
