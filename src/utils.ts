export const generateClouds = () => {
  function rn(from: number, to: number) {
    return ~~(Math.random() * (to - from + 1)) + from;
  }

  function rs(...args: unknown[]) {
    return args[rn(1, arguments.length) - 1];
  }
  type BoxShadowsOptions = {
    max: number;
    colors: string[];
    positionX: [number, number];
    positionY: [number, number];
    blurRadius: [number, number];
    spreadRadius: [number, number];
  };
  function boxShadows(options: BoxShadowsOptions) {
    const { max, colors, positionX, positionY, blurRadius, spreadRadius } =
      options;
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

  const clouds1Options: BoxShadowsOptions = {
    max: 20,
    colors: ["#f672ca", "#e0457e"],
    positionX: [1, 100],
    positionY: [20, 30],
    blurRadius: [10, 20],
    spreadRadius: [1, 10],
  };
  const clouds2Options: BoxShadowsOptions = {
    max: 10,
    colors: ["#f672ca", "#e0457e"],
    positionX: [1, 100],
    positionY: [45, 50],
    blurRadius: [10, 20],
    spreadRadius: [1, 10],
  };
  const clouds3Options: BoxShadowsOptions = {
    max: 10,
    colors: ["#e0457e"],
    positionX: [1, 100],
    positionY: [50, 50],
    blurRadius: [10, 10],
    spreadRadius: [1, 7],
  };

  return [
    boxShadows(clouds1Options),
    boxShadows(clouds2Options),
    boxShadows(clouds3Options),
  ];
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
