const button = ({ children, className, onClick, ...rest }) => {
  return (
    <button
      className={`bg-primary text-white py-2 rounded-md font-semibold ${className}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export default button;