import React from "react";
import { FiNavigation } from "react-icons/fi";
import {Link, NavLink} from "react-router";
const Header=function Header(){
   return <>
       <header className="bg-[#2C3E50] text-white font-bold py-3 px-6 md:py-10 md:px-20">
        <div className="container mx-auto md:flex md:justify-between md:items-center ">
            {/* <!-- Company Name --> */}
            <div className="md:text-3xl text-center">Sangam Gupta</div>      
            {/* <!-- Navigation Bar --> */}
            <nav>
                <ul className="flex space-x-6 text-lg">
                    <li><NavLink to="/" className= {({ isActive }) => 
              isActive ? "text-yellow-400  font-bold" : "text-white"}>Home</NavLink></li>
                    <li><NavLink to="/about" className= {({ isActive }) => 
              isActive ? "text-yellow-400  font-bold" : "text-white"}>About</NavLink></li>
                    <li><NavLink to="/project" className= {({ isActive }) => 
              isActive ? "text-yellow-400  font-bold" : "text-white"}>Projects</NavLink></li>
                    <li><NavLink to="/contact" className= {({ isActive }) => 
              isActive ? "text-yellow-400  font-bold" : "text-white"}>Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
   </>
}
export default Header