import React from 'react';
import './subject-search.css';
export default function SubjectSearch() {
  return (
    <div>
      <div class="header">
        <h1>What subject do you want to study ?</h1>
      </div>
      <div id="cover">
        <form method="get" action="">
          <div className="tb">
            <div className="td">
              <input type="text" placeholder="Search" required />
            </div>
            <div className="td" id="s-cover">
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="buttonn-container">
        <button className="buttonn">back</button>
      </div>
    </div>
    
  );
}
