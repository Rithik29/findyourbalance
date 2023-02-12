import AboutUsContainer from "../components/AboutUsContainer";
import FooterContainer from "../components/FooterContainer";
import ContactForm from "../components/ContactForm";
import AndroidAppContainer from "../components/AndroidAppContainer";
import Description2 from "../components/Description2";
import Description1 from "../components/Description1";
import WhyUsContainer from "../components/WhyUsContainer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="group-parent">
      <div className="frame-parent">
        <div className="about-us-parent">
          <AboutUsContainer />
          <FooterContainer />
          <ContactForm />
          <AndroidAppContainer />
        </div>
        <Description2 />
        <Description1 />
        <WhyUsContainer />
        <Hero />
        <div className="navbar-wrapper">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
