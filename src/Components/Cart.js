import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Cart = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button variant="light" onClick={() => { setShow(!show) }} className='position-relative'>
                <i className="bi bi-cart4"></i>
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    3
                    <span class="visually-hidden">unread messages</span>
                </span>

            </Button>
            <Offcanvas show={show} onHide={() => setShow(false)} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup as="ol" numbered>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Pepper onion</div>
                                Cras justo odio
                            </div>
                            <Badge bg="primary" pill>
                                14
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Cheese pizza</div>
                                Cras justo odio
                            </div>
                            <Badge bg="primary" pill>
                                14
                            </Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Classic</div>
                                Cras justo odio
                            </div>
                            <Badge bg="primary" pill>
                                14
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="text-end">
                        <Button variant='primary mt-2'>Check out</Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Cart