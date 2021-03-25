import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components/macro'

const Div = styled.div`
    width: ${(props) => props.width || 'auto'};
    padding: ${(props) => props.padding || '0'};
    justify-content: ${(props) => props.justify || 'center'};
    text-align: center;
    display: flex;
    flex-direction: row;
    @media (max-width: 768px) {
        margin-bottom: 0;
        justify-content: center;
        align-content: flex-end;
        bottom: 0;
    }
`

const Button = styled.button`
    display: block;
    border: none;
    width: auto;
    height: auto;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    color: inherit;
    background: linear-gradient(90deg, #f27a54 0%, #a154f2 87.07%);
    margin: 5%;
    padding: 1% 2% 1% 2%;
    @media (max-width: 768px) {
        font-size: 100%;
        margin-bottom: 0;
    }
`

const Slider = () => {
    return (
        <Carousel indicators={false}>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src='image.png'
                    alt='First slide'
                    style={{ overflow: 'hidden' }}
                />
                <Carousel.Caption
                    style={{
                        justifyContent: 'center',
                        alignContent: 'center'
                    }}>
                    <h5>First slide label</h5>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                    <Div>
                        <Button>Get Started</Button>
                        <Button>Find Out More</Button>
                    </Div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider
