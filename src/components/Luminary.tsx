import { styled } from "styled-components";
import { animated, easings, useSpring } from "@react-spring/web";
import { Scene } from "../types";
import { generateLuminaryGradient } from "../utils";
import { useControls } from "leva";
import { useControlsContext } from "../controls-context";

type LuminaryWrapperProps = {
  glow: string;
  isReflexion: boolean;
  colors: string[];
};
const LuminaryWrapper = styled(animated.div)<LuminaryWrapperProps>`
  display: grid;
  grid-template: 1fr / 1fr;
  inline-size: min(30vmin, 200px);
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 0;
  position: absolute;
  z-index: 5;
  top: 30vh;
  filter: drop-shadow(0 0 2rem ${({ glow }) => glow});
  &:after {
    content: "";
    grid-area: 1 / 1;
    background: linear-gradient(${({ colors }) => colors.join(", ")});
    border-radius: inherit;
    -webkit-mask: ${generateLuminaryGradient} no-repeat;
    mask: ${generateLuminaryGradient} no-repeat;
  }
`;

type LuminaryReflexionWrapperProps = {
  primaryLuminaryColor: string;
  primarySkyColor: string;
  opacity: number;
};
const LuminaryReflexionWrapper = styled(
  animated.div
)<LuminaryReflexionWrapperProps>`
  display: grid;
  grid-template: 1fr / 1fr;
  inline-size: min(30vmin, 200px);
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 0;
  position: absolute;
  top: 10vh;
  transform: scale3d(2.5, 2.7, 1);
  filter: blur(25px);
  z-index: 5;
  opacity: ${({ opacity }) => opacity};
  background: radial-gradient(
    at center,
    ${({ primaryLuminaryColor }) => primaryLuminaryColor} 0%,
    ${({ primaryLuminaryColor }) => primaryLuminaryColor} 50%,
    ${({ primarySkyColor }) => primarySkyColor} 100%
  );
`;

type LuminaryProps = {
  config: Scene;
  isReflexion?: boolean;
};
function Luminary({ config, isReflexion = false }: LuminaryProps) {
  const {
    state: { pauseAnimations },
    dispatch,
  } = useControlsContext();
  const [luminaryMovement, luminaryMovementAPI] = useSpring(() => ({
    from: {
      top: "85vh",
    },
    to: [
      {
        top: "30vh",
        delay: 0,
      },
      {
        top: "30vh",
        delay: config.luminary.delayAtTheTop,
      },
      {
        top: "85vh",
        delay: 0,
      },
    ],
    config: {
      duration: config.luminary.movementDuration,
      easing: easings.easeInOutQuad,
    },
    loop: true,
  }));

  const [luminaryReflexionMovement, luminaryReflexionMovementAPI] = useSpring(
    () => ({
      from: {
        top: "15vh",
        opacity: 0,
      },
      to: [
        {
          top: "10vh",
          opacity: config.luminary.reflexionOpacity,
          delay: 0,
        },
        {
          top: "10vh",
          opacity: config.luminary.reflexionOpacity,
          delay: 13000,
        },
        {
          top: "15vh",
          opacity: 0,
          delay: 0,
        },
      ],
      config: {
        duration: 5000,
        easing: easings.easeInOutQuad,
      },
      loop: true,
    })
  );

  useControls({
    pauseAnimations: {
      value: pauseAnimations,
      onChange: (isPaused) => {
        if (isPaused) {
          luminaryMovementAPI.pause();
          luminaryReflexionMovementAPI.pause();
        } else {
          luminaryMovementAPI.resume();
          luminaryReflexionMovementAPI.resume();
        }
        dispatch({ type: "pauseAnimations" });
      },
    },
  });

  if (isReflexion)
    return (
      <LuminaryReflexionWrapper
        className="luminary"
        primaryLuminaryColor={config.luminary.colors[0]}
        primarySkyColor={config.sky.colors[0]}
        opacity={config.luminary.reflexionOpacity}
        style={{
          ...luminaryReflexionMovement,
        }}
      />
    );

  return (
    <LuminaryWrapper
      className="luminary"
      isReflexion={isReflexion}
      glow={config.luminary.glow}
      colors={config.luminary.colors}
      style={{ ...luminaryMovement }}
    ></LuminaryWrapper>
  );
}

export default Luminary;
