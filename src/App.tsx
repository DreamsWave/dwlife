import Scenes from "./components/Scenes";
import Scene from "./components/Scene";
import { scenes } from "./scenes";

function App() {
  return (
    <div className="App">
      <Scenes>
        {scenes.map((scene, index) => (
          <Scene key={index} config={scene} />
        ))}
      </Scenes>
    </div>
  );
}

export default App;
