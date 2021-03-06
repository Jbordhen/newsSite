import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Slider from '../Components/Slider'
import SiteInfo from '../Components/SiteInfo'
import SiteNews from '../Components/SiteNews'
import TopNews from '../Components/TopNews'
import News from '../Components/News'

const Div = styled.div`
    width: ${(props) => props.width || 'auto'};
    padding: ${(props) => props.padding || '0'};
    justify-content: ${(props) => props.justify || 'center'};
    text-align: center;
    @media (max-width: 768px) {
        margin-bottom: 0;
        justify-content: center;
        align-content: flex-end;
        bottom: 0;
    }
`
/*
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
*/

const HomeScreen = () => {
    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [news, setNews] = useState([])

    useEffect(() => {
        const dataFetch = () => {
            fetch('https://spaceflightnewsapi.net/api/v2/articles')
                .then((res) => res.json())
                .then(
                    (result) => {
                        setIsLoaded(true)
                        setNews(result)
                    },

                    (error) => {
                        setIsLoaded(true)
                        setError(error)
                    }
                )
        }
        dataFetch()
    }, [isLoaded, news])

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
                <>
                    <Div>
                        <Slider />
                    </Div>
                    <SiteInfo />
                    <SiteNews />
                    <Div
                        padding='2% 5% 2% 5%'
                        css={`
                            display: flex;
                            flex-direction: row;
                            justify-content: space-around;
                            background: #3c444c;
                            margin: 0 0 0 0;
                            @media (max-width: 768px) {
                                flex-direction: column;
                                padding: 10% 10% 10% 10%;
                            }
                        `}>
                        <Div
                            css={`
                                width: 25%;
                                text-align: center;
                                background: #3c444c;
                                @media (max-width: 768px) {
                                    width: 100%;
                                    margin-bottom: 5%;
                                }
                            `}>
                            <img
                                src='account_circle.png'
                                css={`
                                    background-image: url(account_circle.png);
                                `}
                                alt='account icon'></img>
                            <h3>Magna Aliqua</h3>
                            <h6>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium.
                            </h6>
                        </Div>
                        <Div
                            css={`
                                width: 25%;
                                text-align: center;
                                background: #3c444c;
                                @media (max-width: 768px) {
                                    width: 100%;
                                    margin-bottom: 5%;
                                }
                            `}>
                            <img src='phonelink.png' alt='phonelink icon'></img>
                            <h3>Consectetur Elit</h3>
                            <h6>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium.
                            </h6>
                        </Div>
                        <Div
                            css={`
                                width: 25%;
                                text-align: center;
                                background: #3c444c;
                                @media (max-width: 768px) {
                                    width: 100%;
                                    margin-bottom: 5%;
                                }
                            `}>
                            <img
                                src='store_mall_directory.png'
                                alt='store icon'></img>
                            <h3>Minim Veniam</h3>
                            <h6>
                                Sed ut perspiciatis unde omnis iste natus error
                                sit voluptatem accusantium doloremque
                                laudantium.
                            </h6>
                        </Div>
                    </Div>
                    <News news={news} />
                    <TopNews />
                </>
            )}
        </>
    )
}

export default HomeScreen
