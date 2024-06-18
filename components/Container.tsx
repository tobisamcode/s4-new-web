interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={` max-w-7xl w-full mx-auto sm:px-10 px-5 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
