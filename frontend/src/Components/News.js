import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
    width: 50%;
    height: auto;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 600;
    color: inherit;
    background: linear-gradient(90deg, #f27a54 0%, #a154f2 87.07%);
    padding: 1% 2% 1% 2%;
    position: absolute;
    bottom: 5%;
    right: 25%;
    left: 25%;
    @media (max-width: 768px) {
        font-size: 100%;
        margin-bottom: 0;
    }
`

const Links = ({ className, children, to, style }) => (
    <Link className={className} to={to}>
        {children}
    </Link>
)

const LinkContainer = styled(Links)`
    text-decoration: none;
    color: #bbbbbb;
    @media (max-width: 768px) {
        text-align: center;
    }
`

const H1 = styled.h1`
    color: white;
`

const News = (props) => {
    const news = props.news

    return (
        <>
            <Div>
                <H1>Latest News</H1>
            </Div>
            <Row
                css={`
                    width: 100%;
                    padding: 5%;
                    margin: auto;
                    background: #30363d;
                    align-content: center;
                    justify-content: center;
                `}>
                {news.map((item) => (
                    <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
                        <Card
                            className='my-3 p-3 rounded'
                            css={`
                                height: 500px;
                                position: relative;
                                background: #3c444c;
                            `}>
                            <Card.Img
                                src={item.imageUrl}
                                alt={item.newsSite}
                                variant='top'
                                style={{
                                    overflow: 'hidden',
                                    maxHeight: '30%'
                                }}></Card.Img>
                            <Card.Body
                                css={`
                                    text-align: center;
                                    background: linear-gradient(
                                        135deg,
                                        #f27a54 0%,
                                        #a154f2 100%
                                    );
                                `}>
                                <h5 variant='center'>{item.title}</h5>
                                <h6
                                    style={{
                                        display: 'flex',
                                        textAlign: 'justify',
                                        marginTop: '15%'
                                    }}>
                                    {item.summary.slice(0, 100) + '...'}
                                </h6>
                                <LinkContainer to={`/news/${item.id}`}>
                                    <Button
                                        css={`
                                            text-decoration: none;
                                            color: whitesmoke;
                                        `}>
                                        Find Out More
                                    </Button>
                                </LinkContainer>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default News
