import React, {useEffect} from "react";
import Helmet from "../components/Helmet/Helmet";
import carData from "../assets/data/carData";
import { Container, Col, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {

  
  const { slug } = useParams();
  
  const singleCarItem = carData.find((item) => item.carName === slug);
  
  // Function to scroll to the top of the component
  const scrollToTop = () => {
    window.scrollTo({ top: 0,});
  };

  // Call the scrollToTop function when the component mounts
  useEffect(() => {
    scrollToTop();
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row className="m-5">
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>
            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className="d-flex align-items-center gap-5">
                  <h6 className="rent__price fw-bold fs-4 mt-2 mb-2">
                    ${singleCarItem.price}.00 / Day
                  </h6>
                  <span className="d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ( {singleCarItem.rating} ratings )
                  </span>
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-roadster-line" style={{ color: "#f9a826" }}></i> {singleCarItem.model}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-settings-2-line" style={{ color: "#f9a826" }}></i> {singleCarItem.automatic}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-timer-flash-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i> {singleCarItem.gps}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-wheelchair-line" style={{ color: "#f9a826" }}></i> {singleCarItem.seatType}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i class="ri-building-2-line" style={{ color: "#f9a826" }}></i>
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg='7' className="mt-5">
              <div className="booking-info mt-5">
                <h4 className="mb-4">
                  Booking Information
                </h4>

                <BookingForm />
              </div>
            </Col>

            <Col lg='5' className="mt-5">
              <div className="payment__info mt-5">
                <h4 className="mb-4">
                  Payment Method
                </h4>

                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
