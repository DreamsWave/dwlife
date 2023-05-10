import Scene from "./components/Scene";
import "./App.css";
import Sky from "./components/Sky";
import Luminary from "./components/Luminary";
import Ocean from "./components/Ocean";

function App() {
  return (
    <div className="App">
      <Scene>
        <Sky>
          <Luminary />
        </Sky>
        <Ocean />
      </Scene>
    </div>
  );
}

export default App;
