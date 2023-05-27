import Scenes from "./components/Scenes";
import Scene from "./components/Scene";
import { scenes } from "./scenes";
import { useControls, useCreateStore } from "leva";
import { ControlsProvider } from "./controls-context";

function App() {
  const controlsStore = useCreateStore();
  useControls({ "Pause animations": false }, { store: controlsStore });

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
