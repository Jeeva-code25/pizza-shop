import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const PickOfTheWeek = () => {
    const [show, setShow] = useState(false);
    return (
        <section id="musttry">
            <div className="text-center">
                <h2 className="display-5 text-primary"><i className="bi bi-search-heart"></i> Pick of the week</h2>
            </div>
            <Container className='my-3'>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <Image src={require("../assets/cheese-pizza.jpg")} fluid={true}></Image>
                    </Col>
                    <Col md={5}>
                        <div className="py-3">
                            <h2 className="h1">Cheese Pizza</h2>
                            <p className="lead text-muted text-align-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum veniam quod necessitatibus alias reprehenderit. Dolore, temporibus non</p>
                            <Button variant="primary" onClick={() => setShow(true)}><i className="bi bi-basket"></i> Buy now</Button>
                        </div>

                    </Col>
                </Row>
                <ToastContainer
                    className="position-fixed p-3"
                    position={'bottom-end'}
                    style={{ zIndex: 1 }}
                >
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide
                    >
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                        </Toast.Header>
                        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    )
}

export default PickOfTheWeek