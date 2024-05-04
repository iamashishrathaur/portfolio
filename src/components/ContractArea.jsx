import React from 'react'

import ContractImg from '../assets/images/contact1.png'

const ContractArea = () => {
  return (
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
              <img src={ContractImg} alt="contact-img" />
            </div>
            <div className="title-area">
              <h4 className="title">Ashish Rathaur</h4>
              <span style={{fontSize:'18px',color:'#878e99'}}>Chief Operating Officer</span>
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
  )
}

export default ContractArea
