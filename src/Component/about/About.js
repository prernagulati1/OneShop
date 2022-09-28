import "./About.css";
import Footer from "../footer/Footer";
const About = () => {
  return (
    <>
    <div className="about">
      <div className="container ">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            euismod purus vitae tortor laoreet pellentesque. Donec sed mauris
            aliquet, consectetur metus ac, pharetra felis.
          </p>
          <h4>Who We Are</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            euismod purus vitae tortor laoreet pellentesque. Donec sed mauris
            aliquet, consectetur metus ac, pharetra felis. Nam non accumsan sem.
            Aliquam vehicula tristique varius. Donec sed pellentesque metus, ac
            rutrum erat. Nulla rutrum tempus ex, a molestie erat aliquam a. In
            hac habitasse platea dictumst. Phasellus lorem purus, aliquet in
            pellentesque at, varius ut risus. Duis at hendrerit magna. Sed
            semper venenatis lorem sit amet interdum.
          </p>
        </div>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default About;
