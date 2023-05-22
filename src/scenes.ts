import { Scene } from "./types";

export const scenes: Scene[] = [
  {
    name: "Retrowave Scene",
    clouds: [
      {
        colors: ["#f672ca", "#e0457e"],
        opacity: 0.8,
        duration: 40000,
        positionY: [20, 30],
      },
      {
        colors: ["#f672ca", "#e0457e"],
        opacity: 0.9,
        duration: 50000,
        positionY: [45, 50],
      },
      {
        colors: ["#e0457e"],
        opacity: 1,
        duration: 60000,
        positionY: [50, 50],
      },
    ],
    luminary: {
      colors: ["#fdb428", "#f672ca"],
      glow: "#f672ca",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionOpacity: 0.4,
    },
    horizontalLight: {
      color: "#f672ca",
    },
    sky: {
      colors: ["#3f2a55", "#e0457e"],
      skyReflexionColor: "#3f2a55",
    },
  },
  {
    name: "Day Scene",
    clouds: [
      {
        colors: ["#fcf1f5", "#c5daed", "#FFFCE9"],
        opacity: 0.8,
        duration: 40000,
        positionY: [20, 30],
      },
      {
        colors: ["#fcf1f5", "#c5daed", "#FFFCE9"],
        opacity: 0.9,
        duration: 50000,
        positionY: [45, 50],
      },
      {
        colors: ["#fcf1f5", "#c5daed", "#FFFCE9"],
        opacity: 1,
        duration: 60000,
        positionY: [50, 50],
      },
    ],
    luminary: {
      colors: ["#ffffff", "#FFFCE9"],
      glow: "#FFFCE9",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionOpacity: 0.8,
    },
    horizontalLight: {
      color: "#FAEBD4",
    },
    sky: {
      colors: ["#5e98cf", "#9bc0db", "#c5daed"],
      skyReflexionColor: "#5e98cf",
    },
  },
];
