import { useContext } from 'react'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'

function ProductItem({ product }) {
    const cart = useContext(CartContext)

    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <Card className='mt-5 card-bg border-0'>
            <Card.Body>
                <Card.Img
                    variant='top'
                    src={product.image}
                    height='auto'
                    style={{ objectFit: 'cover' }}
                    className='card-img'
                />
                <Card.Title align='right' className='text-dark pt-4' style={{ fontSize: '14px' }}>
                    {product.title} {product.ml} ML
                </Card.Title>
                <Card.Text align='right' className='text-dark' dir='rtl'>
                    {product.price} تومان
                </Card.Text>
                {productQuantity > 0 ? (
                    <>
                        <Form as={Row}>
                            <Form.Label column='true' sm='6' className='text-dark'>
                                تعداد: {productQuantity}
                            </Form.Label>
                            <Col sm='6'>
                                <Button
                                    onClick={() => cart.addItemToCart(product.id)}
                                    sm='6'
                                    variant='btn btn-dark'
                                    className='mx-2 text-white'
                                >
                                    +
                                </Button>
                                <Button
                                    onClick={() => cart.removeItemFromCart(product.id)}
                                    sm='6'
                                    variant='btn btn-dark'
                                    className='mx-2 text-white'
                                >
                                    -
                                </Button>
                            </Col>
                        </Form>
                        <Button
                            onClick={() => cart.deleteFromCart(product.id)}
                            className='my-4 text-dark'
                            variant='btn btn-outline-secondary'
                        >
                            حذف از سبد خرید
                        </Button>
                    </>
                ) : (
                    <Button
                        onClick={() => cart.addItemToCart(product.id)}
                        variant='btn btn-dark'
                        className='text-white'
                    >
                        افزودن به سبد خرید
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default ProductItem
