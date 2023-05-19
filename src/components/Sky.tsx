import { animated } from "@react-spring/web";
import { isChromium } from "../utils";
import Waves from "./Waves";
import { Sky as SkyConfig } from "../types";
import { styled } from "styled-components";

type SkyWrapperProps = {
  isReflexion: boolean;
  colors: string[];
};
const SkyWrapper = styled(animated.div)<SkyWrapperProps>`
  width: 100%;
  height: 50%;
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
  config: SkyConfig;
};

function Sky({ children, isReflexion = false, config }: SkyProps) {
  return (
    <SkyWrapper isReflexion={isReflexion} colors={config.colors}>
      {isReflexion && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(${config.skyReflexionColor}, rgba(200, 200, 250, 0.05))`,
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
