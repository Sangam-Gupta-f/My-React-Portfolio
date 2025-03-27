import React from "react";
import { Link, NavLink} from "react-router";
import facebook from "../../assets/facebook.png"
import insta from "../../assets/insta.png"
import x from "../../assets/x.png"
const Footer=function Footer(){
    return <>
    <footer className="bg-[#2C3E50] text-white mt-0 w-full ">
        <div className="container mx-auto py-8 px-20 grid grid-cols-3 gap-4">
            {/* <!-- Location --> */}
            <div>
                <h3 className="font-bold text-2xl">Location</h3>
                <p>Badgo Sikariganj, Gorakhpur City, India</p>
            </div>
            
            {/* <!-- Social Icons --> */}
            <div className="flex justify-center space-x-4">
               <img src={facebook} alt="fb Image" className="w-10 h-10 object-cover"/>
                {/* <!-- Facebook --> */}
                <img src={insta} alt="insta-img" className="w-10 h-10 object-cover"/> 
                {/* <!-- Instagram --> */}
                <img src={x} alt="x-img"className="w-10 h-10 object-cover"/>
                 {/* <!-- Twitter --> */}
            </div>
            
            {/* <!-- About --> */}
            <div className="text-right">
                <h3 class="font-bold text-2xl">About Us</h3>
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