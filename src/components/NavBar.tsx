import { HeaderIcon, MoreIcon } from "../Icons/Icons"
import Button from "./Button"
import RoundedButton from "./RoundedButton";

const NavBar = () => {
     return (
        <div className=" flex items-center justify-between px-6 py-4 w-full  z-20 relative">

            {/* Logo and Title */}
            <Button
                leftSymbol= {<HeaderIcon/>}
                text="MobiusEngine"
            />

   
           <nav className="flex items-center space-x-6">
             <Button text="Home"/>
             <Button text="About Us"/>
             <Button text="Plans"/>
             <Button text="Testimonials"/>
             <Button text="Privacy Policy"/>
             <Button text="More" rightSymbol={<MoreIcon/>}/>
           </nav>

         
           <RoundedButton
            text="Get Started"
           />    
           
        </div>
     )
}

export default NavBar;