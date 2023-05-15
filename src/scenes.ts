import { Scene } from "./types";

export const basicScene: Scene = {
  name: "Basic Scene",
  luminary: {
    colors: ["#fdb428", "#f672ca"],
    // glow: "#000",
    glow: "#f672ca",
    movementDuration: 10000,
    delayAtTheTop: 3000,
  },
  sky: {
    colors: ["#ee9d32", "#e0457e", "#3f2a55"],
  },
  ocean: {
    colors: ["#7b93dd", "#5562ca", "#051c2a"],
  },
  clouds: {
    colors: [["#f672ca", "#e0457e"], ["#f672ca", "#e0457e"], ["#e0457e"]],
  },
};

export const scenes = [basicScene];
