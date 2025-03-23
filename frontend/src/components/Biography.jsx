
import PropTypes from 'prop-types';

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h3>Who We Are</h3>
          <p>
          HealthVista Medical Center is a premier healthcare institution dedicated
           to providing comprehensive, patient-centered medical services. Our mission
            is to deliver world-class healthcare with a commitment to excellence,
             innovation, and compassionate care.
          </p>
          <br></br>
          <h3>Why Choose HealthVista?</h3>
          <p>✔ Expert Medical Team – Our board-certified doctors, surgeons, and healthcare professionals bring years of expertise and experience.</p>
          <p>✔ Comprehensive Services – We offer a wide range of medical specialties, diagnostic services, and treatment options to meet all your healthcare needs.</p>
          <p>✔ State-of-the-Art Facilities – We utilize cutting-edge medical technology to ensure accurate diagnosis and effective treatment.</p>
          <p>✔ Patient-Centered Approach – We prioritize patient well-being, comfort, and personalized treatment plans.</p>
          <p>✔ 24/7 Emergency Services – Providing round-the-clock emergency care for critical conditions.</p>
          
        </div>
      </div>
    </>
  );
};

Biography.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default Biography;
