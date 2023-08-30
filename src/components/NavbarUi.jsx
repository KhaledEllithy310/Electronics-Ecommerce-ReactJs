import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";
import "./NavbarUi.css";
const NavbarUi = () => {
  const dropList = () => {
    let Category__list = document.getElementById("Category__list");

    Category__list.classList.toggle("openSubMenu");
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
  return (
    <>
      <Row className="navbar__container">
        <Col xl={12}>
          <Container>
            <div className="nav__top">
              <div className="nav__top__brand nav__width">electhub</div>
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
                  <input type="search" placeholder="search products here..." />
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

              <div className="nav__top__icons nav__width">
                {" "}
                <Nav.Link href="#pricing" className="nav__top__icons__item">
                  <i className="bi bi-person"></i>
                  <div className="badge__icon">0</div>
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav__top__icons__item">
                  <i className="bi bi-suit-heart"></i>
                  <div className="badge__icon">0</div>
                </Nav.Link>
                <Nav.Link href="#pricing" className="nav__top__icons__item">
                  <i className="bi bi-cart3"></i>
                  <div className="badge__icon">0</div>
                </Nav.Link>
              </div>
            </div>
          </Container>
        </Col>
        <Col xl={12}>
          {" "}
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <div className="Category__dropdown" onClick={dropList}>
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
                </div>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#home">All Products</Nav.Link>
                  <Nav.Link href="#link">All Brands</Nav.Link>
                  <Nav.Link href="#link">About Us</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
};

export default NavbarUi;
