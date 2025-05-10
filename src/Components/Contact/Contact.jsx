import React from "react";
import { useState } from 'react';
import axios from 'axios';
const Contact=function Contact(){
    const [formData, setFormData]=useState({
        name:'',
        email:'',
        message:''
    })
     const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    };
    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        'https://api.mailersend.com/v1/email',
        {
          from: {
            email: 'y7zpl98qx1p45vx6', // Your verified domain
            name: 'Website Contact'
          },
          to: [
            {
              email: 'sangamchegg73@gmail.com' // Where to receive messages
            }
          ],
          subject: `New message from ${formData.name}`,
          text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_MAILERSEND_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

    return <>
   <section className="bg-[#1ABC9C] text-white py-16 px-6">
        <div className="container mx-auto text-center">
            {/* <!-- Heading --> */}
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            
            {/* <!-- Contact Form --> */}
            {submitStatus === 'success' && (
        <div className="alert success">Message sent successfully!</div>
      )}
      {submitStatus === 'error' && (
        <div className="alert error">Error sending message. Please try again.</div>
      )}
            <div className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-lg shadow">
                <form onSubmit={handleSubmit}>
                    {/* <!-- Name Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="name">Name</label>
                        <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                         placeholder="Enter your name"
                          className="w-full p-3 rounded-lg text-gray-800"/>
                    </div>

                    {/* <!-- Email Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="email">Email</label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                         className="w-full p-3 rounded-lg text-gray-800" />
                    </div>

                    {/* <!-- Message Field --> */}
                    <div className="mb-4">
                        <label className="block text-lg mb-2 text-gray-800" for="message">Message</label>
                        <textarea
                         id="message" 
                         rows="4" 
                         name="message"
                         value={formData.message}
                         onChange={handleChange}
                         placeholder="Enter your message" 
                         className="w-full p-3 rounded-lg text-gray-800"></textarea>
                    </div>

                    {/* <!-- Submit Button --> */}
                    <button 
                    type="submit"
                    className="bg-white text-[#1ABC9C] font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-80 transition">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
    </>
}

export {Contact}