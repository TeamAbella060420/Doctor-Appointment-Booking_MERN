import React from "react";
import { Container, Row } from "reactstrap";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import BlogList from "../components/UI/BlogList";

const Blog = () => {
  return (
    <div>
      <Helmet title='Blogs'>
        <CommonSection data='Blogs'/>
        <section className="mb-4">
          <Container>
            <Row>
              <BlogList />
            </Row>
            <Row className="mt-3">
            <BlogList />
            </Row>
          </Container>
        </section>
      </Helmet>
    </div>
  );
};

export default Blog;
