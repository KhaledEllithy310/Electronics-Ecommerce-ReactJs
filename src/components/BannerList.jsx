import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import "./BannerList.css";
import img1 from "../assets/images/banner/sub-banner-1.png";
import img2 from "../assets/images/banner/sub-banner-2.png";
import img3 from "../assets/images/banner/sub-banner-3.png";
const BannerList = () => {
  return (
    <Container>
      <div className="banners__container">
        {" "}
        <Row>
          <Col lg={4} md={6}>
            <Banner
              img={img1}
              title="CATCH BIG DEALS"
              productName="CONSOLES"
              price="250"
            />
          </Col>
          <Col lg={4} md={6}>
            <Banner
              img={img2}
              title="NEW STANDARD"
              productName="SMART G3"
              price="199"
            />
          </Col>
          <Col lg={4} md={6}>
            <Banner
              img={img3}
              title="BIG THE STANDARD"
              productName="HEDPHONES"
              price="250"
            />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BannerList;
