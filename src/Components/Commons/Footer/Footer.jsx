import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
      <div class="container">
      <div className="footer-content">
          <img className='f-img' src="logo-footer.png" alt="" />
          <p className='ff-PF'>Empowering your educational and career journey. Join us for unwavering support and resources as you take bold steps towards your goals.</p>

          
        </div>
            <div class="footer-content">
                <h3>Quick Links</h3>
                 <ul class="list">
                    <li><a href="">Editorial Policy</a></li>
                    <li><a href="">Our Contributors</a></li>
                    <li><a href="">Media And Press</a></li>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                 </ul>
            </div>
            <div class="footer-content">
                <h3>Contact Us</h3>
                <p>Email: Info@edulink.com</p>
                <p>Phone: +94 112 651 255</p>
                <p>Address: No.30 , Colombo 10 , Sri Lanka</p>

                <div className="f-icon">
            <a className='face' href=''><i className='fab fa-facebook-f'></i></a>
            <a className='insta' href=''><i className='fab fa-instagram'></i></a>
            <a className='twit' href=''><i className='fab fa-twitter'></i></a>
            <a className='you' href=''><i className='fab fa-youtube'></i></a>
          </div>

            </div>
            
        </div>
        <div class="bottom-bar">
            <p>&copy; 2024 EDULINK.com , Developed By Group 55</p>
        </div>
      </footer>
    </>
  )
}

export default Footer
