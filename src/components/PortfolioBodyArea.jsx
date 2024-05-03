import React from 'react'

const PortfolioBodyArea = () => {
  return (
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
  )
}

export default PortfolioBodyArea
