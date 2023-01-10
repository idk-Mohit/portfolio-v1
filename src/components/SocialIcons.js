import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal'
import { GitHub, Mail, Linkedin } from 'react-feather'

const SocialIcons = () => {
    return (
        <Container>
            <Fade bottom delay={4600}>
                <List className='flex-column'>
                    <li>
                        <a href="https://github.com/idk-Mohit" target="_blank" rel="noopener noreferrer">
                            <Fade bottom delay={4900}>
                                <GitHub className='socialIcons' />
                            </Fade>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:mototurbo12499@gmail.com">
                            <Fade bottom delay={4800}>
                                <Mail className='socialIcons' />
                            </Fade>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/9mohit2000/" target="_blank" rel="noopener noreferrer">
                            <Fade bottom delay={4700}>
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
    left: 1rem;
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