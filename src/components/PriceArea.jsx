import React from 'react'

const PriceArea = () => {
  return (
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
  )
}

export default PriceArea
