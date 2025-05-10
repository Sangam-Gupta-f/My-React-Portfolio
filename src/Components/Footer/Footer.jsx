import React from "react";
import { Link, NavLink} from "react-router";
import facebook from "../../assets/facebook.png"
import insta from "../../assets/insta.png"
import x from "../../assets/x.png"
import git from "../../assets/git.png"
import linkedin from "../../assets/linkedin.png"
const Footer=function Footer(){
    return <>
    <footer className="bg-[#2C3E50] text-white mt-0 w-full ">
        <div className="mx-auto py-8 px-20 md:grid md:grid-cols-3 gap-4">
            {/* <!-- Location --> */}
            <div className="py-2.5">
                <h3 className="font-bold text-2xl">Location</h3>
                <p>Badgo Sikariganj, Gorakhpur City, India</p>
            </div>
            
            {/* <!-- Social Icons --> */}
            <div className="flex md:justify-center space-x-4 py-2.5">
                  <Link to="https://github.com/Sangam-Gupta-f">
                     <img  src={git} alt="git Image" className="w-10 h-10 object-cover"/>
                  </Link> 
                {/* <!-- Facebook --> */}
                <Link to="https://www.linkedin.com/in/sangamgupta8986/">
                <img src={linkedin} alt="linkedin-img" className="w-10 h-10 object-cover"/> 
                </Link>
                {/* <!-- Instagram --> */}
                <Link to="https://x.com/Sangamgupt81212">
                <img src={x} alt="x-img"className="w-10 h-10 object-cover"/>
                </Link>
                 {/* <!-- Twitter --> */}
            </div>
            
            {/* <!-- About --> */}
            <div className="md:text-right">
                <h3 className="font-bold text-2xl">About Us</h3>
                <p>Experienced Full-stack Developer. Master in MERN stack </p>
            </div>
        </div>
        <div className="bg-[#222F3E] py-2 text-center">
            <p>Copyright &copy; 2025</p>
        </div>
    </footer>
    </>
}

export default Footer