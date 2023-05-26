import { animated, useTransition } from "@react-spring/web";
import { useEffect, useState } from "react";

type ScenesProps = {
  children: React.ReactNode | React.ReactNode[] | null;
};
function Scenes({ children }: ScenesProps) {
  const [index, setIndex] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const transition = useTransition(children[index], {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: { duration: 5000 },
  });

  useEffect(() => {
    setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      setIndex((index + 1) % children.length);
    }, 20000);
  }, [children, index]);

  return transition((style, item) => (
    <animated.div style={{ ...style, position: "absolute", top: 0, left: 0 }}>
      {item}
    </animated.div>
  ));
}

export default Scenes;
