import { animated, useTransition } from "@react-spring/web";
import { useControls } from "leva";
import { useEffect, useState } from "react";
import { useControlsContext } from "../controls-context";
import { scenes } from "../scenes";

type ScenesProps = {
  children: React.ReactNode | React.ReactNode[] | null;
};
function Scenes({ children }: ScenesProps) {
  const [index, setIndex] = useState<number>(0);
  const { state } = useControlsContext();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const [transition, transitionAPI] = useTransition(children[index], () => ({
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
  }));

  const { pauseAnimations } = useControls({
    pauseAnimations: { value: state.pauseAnimations },
    selectScene: {
      options: (Array.isArray(children) ? children : [children]).map(
        (_, i) => scenes[i].name
      ),
      onChange: (scene) => {
        setIndex(scenes.findIndex((s) => s.name === scene));
      },
    },
  });

  useEffect(() => {
    transitionAPI.start();
    pauseAnimations ? transitionAPI.pause() : transitionAPI.resume();

    const sceneTimeout = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      if (!pauseAnimations) setIndex((index + 1) % children.length);
    }, 20000);
    if (pauseAnimations) {
      clearTimeout(sceneTimeout);
    }
    return () => clearTimeout(sceneTimeout);
  }, [children, index, pauseAnimations]);

  return transition((style, item) => (
    <animated.div style={{ ...style, position: "absolute", top: 0, left: 0 }}>
      {item}
    </animated.div>
  ));
}

export default Scenes;
