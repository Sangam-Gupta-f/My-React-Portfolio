import React from "react";
import {Link, NavLink} from "react-router";
const Header=function Header(){
   return <>
       <header className="bg-[#2C3E50] text-white font-bold py-10 px-20">
        <div className="container mx-auto flex justify-between items-center">
            {/* <!-- Company Name --> */}
            <div className="text-3xl">Sangam Gupta</div>
            
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