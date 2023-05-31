export type Cloud = {
  colors: string[];
  opacity: number;
  duration: number;
  positionY: [number, number];
};

export type Clouds = Cloud[];

export type LowClouds = {
  topColor: string;
  bottomColor: string;
  reflexionOpacity?: number;
};

export type Luminary = {
  colors: [string, string];
  glow: string;
  movementDuration: number;
  delayAtTheTop: number;
  reflexionOpacity: number;
  reflexionColor: string;
};

export type Sky = {
  colors: [string, string, string];
  skyReflexionColor: string;
};

export type HorizontalLight = {
  color: string;
  opacity?: number;
};

export type Scene = {
  name: string;
  clouds: Clouds;
  lowClouds: LowClouds;
  luminary: Luminary;
  horizontalLight: HorizontalLight;
  sky: Sky;
  stars?: Stars;
};

export type Star = {
  x: number;
  y: number;
  opacity: number;
  size: number;
  color: string;
};

export type Stars = {
  count: number;
  onTop?: boolean;
  opacity?: number;
};
