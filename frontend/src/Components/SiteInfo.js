import React from 'react'
import { Card } from 'react-bootstrap'
import styled from 'styled-components/macro'

const Div = styled.div`
    width: ${(props) => props.width || 'auto'};
    justify-content: ${(props) => props.justify || 'center'};
    text-align: center;
    padding: 2% 5% 2% 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: #30363d;
    margin: 0 0 0 0;
    @media (max-width: 768px) {
        margin-bottom: 0;
        justify-content: center;
        align-content: flex-end;
        bottom: 0;
        flex-direction: column;
        padding: 10% 10% 10% 10%;
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

const SiteInfo = () => {
    return (
        <Div>
            <Card
                css={`
                    width: 25%;
                    @media (max-width: 768px) {
                        width: 100%;
                        margin-bottom: 5%;
                    }
                `}>
                <Card.Body
                    css={`
                        text-align: center;
                        background: linear-gradient(
                            135deg,
                            #f27a54 0%,
                            #a154f2 100%
                        );
                    `}>
                    <i
                        className='far fa-comments'
                        style={{ fontSize: '50px' }}></i>
                    <h3>2554</h3>
                    <h3>Messages</h3>
                    <h6>Posted by our users</h6>
                </Card.Body>
            </Card>
            <Card
                css={`
                    width: 25%;
                    @media (max-width: 768px) {
                        width: 100%;
                        margin-bottom: 5%;
                    }
                `}>
                <Card.Body
                    css={`
                        text-align: center;
                        background: linear-gradient(
                            180deg,
                            rgba(60, 68, 77, 0) 0%,
                            #3c444d 100%
                        );
                        background-image: url('Mask Group.png');
                    `}>
                    <i
                        className='fas fa-map-marker-alt'
                        style={{ fontSize: '50px' }}></i>
                    <h6
                        css={`
                            color: whitesmoke;
                        `}>
                        138 Mount Pleasant Bracknell, RG12 9EA Berkshire, UK
                    </h6>
                    <Button
                        css={`
                            margin-left: auto;
                            margin-right: auto;
                        `}>
                        Get Direction
                    </Button>
                </Card.Body>
            </Card>
            <Card
                css={`
                    width: 25%;
                    @media (max-width: 768px) {
                        width: 100%;
                    }
                `}>
                <Card.Body
                    css={`
                        text-align: center;
                        background: linear-gradient(
                            135deg,
                            #f27a54 0%,
                            #a154f2 100%
                        );
                    `}>
                    <i
                        className='fas fa-cloud-moon-rain'
                        style={{ fontSize: '50px' }}></i>
                    <h3>18ºC</h3>
                    <h3>Craiova, RO</h3>
                    <h6>Sunny and raining</h6>
                </Card.Body>
            </Card>
        </Div>
    )
}

export default SiteInfo
