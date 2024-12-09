import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center'>
                <Col lg={10} className='h-20'>
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img src={require("../assets/corousal-img1.jpg")} text="First slide" className='d-block w-100' height="550px" alt='' />
                            <Carousel.Caption>
                                <h3>100% Transparent Kitchen</h3>
                                <p className='d-none d-md-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={require("../assets/corousal-img2.jpg")} text="Second slide" className='d-block w-100' height="550px" alt=''/>
                            <Carousel.Caption>
                                <h3>Memorable Taste</h3>
                                <p className='d-none d-md-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={require("../assets/corousal-img3.jpg")} text="Third slide" className='d-block w-100' height="550px" alt=''/>
                            <Carousel.Caption>
                                <h3>We have world class chef's</h3>
                                <p className='d-none d-md-block'>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className="text-center">
                <h2 className="display-5 mt-2">Pizz for every Occassion!!</h2>
                <p className="lead text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </div>
        </Container>

    )
}

export default Banner