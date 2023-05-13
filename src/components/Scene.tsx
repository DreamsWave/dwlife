import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Luminary from "./Luminary";
import Sky from "./Sky";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  const clouds = generateClouds();
  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky isReflexion={isReflexion}>
      <Luminary glow={config.luminary.glow} />
      <Clouds isReflexion={isReflexion} clouds={clouds} />
    </Sky>
  );
  return (
    <div className="scene">
      <SkyComponent />
      <SkyComponent isReflexion={true} />
    </div>
  );
}

export default Scene;
