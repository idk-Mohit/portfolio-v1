import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { GitHub, Mail, Linkedin } from 'react-feather'

const SocialIcons = () => {
    return (
        <Container className='flex'>
            <Fade bottom delay={1500}>
                <List className='flex-column'>
                    <li>
                        <a href="https://github.com/idk-Mohit" target="_blank" rel="noopener noreferrer">
                            <Fade bottom delay={1700}>
                                <GitHub className='socialIcons' />
                            </Fade>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:mototurbo12499@gmail.com">
                            <Fade bottom delay={1900}>
                                <Mail className='socialIcons' />
                            </Fade>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/9mohit2000/" target="_blank" rel="noopener noreferrer">
                            <Fade bottom delay={2100}>
                                <Linkedin className='socialIcons' />
                            </Fade>
                        </a>
                    </li>
                </List>
            </Fade>
        </Container>
    )
}

export default SocialIcons

const Container = styled.div`
    position:fixed;
    bottom: 0;
    width: 4rem;
    left: 2rem;
`

const List = styled.ul`
    justify-content: center;
    align-items: center;
    gap: 1rem;

    /* li */
    .socialIcons{
        width:20px;
        height:20px;
        transition: transform 300ms ease;
        &:hover{
            color: var(--bg-green);
            transform: translateY(-5px);
            transition: transform 300ms ease;
        }
    }

    &:after{
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        background-color : var(--bg-gray);
    }
`