import React from 'react'
import styled from 'styled-components'
import socials from '../content/socials'
import { Icons } from './icons'

const Footer = () => {
    const SocialIcons = socials.map((social, index) => {
        return <li key={index}>
            <a href={social.link} aria-label={social.ariaLabel} target="_blank" rel="noopener noreferrer">
                <Icons name={social.name} />
            </a>
        </li>
    })
    return (
        <Container className='flex-column'>
            <SocialIconContainer>
                {SocialIcons}
            </SocialIconContainer>
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
const SocialIconContainer = styled.div`
    gap: 1.5rem;
    margin-bottom: 1rem;
    display: none;

    @media (max-width:768px){
        display: flex;
    }
`