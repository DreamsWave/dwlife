import Scene from "./components/Scene";
import { scenes } from "./scenes";

function App() {
  return (
    <div className="App">
      {/* {scenes.map((scene, i) => (
        <Scene key={i} config={scene} />
      ))} */}
      <Scene config={scenes[1]} />
    </div>
  );
}

export default App;
