import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ post }) => {
  return (
    <Card className="p-3 my-3 rounded">
      <Card.Body as="div">
        <Link to={`/post/${post.id}`}>
          <Card.Title>
            <h3>
              <strong>{post.title}</strong>
            </h3>
          </Card.Title>
        </Link>
      </Card.Body>
      <Link to={`/post/${post.id}`}>
        <Card.Img
          src="http://placehold.it/750x300"
          alt=""
          variant="top"
        ></Card.Img>
      </Link>
      <Card.Body as="div">
        <Card.Text as="div">
          <strong>{post.body}</strong>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
