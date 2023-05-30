import { animated } from "@react-spring/web";
import { isChromium } from "../utils";
import Waves from "./Waves";
import { Scene } from "../types";
import { styled } from "styled-components";

type SkyWrapperProps = {
  isReflexion: boolean;
  colors: string[];
};
const SkyWrapper = styled(animated.div)<SkyWrapperProps>`
  width: ${({ isReflexion }) => (isReflexion ? "calc(100% - 1px)" : "100%")};
  height: ${({ isReflexion }) => (isReflexion ? "calc(20% - 1px)" : "80%")};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transform: ${({ isReflexion }) => (isReflexion ? "scaleY(-1)" : "")};
  background-image: ${({ colors }) =>
    `linear-gradient(${colors.map((color) => color).join(", ")})`};
`;

type SkyProps = {
  children: React.ReactNode;
  isReflexion: boolean;
  config: Scene;
};

function Sky({ children, isReflexion = false, config }: SkyProps) {
  return (
    <SkyWrapper isReflexion={isReflexion} colors={config.sky.colors}>
      {isReflexion && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(${config.sky.skyReflexionColor}, rgba(200, 200, 250, 0.05))`,
            zIndex: 1,
          }}
        >
          {isChromium() && <Waves />}
        </div>
      )}
      {children}
    </SkyWrapper>
  );
}

export default Sky;
