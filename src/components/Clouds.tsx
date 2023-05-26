import { keyframes, styled } from "styled-components";
import { isChromium } from "../utils";
import { Scene } from "../types";
import { animated, useSpring } from "@react-spring/web";

const generateCloudsAnimation = (opacity: number) => keyframes`
  0% { transform: translateX(0); opacity: 0; }
  20% { opacity: ${opacity}; }
  80% { opacity: ${opacity}; }
  100% { transform: translateX(-300px); opacity: 0; }
`;

type CloudsWrapperProps = {
  isReflexion?: boolean;
};
const CloudsWrapper = styled(animated.div)<CloudsWrapperProps>`
  width: calc(100vw + 600px);
  height: 100%;
  overflow: hidden;
  position: absolute;
  left: 0;
  opacity: ${({ isReflexion = false }) => (isReflexion ? 0.8 : 1)};
`;

type CloudsLayerProps = {
  opacity: number;
  duration: number;
};
const CloudsLayer = styled.div<CloudsLayerProps>`
  overflow: hidden;
  width: 1px;
  height: 1px;
  transform: translate(-100%, -100%);
  border-radius: 50%;
  filter: url(#filter);
  animation: ${({ opacity }) => generateCloudsAnimation(opacity)}
    ${({ duration }) => duration}ms infinite linear;
`;

type CloudsProps = {
  isReflexion?: boolean;
  boxShadows: string[];
  config: Scene;
};

function CloudsComponent({
  isReflexion = false,
  boxShadows,
  config,
}: CloudsProps) {
  const cloudsOpacityAnimation = useSpring({
    from: {
      opacity: 0.5,
    },
    to: [
      {
        opacity: 1,
      },
      { opacity: 1, delay: config.luminary.delayAtTheTop },
      { opacity: 0.5 },
    ],
    config: {
      duration: config.luminary.movementDuration,
    },
  });

  if (!isChromium()) return null;

  return (
    <CloudsWrapper
      isReflexion={isReflexion}
      style={{ ...cloudsOpacityAnimation }}
    >
      {config.clouds.map((cloud, i) => (
        <CloudsLayer
          key={i}
          style={{ boxShadow: boxShadows[i] }}
          opacity={cloud.opacity}
          duration={cloud.duration}
        ></CloudsLayer>
      ))}

      <svg width="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
      </svg>
    </CloudsWrapper>
  );
}

export default CloudsComponent;
