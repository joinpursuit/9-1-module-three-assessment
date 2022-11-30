import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import People from "./Components/People";
import Locations from "./Components/Locations";

function RouteComponent(props) {
    return (
        <Routes>
            <Route path = "/">
                <Route index element = {<Home />} />
                <Route path = "movies" element = {<Movies />} />
                <Route path = "people" element = {<People />} />
                <Route path = "locations" element = {<Locations />} />
            </Route>

        </Routes>
    );
}

export default RouteComponent;