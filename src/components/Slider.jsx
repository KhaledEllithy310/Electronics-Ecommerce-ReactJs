import { Carousel, Container } from "react-bootstrap";
import "./Slider.css";
import img1 from "../assets/images/slider/sample-1.jpg";
import img2 from "../assets/images/slider/sample-2.jpg";
import MainButton from "./mainButton";
<link
  href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700&display=swap"
  rel="stylesheet"
></link>;
const Slider = () => {
  return (
    <Container className="py-5">
      <Carousel indicators={false}>
        <Carousel.Item>
          <img src={img1} alt="" />
          <div className="description__slider">
            <h3>END SEASON</h3>
            <h4>SMARTPHONES</h4>
            <div className="description__slider__discount">
              <div className="description__slider__discount__text">
                Last Call for up to
              </div>
              <div className="description__slider__discount__price">
                <span>$</span> 250
              </div>
              <div className="description__slider__discount__text">off!</div>
            </div>
            <MainButton title="start buying" />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} alt="" />
          <div className="description__slider">
            <h3>NEWT SEASON</h3>
            <h4>MIVR HEADSET 3D</h4>
            <div className="description__slider__discount">
              <div className="description__slider__discount__text">
                Last Call for up to
              </div>
              <div className="description__slider__discount__price">
                <span>$</span> 199
              </div>
              <div className="description__slider__discount__text">off!</div>
            </div>
            <MainButton title="start buying" />
          </div>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
