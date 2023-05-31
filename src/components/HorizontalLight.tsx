import { animated, useSpring } from "@react-spring/web";
import styled from "styled-components";
import { Scene } from "../types";
import { useControls } from "leva";
import { useControlsContext } from "../controls-context";

type HorizontalLightWrapperProps = {
  color: string;
  isReflexion: boolean;
};
const HorizontalLightWrapper = styled(
  animated.div
)<HorizontalLightWrapperProps>`
  background-image: ${({ isReflexion, color }) =>
    isReflexion
      ? `radial-gradient(
    at 50% 100%,
    ${color} 0%,
    transparent 40%
  )`
      : `linear-gradient(
    0deg,
    ${color} 0%,
    transparent 40%
  )`};
  width: 100%;
  height: 100%;
  opacity: ${({ isReflexion }) => (isReflexion ? 0.8 : 1)};
  position: absolute;
  z-index: 4;
`;

type HorizontalLightProps = {
  config: Scene;
  isReflexion?: boolean;
};

function HorizontalLight({
  config,
  isReflexion = false,
}: HorizontalLightProps) {
  const { state, dispatch } = useControlsContext();
  const [horizontalLightAnimation, horizontalLightAnimationAPI] = useSpring(
    () => ({
      from: {
        opacity: 0.3,
      },
      to: [
        {
          opacity: config.horizontalLight.opacity
            ? config.horizontalLight.opacity
            : 1,
        },
        {
          opacity: config.horizontalLight.opacity
            ? config.horizontalLight.opacity
            : 1,
          delay: config.luminary.delayAtTheTop,
        },
        {
          opacity: 0.3,
        },
      ],
      config: {
        duration: config.luminary.movementDuration,
      },
    })
  );

  useControls({
    pauseAnimations: {
      value: state.pauseAnimations,
      onChange: (isPaused) => {
        if (isPaused) {
          horizontalLightAnimationAPI.pause();
        } else {
          horizontalLightAnimationAPI.resume();
        }
        dispatch({ type: "pauseAnimations" });
      },
    },
  });

  return (
    <HorizontalLightWrapper
      color={config.horizontalLight.color}
      style={{ ...horizontalLightAnimation }}
      isReflexion={isReflexion}
    ></HorizontalLightWrapper>
  );
}

export default HorizontalLight;
