import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Sky from "./Sky";
import HorizontalLight from "./HorizontalLight";
import Luminary from "./Luminary";
import { styled } from "styled-components";

const SceneWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  const cloudsBoxShadows = generateClouds(config.clouds);

  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky isReflexion={isReflexion} config={config}>
      <HorizontalLight config={config} />
      <Luminary config={config} isReflexion={isReflexion} />
      <Clouds
        isReflexion={isReflexion}
        boxShadows={cloudsBoxShadows}
        config={config}
      />
    </Sky>
  );
  return (
    <SceneWrapper>
      <SkyComponent />
      <SkyComponent isReflexion={true} />
    </SceneWrapper>
  );
}

export default Scene;
