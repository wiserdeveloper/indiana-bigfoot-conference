import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext, useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";

import "../pages/tickets.css";

function ProductCard(props) {
  const [price, setPrice] = useState("");
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);

  useEffect(() => {
    fetch(`http://localhost:3001/api/prices?productPrice=${product.default_price}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPrice(`${data.unit_amount / 100}`));
  }, []);

  console.log(price && price)

  return (
    <Card>
      <Card.Body className="card-body">
        <Card.Title>{product.name}</Card.Title>
        <img
          loading="lazy"
          decoding="async"
          srcSet={product.images[0]}
          alt={product.name}
          aria-hidden="true"
          id="product-img"
        />
        <Card.Text className="card-price">${price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column="true" sm="6">
                In Cart: {productQuantity}
              </Form.Label>
              <Col sm="6">
                <Button
                  sm="2"
                  onClick={() => cart.addOneToCart(product.id)}
                  className="btn-sm mx-2"
                >
                  +
                </Button>
                <Button
                  sm="2"
                  onClick={() => cart.removeOneFromCart(product.id)}
                  className="btn-sm mx-2"
                >
                  -
                </Button>
              </Col>
            </Form>
            <Button
              varient="danger"
              onClick={() => cart.deleteFromCart(product.id)}
              className="my-2"
            >
              Remove from cart
            </Button>
          </>
        ) : (
          <Button
            varient="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
