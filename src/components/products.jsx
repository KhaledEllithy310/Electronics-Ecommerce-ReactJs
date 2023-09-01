import { Splide, SplideSlide } from "@splidejs/react-splide";
import img1 from "../assets/images/products/consectetur-hamirginiap (1).jpg";
import img2 from "../assets/images/products/consectetur-hamirginiap (2).jpg";
import img3 from "../assets/images/products/consectetur-hamirginiap (3).jpg";
import img4 from "../assets/images/products/consectetur-hamirginiap (4).jpg";
import "./products.css";
// or other themes
import "@splidejs/splide/css";

import { Container } from "react-bootstrap";
const Products = () => {
  return (
    <div className="slider__container">
      <Container id="">
        <h2 className="product__title">trending products</h2>
        <div className="slider__container__inner">
          <Splide
            options={{
              type: "loop",
              perPage: 5,
              focus: "center",
              breakpoints: {
                1024: {
                  perPage: 3,
                },
                767: {
                  perPage: 2,
                },
                640: {
                  perPage: 1,
                },
              },
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="product">
                <div className="product__image">
                  <img src={img1} alt="Image 1" />
                </div>
                <div className="product__content">
                  <div className="product__content__rating">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </div>
                  <div className="product__content__text">
                    Silicone Watch Band for Apple Series SIX
                  </div>
                  <div className="product__content__price">$299</div>
                </div>
                <div className="product__icons">
                  <li title="Add to Wishlist">
                    <i className="bi bi-suit-heart"></i>
                  </li>
                  <li title="Show Details">
                    <i className="bi bi-eye"></i>
                  </li>
                  <li title="Add to Cart">
                    <i className="bi bi-cart3"></i>
                  </li>
                </div>
                <div className="product__discount">%8</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="product">
                <div className="product__image">
                  <img src={img2} alt="Image 1" />
                </div>
                <div className="product__content">
                  <div className="product__content__rating">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </div>
                  <div className="product__content__text">
                    Silicone Watch Band for Apple Series SIX
                  </div>
                  <div className="product__content__price">$299</div>
                </div>
                <div className="product__icons">
                  <li title="Add to Wishlist">
                    <i className="bi bi-suit-heart"></i>
                  </li>
                  <li title="Show Details">
                    <i className="bi bi-eye"></i>
                  </li>
                  <li title="Add to Cart">
                    <i className="bi bi-cart3"></i>
                  </li>
                </div>
                <div className="product__discount">%8</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="product">
                <div className="product__image">
                  <img src={img3} alt="Image 1" />
                </div>
                <div className="product__content">
                  <div className="product__content__rating">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </div>
                  <div className="product__content__text">
                    Silicone Watch Band for Apple Series SIX
                  </div>
                  <div className="product__content__price">$299</div>
                </div>
                <div className="product__icons">
                  <li title="Add to Wishlist">
                    <i className="bi bi-suit-heart"></i>
                  </li>
                  <li title="Show Details">
                    <i className="bi bi-eye"></i>
                  </li>
                  <li title="Add to Cart">
                    <i className="bi bi-cart3"></i>
                  </li>
                </div>
                <div className="product__discount">%8</div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="product">
                <div className="product__image">
                  <img src={img4} alt="Image 1" />
                </div>
                <div className="product__content">
                  <div className="product__content__rating">
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                    <li>
                      <i className="bi bi-star-fill"></i>
                    </li>
                  </div>
                  <div className="product__content__text">
                    Silicone Watch Band for Apple Series SIX
                  </div>
                  <div className="product__content__price">$299</div>
                </div>
                <div className="product__icons">
                  <li title="Add to Wishlist">
                    <i className="bi bi-suit-heart"></i>
                  </li>
                  <li title="Show Details">
                    <i className="bi bi-eye"></i>
                  </li>
                  <li title="Add to Cart">
                    <i className="bi bi-cart3"></i>
                  </li>
                </div>
                <div className="product__discount">%8</div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </Container>
    </div>
  );
};

export default Products;
