import React, {useEffect} from "react";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/car-item.css";

const CarItem = (props) => {

    // Function to scroll to the top of the component
    const scrollToTop = () => {
      window.scrollTo({ top: 0,});
    };
  
    // Call the scrollToTop function when the component mounts
    useEffect(() => {
      scrollToTop();
    }, []);

  const { imgUrl, model, carName, automatic, speed, price } = props.data;

  return (
    <Col lg="4" md="4" sm="6" className="mb-5">
      <div className="car__item">
        <div className="car__img">
          <Link to={`/cars/${carName}`}>
            <img src={imgUrl} alt="" className="w-100" />
          </Link>
        </div>

        <div className="car__item-content mt-4">
          <h4 className="section__title text-center">{carName}</h4>
          <h6 className="rent__price text-center mt-2">
            {price}.00 <span>/Day</span>
          </h6>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span>
              <i class="ri-car-line"></i>
              {model}
            </span>
            <span>
              <i class="ri-settings-3-line"></i>
              {automatic}
            </span>
            <span>
              <i class="ri-timer-flash-line"></i>
              {speed}
            </span>
          </div>
          <Link to={`/cars/${carName}`}>
            <button
              className="w-50 car__item-btn car__btn-rent"
              style={{ color: "white" }}
            >
              Rent
            </button>
          </Link>
          <Link to={`/cars/${carName}`}>
            <button
              className="w-50 car__item-btn car__btn-details"
              style={{ color: "white" }}
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
