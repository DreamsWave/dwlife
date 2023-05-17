import { animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { generateSkyGradient, isChromium } from "../utils";
import Waves from "./Waves";
import { Sky as SkyConfig } from "../types";
import { styled } from "styled-components";

type SkyWrapperProps = {
  isReflexion: boolean;
};
const SkyWrapper = styled(animated.div)<SkyWrapperProps>`
  width: 100%;
  height: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  transform: ${(props) => (props.isReflexion ? "scaleY(-1)" : "")};
`;

type SkyProps = {
  children: React.ReactNode;
  isReflexion: boolean;
  config: SkyConfig;
};

function Sky({ children, isReflexion = false, config }: SkyProps) {
  const [backgroundImage, setBackgroundImage] = useState(
    generateSkyGradient("150%", config.colors)
  );

  // TODO: use a better solution to update gradient on luminary position
  useEffect(() => {
    const luminary = document.querySelector("#luminary");
    function updateGradient() {
      if (!luminary) return;
      const windowHeight = window.innerHeight;
      const luminaryPosition = luminary.getBoundingClientRect();
      const luminaryYpercentage =
        Math.round(
          ((luminaryPosition.top + luminaryPosition.height / 2) /
            windowHeight) *
            100 *
            2
        ) + "%";
      setBackgroundImage(
        generateSkyGradient(luminaryYpercentage, config.colors)
      );
      requestAnimationFrame(updateGradient);
    }

    requestAnimationFrame(updateGradient);
  });

  return (
    <SkyWrapper
      isReflexion={isReflexion}
      style={{
        backgroundImage: backgroundImage,
      }}
    >
      {isReflexion && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: `linear-gradient(${config.skyReflexionColor}, rgba(0, 0, 0, 0.05))`,
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
