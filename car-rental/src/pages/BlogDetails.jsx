import React, {useEffect} from 'react'
import { Container, Row, Col } from "reactstrap";
import { useParams } from 'react-router-dom';
import blogData from '../assets/data/blogData';
import Helmet from '../components/Helmet/Helmet';

const BlogDetails = () => {

  const { slug } = useParams();
  
  const singleBlogItem = blogData.find((item) => item.title === slug);
  
  // Function to scroll to the top of the component
  const scrollToTop = () => {
    window.scrollTo({ top: 0,});
  };

    // Call the scrollToTop function when the component mounts
    useEffect(() => {
      scrollToTop();
    }, []);
  return (
    <Helmet title={singleBlogItem}>
      <section>
        <Container>
          <Row className='m-5'>
            <Col lg='6'>
              <img src={singleBlogItem.img} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default BlogDetails
