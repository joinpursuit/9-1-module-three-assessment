import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import Nav from './Nav';
import Home from './Home';
import Movies from './Movies';
import People from './People';
import Location from './Location';
function App() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [input, setInput] = useState({});
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="movies"
          element={
            <Movies
              data={data}
              setData={setData}
              input={input}
              setInput={setInput}
            />
          }
        />
        <Route
          path="people"
          element={
            <People
              data={data}
              setData={setData}
              name={name}
              setName={setName}
              input={input}
              setInput={setInput}
            />
          }
        />
        <Route
          path="location"
          element={
            <Location
              data={data}
              setData={setData}
              show={show}
              setShow={setShow}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
