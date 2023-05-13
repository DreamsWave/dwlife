import { SpringValue, animated } from "@react-spring/web";

type LuminaryProps = {
  glow?: string;
  luminaryMovement: {
    top: SpringValue<string>;
  };
};

function Luminary({ glow }: LuminaryProps) {
  return (
    <animated.div
      className="luminary"
      style={{
        filter: glow && `drop-shadow(0 0 4rem ${glow})`,
      }}
    ></animated.div>
  );
}

export default Luminary;
