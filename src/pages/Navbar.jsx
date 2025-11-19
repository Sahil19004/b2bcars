import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <header className="main-header" style={{ width: '100%', position: 'relative', zIndex: 1000 }}>
      <style>{`
        
     
   
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
        }
        .navbar-brand img {
          height: 40px;
        }
        .main-menu {
          display: flex;
          align-items: center;
          gap: 2rem;
          flex: 1;
          justify-content: flex-start;
          margin-left: 0;
        }
        .nav-menu-wrapper {
          flex: 1;
        }
        
        .nav-item {
          position: relative;
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          padding: 0.5rem 0;
          display: block;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #007bff;
        }
        .submenu {
          position: relative;
        }
        .submenu > a::after {
          content: ' ▼';
          font-size: 10px;
          margin-left: 5px;
        }
        .submenu ul {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          list-style: none;
          padding: 1rem 0;
          margin: 0;
          min-width: 200px;
          border-radius: 8px;
          z-index: 1000;
        }
        .submenu:hover ul {
          display: block;
        }
        .submenu ul li {
          padding: 0;
        }
        .submenu ul .nav-link {
          padding: 0.75rem 1.5rem;
          white-space: nowrap;
        }
        .submenu ul .nav-link:hover {
          background: #f8f9fa;
        }
       
        .navbar-toggle {
          display: none;
          width: 30px;
          height: 25px;
          position: relative;
          cursor: pointer;
        }
        @media (max-width: 991px) {
          .main-menu {
            display: none;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
           
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin-left: 0;
          }
          .main-menu.show {
            display: flex;
          }
          .navbar-nav {
            flex-direction: column;
            width: 100%;
            gap: 0;
          }
          .nav-item {
            width: 100%;
            border-bottom: 1px solid #eee;
          }
          .nav-link {
            padding: 1rem 0;
          }
          .submenu ul {
            position: static;
            box-shadow: none;
            padding-left: 1rem;
            display: none;
          }
          .submenu.active ul {
            display: block;
          }
          .navbar-toggle {
            display: block;
          }
          .navbar-toggle::before,
          .navbar-toggle::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 3px;
            background: #333;
            transition: 0.3s;
          }
          .navbar-toggle::before {
            top: 0;
          }
          .navbar-toggle::after {
            bottom: 0;
          }
          .header-btn {
            margin-top: 1rem;
          }
        }
      `}</style>
      <div className="header-sticky bg-section">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            {/* Logo Start */}
            <a className="navbar-brand" href="index.html">
              <img src="https://html.awaikenthemes.com/rankio/images/logo.svg" alt="Logo" />
            </a>
            {/* Logo End */}

            {/* Main Menu Start */}
            <div className={`main-menu ${isMenuOpen ? 'show' : ''}`}>
              <div className="nav-menu-wrapper">
                <ul className="navbar-nav" id="menu">
                  <li className={`nav-item submenu ${activeSubmenu === 0 ? 'active' : ''}`} onClick={() => toggleSubmenu(0)}>
                    <a className="nav-link" href="index.html">Home</a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="index.html">Home - Main</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/index-image.html">Home - Image</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/index-video.html">Home - Video</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://html.awaikenthemes.com/rankio/about.html">About Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://html.awaikenthemes.com/rankio/services.html">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://html.awaikenthemes.com/rankio/blog.html">Blog</a>
                  </li>
                  <li className={`nav-item submenu ${activeSubmenu === 1 ? 'active' : ''}`} onClick={() => toggleSubmenu(1)}>
                    <a className="nav-link" href="#">Pages</a>
                    <ul>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/service-single.html">Service Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/blog-single.html">Blog Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/projects.html">Projects</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/project-single.html">Project details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/team.html">Our Team</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/team-single.html">Team Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/pricing.html">Pricing Plan</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/testimonials.html">Testimonials</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/image-gallery.html">Image Gallery</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/video-gallery.html">Video Gallery</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/faqs.html">FAQs</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="https://html.awaikenthemes.com/rankio/404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://html.awaikenthemes.com/rankio/contact.html">Contact Us</a>
                  </li>
                </ul>
              </div>

              {/* Header Btn Start */}
              <div className="header-btn">
                <a href="https://html.awaikenthemes.com/rankio/contact.html" className="btn-default">
                  Get Started Today
                </a>
              </div>
              {/* Header Btn End */}
            </div>
            {/* Main Menu End */}
            <div className="navbar-toggle" onClick={toggleMenu}></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;