
import '../Banner/Banner.scss'; 

const Banner = ({ image, text }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner-image-overlay"></div>
      <h1 className="banner-text">{text}</h1>
    </div>
  );
};

export default Banner;
