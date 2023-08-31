import { Col, Container, Row } from "react-bootstrap";
import "./GuideItemList.css";
const GuideItemList = () => {
  return (
    <div className="feature__container">
      <Container className="">
        <Row className="feature__container__inner">
          <Col xl={3} lg={6} md={12}>
            <Row className="align-items-center border_right border_right__none_small feature__item__container">
              <Col xl={3}>
                <div className="GuideItem__icon">
                  <i className="bi bi-send"></i>
                </div>
              </Col>
              <Col xl={9}>
                <div className="GuideItem__title">Worldwide Shipping</div>
                <p className="GuideItem__description">Order above $100</p>
              </Col>
            </Row>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Row className="align-items-center border_right border_right__none border_right__none_small  feature__item__container">
              <Col xl={3}>
                <div className="GuideItem__icon">
                  <i className="bi bi-arrow-clockwise"></i>
                </div>
              </Col>
              <Col xl={9}>
                <div className="GuideItem__title">Easy 30 Day Returns</div>
                <p className="GuideItem__description">
                  OBack returns in 7 days
                </p>
              </Col>
            </Row>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Row className="align-items-center border_right border_right__none_small feature__item__container">
              <Col xl={3}>
                <div className="GuideItem__icon">
                  <i className="bi bi-cash-stack"></i>{" "}
                </div>
              </Col>
              <Col xl={9}>
                <div className="GuideItem__title">Money Back Guarantee</div>
                <p className="GuideItem__description">
                  Guarantee with in 30 days
                </p>
              </Col>
            </Row>
          </Col>
          <Col xl={3} lg={6} md={12}>
            <Row className="align-items-center feature__item__container">
              <Col xl={3}>
                <div className="GuideItem__icon">
                  <i className="bi bi-headset"></i>{" "}
                </div>
              </Col>
              <Col xl={9}>
                <div className="GuideItem__title">Easy Online Support</div>
                <p className="GuideItem__description">Any time support</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GuideItemList;
