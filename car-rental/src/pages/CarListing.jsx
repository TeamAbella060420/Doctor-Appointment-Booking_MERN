import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import carData from "../assets/data/carData";
import { Container, Col, Row } from "reactstrap";

const CarListing = () => {
  return (
    <Helmet title="Cars">
      <CommonSection data="Car Listing" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              {/* <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2> */}
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2"><i class="ri-sort-asc"></i> Sort By </span>

                <select>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            {carData.map((item) => (
              <CarItem data={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
