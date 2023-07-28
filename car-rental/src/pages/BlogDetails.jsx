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
                <img src={singleBlogItem.img} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;
