import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';

import "../pages/tickets.css";

function ProductCard(props) {
     const product = props.product
     const cart = useContext(CartContext)
     const productQuantity = cart.getProductQuantity(product.id)

     console.log(cart.item)

     return (
          <Card>
               <Card.Body className='card-body'>
                    <Card.Title>{product.title}</Card.Title>
                    <img
                            loading="lazy"
                            decoding="async"
                            srcSet={product.image}
                            alt={product.title}
                            aria-hidden="true"
                            id='product-img'
                          />
                    <Card.Text className='card-price'>${product.price}</Card.Text>
                    { productQuantity > 0 ?
                    <>
                    <Form as={Row}>
                         <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                         <Col sm="6">
                              <Button sm="2" onClick={() => cart.addOneToCart(product.id)} className='btn-sm mx-2'>+</Button>
                              <Button sm="2" onClick={() => cart.removeOneFromCart(product.id)} className='btn-sm mx-2'>-</Button>
                         </Col>
                    </Form>
                    <Button varient="danger" onClick={() => cart.deleteFromCart(product.id)} className='my-2'>Remove from cart</Button>
                    </>
                    :
                    <Button varient='primary' onClick={() => cart.addOneToCart(product.id)}>Add to Cart</Button>
                    }
               </Card.Body>
          </Card>
     )
}

export default ProductCard;