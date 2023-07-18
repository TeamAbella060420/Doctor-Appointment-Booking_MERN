import React from "react";
import "../../styles/blog-item.css";
import { Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const BlogList = (item) => {
  return (
    <BlogItem data={item}/>
  );
};

const BlogItem = ({ props }) => {
  const { imgUrl, title, author, date, time, description, quote } = props.data;
  return (
    <Col lg="4" md="4" sm="6">
      <div className="blog__item">
        <img src={imgUrl} alt="" />
        <div className="blog__info">
          <Link to={`/blogs/${title}`}>{title}</Link>
          <p className="section__description">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>

          <Link to={`/blogs/${title}`}>Read More</Link>

          <div className="blog__item pt-3 mt-3 d-flex align-items-center justify-content-between"></div>
        </div>
      </div>
    </Col>
  );
};

export default BlogList;
