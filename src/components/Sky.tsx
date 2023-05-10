type SkyProps = {
  children: React.ReactNode;
};

function Sky({ children }: SkyProps) {
  return <div className="sky">{children}</div>;
}

export default Sky;
