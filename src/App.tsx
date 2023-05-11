import Scene from "./components/Scene";
import "./App.css";
import { scenes } from "./scenes";

function App() {
  return (
    <div className="App">
      {scenes.map((scene, i) => (
        <Scene key={i} config={scene} />
      ))}
    </div>
  );
}

export default App;
