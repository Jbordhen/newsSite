import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'
import { Card, Col } from 'react-bootstrap'

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

const NewsScreen = ({ match }) => {
    const id = match.params.id

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [news, setNews] = useState([])

    useEffect(() => {
        fetch('https://spaceflightnewsapi.net/api/v2/articles')
            .then((res) => res.json())
            .then(
                (result) => {
                    setIsLoaded(true)
                    setNews(result.filter((item) => item.id === id))
                },

                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [isLoaded, id, news])

    return (
        <>
            {error ? (
                <h1
                    css={`
                        text-align: center;
                    `}>
                    Couldn't retrieve data from api, try again later
                </h1>
            ) : (
                news && (
                    <Col key={news.id} sm={12} md={6} lg={4} xl={3}>
                        <Card
                            className='my-3 p-3 rounded'
                            css={`
                                height: 500px;
                                position: relative;
                                background: #3c444c;
                            `}>
                            <Card.Img
                                src={news.imageUrl}
                                alt={news.newsSite}
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
                                <h5 variant='center'>{news.title}</h5>
                                <LinkContainer to={`/news/${news.id}`}>
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
                )
            )}
        </>
    )
}

export default NewsScreen
