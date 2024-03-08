import React, { useState, useEffect } from 'react';
import './about.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      // Adjust the threshold based on your design
      if (scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <div className={`section-AB ${isVisible ? 'visible' : ''}`}>
        {/* ... your existing JSX code ... */}
      
      <div className="section-AB">
        <div className="container-AB">
            <div className="content-section-AB">
                <div className="title-AB">
                    <h1>About Us</h1>
                </div>
                <div className="content-AB">
                    <h4>Taking the next step in your education or career is courageous.</h4>
                    <p>Your educational and career journey matters, and we're here to support you. Whether you're finding the right school, saving on tuition, or advancing your career, we've got the resources to boost your confidence. We're committed to simplifying the process, providing you with the information you need to make informed decisions. Join us as you take the next step toward your goals.</p>
                    <p className='p2'>
Welcome to our community, where your educational and career aspirations are at the forefront. Taking the next step in your education or career is a bold and courageous move, and we're here to offer unwavering support throughout this transformative journey.

Our mission revolves around the profound belief that your educational and career path genuinely matters. We comprehend the importance of the decisions you make in molding your future, and our dedication lies in furnishing you with the resources and guidance necessary to navigate these pivotal choices.</p>
                    <div className="button-AB">
                        <a href=''>Read More</a>
                    </div>
                </div>
                <div className="social">
                    <a href=''><i className='fab fa-facebook-f'></i></a>
                    <a href=''><i className='fab fa-twitter'></i></a>
                    <a href=''><i className='fab fa-instagram'></i></a>
                </div>
            </div>
            <div className="image-section-AB">
                <img src="about.png" alt="" />
            </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About
