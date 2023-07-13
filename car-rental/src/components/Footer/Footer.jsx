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
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo">
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
            <h5 className="footer__link-title">
              <ListGroup>
              {quickLinks.map((item, index) => (
                <ListGroupItem  key={index} className="p-0 mt-3">
                 <Link to={item.path}>
                 {item.display}
                 </Link>
                </ListGroupItem>
              ))}
              </ListGroup>
            </h5>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
