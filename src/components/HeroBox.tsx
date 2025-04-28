import SocialIconButton from "./SocialIconButton";

interface HeroBoxProps {
     text ?:string,
     bottomText ?:string
}

const HeroBox = (props : HeroBoxProps) => {
    const {text , bottomText} = props ?? {};
    return (
        <>
        <div className="flex flex-col items-center w-40 gap-3">
           
            <SocialIconButton text={text} backgroundColor="transparent"/>
            <span className="w-full border-1 border-black"></span>
            <div className="mt-2 text-blue-600 text-xl font-normal">{bottomText}</div>
        </div>
       </>
    )
}

export default HeroBox;