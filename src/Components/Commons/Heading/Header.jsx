import React, { useState } from "react"

import "./header.css"



const Header = () => {
  const [click , setClick] = useState(false)

  return (
    <>
      
      
      <header>
      
        <nav className="flexSB">
            <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                <li><img className="logo-ED" src="logo.png" alt="" srcset="" /></li>
                
                <li className="paca"><a href="">University Rankings</a></li>
                <li className="paca"><a href="">Student Resources</a></li>
                <li className="paca"><a href="">Career Resources</a></li>
                <div className="kasun">
                <li><a href="">News</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Comunity</a></li>
                
                </div>
            </ul>
            <div className="start">
                <a >Search Program</a>
            </div>
            
        </nav>
      </header>
    </>
  )
}

export default Header