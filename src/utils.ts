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

  // const clouds1Options: BoxShadowsOptions = {
  //   max: 20,
  //   colors: ["#eeaeca", "#ffe8f2", "#ffffff", "#94bbe9"],
  //   positionX: [1, 100],
  //   positionY: [20, 30],
  //   blurRadius: [10, 20],
  //   spreadRadius: [1, 10],
  // };
  // const clouds2Options: BoxShadowsOptions = {
  //   max: 10,
  //   colors: ["#94bbe9", "#72a6e5"],
  //   positionX: [1, 100],
  //   positionY: [45, 50],
  //   blurRadius: [10, 20],
  //   spreadRadius: [1, 10],
  // };
  // const clouds3Options: BoxShadowsOptions = {
  //   max: 10,
  //   colors: ["#ffffff"],
  //   positionX: [1, 100],
  //   positionY: [50, 50],
  //   blurRadius: [10, 10],
  //   spreadRadius: [1, 7],
  // };

  return [
    boxShadows(clouds1Options),
    boxShadows(clouds2Options),
    boxShadows(clouds3Options),
  ];
};
