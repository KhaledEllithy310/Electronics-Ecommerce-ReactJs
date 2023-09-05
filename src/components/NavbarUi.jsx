import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./NavbarUi.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/isLoggedInSlice";
import CartWindow from "./CartWindow";

const NavbarUi = () => {
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState("");
  const { status } = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(status);
  // const dropList = () => {
  //   let Category__list = document.getElementById("Category__list");

  //   Category__list.classList.toggle("openSubMenu");
  // };

  // useEffect(() => {
  //   if (localStorage.getItem("user")) {
  //     let user = JSON.parse(localStorage.getItem("user"));
  //     if (user.gender == "male") {
  //       setTitle("Mr.");
  //       console.log("Mr.");
  //     } else {
  //       setTitle("Mrs.");
  //       console.log("Mrs.");
  //     }

  //     setCurrentUser(user);
  //   }
  // }, [currentUser]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(user);
      setIsLoggedIn(status);
      setTitle(user.gender === "male" ? "Mr." : "Mrs.");
      console.log(isLoggedIn);
    } else {
      setCurrentUser({});
      setIsLoggedIn(status);
      console.log(isLoggedIn);
      setTitle("");
    }
  }, [isLoggedIn, status]);

  const handlerOpenPerson = () => {
    let dropDown__person = document.getElementById("dropDown__person");
    dropDown__person.classList.toggle("openDropPerson");
  };

  const openSearch = () => {
    let nav__top__search = document.getElementById("nav__top__search");
    let search_icon = document.getElementById("search_icon");

    nav__top__search.classList.toggle("openSearch");

    if (nav__top__search.classList.contains("openSearch")) {
      search_icon.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
      search_icon.innerHTML = '<i class="bi bi-search"></i>';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setCurrentUser({});
    dispatch(logOut());
  };

  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // const handleShow = () => setShow(true);
  const openCart = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };
  return (
    <div className="navbar__container">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="nav__top">
              <div className="nav__top__brand nav__width">Electhub</div>
              <div className="nav__links">
                <Navbar
                  expand="lg"
                  className="bg-body-tertiary justify-content-center"
                >
                  {/* <Container> */}
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />

                  <Navbar.Collapse id="basic-navbar-nav">
                    {/* <div className="Category__dropdown" onClick={dropList}>
                      <h4> Browse All Category</h4>
                      <i className="bi bi-caret-down-fill"></i>
                      <ul className="Category__list" id="Category__list">
                        <li>
                          {" "}
                          <a>
                            {" "}
                            <i className="bi bi-arrow-right"></i>
                            headphone
                          </a>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <i className="bi bi-arrow-right"></i>
                            tablet
                          </a>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <i className="bi bi-arrow-right"></i>
                            watch
                          </a>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <i className="bi bi-arrow-right"></i>
                            android
                          </a>
                        </li>
                        <li>
                          <a>
                            {" "}
                            <i className="bi bi-arrow-right"></i>
                            more categories
                          </a>
                        </li>
                      </ul>
                    </div> */}
                    <Nav className="">
                      <NavLink to="/" className="nav-link">
                        Home
                      </NavLink>
                      <NavLink to="/home" className="nav-link">
                        All Products
                      </NavLink>
                      <NavLink to="/home" className="nav-link">
                        About Us
                      </NavLink>
                      <NavLink to="/home" className="nav-link">
                        Contact Us
                      </NavLink>
                    </Nav>
                  </Navbar.Collapse>
                  {/* </Container> */}
                </Navbar>
              </div>

              <div className="nav__top__icons nav__width">
                <div className="search__container">
                  {" "}
                  <div
                    className="search_icon"
                    id="search_icon"
                    onClick={openSearch}
                  >
                    {" "}
                    <i className="bi bi-search"></i>
                  </div>
                  <form
                    className="nav__top__search nav__width"
                    id="nav__top__search"
                  >
                    <input
                      type="search"
                      placeholder="search products here..."
                    />
                    <button
                      type="submit"
                      className="btn__search"
                      id="btn__search"
                    >
                      {" "}
                      <i className="bi bi-search"></i>
                    </button>
                  </form>
                </div>
                <Nav.Link
                  href="#pricing"
                  className="nav__top__icons__item profile"
                  onClick={handlerOpenPerson}
                >
                  <i className="bi bi-person "></i>
                  {isLoggedIn ? <div className="profile__status"></div> : ""}
                  <ul className="dropDown__person" id="dropDown__person">
                    {isLoggedIn ? (
                      <>
                        <li>
                          Hello {title} {currentUser.userName}
                        </li>
                        <li onClick={handleLogout}>Logout</li>
                      </>
                    ) : (
                      <>
                        <NavLink to={`/signin`} className="nav-link">
                          <li>SignIn</li>
                        </NavLink>
                        <NavLink to={`/signup`} className="nav-link">
                          <li>SignUp</li>
                        </NavLink>
                      </>
                    )}
                  </ul>
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav__top__icons__item">
                  <i className="bi bi-suit-heart"></i>
                  <div className="badge__icon">0</div>
                </Nav.Link>
                <Nav.Link
                  href="#pricing"
                  className="nav__top__icons__item"
                  onClick={openCart}
                >
                  <i className="bi bi-cart3"></i>
                  <div className="badge__icon">0</div>
                </Nav.Link>
              </div>
            </div>
          </Col>
          <Col lg={12}> </Col>
        </Row>
      </Container>
      {showCart && <CartWindow handleClose={handleCloseCart} />}
    </div>
  );
};

export default NavbarUi;
