/* eslint-disable react/prop-types */
import { Offcanvas } from "react-bootstrap";
import "./CartWindow.css";
import img1 from "../assets/images/products/consectetur-hamirginiap (1).jpg";
const CartWindow = ({ handleClose }) => {
  return (
    <>
      <Offcanvas show={true} onHide={handleClose} placement={"end"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart (3)</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="product__cart__container">
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
            <div className="product__cart">
              <div className="product__cart__img">
                {" "}
                <img src={img1} alt="" />
              </div>

              <div className="product__cart__text">
                <h4 className="product__cart__text__name">
                  Smart Apple iPhone 12 Mini 128 GB Purple
                </h4>
                <h4 className="product__cart__text__price">
                  {" "}
                  <span className="product__cart__text__quantity">3 X</span>
                  $56.12
                </h4>

                <div className="product__cart__text__remove">
                  <i className="bi bi-trash"></i>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>

        <div className="footer__Cart">
          <div className="footer__Cart__checkOut">
            <p className="footer__Cart__checkOut__text">Total</p>
            <p className="footer__Cart__checkOut__totalPrice">$500</p>
          </div>
          <div className="buttons__container">
            <button className="main__btn__check">View Cart</button>
            <button className="main__btn__check">check out</button>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default CartWindow;
