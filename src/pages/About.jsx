// About.jsx
import React from 'react';

const About = () => {
  // Function to handle image errors
  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    // You can set a fallback image here
    // e.target.src = '/fallback-image.jpg';
  };

  return (
    <div className="about-us" id='aboutss'>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us-images">
              {/* About Us Image */}
              <div className="about-image">
                <figure className="image-anime reveal">
                  <img 
                    src="https://html.awaikenthemes.com/rankio/images/about-us-image.jpg" 
                    alt="About us" 
                    onError={handleImageError}
                  />
                </figure>
              </div>
              
              {/* Rest of your JSX remains the same */}
              <div className="about-skill-box">
                <div className="about-skill-title">
                  <h3>Technical SEO Insights</h3>
                </div>
                <div className="about-skill-list">
                  <div className="skills-progress-bar">
                    <div className="skillbar" data-percent="87%">
                      <div className="skill-data">
                        <div className="skill-title">Crawl Errors</div>
                        <div className="skill-no">87%</div>
                      </div>
                      <div className="skill-progress">
                        <div className="count-bar"></div>
                      </div>
                    </div>
                  </div>
                  <div className="skills-progress-bar">
                    <div className="skillbar" data-percent="93%">
                      <div className="skill-data">
                        <div className="skill-title">Indexing Status</div>
                        <div className="skill-no">93%</div>
                      </div>
                      <div className="skill-progress">
                        <div className="count-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="expert-team-box">
                <div className="satisfy-client-images">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="satisfy-client-image">
                      <figure className="image-anime">
                        <img 
                          src={`https://html.awaikenthemes.com/rankio/images/author-${num}.jpg`}
                          alt={`Team member ${num}`}
                          onError={handleImageError}
                        />
                      </figure>
                    </div>
                  ))}
                  <div className="satisfy-client-image add-more">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                </div>
                <div className="satisfy-clients-content">
                  <p>Our expert SEO team</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="about-us-content">
              <div className="section-title">
                <h3 className="wow fadeInUp">About us</h3>
                <h2 className="wow fadeInUp" data-cursor="-opaque" data-wow-delay="0.2s">
                  Experts in results-driven <span>SEO marketing</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  With a deep understanding of search engine algorithms and user behavior, we create tailored SEO strategies that drive real results.
                </p>
              </div>

              <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                <div className="icon-box">
                  <img 
                    src="https://html.awaikenthemes.com/rankio/images/icon-about-us-body.svg" 
                    alt="SEO icon"
                    onError={handleImageError}
                  />
                </div>
                <div className="about-body-content">
                  <h3>Results-Driven SEO Expert</h3>
                  <p>We drive rankings, traffic, conversions SEO solutions.</p>
                </div>
              </div>

              <div className="about-us-btn wow fadeInUp" data-wow-delay="0.8s">
                <a href="/about" className="btn-default">Learn More About</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;