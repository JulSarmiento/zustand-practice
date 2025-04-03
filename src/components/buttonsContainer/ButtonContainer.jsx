const ButtonContainer = ({ children, ...rest }) => {
  return (
    <div 
      {...rest}
    >
      {children}
    </div>
  );
};

export default ButtonContainer;