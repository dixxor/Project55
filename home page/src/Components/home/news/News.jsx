import React, { useEffect } from 'react';
import './news.css';

const News = () => {
  useEffect(() => {
    const newsContainers = document.querySelectorAll('.news-container');

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      delay: 100, // Adjust the delay value as needed
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    const observeNewsContainers = () => {
      newsContainers.forEach((container) => {
        observer.observe(container);
      });
    };

    observeNewsContainers();

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
    <div className="news-container">
        {/* your news items */}
      
    <div className="news-title">
      {/*<h2 className='news-h2'>News</h2>
      <a href='' className='news-button'>See All</a>*/}
    </div>
      <h1 className="news-h1">Trending Topics <span>( News )</span></h1>

      <div className="news-container">
        <div className="news">
          <img src="news1.jpg" alt="" />
          <div className="news-content">
            <h3>6 in 10 Students Say Use of AI Tools in College Diminishes Value of Degree</h3>
            <p>In a new BestColleges survey, the majority of students (55%) also say the use of AI tools in the workforce would diminish the value of earning a college degree.</p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Mithila Madhusankha</h3>
            <h4 className="date">November 10,2023</h4>
          </div>
        </div>
        </div>

        <div className="news">
          <img src="news2.jpg" alt="" />
          <div className="news-content">
            <h3>Five tips to inform your AI and data science strategy and maximize your investments</h3>
            <p>Data science and AI leaders are rushing to  new technology adoption.generative AI alone will see an average annual growth rate of 36 percent for the next seven years, AI software market.</p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Mithila Madhusankha</h3>
            <h4 className="date">November 10,2023</h4>
          </div>
        </div>
        </div>

        <div className="news">
          <img src="news3.jpg" alt="" />
          <div className="news-content">
            <h3>Bringing family with you on an Australian student visa</h3>
            <p>Can international students bring family or dependants with them to Australia? Use this guide to find out about the visa rules for international students</p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Mithila Madhusankha</h3>
            <h4 className="date">November 10,2023</h4>
          </div>
        </div>
        </div>

        <div className="news">
          <img src="news4.jpg" alt="" />
          <div className="news-content">
            <h3>AI is much more of an opportunity than a threat to universities</h3>
            <p>AI will make courses cheaper to deliver, more professionally relevant and more pedagogically effective, says Max Lu </p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Mithila Madhusankha</h3>
            <h4 className="date">November 10,2023</h4>
          </div>
        </div>
        </div>

        <div className="news">
          <img src="news5.jpg" alt="" />
          <div className="news-content">
            <h3>At least half of younger generation should obtain higher education</h3>
            <p>In a new BestColleges survey, the majority of students (55%) also say the use of AI tools in the workforce would diminish the value of earning a college degree.</p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Estonian minister</h3>
            <h4 className="date">March 05,2024</h4>
          </div>
        </div>
        </div>

        <div className="news">
          <img src="news6.jpg" alt="" />
          <div className="news-content">
            <h3>Boon or Drain for Sri Lanka’s Higher Education ?</h3>
            <p>
Private institutions can address the demand for higher education, reducing strain on state universities and preventing a drain of foreign exchange. To maintain educational standards, stringent quality controls are deemed necessary for non-state institutes and foreign university branches. There is a call for private universities to establish medical faculties, emphasizing the importance of meeting quality and standards in response to the demand for medical education</p>
          </div>

          <div className="profile-details">
          <img src="profile.jpg" alt="" />
          <div className="name-job">
            <h3 className="name">Mithila Madhusankha</h3>
            <h4 className="date">November 10,2023</h4>
          </div>
        </div>
        </div>
        
        
        
      </div>

      </div>
    </>
  )
}

export default News
