import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import SliderArea from './components/SliderArea';
import ServiceArea from './components/ServiceArea';
import PortfolioArea from './components/PortfolioArea';
import ResumeArea from './components/ResumeArea';
import TestimonialArea from './components/TestimonialArea';
import ClientArea from './components/ClientArea';
import PriceArea from './components/PriceArea';
import NewsArea from './components/NewsArea';
import ContractArea from './components/ContractArea';
import PortfolioBodyArea from './components/PortfolioBodyArea';
import BlogBodyArea from './components/BlogBodyArea';
import ModelArea from './components/ModelArea';
import FooterArea from './components/FooterArea';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header/>
      {/* End Header Area */}
      {/* Start Popup Mobile Menu  */}
      <MobileMenu/>
      {/* End Popup Mobile Menu  */}
      <main className="main-page-wrapper">
      {/* Start Slider Area */}
      <SliderArea/>
      {/* End Slider Area */}
      {/* Start Service Area */}
      <ServiceArea/>
      {/* End Service Area  */}
      {/* Start Portfolio Area */}
      <PortfolioArea/>
      {/* End portfolio Area */}
      {/* Start Resume Area */}
      <ResumeArea/>
      {/* End Resume Area */}
      {/* Start Testimonia Area  */}
      <TestimonialArea/>
      {/* End Testimonia Area  */}
      {/* Start Client Area */}
      <ClientArea/>
      {/* End client section */}
      {/* Pricing Area */}
      <PriceArea/>
      {/* pricing area */}
      {/* Start News Area */}
      <NewsArea/>
      {/* ENd Mews Area */}
      {/* Start Contact section */}
      <ContractArea/>
      {/* End Contuct section */}
      {/* Modal Portfolio Body area Start */}
      <PortfolioBodyArea/>
      {/* End Modal Portfolio area */}
      {/* Modal Blog Body area Start */}
      <BlogBodyArea/>
      {/* End Modal Blog area */}
      {/* Back to  top Start */}
      <BackToTop/>
      {/* Back to top end */}
      {/* Start Modal Area  */}
      <ModelArea/>
      {/* End Modal Area  */}
      </main>
      {/* Start Footer Area */}
      <FooterArea/>
      {/* End Footer Area */}
    </>
  )
}

export default App
