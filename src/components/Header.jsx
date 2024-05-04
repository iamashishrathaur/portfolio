import { Menu } from 'react-feather';
const Header = () => {
  return (
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
              <li className="nav-item current"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
              <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#clients">Clients</a></li>
              <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" href="#blog">blog</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacts">Contact</a></li>
            </ul>
            {/* End Mainmanu Nav */}
          </nav>
          {/* Start Header Right  */}
          <div className="header-right">
            <div className="hamberger-menu d-block d-xl-none">
              <Menu id="menuBtn" className="feather-menu humberger-menu" style={{ color: '#ff014f' }} /> 
            </div>
            <div className="close-menu d-block">
              <span className="closeTrigger">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
              </span>
            </div>
          </div>
          {/* End Header Right  */}
        </div>
      </div>
      {/* End Header Center */}
    </div>
  </header>
  );
};

export default Header;
