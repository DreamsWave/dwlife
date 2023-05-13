import { SpringValue, animated, easings, useSpring } from "@react-spring/web";
import { sceneConfig } from "../scenes";

type LuminaryProps = {
  glow?: string;
  luminaryMovement: {
    top: SpringValue<string>;
  };
};

function Luminary({ glow, luminaryMovement }: LuminaryProps) {
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
