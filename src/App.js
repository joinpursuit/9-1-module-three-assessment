import Provider from "./Provider";
import RouteComponent from "./RouteComponent";

import './App.css'


function App() {
  return (
    
    <div className="app">
      <Provider>
        <RouteComponent />
      </Provider>
    </div>
  );
}

export default App;
