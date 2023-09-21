import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Button, Card, Row, Col } from 'react-bootstrap'
import { getProductData } from '../../data/items'
import './index.css'

function CartProduct({ id, quantity }) {
    const cart = useContext(CartContext)

    const productData = getProductData(id)

    return (
        <Card className='mb-3 card__modal'>
            <Row className='g-0' xs='2'>
                <Col md='4' xs='4'>
                    <Card.Img
                        variant='top'
                        src={productData.image}
                        height='auto'
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
                <Col md='8' xs='8' className='card__modal-text px-3'>
                    <Card.Title className='card__modal-title pt-2'>{productData.title}</Card.Title>
                    <Card.Text>تعداد: {Number(quantity).toLocaleString('fa-IR')}</Card.Text>
                    <Card.Text>قیمت: {Number(quantity * productData.price).toLocaleString('fa-IR')} تومان</Card.Text>
                    <Button
                        onClick={() => cart.deleteFromCart(id)}
                        size='sm'
                        variant='btn btn-dark'
                        className='text-white'
                    >
                        حذف
                    </Button>
                </Col>
            </Row>
        </Card>
    )
}

export default CartProduct
