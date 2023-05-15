import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Sky from "./Sky";
import HorizontalLight from "./HorizontalLight";
import Luminary from "./Luminary";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  console.log(config);
  const clouds = generateClouds();

  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky isReflexion={isReflexion}>
      <Luminary config={config.luminary} isReflexion={isReflexion} />
      <Clouds isReflexion={isReflexion} clouds={clouds} />
      <HorizontalLight />
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
