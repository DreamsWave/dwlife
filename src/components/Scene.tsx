import { Scene as SceneType } from "../types";
import Luminary from "./Luminary";
import Sky from "./Sky";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky isReflexion={isReflexion}>
      <Luminary glow={config.luminary.glow} />
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
