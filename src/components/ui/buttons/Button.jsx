const button = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      className={`focus:outline-none ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default button;