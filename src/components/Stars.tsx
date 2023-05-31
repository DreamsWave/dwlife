import { generateStars } from "../utils";
import { Scene, Star as StarProps } from "../types";
import styled from "styled-components";

const Star = styled("div")<StarProps>(({ color, size, opacity, x, y }) => ({
  position: "absolute",
  aspectRatio: 1,
  borderRadius: "50%",
  top: `${y}%`,
  left: `${x}%`,
  opacity: opacity,
  width: `${size}px`,
  backgroundColor: color,
}));

const StarsWrapper = styled.div<{ onTop?: boolean; opacity?: number }>`
  inset: 0;
  position: absolute;
  z-index: 0;
  overflow: hidden;
  opacity: ${({ opacity }) => (opacity ? opacity : 1)};
  ${({ onTop }) => onTop && "height: 15vh"}
`;

type StarsProps = {
  config: Scene;
};
const Stars = ({ config }: StarsProps) => {
  const { stars } = config;
  if (!stars) return null;
  const generatedStars = generateStars(stars?.count, "#fff");

  return (
    <StarsWrapper onTop={stars.onTop} opacity={stars.opacity}>
      {generatedStars.map((star, i) => (
        <Star key={i} {...star} />
      ))}
    </StarsWrapper>
  );
};

export default Stars;
