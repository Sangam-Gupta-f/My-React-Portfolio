import React from "react";
import { Link } from "react-router";
import mern from "../../assets/MERN.pdf"
const About=function About(){
    return <>
      <section className="bg-[#1ABC9C] text-white py-16 px-6">
        <div className="container mx-auto text-center">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold mb-8">About Us</h1>
            
            {/* <!-- Two Columns --> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                {/* <!-- Column 1 --> */}
                <div className="bg-[#1ABC9C] bg-opacity-20 p-6 rounded-lg shadow">
                    <p>
                    Skilled in optimizing websites for search engines and implementing effective SEO strategies. Adept at collaborating with cross-functional teams to meet project deadlines and deliver high-quality results.
                    </p>
                </div>
                
                {/* <!-- Column 2 --> */}
                <div className="bg-[#1ABC9C] bg-opacity-20 p-6 rounded-lg shadow">
                    <p>
                    Objective-driven WordPress & Full Stack Developer with years of experience creating responsive and visually appealing websites. Proficient in HTML, CSS, Javascript, Java, React, Node.js, Database, SQL to enhance user experience.                    </p>
                </div>
            </div>

            {/* <!-- Download Resume Button --> */}
            <div className="mt-10">
                <Link to="https://drive.google.com/file/d/1LS9lNX31ER9AxlHZcU3FAaj2Hp4S2W6t/view?usp=sharing" download className="bg-white text-[#1ABC9C] font-bold py-3 px-8 text-lg rounded-lg shadow-lg hover:bg-opacity-80 transition">
                    Download Resume
                </Link>
            </div>
        </div>
       </section>
    </>
}

export {About}