import { styled } from "styled-components";
import { animated, easings, useSpring } from "@react-spring/web";
import { Luminary as Config } from "../types";
import { generateLuminaryGradient } from "../utils";

type LuminaryProps = {
  config: Config;
  isReflexion?: boolean;
};

type LuminaryWrapperProps = {
  glow: string;
  isReflexion: boolean;
  colors: string[];
};
const LuminaryWrapper = styled(animated.div)<LuminaryWrapperProps>`
  display: grid;
  grid-template: 1fr / 1fr;
  inline-size: min(20vmin, 400px);
  aspect-ratio: 1;
  border-radius: 50%;
  font-size: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  filter: drop-shadow(0 0 4rem ${({ glow }) => glow})
    ${({ isReflexion }) => isReflexion && "blur(10px)"};
  opacity: ${({ isReflexion }) => (isReflexion ? 0.7 : 1)};
  transform: ${({ isReflexion }) =>
    isReflexion ? "translate(0, 0%) scale(2)" : "translate(0, -50%)"};
  &:after {
    content: "";
    grid-area: 1 / 1;
    background: linear-gradient(${({ colors }) => colors.join(", ")});
    border-radius: inherit;
    -webkit-mask: ${generateLuminaryGradient} no-repeat;
    mask: ${generateLuminaryGradient} no-repeat;
  }
`;

function Luminary({ config, isReflexion = false }: LuminaryProps) {
  const { colors, delayAtTheTop, glow, movementDuration } = config;

  const luminaryMovementTransformStart = isReflexion
    ? "translate(0, -50%) scale(0.8)"
    : "translate(0, -50%) scale(1)";
  const luminaryMovementTransformEnd = isReflexion
    ? "translate(0, -50%) scale(2)"
    : "translate(0, -50%) scale(1)";
  const luminaryMovement = useSpring({
    from: {
      top: "150%",
      transform: luminaryMovementTransformStart,
    },
    to: [
      {
        top: "50%",
        transform: luminaryMovementTransformEnd,
        delay: 0,
      },
      {
        top: "50%",
        transform: luminaryMovementTransformEnd,
        delay: delayAtTheTop,
      },
      {
        top: "150%",
        transform: luminaryMovementTransformStart,
        delay: 0,
      },
    ],
    config: {
      duration: movementDuration,
      easing: easings.easeInOutQuad,
    },
    loop: true,
  });

  return (
    <LuminaryWrapper
      id="luminary"
      isReflexion={isReflexion}
      glow={glow}
      colors={colors}
      style={{
        ...luminaryMovement,
      }}
    ></LuminaryWrapper>
  );
}

export default Luminary;
