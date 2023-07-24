import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";
import '../../styles/testimonial.css'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 991, // Adjust this value as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 576, // Adjust this value as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-4">
        <p className="section__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi
          unde architecto quos, ratione sed quasi quidem, autem quae harum
          exercitationem soluta hic ducimus atque vero consectetur iste,
          adipisci officiis.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Juan</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-4">
        <p className="section__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi
          unde architecto quos, ratione sed quasi quidem, autem quae harum
          exercitationem soluta hic ducimus atque vero consectetur iste,
          adipisci officiis.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Marites</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-4">
        <p className="section__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi
          unde architecto quos, ratione sed quasi quidem, autem quae harum
          exercitationem soluta hic ducimus atque vero consectetur iste,
          adipisci officiis.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Pedro</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-4">
        <p className="section__description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sequi
          unde architecto quos, ratione sed quasi quidem, autem quae harum
          exercitationem soluta hic ducimus atque vero consectetur iste,
          adipisci officiis.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Marisol</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
