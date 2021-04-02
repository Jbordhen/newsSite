import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

const NewsScreen = ({ match }) => {
    const id = match.params.id

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [news, setNews] = useState()

    useEffect(() => {
        const data = () => {
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
        }
        data()
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
                    <div
                        css={`
                            padding-left: 10%;
                            padding-right: 10%;
                            justify-content: center;
                            align-content: center;
                            text-align: center;
                            background-color: black;
                        `}>
                        <h3
                            css={`
                                color: whiteSmoke;
                            `}>
                            {news[0].title}
                        </h3>
                        <img
                            src={news[0].imageUrl}
                            alt={news[0].newsSite}
                            css={`
                                max-width: 100%;
                                overflow: hidden;
                            `}></img>
                        <p
                            css={`
                                color: whiteSmoke;
                            `}>
                            {news[0].summary}
                        </p>
                    </div>
                )
            )}
        </>
    )
}

export default NewsScreen
