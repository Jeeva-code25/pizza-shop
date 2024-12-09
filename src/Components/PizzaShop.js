import React from 'react'
import { Container } from 'react-bootstrap'
import { NavBar } from './NavBar';
import Banner from './Banner';
import Menu from './Menu';
import PickOfTheWeek from './PickOfTheWeek';
import Comments from './Comments';

export const PizzaShop = () => {
    return (
        <Container fluid>
            <NavBar/>
            <Banner/>
            <Menu/>
            <PickOfTheWeek/>
            <Comments/>
            <div className="text-center">
                <p className="text-primary small my-3">@Copyright 2024-2025</p>
            </div>
        </Container>

    )


}
