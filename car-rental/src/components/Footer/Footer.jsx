import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/contact",
    display: "Contacts",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="footer__logo">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-3">
                  <i class="ri-car-line"></i>
                  <span>
                    Rent Car <br /> Services
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              inventore, error minima voluptatum sed quasi eligendi in quod iure
              quis, maiores blanditiis beatae eius nulla quas fugit sint
              asperiores repellendus!
            </p>
          </Col>
          <Col lg="2" md="4" sm="6">
            <h5 className="footer__link-title">Quick Links</h5>
            <ListGroup>
              {quickLinks.map((item, index) => (
                <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Head Office</h5>
              <p className="office__info">143 Parañaque City, Philippines</p>
              <p className="office__info">Phone: +6391234567</p>
              <p className="office__info">Email: test163@gmail.com</p>
              <p className="office__info">Office Time: 10am - 7pm</p>
            </div>
          </Col>
          <Col lg="3" md="4">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Newsletter</h5>
              <p className="section__description">
                Subscribe to our newsletter
              </p>
              <div className="newsletter">
                  <input type="email" name="" id="" placeholder="Email" />
                  <span>
                    <i class="ri-send-plane-line"></i>
                    
                  </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom text-center mt-5">
              <p className="section__description mt-4">
                <i class="ri-copyright-line"></i> Copyright {year}, Developed by <span style={{color: '#f9a826'}}>Engr. Jezreel Abella.</span> All rights reserve.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
