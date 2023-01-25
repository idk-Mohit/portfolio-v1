import styled from 'styled-components'
import socials from '../content/socials'
import React, { useState, useEffect } from 'react'
import { loaderDelay } from '../utils/config'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Icons } from './icons'


const SocialIcons = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), loaderDelay);
        return () => clearTimeout(timeout);
    }, [])
    const Socials = socials.map((item, index) => {
        return <CSSTransition key={index} classNames="fadeup" timeout={loaderDelay} >
            <div style={{ transitionDelay: `${index + 3}00ms` }}>
                <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
                    <Icons name={item.name} />
                </a>
            </div>
        </CSSTransition>;
    })

    return (
        <Container>
            <List show={isMounted} className='flex-column'>
                <TransitionGroup component={null}>
                    {isMounted && Socials}
                </TransitionGroup>
            </List>
        </Container >
    )
}

export default SocialIcons


const Container = styled.div`
    position:fixed;
    bottom: 0;
    width: 4rem;
    left: 1rem;


    @media(max-width:768px){
        display:none;
    }
`

const List = styled.ul`
    justify-content: center;
    align-items: center;
    gap: 1rem;

    /* li */
    /* .socialIcons{
        width:20px;
        height:20px;
        transition: transform 300ms ease;
        &:hover{
            color: var(--bg-green);
            transform: translateY(-5px);
            transition: transform 300ms ease;
        }
    } */


    &::after{
        content: '';
        display: block;
        width: 1px;
        height: 100px;
        background-color : var(--bg-gray);
        visibility: ${props => (props.show ? "visible" : "hidden")};
        animation: ${(props) => (props.show ? "fadeup .4s ease-out" : "none")};
    }

    @media(max-width:768px){
        flex-direction:row !important;
        gap:1.5rem;
        &::after{
            display:none;
        }
    }
`