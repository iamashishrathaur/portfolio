import React from 'react'

const ModelArea = () => {
  return (
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
  )
}

export default ModelArea
