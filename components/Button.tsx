interface ButtonProps {
  outline?: boolean;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, outline }) => {
  return (
    <div className="button-container">
      <button
        className={`animated-button text-sm py-[14px] px-4 ${
          outline ? "border-[.5px] border-gray-400 rounded-[5px]" : ""
        } ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
