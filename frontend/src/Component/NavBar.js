import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Title = styled.h1`
    font-size: 1.5em;
    color: whitesmoke;
    justify-content: center;
    text-align: center;
    margin-top: 0;
`
const Nav = styled.nav`
    width: auto;
    height: auto;
    background-color: #3c444c;
`
const Button = styled.button`
    color: white;
    background: inherit;
    border: none;
    padding-left: 10%;
`
const Div = styled.div`
    display: flex;
    width: auto;
    justify-content: space-evenly;
    align-content: center;
    padding-bottom: 1%;
    margin-left: 25%;
    margin-right: 25%;
`

const Icon = styled.div`
    display: flex;
    margin-left: 70%;
    justify-content: flex-start;
    padding-top: 2%;
`

const NavBar = () => {
    return (
        <Nav>
            <Icon>
                <a
                    href='https://facebook.com'
                    style={{
                        color: '#bbbbbb'
                    }}>
                    <i class='fab fa-facebook-f'></i>
                </a>
                <a href='https://twitter.com'>
                    <i
                        class='fab fa-twitter'
                        style={{
                            paddingLeft: '50%',
                            color: '#bbbbbb'
                        }}></i>
                </a>
                <a href='https://google.com'>
                    <i
                        class='fab fa-google'
                        style={{
                            paddingLeft: '100%',
                            color: '#bbbbbb'
                        }}></i>
                </a>
            </Icon>
            <Title>News</Title>
            <Div>
                <Link to='/'>
                    <Button>Home</Button>
                </Link>
                <Link to='/work'>
                    <Button>Work</Button>
                </Link>
                <Link to='/about'>
                    <Button>About</Button>
                </Link>
                <Link to='/blog'>
                    <Button>Blog</Button>
                </Link>
                <Link to='/contact'>
                    <Button>Contact</Button>
                </Link>
            </Div>
        </Nav>
    )
}

export default NavBar
