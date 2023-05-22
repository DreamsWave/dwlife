import styled from "styled-components";

const WavesWrapper = styled.div`
  opacity: 0.7;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  background-size: cover;
  filter: url(#displacementFilter);
  z-index: 6;
`;

function Waves() {
  return (
    <WavesWrapper className="waves">
      <svg>
        <filter id="displacementFilter" x="0" y="0" width="100%" height="100%">
          <feTurbulence
            id="sea-filter"
            numOctaves="3"
            seed="2"
            baseFrequency="0.02 0.1"
          ></feTurbulence>
          <feDisplacementMap scale="30" in="SourceGraphic"></feDisplacementMap>
          <animate
            xlinkHref="#sea-filter"
            attributeName="baseFrequency"
            dur="120s"
            keyTimes="0;0.5;1"
            values="0.02 0.1;0.04 0.15;0.02 0.1"
            repeatCount="indefinite"
          />
        </filter>
      </svg>
    </WavesWrapper>
  );
}

export default Waves;
