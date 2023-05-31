import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Sky from "./Sky";
import HorizontalLight from "./HorizontalLight";
import Luminary from "./Luminary";
import { styled } from "styled-components";
import LowClouds from "./LowClouds";

type SceneWrapperProps = {
  primaryBackgroundColor: string;
};

const SceneWrapper = styled.div<SceneWrapperProps>`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  background: ${({ primaryBackgroundColor }) =>
    `linear-gradient(#fff 0%, #fff 80%, ${primaryBackgroundColor} 100%)`};
`;

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  const cloudsBoxShadows = generateClouds(config.clouds);

  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky isReflexion={isReflexion} config={config}>
      <HorizontalLight config={config} isReflexion={isReflexion} />
      <Luminary config={config} isReflexion={isReflexion} />
      <Clouds
        isReflexion={isReflexion}
        boxShadows={cloudsBoxShadows}
        config={config}
      />
      <LowClouds isReflexion={isReflexion} config={config} />
    </Sky>
  );
  return (
    <SceneWrapper
      className="scene"
      primaryBackgroundColor={config.sky.colors[0]}
    >
      <SkyComponent />
      <SkyComponent isReflexion={true} />
    </SceneWrapper>
  );
}

export default Scene;
