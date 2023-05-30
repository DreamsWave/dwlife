import Scenes from "./components/Scenes";
import Scene from "./components/Scene";
import { scenes } from "./scenes";
import { ControlsProvider } from "./controls-context";

function App() {
  return (
    <div className="App">
      <ControlsProvider>
        <Scenes>
          {scenes.map((scene, index) => (
            <Scene key={index} config={scene} />
          ))}
        </Scenes>
      </ControlsProvider>
    </div>
  );
}

export default App;
