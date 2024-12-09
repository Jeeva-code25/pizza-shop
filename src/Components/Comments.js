import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const Comments = () => {
    return (
        <section id="contactus" className='text-bg-light py-3'>
            <div className="text-center">
                <h2 className="text-primary align-items-center">Comments <i className="bi bi-chat-left-heart"></i></h2>
            </div>
            <Container className='my-3'>
                <Row className='justify-content-center'>
                    <Col md={8}>
                        <Form>


                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="bi bi-envelope-open"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"
                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i className="bi bi-person-fill"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your name"
                                >
                                    <Form.Control type="text" placeholder="userename" />
                                </FloatingLabel>
                            </InputGroup>
                            <FloatingLabel controlId="floatingTextarea" label="Comments" className='mb-3'>
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                />
                            </FloatingLabel>
                            <div className="text-center">
                                <Button variant='primary'>Submit</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Comments