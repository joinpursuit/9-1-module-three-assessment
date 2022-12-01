import Provider from './Components/Provider';
import RouteComponent from './Components/RouteComponent';
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
