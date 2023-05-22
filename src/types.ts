export type Cloud = {
  colors: string[];
  opacity: number;
  duration: number;
  positionY: [number, number];
};

export type Clouds = Cloud[];

export type Luminary = {
  colors: string[];
  glow: string;
  movementDuration: number;
  delayAtTheTop: number;
  reflexionOpacity: number;
};

export type Sky = {
  colors: string[];
  skyReflexionColor: string;
};

export type HorizontalLight = {
  color: string;
};

export type Scene = {
  name: string;
  clouds: Clouds;
  luminary: Luminary;
  horizontalLight: HorizontalLight;
  sky: Sky;
};
