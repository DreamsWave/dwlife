import { animated, easings, useSpring } from "@react-spring/web";
import { sceneConfig } from "../scenes";

type LuminaryProps = {
  glow?: string;
};

function Luminary({ glow }: LuminaryProps) {
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
    <animated.div
      className="luminary"
      style={{
        filter: glow && `drop-shadow(0 0 4rem ${glow})`,
        ...luminaryMovement,
      }}
    ></animated.div>
  );
}

export default Luminary;
