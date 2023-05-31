import { Scene } from "./types";

export const scenes: Scene[] = [
  {
    name: "Day Scene",
    clouds: [
      {
        colors: ["#fcf1f5", "#c5daed", "#FFFCE9"],
        opacity: 0.5,
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
    lowClouds: {
      topColor: "#FFFCE9",
      bottomColor: "#9bc0db",
      reflexionOpacity: 0.5,
    },
    luminary: {
      colors: ["#ffffff", "#FFFCE9"],
      glow: "#FFFCE9",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionOpacity: 0.5,
      reflexionColor: "#FFFCE9",
    },
    horizontalLight: {
      color: "#FAEBD4",
    },
    sky: {
      colors: ["#5e98cf", "#9bc0db", "#c5daed"],
      skyReflexionColor: "#5e98cf",
    },
  },

  {
    name: "Evening Scene",
    clouds: [
      {
        colors: ["#9275ad", "#c27386"],
        opacity: 0.8,
        duration: 40000,
        positionY: [20, 30],
      },
    ],
    lowClouds: {
      topColor: "#e87a6b",
      bottomColor: "#30295f",
      reflexionOpacity: 0.5,
    },
    luminary: {
      colors: ["#eddb91", "#FA6164"],
      glow: "#FA6164",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionColor: "#FA6164",
      reflexionOpacity: 0.5,
    },
    horizontalLight: {
      color: "#f25448",
      opacity: 0.5,
    },
    sky: {
      colors: ["#3f59ad", "#8d79b6", "#db8796"],
      skyReflexionColor: "#1f3378",
    },
    stars: {
      count: 50,
      onTop: true,
      opacity: 0.2,
    },
  },

  {
    name: "Night Scene",
    clouds: [
      {
        colors: ["#8db5d9", "#366189"],
        opacity: 0.5,
        duration: 40000,
        positionY: [20, 30],
      },
      {
        colors: ["#8db5d9", "#366189"],
        opacity: 0.9,
        duration: 50000,
        positionY: [45, 50],
      },
      {
        colors: ["#8db5d9", "#366189"],
        opacity: 1,
        duration: 60000,
        positionY: [50, 50],
      },
    ],
    lowClouds: {
      topColor: "#8db5d9",
      bottomColor: "#366189",
      reflexionOpacity: 0.7,
    },
    luminary: {
      colors: ["#f1e7e6", "#b2c1cd"],
      glow: "#ffffff",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionOpacity: 0.5,
      reflexionColor: "#b2c1cd",
    },
    horizontalLight: {
      color: "#3c6f9f",
    },
    sky: {
      colors: ["#173551", "#274a70", "#274a70"],
      skyReflexionColor: "#173551",
    },
    stars: {
      count: 50,
    },
  },

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
    lowClouds: {
      topColor: "#f672ca",
      bottomColor: "#793363",
      reflexionOpacity: 0.5,
    },
    luminary: {
      colors: ["#fdb428", "#f672ca"],
      glow: "#f672ca",
      movementDuration: 10000,
      delayAtTheTop: 3000,
      reflexionOpacity: 0.3,
      reflexionColor: "#fdb428",
    },
    horizontalLight: {
      color: "#e0457e",
    },
    sky: {
      colors: ["#3f2a55", "#e0457e", "#ee9d32"],
      skyReflexionColor: "#3f2a55",
    },
    stars: {
      count: 30,
      onTop: true,
      opacity: 0.3,
    },
  },
];
