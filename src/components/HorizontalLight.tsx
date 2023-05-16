import styled from "styled-components";

type HorizontalLightWrapperProps = {
  color: string;
};
const HorizontalLightWrapper = styled.div<HorizontalLightWrapperProps>`
  background-image: linear-gradient(
    0deg,
    ${({ color }) => color} 0%,
    transparent 10%
  );
  width: 100%;
  height: 100%;
  opacity: 0.3;
  position: absolute;
`;

type HorizontalLightProps = {
  color: string;
};
function HorizontalLight({ color }: HorizontalLightProps) {
  return <HorizontalLightWrapper color={color}></HorizontalLightWrapper>;
}

export default HorizontalLight;
