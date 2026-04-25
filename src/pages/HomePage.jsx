import "../assets/style/HomePage.css";

import Location from "../Components/location.component.jsx";
import Contact from "../Components/contact.component.jsx";
import Testimonials from "../Components/testimonials.component.jsx";
import Description from "../Components/description.component.jsx";
import ImageSlider from "../Components/imageSlider.component.jsx";
import Horaires from "../Components/horaires.component.jsx";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";

const images = [img1, img2];

const HomePage = () => {
  return (
    <div className="home-page">
      <Description />
      <div className="section-separator" aria-hidden="true" />
      <Testimonials />
      <div className="section-separator" aria-hidden="true" />
      <ImageSlider images={images} />
      <div className="section-separator" aria-hidden="true" />

      <section id="contact" className="contact-location-container ">
        <Contact />
        <div className="description-separator" aria-hidden="true" />
        <Location />
      </section>
      <div className="section-separator" aria-hidden="true" />
      <Horaires />
    </div>
  );
};

export default HomePage;
