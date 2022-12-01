import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import People from "./People";
import Locations from "./Locations";

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