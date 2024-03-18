import React, { useEffect, useState } from 'react';
import './Degree.css';

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

      <div class="left-part clearfix">
    <div class="contentt">
      <div className="top1">
      <h3>Senior Distributed Systems Software Engineer</h3>
      <p>Saddle Rock Legal Gruop<br></br>Draper, UT, USA</p>
      
      <div className='p1'><i className='fas fa-heart'></i> &nbsp;<b>Benefits Offered Dental, Medical, Paid Time Off, Retirement, Vision</b></div>
      
      <div className='p2'>&nbsp;<i className='fas fa-dollar-sign'></i>&nbsp;&nbsp;<b>$105,000 to $120,000 per year</b></div>
      <br></br>
      <div className="par">
        <p>
        Are you a seasoned software engineer with a passion for building distributed systems? Do you want to work in a flexible, remote position? If so, we have an exciting opportunity for you at Saddle Rock Legal Group! As a full-time Senior Distributed Systems Software Engineer, you are at the forefront of developing cutting-edge technology solutions that revolutionize the legal industry
        <br></br><br></br>
        We value innovation, teamwork, and a results-oriented mindset. In terms of compensation, we offer a highly competitive salary that reflects your skills and experience in the industry. You also receive great benefits such as health, dental, and vision insurance, a 401(k) with company match, paid time off (PTO), a health savings account (HSA), paid holidays, gym membership reimbursed by insurance, and periodic snacks and team lunches.
        <br></br><br></br>
        If you are ready for an exciting challenge and want to make a meaningful impact, apply today!
        <br></br><br></br>
        Pay:<br></br>
        We are proud to offer a competitive salary of $105,000 - $120,000 per year. Pay is determined by experience.
        </p>

        <h3>WHAT SET'S US APART</h3>
      
        <p>
        We are a cutting-edge law firm, that utilizes a business-like entrepreneurial approach to connect claimants with top litigators nationwide. Led by renowned founding partner Thomas L. Young, we have recovered hundreds of millions for disaster victims. Through high-quality digital media and TV advertising, we educate consumers on their rights regarding losses caused by negligence or disaster.
        Our mission is to ensure everyone is seen and heard. With a down-to-earth culture emphasizing integrity, innovation, and ethics, we provide training and support for employee success. Enjoy a fun and welcoming atmosphere, with incentives, prizes, and opportunities to connect with colleagues. We are a company that values and invests in your future!
        </p>
        <br></br>
        <h3>WHAT WE'RE LOOKING FOR IN A SENIOR DISTRIBUTED SYSTEMS SOFTWARE ENGINEER</h3>
        <p>
        *MBA or Bachelor's degree in Computer Science or a related field with high academic achievements
        <br></br>
        *Extensive experience with programming languages: .Net, Go, Python, JavaScript, Ruby, Rust, Java, C#, C, &nbsp;C++, Lisp
        <br></br>
        *Expertise in database management and development with Cassandra, LevelDB, MongoDB, MSSQL, MySQL, PostgreSQL, Redis, SQLite
        <br></br>
        *Proficient with cloud platforms like AWS, Azure, and containerization with Docker and Kubernetes
        <br></br>
        *Familiarity with server management and deployment tools including Apache, Go, Haproxy, Kafka, and Nginx
        <br></br>
        *Previous role in a leadership capacity, such as CTO or Vice President of Engineering, with a demonstrated ability to grow and manage engineering teams
        <br></br>
        *Agile methodology, Test Driven Development (TDD), and robust engineering practices
        <br></br>
        *Do you have what it takes? Keep reading to see if you'd love this role as our Distributed Systems &nbsp;Software Engineer!
        </p>
        <br></br>
        <h3>YOUR NEW ROLE AS OUR SENIOR DISTRIBUTED SYSTEMS SOFTWARE ENGINEER</h3>
        <p>
        This full-time software engineer role works regular business hours.3

        As a Senior Distributed Systems Software Engineer with our law firm, you play a critical role in architecting, developing, and maintaining robust distributed systems with high availability, fault tolerance, and scalability. You lead upgrades and performance tuning of Kubernetes deployments, utilizing Prometheus monitoring to ensure optimal system performance. Your expertise is essential in solving complex problems related to Kafka tooling, enhancing system throughput, and improving deployment behaviors across various environments, including native and Kubernetes setups. You also have the opportunity to drive the re-architecture and development of critical systems using Golang and Kafka, ensuring they meet business requirements for reliability and rate-limiting. Collaborating with cross-functional teams, you assess and deploy database solutions, optimize query performance, and successfully manage large-scale migrations in cloud environments. Additionally, you have the chance to develop and enhance real-time dashboards, reporting systems, and custom databases using a diverse stack that includes Go, Python, JavaScript, Ruby, Rust, Java, C#, and various databases. Your contributions extend beyond development as you actively participate in the integration of a wide range of software solutions, ensuring responsiveness and proactively resolving any issues that arise.

        By joining our team, you have the opportunity to make a meaningful impact in revolutionizing the legal industry through innovative technology solutions. If you think this role will suit your needs, great! Applying is a piece of cake. You can finish the entire application in less than three minutes. Good luck - we're excited to meet you!
        </p>
      </div>
      <div className='p1'><i className='fas fa-shield-halved'></i> &nbsp;<b>post date 15 days ago</b></div>
      <br></br>
      <hr></hr>
      <h5><center></center>What Email should the hiring manager contach you at?</h5>
      <hr></hr>
      <h5><i className='fas fa-envelope'></i>&nbsp; &nbsp;enter your Email <input type='email' className='email' placeholder='Enter your Email Address'></input></h5>
     <br></br>
     <button class="btn">
    <svg height="24" width="24" fill="#FFFFFF" viewBox="0 0 24 24" data-name="Layer 1" id="Layer_1" class="sparkle">
        <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
    </svg>

    <span class="text">Apply Now</span>
    </button>
      
      </div>
      
    </div>
  </div>
  <div class="right-part clearfix">
    <div class="content">
      
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

    </div>
  </div>
      </div>
    </>
  );
};

export default Comunity;
