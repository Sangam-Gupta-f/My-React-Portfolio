import React from 'react';
import Card from '../Card/Card';
import ProjectContent from "../ProjectContents/ProjectContent.js";

function Project() {
    return (
      <div className='flex flex-col py-5 items-center space-y-15' >
         <div className='text-5xl text-yellow-500 font-black '>My Projects</div>
        <div className='flex flex-wrap justify-center gap-5 '>
            {ProjectContent.map((item, index) => (
                <Card key={index} title={item.title} url={item.url} description={item.description}/>
            ))}
        </div>
      </div>
        
    );
}

export default Project;