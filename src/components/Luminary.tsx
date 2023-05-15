import { styled } from "styled-components";
import { animated, easings, useSpring } from "@react-spring/web";
import { Luminary as Config } from "../types";

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
    --mask: linear-gradient(
        to top,
        #000 1.5%,
        #0000 2%,
        #0000 5%,
        #000 5.5%,
        #000 7.5%,
        #0000 8%,
        #0000 10.6%,
        #000 11.1%,
        #000 13.6%,
        #0000 14.1%,
        #0000 16.3%,
        #000 16.8%,
        #000 19.8%,
        #0000 20.3%,
        #0000 22.1%,
        #000 22.6%,
        #000 26.1%,
        #0000 26.6%,
        #0000 28%,
        #000 28.5%,
        #000 32.5%,
        #0000 33%,
        #0000 34%,
        #000 34.5%,
        #000 39%,
        #0000 39.5%,
        #0000 40.1%,
        #000 40.6%,
        #000 46.6%,
        #0000 47.1%,
        #0000 47.5%,
        #000 48%,
        #000 53.5%,
        #000 0
      )
      no-repeat;

    -webkit-mask: var(--mask);
    mask: var(--mask);
  }
`;

function Luminary({ config, isReflexion = false }: LuminaryProps) {
  const { colors, delayAtTheTop, glow, movementDuration } = config;

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
        delay: delayAtTheTop,
      },
      {
        top: "150%",
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
