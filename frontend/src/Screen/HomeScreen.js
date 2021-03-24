import React from 'react'
import Footer from '../Component/Footer'
import NavBar from '../Component/NavBar'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const Div = styled.div`
    width: ${(props) => props.width || 'auto'};
    background-color: ${(props) => props.backgroundColor || 'auto'};
    padding: ${(props) => props.padding || '0'};
    justify-content: ${(props) => props.justify || 'center'};
    ${(props) => props.styling}
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
    background-color: ${(props) => props.backgroundColor || '#122635'};
    margin: 5%;
    padding: 1% 2% 1% 2%;
`

const HomeScreen = () => {
    return (
        <>
            <NavBar />
            <Div>
                <Carousel>
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
                            <Div styling={'display:flex; flex-direction: row;'}>
                                <Button>Get Started</Button>
                                <Button>Find Out More</Button>
                            </Div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Div>
            <Footer />
        </>
    )
}

export default HomeScreen
