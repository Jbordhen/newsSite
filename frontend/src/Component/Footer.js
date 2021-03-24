import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Title = styled.h1`
    font-size: 1.5em;
    color: ${(props) => props.color || 'whitesmoke'};
    justify-content: ${(props) => props.justify || 'center'};
    text-align: left;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
    }
`

const Div = styled.div`
    display: flex;
    width: ${(props) => props.width || 'auto'};
    background-color: ${(props) => props.backgroundColor || 'inherit'};
    padding: ${(props) => props.padding || '0% 5% 0% 5%'};
    justify-content: ${(props) => props.justify || 'inherit'};
    flex-direction: ${(props) => props.flexDirection || 'inherit'};
    ${(props) => props.styling}
    @media (max-width: 768px) {
        flex-direction: column;
        width: auto;
        justify-content: center;
        align-content: auto;
        text-align: auto;
    }
`

const P = styled.p`
    text-align: left;
    color: whitesmoke;
    text-decoration: none;
    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`

const H5 = styled.h5`
    color: white;
    margin-bottom: 0;
    ${(props) => props.stylying}
    @media (max-width: 768px) {
        text-align: center;
    }
`

const Anchor = styled.div`
    display: flex;
    margin-left: auto;
    padding-bottom: 1%;
    padding-top: 0.5%;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-left: 0;
        justify-content: center;
        align-content: center;
        text-align: center;
    }
`

const Links = ({ className, children, to, style }) => (
    <Link className={className} to={to} style={style}>
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

const Footer = () => {
    return (
        <>
            <Div
                flexDirection='row'
                backgroundColor='#122635'
                justify='inherit'
                padding='1% 5% 1% 5%'>
                <Div padding='0' flexDirection='column' width='30%'>
                    <Title>News</Title>
                    <P>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </P>
                </Div>
                <Div width='60%' justify='flex-start'>
                    <Div flexDirection='column'>
                        <Title>Company</Title>
                        <LinkContainer to='/about'>About us</LinkContainer>
                        <LinkContainer to='/services'>
                            Our Services
                        </LinkContainer>
                        <LinkContainer to='/team'>The team</LinkContainer>
                        <LinkContainer to='/investors'>Investors</LinkContainer>
                    </Div>
                    <Div flexDirection='column'>
                        <Title>Resources</Title>
                        <LinkContainer to='/news_insigts'>
                            News & Insights
                        </LinkContainer>
                        <LinkContainer to='/documentation'>
                            Documentation
                        </LinkContainer>
                        <LinkContainer to='/downloads'>Downloads</LinkContainer>
                        <LinkContainer to='/knowledge'>
                            Knowledge Base
                        </LinkContainer>
                    </Div>
                    <Div flexDirection='column'>
                        <Title>Support</Title>
                        <LinkContainer to='/contact'>Contact Us</LinkContainer>
                        <LinkContainer to='/faqs'>Faqs</LinkContainer>
                        <LinkContainer to='/chat'>Live Chat</LinkContainer>
                    </Div>
                    <Div flexDirection='column'>
                        <Title>Resources</Title>
                        <LinkContainer
                            onClick={() =>
                                (window.location = 'https://twitter.com')
                            }>
                            <i
                                class='fab fa-twitter'
                                style={{ paddingRight: '5%' }}></i>
                            Twitter
                        </LinkContainer>
                        <LinkContainer to='/faqs'>
                            <i class='fab fa-facebook-f'></i>Facebook
                        </LinkContainer>
                        <LinkContainer to='/chat'>
                            <i class='fab fa-dribbble'></i>Dribble
                        </LinkContainer>
                    </Div>
                </Div>
            </Div>
            <Div backgroundColor='black'>
                <H5>Copyright © 2021. All rights reserved.</H5>
                <Anchor>
                    <LinkContainer
                        to='/privacypolicy'
                        style={{
                            paddingRight: '2%'
                        }}>
                        Privacy Policy
                    </LinkContainer>
                    <LinkContainer to='/termsandconditions'>
                        Terms and Conditions
                    </LinkContainer>
                </Anchor>
            </Div>
        </>
    )
}

export default Footer
