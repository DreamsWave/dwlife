import { Cloud, Clouds, Star } from "./types";

export const generateClouds = (clouds: Clouds) => {
  function rn(from: number, to: number) {
    return ~~(Math.random() * (to - from + 1)) + from;
  }

  function rs(...args: unknown[]) {
    return args[rn(1, arguments.length) - 1];
  }

  function boxShadows(cloud: Cloud) {
    const max = 10;
    const colors = cloud.colors;
    const positionX: [number, number] = [1, 200];
    const positionY = cloud.positionY;
    const blurRadius: [number, number] = [10, 20];
    const spreadRadius: [number, number] = [1, 10];
    const ret = [];
    for (let i = 0; i < max; ++i) {
      ret.push(`
        ${rn(...positionX)}vw ${rn(...positionY)}vh ${rn(
        ...blurRadius
      )}vmin ${rn(...spreadRadius)}vmin
        ${rs(...colors)}
      `);
    }
    return ret.join(",");
  }

  return clouds.map((cloud) => boxShadows(cloud));
};

export const isChromium = () => {
  return navigator.userAgent.indexOf("Chrome") != -1;
};

export const generateLuminaryGradient = () => {
  return `linear-gradient(
    to top,
    #000 1.5%,
    #0000 2%,
    #0000 5%,
    #000 5.5%,
    #000 7.5%,
    #0000 8%,
    #0000 10.6%,
    #000 11.1%,
    #000 13.6%,
    #0000 14.1%,
    #0000 16.3%,
    #000 16.8%,
    #000 19.8%,
    #0000 20.3%,
    #0000 22.1%,
    #000 22.6%,
    #000 26.1%,
    #0000 26.6%,
    #0000 28%,
    #000 28.5%,
    #000 32.5%,
    #0000 33%,
    #0000 34%,
    #000 34.5%,
    #000 39%,
    #0000 39.5%,
    #0000 40.1%,
    #000 40.6%,
    #000 46.6%,
    #0000 47.1%,
    #0000 47.5%,
    #000 48%,
    #000 53.5%,
    #000 0
  )`;
};

export const generateSkyGradient = (position: string, colors: string[]) => {
  return `radial-gradient(
    circle at center ${position},
    ${colors
      .map((color, index) => `${color} ${(index * 100) / (colors.length - 1)}%`)
      .join(", ")}
  )`;
};

export const random = (min: number, max: number) => {
  return Number((min + Math.random() * (max - min)).toFixed(2));
};

export const generateStars = (count: number, color: string): Star[] => {
  return new Array(count).fill(0).map(() => {
    return {
      x: random(0, 100),
      y: random(0, 100),
      opacity: random(0.5, 1),
      size: random(1, 3),
      color,
    };
  });
};
