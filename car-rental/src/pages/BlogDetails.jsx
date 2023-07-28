import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";

const BlogDetails = () => {
  const { slug } = useParams();

  const singleBlogItem = blogData.find((item) => item.title === slug);

  // Function to scroll to the top of the component
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  // Call the scrollToTop function when the component mounts
  useEffect(() => {
    scrollToTop();
  }, [singleBlogItem]);
  return (
    <Helmet title={singleBlogItem.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={singleBlogItem.imgUrl} alt="w-100" />
                <h2 className="section__title">{singleBlogItem.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {singleBlogItem.author}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {singleBlogItem.date}
                  </span>
                  <span className="d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {singleBlogItem.time}
                  </span>
                </div>

                <p className="psection__description">
                  {singleBlogItem.description}
                </p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">
                    {singleBlogItem.quote}
                  </blockquote>
                </h6>
                <p className="psection__description">
                  {singleBlogItem.description}
                </p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 comments</h4>
                <div className="single__comment d-flex gap-3">
                  <div className="comment__content">
                    <h6>David Visaya</h6>
                    <p className="section__description mb-0">28 July 2023</p>
                    <p className="section__description">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Ratione aut esse provident, consectetur aspernatur dolorum
                      facere a itaque maxime quidem!
                    </p>
                  </div>
                </div>

                <span className="replay d-flex align-items-center gap-1">
                  <i class="ri-reply-line"></i> Replay
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
