import { Col, Row } from "react-bootstrap";
import "./Banner.css";
// eslint-disable-next-line react/prop-types
const Banner = ({ img, title, productName, price }) => {
  let data = {
    title,
    productName,
    price,
    img,
  };
  return (
    <Row className="sub__banner__container">
      <Col lg={9}>
        {" "}
        <div className="description__banner">
          <h3>{data.title}</h3>
          <h4>{data.productName}</h4>
          <div className="description__banner__discount">
            <div className="description__banner__discount__text">from</div>
            <div className="description__banner__discount__price">
              <span>$</span> {data.price}
            </div>
            <div className="description__banner__discount__text">off!</div>
          </div>
        </div>
      </Col>
      <Col lg={3}>
        <div className="img__container">
          {" "}
          <img src={data.img} alt="" />
        </div>
      </Col>
    </Row>
  );
};

export default Banner;
