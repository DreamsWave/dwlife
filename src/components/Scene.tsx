import { animated, easings, useSpring } from "@react-spring/web";
import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Luminary from "./Luminary";
import Sky from "./Sky";
import { sceneConfig } from "../scenes";
import { useEffect, useRef, useState } from "react";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  const clouds = generateClouds();
  const luminaryRef = useRef(null);
  const [backgroundGradientPosition, setBackgroundGradientPosition] =
    useState("150%");
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
        delay: sceneConfig.duration.luminary.atTop,
      },
      {
        top: "150%",
        delay: 0,
      },
    ],
    config: {
      duration: sceneConfig.duration.luminary.movement,
      easing: easings.easeInOutQuad,
    },
    loop: true,
  });

  const SkyComponent = ({ isReflexion = false }: { isReflexion?: boolean }) => (
    <Sky
      isReflexion={isReflexion}
      backgroundGradientPosition={backgroundGradientPosition}
    >
      {/* <Luminary
        glow={config.luminary.glow}
        luminaryMovement={luminaryMovement}
      /> */}
      <animated.div
        id="luminary"
        className="luminary"
        style={{
          filter:
            config.luminary.glow &&
            `drop-shadow(0 0 4rem ${config.luminary.glow})`,
          ...luminaryMovement,
        }}
      ></animated.div>
      <Clouds isReflexion={isReflexion} clouds={clouds} />
    </Sky>
  );
  return (
    <div className="scene">
      <SkyComponent />
      <SkyComponent isReflexion={true} />
    </div>
  );
}

export default Scene;
