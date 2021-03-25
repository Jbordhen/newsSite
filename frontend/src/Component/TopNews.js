import React from 'react'
import styled from 'styled-components/macro'

const Div = styled.div`
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: linear-gradient(90deg, #f27a54 0%, #a154f2 87.07%);
    margin: 0 0 0 0;
    padding: 2% 5% 2% 5%;
    @media (max-width: 768px) {
        padding: 10% 10% 10% 10%;
        margin-bottom: 0;
        justify-content: center;
        align-content: flex-end;
        bottom: 0;
    }
`

const Button = styled.button`
    display: block;
    border: none;
    width: min-content;
    height: auto;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    color: inherit;
    background: white;
    margin: 5%;
    padding: 1% 2% 1% 2%;
    @media (max-width: 768px) {
        font-size: 100%;
        margin-bottom: 0;
    }
`

const TopNews = () => {
    return (
        <Div>
            <h1>Lorem Ipsum Dolor</h1>
            <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
            </h5>
            <Button
                css={`
                    min-width: 15%;
                    margin-left: auto;
                    margin-right: auto;
                    @media (max-width: 768px) {
                        min-width: 40%;
                    }
                `}>
                Read More
            </Button>
        </Div>
    )
}

export default TopNews
