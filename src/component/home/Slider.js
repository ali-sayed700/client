import Carousel from "react-bootstrap/Carousel";

import slider_01 from "../../images/prod_01.png";
import slider_02 from "../../images/prod_02.png";
import slider_03 from "../../images/prod_03.png";

function Slider() {
  return (
    <Carousel>
      <Carousel.Item className="carosel-bg" interval={1000}>
        <div className="carousel-box">
          <img src={slider_01} alt="First slide" />
          <Carousel.Caption className="carosel-content">
            <h3 className="title-text">this is big discount</h3>
            <p className="par-text"> discount 50% for purshase</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carosel-bg" interval={500}>
        <div className="carousel-box">
          <img src={slider_02} alt="Second slide" />
          <Carousel.Caption className="carosel-content">
            <h3 className="title-text">this is big discount</h3>
            <p className="par-text"> discount 50% for purshase</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className="carosel-bg">
        <div className="carousel-box">
          <img src={slider_03} alt="Third slide" />
          <Carousel.Caption className="carosel-content">
            <h3 className="title-text">this is big discount</h3>
            <p className="par-text"> discount 50% for purshase</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
