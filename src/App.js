import { Routes, Route } from "react-router-dom";
import NavBar from "./Pages/NavBar";
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import People from "./Pages/People";
import Locations from "./Pages/Locations";
import Error from "./Pages/Error";
function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/" element={<Movies />} />
          <Route path="/people/" element={<People />} />
          <Route path="/locations/" element={<Locations />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
