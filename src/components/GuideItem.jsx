import { Col, Row } from "react-bootstrap";
import "./GuideItem.css";

// eslint-disable-next-line react/prop-types
const GuideItem = ({ icon, title, description }) => {
  console.log(icon);
  return (
    <div>
      <Row className="align-items-center">
        <Col xl={3}>
          {/* <div className="GuideItem__icon">{icon}</div> */}
        </Col>
        <Col xl={9}>
          <div className="GuideItem__title">{title}</div>
          <p className="GuideItem__description">{description}</p>
        </Col>
      </Row>
    </div>
  );
};

export default GuideItem;
