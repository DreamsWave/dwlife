import { animated, useTransition } from "@react-spring/web";
import Scene from "./components/Scene";
import { scenes } from "./scenes";
import { useState } from "react";

function App() {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, delay: 20000 },
    config: { duration: 3000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % scenes.length);
      }
    },
    exitBeforeEnter: true,
    loop: true,
  });
  return (
    <div className="App">
      {transitions((style, i) => (
        <animated.div style={style}>
          <Scene config={scenes[i]} />
        </animated.div>
      ))}
    </div>
  );
}

export default App;
