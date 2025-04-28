interface RoundedButtonProps {
  text: string;
  leftSymbol?: any;
  rightSymbol?: any;
  onClick?: () => void;
  buttonColor?: string;   // background color
  textColor?: string;     // text color
  width?: number;
  height?: number;
  borderColor?: string;   // border color
}

const RoundedButton = (props: RoundedButtonProps) => {
  const {
    text,
    leftSymbol,
    rightSymbol,
    onClick,
    buttonColor = "bg-white",
    textColor = "text-[#0649E7]",
    borderColor = "border-[#0649E7]",
  } = props ?? {};

  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full ${buttonColor} ${borderColor} hover:opacity-90 px-6 py-3 border text-sm font-semibold gap-2`}
    >
      {leftSymbol && <span>{leftSymbol}</span>}
      <span className={`${textColor}`}>{text}</span>
      {rightSymbol && <span>{rightSymbol}</span>}
    </button>
  );
};

export default RoundedButton;
