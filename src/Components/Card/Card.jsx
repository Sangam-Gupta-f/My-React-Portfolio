import React, { useState } from 'react'
function Card({title,url, description}) {
  const [isClose, setIsClose]=useState(false);
  return (
    <>
    <div className='w-64 h-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow' onClick={()=>{return setIsClose(true)}}>      
      <div>
        <img className="w-full h-40 object-cover rounded-t-xl" src={url} alt={title} />
      </div>
      <div className='bg-amber-300 p-3 rounded-b-xl'>
        <h1 className='text-xl text-center font-black'>{title}</h1>
      </div>
      
    </div>
    {isClose && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-5 ">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl relative ">
            {/* Close Button */}
            <button 
              className="absolute top-3 right-3 text-gray-600 hover:text-black font-black font-bold"
              onClick={() => setIsClose(false)}
            >
              Close
            </button>

            {/* Image */}
            <img className="w-full h-96 object-cover" src={url} alt={title} />

            {/* Description */}
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
              <p className="text-gray-600 mt-2">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Card