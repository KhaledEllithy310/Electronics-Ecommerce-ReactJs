import { Col, Container, Row } from "react-bootstrap";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsLetter__container text-center">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} md={12}>
            <div className="newsLetter__text">
              <i className="bi bi-envelope-open-heart"></i>
              <p>Connected With Our Email Updates</p>
            </div>
          </Col>
          <Col lg={5}>
            <form className="newsLetter__contact">
              <input
                type="email"
                className="input__newsLetter"
                placeholder="enter email address here..."
              />
              <button type="submit">
                <i className="bi bi-send"></i>
              </button>
            </form>
          </Col>
          <Col lg={2}>
            <div className="social__icons">
              <li>
                <i className="bi bi-facebook"></i>
              </li>
              <li>
                <i className="bi bi-twitter"></i>
              </li>
              <li>
                <i className="bi bi-youtube"></i>
              </li>
              <li>
                <i className="bi bi-instagram"></i>
              </li>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Newsletter;
