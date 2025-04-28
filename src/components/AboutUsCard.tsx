import SocialIconButton from './SocialIconButton';

interface AboutUsCardProps {
  text?: string;
  img?: any;
}

function AboutUsCard(props: AboutUsCardProps) {
  const { text, img } = props ?? {};
  
  return (
    <div className="flex items-center gap-20">
      <div className="relative">
        
        <div className="bg-white rounded-full w-40 h-40 flex items-center justify-center overflow-hidden">
          <img src={img} alt="Profile" className="h-[100%] w-[70%] mt-5" />
        </div>
        
        
        <div className="absolute bottom-0 right-0">
          <SocialIconButton />
        </div>
      </div>
      
      {/* Text content */}
      <div className="text-white max-w-lg text-sm">
        {text}
      </div>
    </div>
  );
}

export default AboutUsCard;