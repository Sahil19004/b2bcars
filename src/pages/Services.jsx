import { useState } from 'react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('thirds');

  const tabs = [
    { id: 'first', label: 'Keyword Research', icon: 'https://html.awaikenthemes.com/rankio/images/icon-services-tab-1.svg' },
    { id: 'second', label: 'SEO Copywriting', icon: 'https://html.awaikenthemes.com/rankio/images/icon-services-tab-2.svg' },
    { id: 'thirds', label: 'Content Marketing', icon: 'https://html.awaikenthemes.com/rankio/images/icon-services-tab-3.svg' },
    { id: 'fourth', label: 'SEO Analytics', icon: 'https://html.awaikenthemes.com/rankio/images/icon-services-tab-4.svg' },
    { id: 'fifth', label: 'Technical SEO Audits', icon: 'https://html.awaikenthemes.com/rankio/images/icon-services-tab-5.svg' },
  ];

  const serviceData = {
    first: 'Keyword Research',
    second: 'SEO Copywriting',
    thirds: 'Content Marketing',
    fourth: 'SEO Analytics',
    fifth: 'Technical SEO Audits',
  };

  return (
    <> 
     
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">Our Services</h3>
              <h2 className="wow fadeInUp" data-wow-delay="0.2s" data-cursor="-opaque">
                Grow faster with our proven <span>SEO services</span>
              </h2>
            </div>
          </div>
        </div>


    
      

        <div className="row container-fluid">
            
          <div className="col-lg-12">
            <div className="our-services-box tab-content wow fadeInUp" data-wow-delay="0.4s" id="servicestab">
              <div className="services-nav">
                <ul className="nav nav-tabs" id="mvTab" role="tablist">
                  {tabs.map((tab) => (
                    <li className="nav-item" role="presentation" key={tab.id}>
                      <button
                        className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                        id={`${tab.id}-tab`}
                        type="button"
                        role="tab"
                        aria-selected={activeTab === tab.id}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <img src={tab.icon} alt="" />
                        {tab.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  className={`services-item-box tab-pane fade ${activeTab === tab.id ? 'show active' : ''}`}
                  id={tab.id}
                  role="tabpanel"
                >
                  <div className="row align-items-center">
                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <div className="icon-box">
                          <img src="https://html.awaikenthemes.com/rankio/images/icon-services-item-1.svg" alt="" />
                        </div>
                        <div className="services-item-content">
                          <h3>{serviceData[tab.id]}</h3>
                          <p>
                            Create valuable, engaging content that attracts, informs, and converts your target audience to drive long-term SEO success.
                          </p>
                        </div>
                        <div className="services-item-btn">
                          <a href="https://html.awaikenthemes.com/rankio/service-single.html" className="btn-default">
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="services-item">
                        <div className="services-item-content">
                          <h3>What We Offer</h3>
                          <p>Create valuable, engaging content that attracts, informs,</p>
                          <ul>
                            <li>Content Strategy &amp; Planning</li>
                            <li>Blog &amp; Article Writing</li>
                            <li>Website Content Creation</li>
                            <li>SEO Content Optimization</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-4">
                      <div className="services-chart-box">
                        <div className="services-chart-content">
                          <h2>
                            <span className="counter">28,100</span>
                          </h2>
                          <p>Marketing Myths Debunked</p>
                        </div>
                        <div className="services-chart-image">
                          <img src="https://html.awaikenthemes.com/rankio/images/services-chart-image.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-12">
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.2s">
              <p>
                <span>Free</span> Let's make something great work together.{' '}
                <a href="https://html.awaikenthemes.com/rankio/contact.html">Get Free Quote</a>
              </p>
            </div>
          </div>
        </div>
    </>

  );
}