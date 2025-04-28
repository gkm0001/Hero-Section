interface SocialIconButtonProps {
     icon?: any
     backgroundColor?: string
     text?: string
 }
 
 const SocialIconButton = (props: SocialIconButtonProps) => {
     const { icon, backgroundColor, text } = props ?? {};
     return (
         <div
             className="flex justify-center items-center rounded-full w-12 h-12 border border-blue-900"
             style={{ backgroundColor: backgroundColor }}
         >
             {icon && icon}
             {text && <span className="text-3xl text-blue-900 ">{text}</span>}
         </div>
     )
 }
 
 export default SocialIconButton;