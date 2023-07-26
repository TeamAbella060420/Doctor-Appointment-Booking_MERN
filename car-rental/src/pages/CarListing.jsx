import React from 'react'
import Helmet from "../components/Helmet/Helmet";
import CommonSection from '../components/UI/CommonSection';
import CarItem from '../components/UI/CarItem';
import carData from "../assets/data/carData";
import { Container, Col, Row } from "reactstrap";

const CarListing = () => {
  return (
    <Helmet title='Carlisting'>
      <CommonSection data='Carlisting'/>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>
            {carData.slice(0, 6).map((item) => (
              <CarItem data={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>

  )
}

export default CarListing;
