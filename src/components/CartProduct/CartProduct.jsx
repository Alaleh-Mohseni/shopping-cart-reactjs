import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { getProductData } from '../../data/items'

function CartProduct({ id, quantity }) {
    const cart = useContext(CartContext)

    const productData = getProductData(id)

    return (
        <Card className='mb-3' style={{ height: '200px', overflow: 'hidden' }}>
            <Row className='g-0'>
                <Col md='4'>
                    <Card.Img
                        variant='top'
                        src={productData.image}
                        height='auto'
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
                <Col md='8 p-4'>
                    <Card.Title>{productData.title}</Card.Title>
                    <Card.Text>تعداد: {quantity}</Card.Text>
                    <Card.Text>قیمت: {quantity * productData.price}</Card.Text>
                    <Button
                        onClick={() => cart.deleteFromCart(id)}
                        size='sm'
                        variant='btn btn-dark'
                        className='mb-2 text-white'
                    >
                        حذف
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}

export default CartProduct
