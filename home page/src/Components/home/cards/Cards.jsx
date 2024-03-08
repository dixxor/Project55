import React, { useEffect } from 'react';
import "./cards.css";

const Cards = () => {
  useEffect(() => {

      const handleScroll = () => {
        const title = document.querySelector('.cards-title');
        const titleTop = title.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
  
        if (titleTop < windowHeight - 100) {
          title.classList.add('fade-in');
        }

        const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      delay: 50, // Adjust the delay value as needed
    };

  


      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (cardTop < windowHeight - 100) {
          card.classList.add('fade-in');
        }
      });
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <h1 className="cards-title">Understanding University Expenses and Financial Aid</h1>
      <div className="card-container">
        <div className="card">
          <img src="card1.jpg" alt="" />
          <div className="card-content">
            <h3>Financial Resources </h3>
            <a href='' className='card-button'>Explore</a>
          </div>
        </div>

        <div className="card">
          <img src="card2.jpg" alt="" />
          <div className="card-content">
            <h3>Budget for Universities</h3>
            <a href='' className='card-button'>Explore</a>
          </div>
        </div>

        <div className="card">
          <img src="card3.jpg" alt="" />
          <div className="card-content">
            <h3>Financial Resources </h3>
            <a href='' className='card-button'>Explore</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
