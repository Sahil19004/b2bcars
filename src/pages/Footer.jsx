import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="footer-box bg-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-header">
                  <div className="section-title">
                    <h2 className="wow fadeInUp" data-cursor="-opaque">
                      <a href="https://html.awaikenthemes.com/rankio/contact.html">
                        <span>Ready to talk?</span>
                      </a>
                    </h2>
                  </div>

                  <div className="footer-contact-item">
                    <h3>
                      <a href="mailto:support@example.com">support@example.com</a>
                    </h3>
                    <h2>
                      <a href="tel:+123456789">(+123) 456 789</a>
                    </h2>
                  </div>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="about-footer">
                  <div className="footer-logo">
                    <img src="https://html.awaikenthemes.com/rankio/images/footer-logo.svg" alt="Footer Logo" />
                  </div>

                  <div className="about-footer-content">
                    <p>Smart, scalable SEO solutions drive traffic and conversions fast.</p>
                  </div>

                  <div className="footer-social-links">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-pinterest-p"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-x-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="footer-links-box">
                  <div className="footer-links">
                    <h3>quick links</h3>
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/about.html">About us</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/services.html">Services</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/blog.html">blog</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-links">
                    <h3>Services</h3>
                    <ul>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/service-single.html">Keyword Research</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/service-single.html">SEO Copywriting</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/service-single.html">Content Marketing</a>
                      </li>
                      <li>
                        <a href="https://html.awaikenthemes.com/rankio/service-single.html">Technical SEO Audits</a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer-newsletter-box footer-links">
                    <h3>Subscribe Newsletter's</h3>

                    <div className="footer-newsletter-form">
                      <form id="newslettersForm" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                          <input
                            type="email"
                            name="mail"
                            className="form-control"
                            id="mail"
                            placeholder="E-mail Address"
                            required
                          />
                          <button type="submit" className="btn-default">
                            Subscribe
                          </button>
                        </div>
                      </form>
                    </div>

                    <p>* Stay updated with the latest SEO tips trends, and insights—straight to your inbox.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <div className="container">
            <div className="col-lg-12">
              <div className="footer-copyright-text">
                <p>Copyright © 2025 All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;