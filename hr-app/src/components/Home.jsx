import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';


const Styles = styled.div`
.bg-box {
    margin-bottom: 200px;
}
.text {
    margin-top: 40px;
    color: lightgrey;
}
.heading-2 {
    color: navy; 
    margin-left: 600px;
}
.text-2 {
    margin-top: 40px; 
    margin-left: 590px;
}
.bg-box-3 {
    margin-bottom: 280px;
}
.heading-3 {
    margin-bottom: 50px;
}

`

export const Home = () => (
    <Styles>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={580}
                    src={require('../assets/bg3.jpg')}
                    alt="First slide"
                />
                <Carousel.Item></Carousel.Item>
                <Carousel.Caption className="bg-box">
                    <h1><strong>Upcoming Events</strong></h1>
                    <div className="text">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={580}
                    src={require('../assets/bg2.jpeg')}
                    alt="Second slide"
                />
                <Carousel.Item></Carousel.Item>
                <Carousel.Caption className="bg-box">
                    <h1 className="heading-2"><strong>HR News</strong></h1>
                    <div className="text-2">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    height={580}
                    src={require('../assets/bg-1.jpg')}
                    alt="Third slide"
                />
                <Carousel.Item></Carousel.Item>
                <Carousel.Caption className="bg-box border">
                    <h1><strong>Weekly Report</strong></h1>
                    <div className="text">
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </Styles>
)





