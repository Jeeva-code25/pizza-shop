import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PizzaItemCard from './PizzaItemCard'

const Menu = () => {
    const numbers = [1,2,3,4,5,6];
    return (
        <section id="menu">
            <Container className='my-3 py-5'>
                <div className="text-center">
                    <h2 className="text-primary">Treat your self with our every day <i class="bi bi-tiktok"></i></h2>
                </div>
                <Row>
                    {
                        numbers.map( (item) => {
                            return(
                            <Col md={6} lg={4} key={item}>
                            <PizzaItemCard/>
                            </Col>
                            )
                        })
                    }
                    
                </Row>
            </Container>
        </section>

    )
}

export default Menu