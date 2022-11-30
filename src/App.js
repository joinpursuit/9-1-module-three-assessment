import { get } from "./fetch";

function App() {
  get("people").then((res) => console.log(res));
  return (
    <div className="app">
      <h1>Welcome to GhibliApp</h1>
    </div>
  );
}

export default App;
