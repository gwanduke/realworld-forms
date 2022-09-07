const Caption = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      style={{
        fontSize: 13,
        color: "#8d8e90",
      }}
    >
      {children}
    </span>
  );
};

export default Caption;
