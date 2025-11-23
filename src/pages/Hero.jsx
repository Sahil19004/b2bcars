import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const [count, setCount] = useState(0);
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Counter animation
  useEffect(() => {
    const target = 7000;
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 7);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const companyLogos = [
    'https://html.awaikenthemes.com/rankio/images/company-logo-1.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-2.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-3.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-4.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-5.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-2.svg',
    'https://html.awaikenthemes.com/rankio/images/company-logo-4.svg',
  ];

  return (
    <div className="hero bg-section" id='hero'>
    

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Hero Sub Heading Start */}
              <div className="hero-sub-heading">
                {/* Satisfy Client Images Start */}
                <div className="satisfy-client-images">
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src="https://html.awaikenthemes.com/rankio/images/author-1.jpg" alt="Client 1" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src="https://html.awaikenthemes.com/rankio/images/author-2.jpg" alt="Client 2" />
                    </figure>
                  </div>
                  <div className="satisfy-client-image">
                    <figure className="image-anime">
                      <img src="https://html.awaikenthemes.com/rankio/images/author-3.jpg" alt="Client 3" />
                    </figure>
                  </div>
                </div>
                <p>200+ startup chose SEO</p>
              </div>
              {/* Hero Sub Heading End */}

              {/* Section Title Start */}
              <div className="section-title">
                <h1>
                  Powerful SEO that delivers <span>real results</span>
                </h1>
                <p>
                  Our SEO strategies are built to perform. From increasing your search engine rankings to driving qualified traffic and boosting conversions
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Button Start */}
              <div className="hero-btn">
                <a href="https://html.awaikenthemes.com/rankio/contact.html" className="btn-default">
                  Talk to an SEO Expert
                </a>
              </div>
              {/* Hero Button End */}
            </div>
            {/* Hero Content End */}
          </div>

          <div className="col-lg-12">
            {/* Hero Company Slider Start */}
            <div className="hero-company-slider">
              <p>
                Trusted by <span className="counter">{count.toLocaleString()}</span>+ Brands That Value Real Results
              </p>

              <div className="swiper" ref={sliderRef}>
                <div className="swiper-wrapper">
                  {companyLogos.map((logo, index) => (
                    <div key={index} className="swiper-slide">
                      <div className="company-logo">
                        <img src={logo} alt={`Company ${index + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Hero Company Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;