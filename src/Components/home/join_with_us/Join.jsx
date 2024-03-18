import React, { useEffect, useState } from 'react';
import './Join.css';

const Comunity = () => {
  const [typedText, setTypedText] = useState('');
  const targetText = 'ommunity ...';

  useEffect(() => {
    const typeAnimation = () => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setTypedText(targetText.slice(0, currentIndex + 1));
        currentIndex += 1;

        if (currentIndex === targetText.length) {
          clearInterval(intervalId);

          // Reset the typed text and restart the animation
          setTimeout(() => {
            setTypedText('');
            typeAnimation();
          }, 1000); // You can adjust the delay before restarting the animation
        }
      }, 150);
    };

    typeAnimation();
  }, []);

  const [commentHeaderText, setCommentHeaderText] = useState('You Can Add Your Comment Here ...');
  const commentHeaderTargetText = 'ou Can Add Your Comment Here ...';

  useEffect(() => {
    const commentHeaderTypeAnimation = () => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        setCommentHeaderText(commentHeaderTargetText.slice(0, currentIndex + 1));
        currentIndex += 1;

        if (currentIndex === commentHeaderTargetText.length) {
          clearInterval(intervalId);

          // Reset the typed text and restart the animation
          setTimeout(() => {
            setCommentHeaderText('');
            commentHeaderTypeAnimation();
          }, 1000); // You can adjust the delay before restarting the animation
        }
      }, 75);
    };

    commentHeaderTypeAnimation();
  }, []);


  return (
    <>
      <div className="content">
        

      <div className="top-head">

      <div className='fuck'>    
        <button id="bottone5">
        <i className='fas fa-user'></i>
        <br></br>
          Recomended<br></br>For You</button>
      
        
        <button id="bottone5">
        <i className='fas fa-laptop'></i>
        <br></br>
          Software<br></br> Engineering </button>

        <button id="bottone5">
        <i className='fas fa-scroll'></i>
        <br></br>
          Qualification<br></br> Related</button>
        </div>
      </div>
      <div className='whutto'>
            Recomended For You
          </div>
        <section className="testimonials">
          <div className="test-box-container">

         
            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  {/*<div className="profile-img">
                    <img src="c-1.jpg" alt="" />
                  </div>*/}
                  <div className="name-user">
                    <strong>Trading Firm Senior Software Engineer</strong>
                    <span className='box-span'>99x Company</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>Selby Jennings is working with one of the most successful trading firms in the world. This firm has stood the test of time for decades bringing consistent, high returns to their investors. They have b.......</p>
                </div>

            </div>

            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  
                  <div className="name-user">
                    <strong>Senior Programmer</strong>
                    <span className='box-span'>Genesys Consulting Services</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>This is an 11 month opportunity on the Hourly-Based IT Services (HBITS) Contract at the State of New York. (Possibility of extension).Required Experience:60 Months Experience with relational database management systems......</p>
                </div>

            </div>

            

            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  
                  <div className="name-user">
                    <strong> Senior Solar Project Developer</strong>
                    <span className='box-span'>@Ava Energy</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>AVA Energy are supporting a leading developer of Renewable energy across the United States as they look to grow their Project Development team, with a focus across Renewable technologies.......</p>
                </div>

            </div>

            

            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  
                  <div className="name-user">
                    <strong>Senior Software Architect</strong>
                    <span className='box-span'>@Ecisolutions</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>For more than 30 years, ECI Software Solutions has been providing industry-specific, cloud-based business management software and services to small and medium-sized businesses. With divisions focused on manufacturing, wholesale/retail distribution, building and constru......</p>
                </div>

            </div>

            

            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  
                  <div className="name-user">
                    <strong>Senior Backend Engineer</strong>
                    <span className='box-span'>@DApp360 Workforce LLC</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>DApp360 Workforce is working on behalf of a decentralize finance company to fill their open position for a Senior Backend Engineer. This Backend Engineer will architect and build system</p>
                </div>

            </div>
            

            <div className="test-box">

              <div className="box-top">

                <div className="box-profile">

                  
                  <div className="name-user">
                    <strong>Banking Corporate Development Lead</strong>
                    <span className='box-span'>@Storm3</span>
                  </div>

                </div>

                <div className="reviews">
                  <i className='fas fa-heart'></i>
                  
                </div>
                
              </div>

                <div className="client-comment">
                  <p className='com-p'>⚡ Corporate Development Lead (Banking)⚡<br></br>
                                        ⚡ Early Stage BioTech⚡<br></br>
                                          ⚡ USA Remote - Up to $250K Base + Huge Equity⚡<br></br> </p>
                </div>

            </div>
          </div>
          
        </section>
        
        
        
      </div>
    </>
  );
};

export default Comunity;
