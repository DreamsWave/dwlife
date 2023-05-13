import { animated, easings, useSpring } from "@react-spring/web";
import { Scene as SceneType } from "../types";
import { generateClouds } from "../utils";
import Clouds from "./Clouds";
import Sky from "./Sky";
import { sceneConfig } from "../scenes";
import HorizontalLight from "./HorizontalLight";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
  console.log(config);
  const clouds = generateClouds();
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
        delay: 10000,
        // delay: sceneConfig.duration.luminary.atTop,
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
    <Sky isReflexion={isReflexion}>
      {/* <Luminary
        glow={config.luminary.glow}
        luminaryMovement={luminaryMovement}
      /> */}
      <animated.div
        id="luminary"
        className="luminary"
        style={{
          filter: isReflexion
            ? "drop-shadow(0 0 4rem var(--sun-glow)) blur(10px)"
            : `drop-shadow(0 0 4rem "#f672ca")`,
          opacity: isReflexion ? 0.7 : 1,
          transform: isReflexion
            ? "translate(0, 0%) scale(2)"
            : "translate(0, -50%)",
          ...luminaryMovement,
        }}
      ></animated.div>
      <Clouds isReflexion={isReflexion} clouds={clouds} />
      <HorizontalLight />
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
