import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col xl={4}>
          <div className="footer__about">
            <div className="main__title">About Information</div>
            <div className="footer__about__description">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard.
            </div>
          </div>
        </Col>
        <Col xl={3}>
          <div className="footer__products">
            <div className="main__title">Products</div>
            <div className="footer__main__list">
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Prices Drop</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> New Products</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Best Sales</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a>Contact Us </a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Sitemap Sitemap</a>
              </li>
            </div>
          </div>
        </Col>
        <Col xl={3}>
          {" "}
          <div className="footer__products">
            <div className="main__title">Our Company</div>
            <div className="footer__main__list">
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Delivery</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Legal Notice</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Terms And Conditions</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a>About Us</a>
              </li>
              <li>
                <i className="bi bi-arrow-right-short"></i>
                <a> Secure Payment</a>
              </li>
            </div>
          </div>
        </Col>
        <Col xl={3}></Col>
      </Row>
    </Container>
  );
};

export default Footer;
