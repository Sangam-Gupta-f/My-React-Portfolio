import React from "react";
import mypic from "../../../public/mypic.jpg"
const Home=function Home(){
    return <>
     <section className="bg-[#1ABC9C] text-white text-center py-25 h-full">
        <div className="container mx-auto">
            {/* <!-- Profile Image --> */}
            <div className="w-50 h-50 mx-auto rounded-full overflow-hidden border-4 border-white">
                <img src={mypic} alt="Profile Image" className="w-full h-full object-cover"/>
            </div>
            {/* <!-- Name --> */}
            <h1 className="text-4xl font-bold mt-4">Sangam Gupta</h1>
            {/* <!-- Subheading --> */}
            <p className="text-2xl mt-2">Full-Stack Developer - Web Designer</p>
        </div>
      </section>
     </>
}
export  {Home};