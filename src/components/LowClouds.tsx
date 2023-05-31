import styled from "styled-components";
import { Scene } from "../types";

type CloudProps = {
  isBottom?: boolean;
  isRight?: boolean;
};
const Cloud = styled.div<CloudProps>`
  background: transparent;
  position: absolute;
  height: 15vh;
  filter: ${({ isBottom }) =>
    isBottom ? `url(#cloudy-filter-2)` : `url(#cloudy-filter-1)`};
  bottom: ${({ isBottom }) => (isBottom ? `130px` : `150px`)};
  box-shadow: ${({ color }) => `0px 200px 20px 0px ${color}`};
  width: 40vw;
  left: ${({ isRight }) => (isRight ? `60vw` : `0vw`)};
  transform: translateX(
    ${({ isRight, isBottom }) =>
      isBottom ? (isRight ? `10px` : `-10px`) : `0px`}
  );
  ${({ isRight }) =>
    isRight
      ? `border-top-left-radius: 100%;`
      : `border-top-right-radius: 100%;`}
`;

const Clouds = styled.div`
  position: absolute;
  bottom: 0;
`;

const LowCloudsWrapper = styled.div<{
  isReflexion?: boolean;
  opacity?: number;
}>`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  // overflow: hidden;
  z-index: 6;
  transform: scaleY(1);
  opacity: ${({ isReflexion, opacity }) =>
    isReflexion ? (opacity ? opacity : "0.4") : "0.6"};
`;

type LowCloudsProps = {
  isReflexion?: boolean;
  config: Scene;
};
function LowClouds({ isReflexion = false, config }: LowCloudsProps) {
  return (
    <LowCloudsWrapper
      isReflexion={isReflexion}
      opacity={config.lowClouds.reflexionOpacity}
    >
      <Clouds>
        <Cloud color={config.lowClouds.topColor} />
        <Cloud isBottom color={config.lowClouds.bottomColor} />
      </Clouds>
      <Clouds>
        <Cloud isRight color={config.lowClouds.topColor} />
        <Cloud isBottom isRight color={config.lowClouds.bottomColor} />
      </Clouds>
      <svg width="0" height="0">
        <filter id="cloudy-filter-1">
          <feTurbulence
            id="turbwave"
            type="fractalNoise"
            baseFrequency="0.035"
            seed="998"
            numOctaves="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="100" />
        </filter>
        <filter id="cloudy-filter-2">
          <feTurbulence
            id="turbwave"
            type="fractalNoise"
            baseFrequency="0.035"
            seed="998"
            numOctaves="4"
          />
          <feDisplacementMap in="SourceGraphic" scale="80" />
        </filter>
      </svg>
    </LowCloudsWrapper>
  );
}

export default LowClouds;
