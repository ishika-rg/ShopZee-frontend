import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Rating from "./Rating";

const authorsList = [
  {
    name: "Pragati Rawat",
    designation: "COT Student",
    rating: 5,
    description:
      "I love shopping on Shopzee! They have such a wide variety of products and affordable prices. ",
  },
  {
    name: "Mansi Bisht",
    designation: "COF Student",
    rating: 4,
    description:
      "Shopzee is best and most reliable e commerce site. Free shipping with ShopZee is also really handy! ",
  },
  {
    name: "Gaurav Saini",
    designation: "COT Student",
    rating: 4.5,
    description:
      "Very comfortable and easy to use site, good range of products with best efficienct ! Free shipping with ShopZee is also really handy!",
  },
];

const Testimonials = () => {
  return (
    <Row style={{ padding: "100px 0 120px", "--bs-gutter-y": "1.5rem" }}>
      <h3 style={{ fontWeight: 700, marginBottom: "25px" }}>Testimonials</h3>
      {authorsList.map((author, i) => (
        <Col key={i} sm={12} md={4}>
          <Card style = {{ height : '15rem'}}>
            <Card.Body>
              <div className="d-flex align-items-center gap-2">
                <div>  <i className="fa-solid fa-user-pen"></i></div>

             
                {/* <img
                  width="60"
                  height="60"
                  data-src="//cdn.shopify.com/s/files/1/0159/9193/0928/files/Untit.png?v=1575435476"
                  alt="testimonial"
                  src="//cdn.shopify.com/s/files/1/0159/9193/0928/files/Untit.png?v=1575435476"
                /> */}
                <div className="author-info">
                  <p className = 'mb-0'>{author.name}</p>
                  <p>{author.designation}</p>
                </div>
              </div>
              <Rating value={author.rating} />
              <Card.Text>{author.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Testimonials;
