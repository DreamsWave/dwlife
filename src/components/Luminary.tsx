import { styled } from "styled-components";
import { animated, easings, useSpring } from "@react-spring/web";
import { Scene } from "../types";
import { generateLuminaryGradient } from "../utils";

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
  filter: drop-shadow(0 0 2rem ${({ glow }) => glow})
    ${({ isReflexion }) => isReflexion && "blur(5px)"};
  &:after {
    content: "";
    grid-area: 1 / 1;
    background: linear-gradient(${({ colors }) => colors.join(", ")});
    border-radius: inherit;
    -webkit-mask: ${generateLuminaryGradient} no-repeat;
    mask: ${generateLuminaryGradient} no-repeat;
  }
`;

type LuminaryProps = {
  config: Scene;
  isReflexion?: boolean;
};
function Luminary({ config, isReflexion = false }: LuminaryProps) {
  const luminaryMovement = useSpring({
    from: {
      top: "150%",
    },
    to: [
      {
        top: "50%",
        delay: 0,
      },
      {
        top: "50%",
        delay: config.luminary.delayAtTheTop,
      },
      {
        top: "150%",
        delay: 0,
      },
    ],
    config: {
      duration: config.luminary.movementDuration,
      easing: easings.easeInOutQuad,
    },
    loop: true,
  });

  return (
    <LuminaryWrapper
      id="luminary"
      isReflexion={isReflexion}
      glow={config.luminary.glow}
      colors={config.luminary.colors}
      style={{
        ...luminaryMovement,
      }}
    ></LuminaryWrapper>
  );
}

export default Luminary;
