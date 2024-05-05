import React, { useEffect, useState, useRef } from 'react';
import { Menu } from 'react-feather';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinksRef = useRef([]);

  const handleOpenMenu = () => {
    setMenuOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
    document.documentElement.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      navLinksRef.current.forEach((link, index) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section) {
          const sectionTop = section.offsetTop - 300;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            link.classList.add('current');
          } else {
            link.classList.remove('current');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="rn-header haeder-default black-logo-version header--fixed header--sticky sticky">
        <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          {/* Start Header Left */}
          <div className="col-lg-2 col-6">
            <div className="header-left">
              <div className="logo">
                <a href="index.html">
                  <img src="assets/images/logo/logo.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
          {/* End Header Left */}
          {/* Start Header Center */}
          <div className="col-lg-10 col-6">
            <div className="header-center">
              <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">
                {/* Start Mainmanu Nav */}
                <ul className="primary-menu nav nav-pills">
                  <li className="nav-item">
                    <a className="nav-link current" href="#home" ref={(el) => (navLinksRef.current[0] = el)}>
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#features" ref={(el) => (navLinksRef.current[1] = el)}>
                      Features
                    </a>
                  </li>
                  <li className="nav-item" >
                    <a className="nav-link" href="#portfolio" ref={(el) => (navLinksRef.current[2] = el)}>
                    Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#resume" ref={(el) => (navLinksRef.current[3] = el)}>
                    Resume
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#clients" ref={(el) => (navLinksRef.current[4] = el)}>
                    Clients
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing" ref={(el) => (navLinksRef.current[5] = el)}>
                    Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#blog" ref={(el) => (navLinksRef.current[6] = el)}>
                    Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contacts" ref={(el) => (navLinksRef.current[7] = el)}>
                    Contacts
                    </a>
                  </li>
                </ul>
                {/* End Mainmanu Nav */}
              </nav>
              {/* Start Header Right  */}
              <div className="header-right">
                <div className="hamberger-menu d-block d-xl-none" onClick={handleOpenMenu}>
                  <Menu
                    id="menuBtn"
                    className="feather-menu humberger-menu"
                    style={{ color: '#ff014f', height: '36px', width: '36px', zIndex: '800', position: 'relative', fontSize: '36px', transition: '0.5s', top: '2px'}}
                  />
                </div>
                <div className="close-menu d-block" onClick={handleCloseMenu}>
                  <span className="closeTrigger">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                      <line x1={18} y1={6} x2={6} y2={18} />
                      <line x1={6} y1={6} x2={18} y2={18} />
                    </svg>
                  </span>
                </div>
              </div>
              {/* End Header Right  */}
            </div>
          </div>
          {/* End Header Center */}
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`popup-mobile-menu ${menuOpen ? '' : 'isHidden'}`} onClick={handleCloseMenu}>
        <div className="inner">
          <div className="menu-top">
            <div className="menu-header">
              <a className="logo" href="index.html">
                <img src="assets/images/logo/logos-circle.png" alt="Personal Portfolio" />
              </a>
              <div className="close-button">
                <button className="close-menu-activation close" onClick={handleCloseMenu}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </button>
              </div>
            </div>
            <p className="discription">Inbio is a personal portfolio template. You can customize all.</p>
          </div>
          <div className="content">
            <ul className="primary-menu nav onepagenav">
              <li className="nav-item">
                <a className="nav-link smoth-animation current" href="#home" ref={(el) => (navLinksRef.current[0] = el)}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#features" ref={(el) => (navLinksRef.current[1] = el)}>
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#portfolio" ref={(el) => (navLinksRef.current[2] = el)}>
                Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#resume" ref={(el) => (navLinksRef.current[3] = el)}>
                Resume
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#clients" ref={(el) => (navLinksRef.current[4] = el)}>
                Clients
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#pricing" ref={(el) => (navLinksRef.current[5] = el)}>
                Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#blog" ref={(el) => (navLinksRef.current[6] = el)}>
                Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link smoth-animation" href="#contacts" ref={(el) => (navLinksRef.current[7] = el)}>
                Contacts
                </a>
              </li>
            </ul>

            <div className="social-share-style-1 mt--40">
              <span className="title">find with me</span>
              <ul className="social-share d-flex liststyle">
                <li className="facebook">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </li>
                <li className="instagram">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x={2} y={9} width={4} height={12} />
                      <circle cx={4} cy={4} r={2} />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
