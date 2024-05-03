import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import reactLogo from './assets/images/react.png'
import ViteLogo from './assets/images/vite.png'
import nodeLogo from './assets/images/node.png'
import portfolio1 from  './assets/images/portfolio-01.jpg'
import portfolio2 from  './assets/images/portfolio-02.jpg'
import portfolio3 from  './assets/images/portfolio-03.jpg'
import portfolio4 from  './assets/images/portfolio-04.jpg'
import portfolio5 from  './assets/images/portfolio-05.jpg'
import portfolio6 from  './assets/images/portfolio-06.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

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
                    <li className="nav-item current"><a className="nav-link" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#features">Features</a></li>
                    <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                    <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
                    <li className="nav-item"><a className="nav-link" href="http://localhost:3000/#clients">Clients</a></li>
                    <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link" href="#blog">blog</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contacts">Contact</a></li>
                  </ul>
                  {/* End Mainmanu Nav */}
                </nav>
                {/* Start Header Right  */}
                <div className="header-right">
                  <div className="hamberger-menu d-block d-xl-none">
                    <i id="menuBtn" className="feather-menu humberger-menu" />
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
        {/* End Header Area */}
        {/* Start Popup Mobile Menu  */}
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
        {/* End Popup Mobile Menu  */}
        <main className="main-page-wrapper">
          {/* Start Slider Area */}
          <div id="home" className="rn-slider-area">
            <div className="slide slider-style-1">
              <div className="container">
                <div className="row row--30 align-items-center">
                  <div className="order-2 order-lg-1 col-lg-7 mt_md--50 mt_sm--50 mt_lg--30">
                    <div className="content">
                      <div className="inner">
                        <span className="subtitle">Welcome to my world</span>
                        <h1 className="title">Hi, I’m <span>Ashish</span><br />
                          <span className="header-caption" id="page-top">
                            {/* type headline start*/}
                            <span className="cd-headline clip is-full-width">
                              <span>a </span>
                              {/* ROTATING TEXT */}
                              <span className="cd-words-wrapper" style={{width: '257.325px'}}>
                                <b className="is-hidden">Developer.</b>
                                <b className="is-visible">Professional Coder.</b>
                                <b className="is-hidden">Developer.</b>                               
                              </span>
                            </span>
                            {/* type headline end */}
                          </span>
                        </h1>
                        <div>
                          <p className="description">I use animation as a third dimension by which to simplify
                            experiences and kuiding thro each and every interaction. I’m not adding
                            motion
                            just to spruce things up, but doing it in ways that.</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                          <div className="social-share-inner-left">
                            <span className="title">find with me</span>
                            <ul className="social-share d-flex liststyle">
                              <li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                              </li>
                              <li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                              </li>
                              <li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 mt_mobile--30">
                          <div className="skill-share-inner">
                            <span className="title">best skill on</span>
                            <ul className="skill-share d-flex liststyle">
                              <li><LazyLoadImage src={ViteLogo} alt="Icons Images" /></li>
                              <li><LazyLoadImage src={reactLogo} alt="Icons Images" /></li>
                              <li><LazyLoadImage src={nodeLogo} alt="Icons Images" /></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 order-lg-2 col-lg-5">
                    <div className="thumbnail">
                      <div className="inner">
                        <img src="assets/images/slider/banner-01.png" alt="Personal Portfolio Images" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Slider Area */}
          {/* Start Service Area */}
          <div className="rn-service-area rn-section-gap section-separator" id="features">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-left aos-init" data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true">
                    <span className="subtitle">Features</span>
                    <h2 className="title">What I Do</h2>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt_md--10 mt_sm--10">
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">Business Stratagy</a></h4>
                        <p className="description">I throw myself down among the tall grass by the stream as I
                          lie close to the earth.</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={300} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">App Development</a></h4>
                        <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                          a handful of model sentence.</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tv"><rect x={2} y={7} width={20} height={15} rx={2} ry={2} /><polyline points="17 2 12 7 7 2" /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">App Development</a></h4>
                        <p className="description">I throw myself down among the tall grass by the stream as I
                          lie close to the earth.</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">Mobile App</a></h4>
                        <p className="description">There are many variations of passages of Lorem Ipsum
                          available, but the majority.
                        </p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={300} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0" /><path d="M1.42 9a16 16 0 0 1 21.16 0" /><path d="M8.53 16.11a6 6 0 0 1 6.95 0" /><line x1={12} y1={20} x2="12.01" y2={20} /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">CEO Marketing</a></h4>
                        <p className="description">always free from repetition,
                          injected humour, or non-characteristic words etc.</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
                {/* Start Single Service */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-service">
                    <div className="inner">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z" /><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" /><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z" /><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z" /><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z" /><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z" /><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z" /><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z" /></svg>
                      </div>
                      <div className="content">
                        <h4 className="title"><a href="#">Personal Portfolio April</a></h4>
                        <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                          a handful of model sentence.</p>
                        <a className="read-more-button" href="#"><i className="feather-arrow-right" /></a>
                      </div>
                    </div>
                    <a className="over-link" href="#" />
                  </div>
                </div>
                {/* End SIngle Service */}
              </div>
            </div>
          </div>
          {/* End Service Area  */}
          {/* Start Portfolio Area */}
          <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">Visit my portfolio and keep your feedback</span>
                    <h2 className="title">My Portfolio</h2>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={100} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio1} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Development</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              600</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">The services provide for design <i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={300} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio2} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Application</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              750</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">Mobile app landing design &amp; app
                            maintain<i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={500} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio3} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Photoshop</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              630</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">Logo design creativity &amp; Application
                            <i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={100} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio4} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Figma</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              360</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">Mobile app landing design &amp;
                            Services<i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={300} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio5} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Web Design</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              280</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">Design for tecnology &amp; services<i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
                {/* Start Single Portfolio */}
                <div data-aos="fade-up" data-aos-delay={500} data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init">
                  <div className="rn-portfolio" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <LazyLoadImage src={portfolio6} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Web Design</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><i className="feather-heart" /></a>
                              690</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">App for tecnology &amp; services<i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Portfolio */}
              </div>
            </div>
          </div>
          {/* End portfolio Area */}
          {/* Start Resume Area */}
          <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">7+ Years of Experience</span>
                    <h2 className="title">My Resume</h2>
                  </div>
                </div>
              </div>
              <div className="row mt--45">
                <div className="col-lg-12">
                  <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">education</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">professional
                        Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="interview-tab" data-bs-toggle="tab" href="#interview" role="tab" aria-controls="interview" aria-selected="false">interview</a>
                    </li>
                  </ul>
                  {/* Start Tab Content Wrapper  */}
                  <div className="rn-nav-content tab-content" id="myTabContents">
                    {/* Start Single Tab  */}
                    <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                      <div className="personal-experience-inner mt--40">
                        <div className="row">
                          {/* Start Skill List Area  */}
                          <div className="col-lg-6 col-md-12 col-12">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Education Quality</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Personal Portfolio April Fools</h4>
                                        <span>University of DVI (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.30/5</span>
                                      </div>
                                    </div>
                                    <p className="description">The education should be very
                                      interactual. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4> Examples Of Personal Portfolio</h4>
                                        <span>College of Studies (2000 - 2002)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.50/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Tips For Personal Portfolio</h4>
                                        <span>University of Studies (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.80/5</span>
                                      </div>
                                    </div>
                                    <p className="description"> If you are going to use a passage.
                                      Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                          {/* Start Skill List Area 2nd  */}
                          <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Job Experience</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Web Development</h4>
                                        <span>BSE In CSE (2004 - 2008)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.70/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Contrary to popular belief. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>The Personal Portfolio Mystery</h4>
                                        <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.95/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Generate Lorem Ipsum which looks. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Computer Science</h4>
                                        <span>Works at Plugin Development (2016 -
                                          2020)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>5.00/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab  */}
                    {/* Start Single Tab  */}
                    <div className="tab-pane fade " id="professional" role="tabpanel" aria-labelledby="professional-tab">
                      <div className="personal-experience-inner mt--40">
                        <div className="row row--40">
                          {/* Start Single Progressbar  */}
                          <div className="col-lg-6 col-md-6 col-12">
                            <div className="progress-wrapper">
                              <div className="content">
                                <span className="subtitle">Features</span>
                                <h4 className="maintitle">Design Skill</h4>
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">PHOTOSHOT</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: '100%', visibility: 'hidden', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">100%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">FIGMA</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: '95%', visibility: 'hidden', animationDuration: '0.6s', animationDelay: '0.4s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">95%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">ADOBE XD</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: '60%', visibility: 'hidden', animationDuration: '0.7s', animationDelay: '0.5s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">60%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">ADOBE ILLUSTRATOR</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: '70%', visibility: 'hidden', animationDuration: '0.8s', animationDelay: '0.6s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">70%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">DESIGN</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{width: '90%', visibility: 'hidden', animationDuration: '0.9s', animationDelay: '0.7s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">90%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                              </div>
                            </div>
                          </div>
                          {/* End Single Progressbar  */}
                          {/* Start Single Progressbar  */}
                          <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                            <div className="progress-wrapper">
                              <div className="content">
                                <span className="subtitle">Features</span>
                                <h4 className="maintitle">Development Skill</h4>
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">HTML</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: '85%', visibility: 'hidden', animationDuration: '0.5s', animationDelay: '0.3s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">85%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">CSS</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{width: '80%', visibility: 'hidden', animationDuration: '0.6s', animationDelay: '0.4s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">80%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: '90%', visibility: 'hidden', animationDuration: '0.7s', animationDelay: '0.5s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">90%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">SOFTWARE</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{width: '75%', visibility: 'hidden', animationDuration: '0.8s', animationDelay: '0.6s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">75%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                                {/* Start Single Progress Charts */}
                                <div className="progress-charts">
                                  <h6 className="heading heading-h6">PLUGIN</h6>
                                  <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" style={{width: '70%', visibility: 'hidden', animationDuration: '0.9s', animationDelay: '0.7s', animationName: 'none'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}><span className="percent-label">70%</span></div>
                                  </div>
                                </div>
                                {/* End Single Progress Charts */}
                              </div>
                            </div>
                          </div>
                          {/* End Single Progressbar  */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab  */}
                    {/* Start Single Tab  */}
                    <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                      <div className="personal-experience-inner mt--40">
                        <div className="row">
                          {/* Start Skill List Area  */}
                          <div className="col-lg-6 col-md-12 col-12">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Education Quality</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Personal Portfolio April Fools</h4>
                                        <span>University of DVI (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.30/5</span>
                                      </div>
                                    </div>
                                    <p className="description">The education should be very
                                      interactual. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4> Examples Of Personal Portfolio</h4>
                                        <span>College of Studies (2000 - 2002)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.50/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Tips For Personal Portfolio</h4>
                                        <span>University of Studies (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.80/5</span>
                                      </div>
                                    </div>
                                    <p className="description"> If you are going to use a passage.
                                      Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                          {/* Start Skill List Area 2nd  */}
                          <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Job Experience</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Web Development</h4>
                                        <span>BSE In CSE (2004 - 2008)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.70/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Contrary to popular belief. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>The Personal Portfolio Mystery</h4>
                                        <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.95/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Generate Lorem Ipsum which looks. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div className="resume-single-list">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Computer Science</h4>
                                        <span>Works at Plugin Development (2016 -
                                          2020)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>5.00/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab  */}
                    {/* Start Single Tab  */}
                    <div className="tab-pane fade" id="interview" role="tabpanel" aria-labelledby="interview-tab">
                      <div className="personal-experience-inner mt--40">
                        <div className="row">
                          {/* Start Skill List Area  */}
                          <div className="col-lg-6 col-md-12 col-12">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Company Experience</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={300} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Personal Portfolio April Fools</h4>
                                        <span>University of DVI (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.30/5</span>
                                      </div>
                                    </div>
                                    <p className="description">The education should be very
                                      interactual. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4> Examples Of Personal Portfolio</h4>
                                        <span>College of Studies (2000 - 2002)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.50/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={700} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Tips For Personal Portfolio</h4>
                                        <span>University of Studies (1997 - 2001)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.80/5</span>
                                      </div>
                                    </div>
                                    <p className="description"> If you are going to use a passage.
                                      Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                          {/* Start Skill List Area 2nd  */}
                          <div className="col-lg-6 col-md-12 col-12 mt_md--60 mt_sm--60">
                            <div className="content">
                              <span className="subtitle">2007 - 2010</span>
                              <h4 className="maintitle">Job Experience</h4>
                              <div className="experience-list">
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={500} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Web Development</h4>
                                        <span>BSE In CSE (2004 - 2008)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.70/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Contrary to popular belief. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={700} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>The Personal Portfolio Mystery</h4>
                                        <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>4.95/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Generate Lorem Ipsum which looks. Ut
                                      tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                                {/* Start Single List  */}
                                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={900} data-aos-once="true" className="resume-single-list aos-init aos-animate">
                                  <div className="inner">
                                    <div className="heading">
                                      <div className="title">
                                        <h4>Diploma in Computer Science</h4>
                                        <span>Works at Plugin Development (2016 -
                                          2020)</span>
                                      </div>
                                      <div className="date-of-time">
                                        <span>5.00/5</span>
                                      </div>
                                    </div>
                                    <p className="description">Maecenas finibus nec sem ut
                                      imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                      Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                      mauris hendrerit ante.</p>
                                  </div>
                                </div>
                                {/* End Single List  */}
                              </div>
                            </div>
                          </div>
                          {/* End Skill List Area  */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Resume Area */}
          {/* Start Testimonia Area  */}
          <div className="rn-testimonial-area rn-section-gap section-separator" id="testimonial">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">What Clients Say</span>
                    <h2 className="title">Testimonial</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="testimonial-activation testimonial-pb mb--30 slick-initialized slick-slider slick-dotted"><button className="slide-arrow prev-arrow slick-arrow" style={{display: 'inline-block'}}><i className="feather-arrow-left" /></button>
                    {/* Start Single testiminail */}
                    <div className="slick-list draggable" style={{height: '569.463px'}}><div className="slick-track" style={{opacity: 1, width: '7755px', transform: 'translate3d(-705px, 0px, 0px)'}}><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={-1} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--5th.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Default name</span>
                                <h3 className="title">Davei Luace</h3>
                                <span className="designation">Chief Operating Manager</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Development</h3>
                                  <span className="date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                When managment is so important. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-current slick-active" data-slick-index={0} aria-hidden="false" tabIndex={0} role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--1st.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Rainbow-Themes</span>
                                <h3 className="title">Nevine Acotanza</h3>
                                <span className="designation">Chief Operating Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Development</h3>
                                  <span className="date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide" data-slick-index={1} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--2nd.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Bound - Trolola</span>
                                <h3 className="title">Jone Duone Joe</h3>
                                <span className="designation">Operating Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Web App Development</h3>
                                  <span className="date">Upwork - Mar 4, 2016 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide" data-slick-index={2} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--3rd.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Glassfisom</span>
                                <h3 className="title">Nevine Dhawan</h3>
                                <span className="designation">CEO Of Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Design</h3>
                                  <span className="date">Fiver - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                No more question for design. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide" data-slick-index={3} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide03" aria-describedby="slick-slide-control03" style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--4th.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">NCD - Design</span>
                                <h3 className="title">Mevine Thoda</h3>
                                <span className="designation">Marketing Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">CEO - Marketing</h3>
                                  <span className="date">Thoda Department - Mar 4, 2018 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide" data-slick-index={4} aria-hidden="true" tabIndex={-1} role="tabpanel" id="slick-slide04" aria-describedby="slick-slide-control04" style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--5th.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Default name</span>
                                <h3 className="title">Davei Luace</h3>
                                <span className="designation">Chief Operating Manager</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Development</h3>
                                  <span className="date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                When managment is so important. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={5} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--1st.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Rainbow-Themes</span>
                                <h3 className="title">Nevine Acotanza</h3>
                                <span className="designation">Chief Operating Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Development</h3>
                                  <span className="date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={6} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--2nd.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Bound - Trolola</span>
                                <h3 className="title">Jone Duone Joe</h3>
                                <span className="designation">Operating Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Web App Development</h3>
                                  <span className="date">Upwork - Mar 4, 2016 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Important fact to nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={7} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--3rd.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Glassfisom</span>
                                <h3 className="title">Nevine Dhawan</h3>
                                <span className="designation">CEO Of Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Design</h3>
                                  <span className="date">Fiver - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                No more question for design. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={8} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--4th.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">NCD - Design</span>
                                <h3 className="title">Mevine Thoda</h3>
                                <span className="designation">Marketing Officer</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">CEO - Marketing</h3>
                                  <span className="date">Thoda Department - Mar 4, 2018 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                Marcent Of Vanice and treatment. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div><div className="testimonial mt--50 mt_md--40 mt_sm--40 slick-slide slick-cloned" data-slick-index={9} id aria-hidden="true" tabIndex={-1} style={{width: '705px'}}>
                          <div className="inner">
                            <div className="card-info">
                              <div className="card-thumbnail">
                                <img src="assets/images/testimonial/final-home--5th.png" alt="Testimonial-image" />
                              </div>
                              <div className="card-content">
                                <span className="subtitle mt--10">Default name</span>
                                <h3 className="title">Davei Luace</h3>
                                <span className="designation">Chief Operating Manager</span>
                              </div>
                            </div>
                            <div className="card-description">
                              <div className="title-area">
                                <div className="title-info">
                                  <h3 className="title">Android App Development</h3>
                                  <span className="date">via Upwork - Mar 4, 2015 - Aug 30, 2021</span>
                                </div>
                                <div className="rating">
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                  <img src="assets/images/icons/rating.png" alt="rating-image" />
                                </div>
                              </div>
                              <div className="seperator" />
                              <p className="discription">
                                When managment is so important. Ut tincidunt est ac dolor aliquam
                                sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris
                                hendrerit ante. Ut tincidunt est ac dolor aliquam sodales phasellus smauris
                                .
                              </p>
                            </div>
                          </div>
                        </div></div></div>
                    {/*End Single testiminail */}
                    {/* Start Single testiminail */}
                    {/*End Single testiminail */}
                    {/* Start Single testiminail */}
                    {/*End Single testiminail */}
                    {/* Start Single testiminail */}
                    {/*End Single testiminail */}
                    {/* Start Single testiminail */}
                    {/*End Single testiminail */}
                    <button className="slide-arrow next-arrow slick-arrow" style={{display: 'inline-block'}}><i className="feather-arrow-right" /></button><ul className="slick-dots" style={{}} role="tablist"><li className="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 5" tabIndex={0} aria-selected="true">1</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 5" tabIndex={-1}>2</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 5" tabIndex={-1}>3</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control03" aria-controls="slick-slide03" aria-label="4 of 5" tabIndex={-1}>4</button></li><li role="presentation"><button type="button" role="tab" id="slick-slide-control04" aria-controls="slick-slide04" aria-label="5 of 5" tabIndex={-1}>5</button></li></ul></div>
                </div>
              </div>
            </div>
          </div>
          {/* End Testimonia Area  */}
          {/* Start Client Area */}
          <div className="rn-client-area rn-section-gap section-separator" id="clients">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <span className="subtitle">Popular Clients</span>
                    <h2 className="title">Awesome Clients</h2>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--50 mt_md--40 mt_sm--40">
                <div className="col-lg-4">
                  <div className="d-flex flex-wrap align-content-start h-100">
                    <div className="position-sticky clients-wrapper sticky-top rbt-sticky-top-adjust" style={{top: '120px'}}>
                      <ul className="nav tab-navigation-button flex-column nav-pills me-3" id="v-pills-tab" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link" id="v-pills-home-tab" data-bs-toggle="tab" href="#v-pills-Javascript" role="tab" aria-selected="true">JavaScript</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="tab" href="#v-pills-Design" role="tab" aria-selected="true">Product Design</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="v-pills-wordpress-tab" data-bs-toggle="tab" href="#v-pills-Wordpress" role="tab" aria-selected="true">Wordpress</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="v-pills-settings-tabs" data-bs-toggle="tab" href="#v-pills-settings" role="tab" aria-selected="true">HTML to React</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="v-pills-laravel-tabs" data-bs-toggle="tab" href="#v-pills-laravel" role="tab" aria-selected="true">React
                            To Laravel</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" id="v-pills-python-tabs" data-bs-toggle="tab" href="#v-pills-python" role="tab" aria-selected="true">Python</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="tab-area">
                    <div className="d-flex align-items-start">
                      <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade" id="v-pills-Javascript" role="tabpanel" aria-labelledby="v-pills-home-tab">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                        <div className="tab-pane fade show active" id="v-pills-Design" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-Wordpress" role="tabpanel" aria-labelledby="v-pills-wordpress-tab">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tabs">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-laravel" role="tabpanel" aria-labelledby="v-pills-laravel-tabs">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-python" role="tabpanel" aria-labelledby="v-pills-python-tabs">
                          <div className="client-card">
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smiths Marth</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Add Dev</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client4.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jone Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">John Due</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Adon Smith</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Smitha Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client2.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Sultana Mila</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Jannat</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client5.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Mila Dus</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client1.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                            {/* Start Single Brand  */}
                            <div className="main-content">
                              <div className="inner text-center">
                                <div className="thumbnail">
                                  <a href="#"><img src="assets/images/client/png/client3.png" alt="Client-image" /></a>
                                </div>
                                <div className="seperator" />
                                <div className="client-name"><span><a href="#">Marth Smiths</a></span>
                                </div>
                              </div>
                            </div>
                            {/* End Single Brand  */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End client section */}
          {/* Pricing Area */}
          <div className="rn-pricing-area rn-section-gap section-separator" id="pricing">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-xl-5 mb_md--40 mb_sm--40 small-margin-pricing">
                  <div className="d-block d-lg-flex text-center d-lg-left section-flex flex-wrap align-content-start h-100">
                    <div className="position-sticky sticky-top rbt-sticky-top-adjust" style={{top: '120px'}}>
                      <div className="section-title text-left">
                        <span className="subtitle text-center text-lg-left">Pricing</span>
                        <h2 className="title text-center text-lg-left">My Pricing</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-xl-7">
                  {/* Pricing Area */}
                  <div className="navigation-wrapper">
                    <ul className="nav " id="myTab" role="tablist">
                      <li className="nav-item ">
                        <a className="nav-style" id="test-tab" data-bs-toggle="tab" href="#test" role="tab" aria-controls="test" aria-selected="false">Static</a>
                      </li>
                      <li className="nav-item  recommended">
                        <a className="nav-style active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Standard</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-style" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Premium</a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade " id="test" role="tabpanel" aria-labelledby="test-tab">
                        {/* Pricing Start */}
                        <div className="rn-pricing">
                          <div className="pricing-header">
                            <div className="header-left">
                              <h2 className="title">Make Your Single Page</h2>
                              <span>Elementor</span>
                            </div>
                            <div className="header-right">
                              <span>$30.00</span>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <p className="description">
                              All the Lorem Ipsum generators on the Internet tend to repeat predefined
                              chunks as necessary
                            </p>
                            <div className="check-wrapper">
                              <div className="left-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>1 Page with Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Responsive Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>2 Plugins/Extensions</p>
                                </div>
                              </div>
                              <div className="right-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>multipage Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Figma</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>MAintaine Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design With XD</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>8 Plugins/Extensions</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pricing-footer">
                            <a href="#" className="rn-btn d-block">
                              <span>ORDER NOW</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                            <div className="time-line">
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>2 Days Delivery</span>
                              </div>
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                <span>Unlimited Revission</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End */}
                      </div>
                      <div className="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        {/* Pricing Start */}
                        <div className="rn-pricing">
                          <div className="pricing-header">
                            <div className="header-left">
                              <h2 className="title">Design Make this Page</h2>
                              <span>Elementor</span>
                            </div>
                            <div className="header-right">
                              <span>$50.00</span>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <p className="description">
                              Making this the first true generator on the Internet. It uses a
                              dictionary &amp; plugin Development.
                            </p>
                            <div className="check-wrapper">
                              <div className="left-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>1 Page with Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Responsive Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>2 Plugins/Extensions</p>
                                </div>
                              </div>
                              <div className="right-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>multipage Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Figma</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>MAintaine Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design With XD</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>8 Plugins/Extensions</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pricing-footer">
                            <a href="#" className="rn-btn d-block">
                              <span>ORDER NOW</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                            <div className="time-line d-flex">
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>2 Days Delivery</span>
                              </div>
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                <span>Unlimited Revission</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End */}
                      </div>
                      <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        {/* Pricing Start */}
                        <div className="rn-pricing">
                          <div className="pricing-header">
                            <div className="header-left">
                              <h2 className="title">Customize Your Single Page</h2>
                              <span>Elementor</span>
                            </div>
                            <div className="header-right">
                              <span>$90.00</span>
                            </div>
                          </div>
                          <div className="pricing-body">
                            <p className="description">
                              I will install your desire theme and made like Theme demo and customize
                              your single page( homepage)
                            </p>
                            <div className="check-wrapper">
                              <div className="left-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>1 Page with Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Responsive Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Customization</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>2 Plugins/Extensions</p>
                                </div>
                              </div>
                              <div className="right-area">
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>multipage Elementor</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design Figma</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>MAintaine Design</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Content Upload</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>Design With XD</p>
                                </div>
                                <div className="check d-flex">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12" /></svg>
                                  <p>8 Plugins/Extensions</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="pricing-footer">
                            <a href="#" className="rn-btn d-block">
                              <span>ORDER NOW</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                            </a>
                            <div className="time-line d-flex">
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-clock"><circle cx={12} cy={12} r={10} /><polyline points="12 6 12 12 16 14" /></svg>
                                <span>2 Days Delivery</span>
                              </div>
                              <div className="single-cmt d-flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-activity"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                                <span>Unlimited Revission</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End */}
                      </div>
                    </div>
                  </div>
                  {/* End */}
                </div>
              </div>
            </div>
          </div>
          {/* pricing area */}
          {/* Start News Area */}
          <div className="rn-blog-area rn-section-gap section-separator" id="blog">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true" className="section-title text-center aos-init">
                    <span className="subtitle">Visit my blog and keep your feedback</span>
                    <h2 className="title">My Blog</h2>
                  </div>
                </div>
              </div>
              <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
                {/* Start Single blog */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={100} data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 aos-init">
                  <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <img src="assets/images/blog/blog-01.jpg" alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Canada</a>
                          </div>
                          <div className="meta">
                            <span><i className="feather-clock" /> 2 min read</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">T-shirt design is the part of design
                            <i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single blog */}
                {/* Start Single blog */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={150} data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 aos-init">
                  <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <img src="assets/images/blog/blog-02.jpg" alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Development</a>
                          </div>
                          <div className="meta">
                            <span><i className="feather-clock" /> 2 hour read</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">The services provide for design <i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single blog */}
                {/* Start Single blog */}
                <div data-aos="fade-up" data-aos-duration={500} data-aos-delay={200} data-aos-once="true" className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 aos-init">
                  <div className="rn-blog" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">
                    <div className="inner">
                      <div className="thumbnail">
                        <a href="javascript:void(0)">
                          <img src="assets/images/blog/blog-03.jpg" alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Application</a>
                          </div>
                          <div className="meta">
                            <span><i className="feather-clock" /> 5 min read</span>
                          </div>
                        </div>
                        <h4 className="title"><a href="javascript:void(0)">Mobile app landing design &amp; app
                            maintain<i className="feather-arrow-up-right" /></a></h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single blog */}
              </div>
            </div>
          </div>
          {/* ENd Mews Area */}
          {/* Start Contact section */}
          <div className="rn-contact-area rn-section-gap section-separator" id="contacts">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center">
                    <span className="subtitle">Contact</span>
                    <h2 className="title">Contact With Me</h2>
                  </div>
                </div>
              </div>
              <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                <div className="col-lg-5">
                  <div className="contact-about-area">
                    <div className="thumbnail">
                      <img src="assets/images/contact/contact1.png" alt="contact-img" />
                    </div>
                    <div className="title-area">
                      <h4 className="title">Nevine Acotanza</h4>
                      <span>Chief Operating Officer</span>
                    </div>
                    <div className="description">
                      <p>I am available for freelance work. Connect with me via and call in to my account.
                      </p>
                      <span className="phone">Phone: <a href="tel:01941043264">+01234567890</a></span>
                      <span className="mail">Email: <a href="mailto:admin@example.com">admin@example.com</a></span>
                    </div>
                    <div className="social-area">
                      <div className="name">FIND WITH ME</div>
                      <div className="social-icone">
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></a>
                        <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x={2} y={2} width={20} height={20} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-aos-delay={600} className="col-lg-7 contact-input">
                  <div className="contact-form-wrapper">
                    <div className="introduce">
                      <form className="rnt-contact-form rwt-dynamic-form row" id="contact-form" method="POST" action="mail.php">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-name">Your Name</label>
                            <input className="form-control form-control-lg" name="contact-name" id="contact-name" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label htmlFor="contact-phone">Phone Number</label>
                            <input className="form-control" name="contact-phone" id="contact-phone" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="contact-email">Email</label>
                            <input className="form-control form-control-sm" id="contact-email" name="contact-email" type="email" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="subject">subject</label>
                            <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group">
                            <label htmlFor="contact-message">Your Message</label>
                            <textarea name="contact-message" id="contact-message" cols={30} rows={10} defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <button name="submit" type="submit" id="submit" className="rn-btn">
                            <span>SEND MESSAGE</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Contuct section */}
          {/* Modal Portfolio Body area Start */}
          <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="portfolio-popup-thumbnail">
                        <div className="image">
                          <img className="w-100" src="assets/images/portfolio/portfolio-04.jpg" alt="slide" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="text-content">
                        <h3>
                          <span>Featured - Design</span> App Design Development.
                        </h3>
                        <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                        <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                        <div className="button-group mt--20">
                          <a href="#" className="rn-btn thumbs-icon">
                            <span>LIKE THIS</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                          </a>
                          <a href="#" className="rn-btn">
                            <span>VIEW PROJECT</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg>
                          </a>
                        </div>
                      </div>
                      {/* End of .text-content */}
                    </div>
                  </div>
                  {/* End of .row Body*/}
                </div>
              </div>
            </div>
          </div>
          {/* End Modal Portfolio area */}
          {/* Modal Blog Body area Start */}
          <div className="modal fade" id="exampleModalCenters" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-news" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg></span>
                  </button>
                </div>
                {/* End of .modal-header */}
                <div className="modal-body">
                  <img src="assets/images/blog/blog-big-01.jpg" alt="news modal" className="img-fluid modal-feat-img" />
                  <div className="news-details">
                    <span className="date">2 May, 2021</span>
                    <h2 className="title">Digital Marketo to Their New Office.</h2>
                    <p>Nobis eleifend option congue nihil imperdiet doming id quod mazim placerat
                      facer
                      possim assum.
                      Typi non
                      habent claritatem insitam; est usus legentis in iis qui facit eorum
                      claritatem.
                      Investigationes
                      demonstraverunt
                      lectores legere me lius quod ii legunt saepius. Claritas est etiam processus
                      dynamicus, qui
                      sequitur
                      mutationem consuetudium lectorum.</p>
                    <h4>Nobis eleifend option conguenes.</h4>
                    <p>Mauris tempor, orci id pellentesque convallis, massa mi congue eros, sed
                      posuere
                      massa nunc quis
                      dui.
                      Integer ornare varius mi, in vehicula orci scelerisque sed. Fusce a massa
                      nisi.
                      Curabitur sit
                      amet
                      suscipit nisl. Sed eget nisl laoreet, suscipit enim nec, viverra eros. Nunc
                      imperdiet risus
                      leo,
                      in rutrum erat dignissim id.</p>
                    <p>Ut rhoncus vestibulum facilisis. Duis et lorem vitae ligula cursus venenatis.
                      Class aptent
                      taciti sociosqu
                      ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc vitae
                      nisi
                      tortor. Morbi
                      leo
                      nulla, posuere vel lectus a, egestas posuere lacus. Fusce eleifend hendrerit
                      bibendum. Morbi
                      nec
                      efficitur ex.</p>
                    <h4>Mauris tempor, orci id pellentesque.</h4>
                    <p>Nulla non ligula vel nisi blandit egestas vel eget leo. Praesent fringilla
                      dapibus dignissim.
                      Pellentesque
                      quis quam enim. Vestibulum ultrices, leo id suscipit efficitur, odio lorem
                      rhoncus dolor, a
                      facilisis
                      neque mi ut ex. Quisque tempor urna a nisi pretium, a pretium massa
                      tristique.
                      Nullam in
                      aliquam
                      diam. Maecenas at nibh gravida, ornare eros non, commodo ligula. Sed
                      efficitur
                      sollicitudin
                      auctor.
                      Quisque nec imperdiet purus, in ornare odio. Quisque odio felis, vestibulum
                      et.</p>
                  </div>
                  {/* Comment Section Area Start */}
                  <div className="comment-inner">
                    <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                    <form action="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="rnform-group"><input type="text" placeholder="Name" />
                          </div>
                          <div className="rnform-group"><input type="email" placeholder="Email" />
                          </div>
                          <div className="rnform-group"><input type="text" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                          <div className="rnform-group">
                            <textarea placeholder="Comment" defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <a className="rn-btn" href="#"><span>SUBMIT NOW</span></a>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* Comment Section End */}
                </div>
                {/* End of .modal-body */}
              </div>
            </div>
          </div>
          {/* End Modal Blog area */}
          {/* Back to  top Start */}
          <div className="backto-top" style={{opacity: 1}}>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-up"><line x1={12} y1={19} x2={12} y2={5} /><polyline points="5 12 12 5 19 12" /></svg>
            </div>
          </div>
          {/* Back to top end */}
          {/* Start Modal Area  */}
          <div className="demo-modal-area">
            <div className="wrapper">
              <div className="close-icon">
                <button className="demo-close-btn"><span className="feather-x" /></button>
              </div>
              <div className="rn-modal-inner">
                <div className="demo-top text-center">
                  <h4 className="title">InBio</h4>
                  <p className="subtitle">Its a personal portfolio template. You can built any personal website easily.</p>
                </div>
                <ul className="popuptab-area nav nav-tabs" id="popuptab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active demo-dark" id="demodark-tab" data-bs-toggle="tab" href="#demodark" role="tab" aria-controls="demodark" aria-selected="true">Dark Demo</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link demo-light" id="demolight-tab" data-bs-toggle="tab" href="#demolight" role="tab" aria-controls="demolight" aria-selected="false">Light Demo</a>
                  </li>
                </ul>
                <div className="tab-content" id="popuptabContent">
                  <div className="tab-pane show active" id="demodark" role="tabpanel" aria-labelledby="demodark-tab">
                    <div className="content">
                      <div className="row">
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index.html">
                                  <img className="w-100" src="assets/images/demo/main-demo.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index.html">Main Demo</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-2">
                              <div className="thumbnail">
                                <a href="index-technician.html">
                                  <img className="w-100" src="assets/images/demo/index-technician.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-technician.html">Technician</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-2">
                              <div className="thumbnail">
                                <a href="index-model.html">
                                  <img className="w-100" src="assets/images/demo/home-model-v2.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-model.html">Model</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="home-consulting.html">
                                  <img className="w-100" src="assets/images/demo/home-consulting.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-consulting.html">Consulting</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="fashion-designer.html">
                                  <img className="w-100" src="assets/images/demo/fashion-designer.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="fashion-designer.html">Fashion Designer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index-developer.html">
                                  <img className="w-100" src="assets/images/demo/developer.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-developer.html">Developer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="instructor-fitness.html">
                                  <img className="w-100" src="assets/images/demo/instructor-fitness.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="instructor-fitness.html">Fitness Instructor</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="home-web-Developer.html">
                                  <img className="w-100" src="assets/images/demo/home-model.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-web-Developer.html">Web Developer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-designer.html">
                                  <img className="w-100" src="assets/images/demo/home-video.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-designer.html">Designer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-content-writer.html">
                                  <img className="w-100" src="assets/images/demo/text-rotet.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-content-writer.html">Content Writter</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-instructor.html">
                                  <img className="w-100" src="assets/images/demo/index-boxed.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-instructor.html">Instructor</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-freelancer.html">
                                  <img className="w-100" src="assets/images/demo/home-sticky.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-freelancer.html">Freelancer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-photographer.html">
                                  <img className="w-100" src="assets/images/demo/index-bg-image.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-photographer.html">Photographer</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index-politician.html">
                                  <img className="w-100" src="assets/images/demo/front-end.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-politician.html">Politician</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo coming-soon">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="#">
                                  <img className="w-100" src="assets/images/demo/coming-soon.png" alt="Personal Portfolio" />
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="#">Accountant</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="demolight" role="tabpanel" aria-labelledby="demolight-tab">
                    <div className="content">
                      <div className="row">
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index-white-version.html">
                                  <img className="w-100" src="assets/images/demo/main-demo-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-white-version.html">Main Demo</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-2">
                              <div className="thumbnail">
                                <a href="index-technician-white-version.html">
                                  <img className="w-100" src="assets/images/demo/index-technician-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-technician-white-version.html">Technician</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-2">
                              <div className="thumbnail">
                                <a href="index-model-white-version.html">
                                  <img className="w-100" src="assets/images/demo/home-model-v2-white.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-model-white-version.html">Model</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="home-consulting-white-version.html">
                                  <img className="w-100" src="assets/images/demo/home-consulting-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-consulting-white-version.html">Consulting</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="fashion-designer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/fashion-designer-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="fashion-designer-white-version.html">Fashion Designer</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index-developer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/developer-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-developer-white-version.html">Developer</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="instructor-fitness-white-version.html">
                                  <img className="w-100" src="assets/images/demo/instructor-fitness-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="instructor-fitness-white-version.html">Fitness Instructor</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner badge-1">
                              <div className="thumbnail">
                                <a href="home-web-developer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/home-model-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-web-developer-white-version.html">Web Developer</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-designer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/home-video-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-designer-white-version.html">Designer</a>
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-content-writer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/text-rotet-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-content-writer-white-version.html">Content
                                    Writter</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-instructor-white-version.html">
                                  <img className="w-100" src="assets/images/demo/index-boxed-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-instructor-white-version.html">Instructor</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-freelancer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/home-sticky-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-freelancer-white-version.html">Freelancer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="home-photographer-white-version.html">
                                  <img className="w-100" src="assets/images/demo/index-bg-image-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="home-photographer-white-version.html">Photographer</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="index-politician-white-version.html">
                                  <img className="w-100" src="assets/images/demo/front-end-white-version.png" alt="Personal Portfolio" />
                                  <span className="overlay-content">
                                    <span className="overlay-text">View Demo <i className="feather-external-link" /></span>
                                  </span>
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="index-politician-white-version.html">Politician</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                        {/* Start Single Content  */}
                        <div className="col-lg-4 col-md-6 col-12">
                          <div className="single-demo coming-soon">
                            <div className="inner">
                              <div className="thumbnail">
                                <a href="#">
                                  <img className="w-100" src="assets/images/demo/coming-soon.png" alt="Personal Portfolio" />
                                </a>
                              </div>
                              <div className="inner">
                                <h3 className="title"><a href="#">Accountant</a></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* End Single Content  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Modal Area  */}
        </main>
        {/* Start Footer Area */}
        <div className="rn-footer-area rn-section-gap section-separator">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-area text-center">
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/images/logo/logo-vertical.png" alt="logo" />
                    </a>
                  </div>
                  <p className="description mt--30">© 2024. All rights reserved by <a target="_blank" href="#">Ashish Rathaur.</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Footer Area */}
        {/* JS ============================================ */}

</>

  )
}

export default App
