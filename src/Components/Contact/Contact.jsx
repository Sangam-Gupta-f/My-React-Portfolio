import React from "react";
const Contact=function Contact(){
    return <>
   <section className="bg-[#1ABC9C] text-white py-16 px-6">
        <div className="container mx-auto text-center">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            
            {/* <!-- Contact Form --> */}
            <div className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow">
                <form>
                    {/* <!-- Name Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter your name" className="w-full p-3 rounded-lg text-gray-800"/>
                    </div>

                    {/* <!-- Email Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 rounded-lg text-gray-800" />
                    </div>

                    {/* <!-- Message Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="message">Message</label>
                        <textarea id="message" rows="4" placeholder="Enter your message" className="w-full p-3 rounded-lg text-gray-800"></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button type="submit" className="bg-white text-[#1ABC9C] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-80 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
    </>
}

export {Contact}