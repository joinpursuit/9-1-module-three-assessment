import { useContext, createContext } from "react";
import Nav from "./Components/Nav";

// Declare variable for data consumption
export const ContextData = createContext(

)
function Provider(props) {


    return (
       <ContextData.Provider>
        <Nav />
        {props.children}
       </ContextData.Provider>
    );
}

export default Provider;