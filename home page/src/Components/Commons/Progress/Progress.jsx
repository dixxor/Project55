import React, { useState, useEffect } from 'react';
import './progress.css';

const Progress = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far the user has scrolled
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate the percentage scrolled
      const scrolled = (scrollY / (documentHeight - windowHeight)) * 100;

      // Show/hide the progress button based on the scroll position
      setIsVisible(scrolled > 20); // Show the button when the user has scrolled more than 20%
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling
    });
  };

  return (
    <>
      {isVisible && (
        <div className="progress" onClick={handleScrollUp}>
          <span className="progress-value">&#x1F815;</span>
        </div>
      )}
    </>
  );
};

export default Progress;
