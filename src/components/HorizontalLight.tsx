import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { Scene } from "../types";

type HorizontalLightWrapperProps = {
  color: string;
};
const HorizontalLightWrapper = styled(
  animated.div
)<HorizontalLightWrapperProps>`
  background-image: linear-gradient(
    0deg,
    ${({ color }) => color} 0%,
    transparent 40%
  );
  width: 100%;
  height: 100%;
  opacity: 1;
  position: absolute;
`;

type HorizontalLightProps = {
  config: Scene;
};
function HorizontalLight({ config }: HorizontalLightProps) {
  const horizontalLightAnimation = useSpring({
    from: {
      opacity: 0.3,
    },
    to: [
      {
        opacity: 1,
      },
      {
        opacity: 1,
        delay: config.luminary.delayAtTheTop,
      },
      {
        opacity: 0.3,
      },
    ],
    config: {
      duration: config.luminary.movementDuration,
    },
  });
  return (
    <HorizontalLightWrapper
      color={config.horizontalLight.color}
      style={{ ...horizontalLightAnimation }}
    ></HorizontalLightWrapper>
  );
}

export default HorizontalLight;
