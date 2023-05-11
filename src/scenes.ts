import { Scene, SceneConfig } from "./types";

export const sceneConfig: SceneConfig = {
  duration: {
    luminary: {
      movement: 2000,
      atTop: 3000,
    },
  },
};

export const sunsetScene: Scene = {
  name: "sunset",
  luminary: {
    colors: ["#fdb428", "#f672ca"],
    glow: "#f672ca",
  },
  sky: {
    colors: ["#ee9d32", "#e0457e", "#3f2a55"],
  },
  ocean: {
    colors: ["#7b93dd", "#5562ca", "#051c2a"],
  },
};

export const scenes = [sunsetScene];
