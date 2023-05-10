type SceneProps = {
  children: React.ReactNode;
};

function Scene({ children }: SceneProps) {
  return <div className="scene">{children}</div>;
}

export default Scene;
