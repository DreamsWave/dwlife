type CloudsProps = {
  isReflexion?: boolean;
  clouds: string[];
};

function Clouds({ isReflexion = false, clouds }: CloudsProps) {
  return (
    <div
      className="clouds-container"
      style={{ opacity: isReflexion ? 0.8 : 1 }}
    >
      {clouds.map((cloud, i) => (
        <div
          key={i}
          id={`clouds-${i + 1}`}
          className="clouds"
          style={{ boxShadow: cloud }}
        ></div>
      ))}

      <svg width="0">
        <filter id="filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".01"
            numOctaves="10"
          />
          <feDisplacementMap in="SourceGraphic" scale="240" />
        </filter>
      </svg>
    </div>
  );
}

export default Clouds;