export type Clouds = {
  colors: string[][];
};

export type Luminary = {
  colors: string[];
  glow: string;
  movementDuration: number;
  delayAtTheTop: number;
};

export type Ocean = {
  colors: string[];
};

export type Sky = {
  colors: string[];
};

export type Scene = {
  name: string;
  clouds: Clouds;
  luminary: Luminary;
  ocean: Ocean;
  sky: Sky;
};
