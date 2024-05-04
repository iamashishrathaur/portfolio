import portfolio1 from  '../assets/images/portfolio-01.jpg'
import portfolio2 from  '../assets/images/portfolio-02.jpg'
import portfolio3 from  '../assets/images/portfolio-03.jpg'
import portfolio4 from  '../assets/images/portfolio-04.jpg'
import portfolio5 from  '../assets/images/portfolio-05.jpg'
import portfolio6 from  '../assets/images/portfolio-06.jpg'

import {Heart} from 'react-feather'

const PortfolioArea = () => {
  return (
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
                        <a href='javascript:void(0)'>
                          <img src={portfolio1} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Development</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white'}}/></a>
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
                          <img src={portfolio2} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Application</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white'}}/></a>
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
                          <img src={portfolio3} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Photoshop</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white'}}/></a>
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
                          <img src={portfolio4} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Figma</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white'}}/></a>
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
                          <img src={portfolio5} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Web Design</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white'}}/></a>
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
                          <img src={portfolio6} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Web Design</a>
                          </div>
                          <div className="meta">
                            <span><a href="javascript:void(0)"><Heart className="feather-heart" style={{marginRight:'2px',marginBottom:'2px', height:'13px', fontSize:'13px' , transition:'0.4s', color:'white', }}/></a>
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
  )
}

export default PortfolioArea
