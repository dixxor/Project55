import React from 'react';
import "./grid.css";

const Grid = () => {
  return (
    <>
      <div className="grid-main">
        <h1>Find the right path for you</h1>

        <div className="gallery">
          <div className="img">
            <img className='img1' src="1.jpg" alt="" />
            <h1>EDUCATION</h1>
            <h3>Explore Higher Education Planning Resources </h3>
            <p>EDULINK has diverse programs from Bachelor's to Doctorate, plus certifications. Find your perfect fit on their resources page.</p>
            
          </div>
          
          <div className="img">
            <img className='img2' src="friend.jpg" alt="" />
            <h1>JOBS</h1>
            <h3 className='h3-M'>Find the best jobs for your qualifications</h3>
          </div>
          
          <div className="img">
            <img className='img3' src="study.jpg" alt="" />
            <h1>PROJECTS</h1>
            <h3 className='h3-L'>Let us support you with your academic projects</h3>
          </div>   
        </div>
      </div>
    </>
  )
}

export default Grid;
