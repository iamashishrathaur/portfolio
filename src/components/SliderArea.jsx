import reactLogo from '../assets/images/react.png'
import ViteLogo from '../assets/images/vite.png'
import nodeLogo from '../assets/images/node.png'
import TypingAnimation from './TypingAnimation'

const SliderArea = () => {

  return (
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
                    <TypingAnimation/>
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
                      <li><img src={ViteLogo} alt="Icons Images" /></li>
                      <li><img src={reactLogo} alt="Icons Images" /></li>
                      <li><img src={nodeLogo} alt="Icons Images" /></li>
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
  )
}

export default SliderArea
