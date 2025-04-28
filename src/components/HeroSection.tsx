import RoundedButton from "./RoundedButton"
import img from '../assets/page.png'
import NavBar from "./NavBar";
import HeroBox from "./HeroBox";
import AboutUsCard from "./AboutUsCard";
import img1 from '../assets/image1.png';
import img2 from '../assets/image2.png';
import ClientFeebackBox from "./ClientFeebackBox";
import ChooseBox from "./ChooseBox";
import BuyCard from "./BuyCard";
import BuyAdvanceCard from "./BuyAdvanceCard";
import ContactUs from "./ContactUs";
import Button from "./Button";
import { FooterIcon,  LinkedinIcon } from "../Icons/Icons";


const HeroSection = () => {
    return (
        <div className="">
        <NavBar/>
        <div className="bg-[#155BF2]
             w-full flex justify-center items-center
             min-h-screen -mt-28">
            <div className="flex px-6 py-4 gap-20 min-h-full">
              
                <div className="flex flex-col max-w-xl space-y-6">
                    <h1 className="text-6xl font-bold leading-tight text-white">
                        Land job interviews <span className="text-shadow-blue-600">10x</span> faster
                    </h1>
                    <p className="text-lg text-white">
                        Custom-built resumes that match your goals, keywords, and recruiter expectations.
                    </p>                 
                    <div className="self-start">
                        <RoundedButton text="Get Started" />
                    </div>
                </div>

             
                <div>
                    <img
                        src={img}
                        alt="Illustration of a resume with a laptop and documents"
                        width="190"
                        height="250"
                        className="object-contain"
                    />
                </div>
            </div> 
        </div>

        <div className="text-center mt-13 h-72 flex flex-col items-center mb-14">
            <div className="text-2xl font-bold mb-12 text-[#0649E7] leading-[3]">How we work?</div>
            <div className="flex justify-center gap-6">
                <HeroBox bottomText="Submit Intake Form" text="1" />
                <HeroBox bottomText="We do the search and curation for list of jobs" text="2" />
                <HeroBox bottomText="You approve, we do the tedious part (applying)" text="3" />
                <HeroBox bottomText="You get the interviews" text="4" />
            </div>
        </div>

        <div className="min-h-screen bg-blue-800 flex justify-center items-center">
             <div className="-translate-x-100 -translate-y-60 absolute text-[#FEFEFE] font-medium text-[25px]">About Us</div>
             <div className="flex flex-col gap-10 justify-center items-center">
                <AboutUsCard text="Ashwin is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams." img={img1}/>
                <AboutUsCard text="Nicole is an Executive coach at Mobius specializing in resume builds and career advisory.With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential." img={img2}/>
             </div>

        </div>

        <div className="mb-30 mt-15 w-[90%] mx-auto flex justify-center items-center flex-col">
            <div className="font-medium text-[#0649E7] text-3xl mb-30">What our Clients have to say</div>
            <div className="flex gap-8 justify-center items-center">
            <ClientFeebackBox/>
            <ClientFeebackBox/>
            <ClientFeebackBox/>
            </div>
            <div className="flex gap-4 justify-center items-center mt-12">
                <RoundedButton 
                    text="More customer testimonials" 
                    buttonColor="bg-white" 
                    textColor="text-[#0649E7]" 
                    borderColor="border-[#0649E7]" 
                    rightSymbol="↗" 
                />
                <RoundedButton 
                    text="Get Started" 
                    buttonColor="bg-[#0649E7]" 
                    textColor="text-white" 
                    rightSymbol="→" 
                />
            </div>

            <div className="bg-[#F8FAFF] p-7 rounded-2xl mt-12">
               <div className="text-2xl font-medium text-[#022183] mb-6">Why Choose us?</div>
               <div  className="flex gap-20 mb-7">
                 <ChooseBox/>
                 <ChooseBox/>
                 <ChooseBox/>
               </div>
            </div>

            <div className="text-2xl font-medium text-[#022183] mb-6 mt-10">
                Job Application Service Plans
            </div>

            <div className="flex gap-6">
                <BuyCard/>
                <BuyCard/>
                <BuyCard/>
            </div>

            <div className="mt-10 ">
                <BuyAdvanceCard/>
            </div>

            <div className="bg-gray-400  rounded mt-15 w-[80%] border-1"></div>
            
            <div className="mt-10 w-[80%]">
                <div className="text-2xl font-medium text-[#022183]">Resume Building & Coaching</div>
                <div className="text-md font-medium text-[#022183] mb-6">
                    Let’s talk about where you’re headed — and how your resume can get you there.<br />
                    Schedule a call to get started.
                 </div>
            </div>

            <div className="flex mt-9 gap-10">
                <BuyCard/>
                <BuyCard/>
            </div>
            
            <div className="w-[80%] mt-10 flex items-center justify-center">
                <ContactUs/>
            </div>

        </div>

           <div className="ml-20">
                <Button
                    leftSymbol= {<FooterIcon/>}
                    textColor = '#0649E7'
                />
                <div className="font-medium text-[#0649E7] text-md ml-4">MobiusEngine</div>
            </div>

            <div className="bg-[#BCBCBC]  rounded mt-10 w-[30%] border-1 mb-6 ml-20"></div>

            <div className="flex items-start justify-between ml-20 mr-20 gap-16">
                {/* Address */}
                <div>
                    <div className="text-[#0649E7] font-medium mb-2">Address</div>
                    <div className="text-[#0649E7]">
                    1875 Mission St Ste 103 #450<br />
                    San Francisco, CA 94103
                    </div>
                </div>

                {/* Email */}
                <div>
                    <div className="text-[#0649E7] font-medium mb-2">Email</div>
                    <div className="text-[#0649E7]">finance@mobiusengine.ai</div>
                </div>

                {/* Telephone */}
                <div>
                    <div className="text-[#0649E7] font-medium mb-2">Telephone</div>
                    <div className="text-[#0649E7]">650-889-6026</div>
                </div>

                <div>
                    <div className="text-[#0649E7] font-medium mb-2">Socials</div>
                    <div className="flex gap-4">
                        <div className="w-8 h-8 rounded-full border border-[#0649E7] flex items-center justify-center">
                        <LinkedinIcon />
                        </div>
                        <div className="w-8 h-8 rounded-full border border-[#0649E7] flex items-center justify-center">
                        <LinkedinIcon/>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-7 h-14 bg-[#0649E7] text-white flex justify-between items-center ">
                     <div className="ml-3">
                     © 2023 Mobiusservices LLC
                     </div>
                     <div className="flex mr-3 gap-5">
                        <div>
                        Terms & Conditions
                        </div>
                        <div>
                        Privacy Policy
                        </div>
                     </div>
                </div>


        </div>
    )
}

export default HeroSection;
