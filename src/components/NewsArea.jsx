import React from 'react'
import blog1 from '../assets/images/blog-01.jpg'
import blog2 from '../assets/images/blog-02.jpg'
import blog3 from '../assets/images/blog-03.jpg'
import {Clock} from 'react-feather'

const NewsArea = () => {
  return (
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
                          <img src={blog1} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Canada</a>
                          </div>
                          <div className="meta">
                            <span><Clock className="feather-clock"  style={{width:'13px', height:'13px',marginRight:'2px', marginBottom:'2px'}}/> 2 min read</span>
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
                          <img src={blog2} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Development</a>
                          </div>
                          <div className="meta">
                            <span><Clock className="feather-clock" style={{width:'13px', height:'13px',marginRight:'2px', marginBottom:'2px'}}/> 2 hour read</span>
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
                          <img src={blog3} alt="Personal Portfolio Images" />
                        </a>
                      </div>
                      <div className="content">
                        <div className="category-info">
                          <div className="category-list">
                            <a href="javascript:void(0)">Application</a>
                          </div>
                          <div className="meta">
                            <span><Clock className="feather-clock" style={{width:'13px', height:'13px',marginRight:'2px', marginBottom:'2px'}}/> 5 min read</span>
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
  )
}

export default NewsArea
