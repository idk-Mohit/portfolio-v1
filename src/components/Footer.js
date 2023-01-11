import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <Container className='flex-column'>
            <a href="https://github.com/idk-Mohit" aria-label='This portfolio is built by Mohit, click to visit my github.' target="_blank" rel="noopener noreferrer">Built by<span className='lgray hover-line'> idk-Mohit</span>
            </a>
            <a href="https://github.com/bchiang7" aria-label='This portfolio is designed by Brittiany Chaing, click to visit her github.' target="_blank" rel="noopener noreferrer">Designed by<span className='lgray hover-line'> Brittiany Chaing</span></a>

        </Container>
    )
}

export default Footer

const Container = styled.footer`
    margin: 1rem auto 1.8rem;
    width:100%;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 12px;
    gap: 0.3rem;
    a{
        span{
            margin-left: 5px;
            line-height: 1.5;
        }
        &:hover{
            span{
                color:var(--bg-green);
            }
        }
    }
`