import { styled } from "styled-components";
import { isChromium } from "../utils";

type CloudsProps = {
  isReflexion?: boolean;
  clouds: string[];
};

// const cloudsAnimation = keyframes`
//   0% {transform: translateX(0); opacity: 0; }
//   20% { opacity: 0.3;}
//   80% {  opacity: 0.3; }
//   100% { transform: translateX(-300px); opacity: 0; }
// `;

const CloudsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;

const CloudsLayer = styled.div`
  overflow: hidden;
  width: 1px;
  height: 1px;
  transform: translate(-100%, -100%);
  border-radius: 50%;
  filter: url(#filter);
`;

function Clouds({ isReflexion = false, clouds }: CloudsProps) {
  if (!isChromium()) return null;
  return (
    <CloudsWrapper
      className="clouds-container"
      style={{
        transform: isReflexion ? "scaleY(2)" : "scaleY(1)",
        bottom: isReflexion ? "50%" : "0%",
      }}
    >
      {clouds.map((cloud, i) => (
        <CloudsLayer
          key={i}
          id={`clouds-${i + 1}`}
          style={{ boxShadow: cloud }}
        ></CloudsLayer>
      ))}

      <svg width="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
      </svg>
    </CloudsWrapper>
  );
}

export default Clouds;
