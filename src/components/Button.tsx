interface ButtonProps {
     text ?: string;
     onClick? : ()=>void;
     leftSymbol?:any;
     rightSymbol?:any;
     buttonColor?:string;
     textColor?:string
}

const Button = (props : ButtonProps) => {
     const {text,onClick , leftSymbol , rightSymbol , buttonColor , textColor = '#FEFEFE'} = props ??{};

     return (
        <button
         onClick={onClick}
         className={`flex items-center justify-center px-4 py-2 rounded ${buttonColor} hover:opacity-90`}
         style={{color:textColor}}
        >
          {leftSymbol && <span className="mr-2">{leftSymbol}</span>}
          {text}
          {rightSymbol && <span className="ml-1">{rightSymbol}</span>}
        </button>
     )
}

export default Button;