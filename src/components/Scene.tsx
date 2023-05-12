import { Scene as SceneType } from "../types";
import Luminary from "./Luminary";
import Ocean from "./Ocean";
import Sky from "./Sky";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  return (
    <div className="scene">
      <Sky>
        <Luminary glow={config.luminary.glow} />
      </Sky>
      <Ocean />
    </div>
  );
}

export default Scene;
