import React from 'react'

const MobileMenu = () => {
  return (
    <div className="popup-mobile-menu">
    <div className="inner">
      <div className="menu-top">
        <div className="menu-header">
          <a className="logo" href="index.html">
            <img src="assets/images/logo/logos-circle.png" alt="Personal Portfolio" />
          </a>
          <div className="close-button">
            <button className="close-menu-activation close"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></button>
          </div>
        </div>
        <p className="discription">Inbio is a personal portfolio template. You can customize all.</p>
      </div>
      <div className="content">
        <ul className="primary-menu nav nav-pills onepagenav">
          <li className="nav-item current"><a className="nav-link smoth-animation active" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#features">Features</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#resume">Resume</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#clients">Clients</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#pricing">Pricing</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#blog">blog</a></li>
          <li className="nav-item"><a className="nav-link smoth-animation" href="#contacts">Contact</a></li>
        </ul>
        {/* social sharea area */}
        <div className="social-share-style-1 mt--40">
          <span className="title">find with me</span>
          <ul className="social-share d-flex liststyle">
            <li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg></a>
            </li>
            <li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg></a>
            </li>
            <li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x={2} y={9} width={4} height={12} />
                  <circle cx={4} cy={4} r={2} />
                </svg></a>
            </li>
          </ul>
        </div>
        {/* end */}
      </div>
    </div>
  </div>
  )
}

export default MobileMenu
