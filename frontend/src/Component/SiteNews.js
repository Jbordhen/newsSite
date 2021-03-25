import React from 'react'
import styled from 'styled-components/macro'

const Div = styled.div`
    justify-content: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: #3c444c;
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

const SiteNews = () => {
    return (
        <Div>
            <h1>Lorem Ipsum Dolor</h1>
            <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
            </h5>
        </Div>
    )
}

export default SiteNews
