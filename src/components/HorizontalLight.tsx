import styled from "styled-components";

type HorizontalLightWrapperProps = {
  color: string;
  isReflexion: boolean;
};
const HorizontalLightWrapper = styled.div<HorizontalLightWrapperProps>`
  background-image: linear-gradient(
    0deg,
    ${({ color }) => color} 0%,
    transparent 40%
  );
  width: 100%;
  height: 100%;
  opacity: ${({ isReflexion }) => (isReflexion ? 0.8 : 1)};
  position: absolute;
  z-index: 4;
`;

type HorizontalLightProps = {
  color: string;
  isReflexion?: boolean;
};
function HorizontalLight({ color, isReflexion = false }: HorizontalLightProps) {
  return (
    <HorizontalLightWrapper
      className="horizontal-light"
      color={color}
      isReflexion={isReflexion}
    ></HorizontalLightWrapper>
  );
}

export default HorizontalLight;
