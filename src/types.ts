export type SceneConfig = {
  duration: {
    luminary: {
      atTop: number;
      movement: number;
    };
  };
};

export type Scene = {
  name: string;
  sky: {
    colors: string[];
  };
  luminary: {
    colors: string[];
    glow?: string;
  };
  ocean: {
    colors: string[];
  };
};
