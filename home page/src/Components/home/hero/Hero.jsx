import React from 'react'
import "./hero.css";
import Title from '../../Commons/title/Title.jsx'


const hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
          <div className="row">
          
            <Title subtitle='Unleashing Your ' title='Potential'/>
            <p>Unlock a world of possibilities in your ideal career. Your journey towards a brighter, more rewarding future starts here at <span className='span-ED'>EDULINK</span> </p>
            <div className="button">
              <button className="saja-btn">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              
              
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>

    </>
  )
}

export default hero
