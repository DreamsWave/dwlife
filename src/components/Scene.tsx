import { Scene as SceneType } from "../types";
import { useSpring, animated, easings } from "@react-spring/web";
import { sceneConfig } from "../scenes";

type SceneProps = {
  config: SceneType;
};

function Scene({ config }: SceneProps) {
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
  return (
    <div className="scene">
      <div className="sky">
        <animated.div
          className="luminary"
          style={{
            filter: `drop-shadow(0 0 4rem ${config.luminary.glow})`,
            ...luminaryMovement,
          }}
        ></animated.div>
      </div>
      <div className="ocean"></div>
    </div>
  );
}

export default Scene;
