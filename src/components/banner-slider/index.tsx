import './styles.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function BannerSlider() {
  return (
    <div className="banner-slider-container">
      <Carousel autoPlay={true} infiniteLoop={true} interval={5000}>
        <div>
          <img src="/img/car1.jpg" alt="" />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src="/img/car2.jpg" alt="" />
        </div>
        <div>
          <img src="/img/car3.jpg" alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default BannerSlider;
