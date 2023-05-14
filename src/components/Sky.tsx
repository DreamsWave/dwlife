import { animated } from "@react-spring/web";
import { useEffect, useState } from "react";
import { isChromium } from "../utils";

type SkyProps = {
  children: React.ReactNode;
  isReflexion: boolean;
};

function Sky({ children, isReflexion = false }: SkyProps) {
  const [backgroundImage, setBackgroundImage] = useState(`radial-gradient(
    circle at center 150%,
    var(--sky-color-1) 0%,
    var(--sky-color-2) 50%,
    var(--sky-color-3) 100%
  )`);
  useEffect(() => {
    const luminary = document.querySelector("#luminary");
    function updateGradient() {
      if (!luminary) return;
      const windowHeight = window.innerHeight;

      const luminaryPosition = luminary.getBoundingClientRect();
      const luminaryYpercentage = Math.round(
        ((luminaryPosition.top + luminaryPosition.height / 2) / windowHeight) *
          100 *
          2
      );
      setBackgroundImage(`radial-gradient(
        circle at center ${luminaryYpercentage}%,
        var(--sky-color-1) 0%,
        var(--sky-color-2) 50%,
        var(--sky-color-3) 100%
      )`);
      requestAnimationFrame(updateGradient);
    }

    requestAnimationFrame(updateGradient);
  });

  return (
    <animated.div
      className="sky"
      style={{
        transform: isReflexion ? "scaleY(-1)" : "",
        backgroundImage: backgroundImage,
      }}
    >
      {isReflexion && (
        <div
          style={{
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(var(--sky-color-3), rgba(0, 0, 0, 0.05))",
            zIndex: 1,
          }}
        >
          <div
            className="waves"
            style={{ display: isChromium() ? "block" : "none" }}
          >
            <svg>
              <filter
                id="displacementFilter"
                x="0"
                y="0"
                width="100%"
                height="100%"
              >
                <feTurbulence
                  id="sea-filter"
                  numOctaves="3"
                  seed="2"
                  baseFrequency="0.02 0.05"
                ></feTurbulence>
                <feDisplacementMap
                  scale="30"
                  in="SourceGraphic"
                ></feDisplacementMap>
                <animate
                  xlinkHref="#sea-filter"
                  attributeName="baseFrequency"
                  dur="60s"
                  keyTimes="0;0.5;1"
                  values="0.02 0.06;0.04 0.08;0.02 0.06"
                  repeatCount="indefinite"
                />
              </filter>
            </svg>
          </div>
        </div>
      )}
      {children}
    </animated.div>
  );
}

export default Sky;
