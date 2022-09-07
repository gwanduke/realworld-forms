const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h1
      style={{
        fontSize: 23,
        color: "#111111",
      }}
    >
      {children}
    </h1>
  );
};

export default Title;
