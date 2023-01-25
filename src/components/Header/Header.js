import BurgerMenu from './BurgerMenu';
import { Link } from 'gatsby';
import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button';
import styled from 'styled-components';
import MainLogo from '../../UI/MainLogo';
import Resume from '../../Assets/Resume.pdf';
import NavLink from '../../utils/ActiveNavLink';
import links from '../../content/links';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { isBrowser, loaderDelay } from '../../utils/config'
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timeout);
    }, []);
    const OpenMenuHandler = () => {
        if (isBrowser) {
            document.querySelector("body").style.overflowY = "hidden";
            document.querySelector("#content").classList.add("blur");
        }
        setMenuOpen(true)
    }
    const CloseMenuHandler = () => {
        setMenuOpen(false)
        if (isBrowser) {
            document.querySelector("#content").classList.remove("blur");
            document.querySelector("body").style.overflowY = "auto";
        }
    }
    return (
        <Container show={menuOpen}>
            <nav className='flex'>
                <TransitionGroup component={null}>
                    {isMounted && (
                        <CSSTransition classNames="fade" timeout={loaderDelay}>
                            <Link to='/' aria-label='Go to home page.'><MainLogo /></Link>
                        </CSSTransition>
                    )}
                </TransitionGroup>
                {/* Desktop */}
                <Navigation className='flex'>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            links.map((item, index) => (
                                <CSSTransition key={index} classNames="fadedown" timeout={loaderDelay}>
                                    <div style={{ transitionDelay: `${index + 1}00ms` }}>
                                        <NavLink to={item.link} aria-label={item.ariaLabel}>
                                            <span>{item.name}</span>
                                        </NavLink>
                                    </div>
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>
                    <TransitionGroup component={null}>
                        {isMounted &&
                            <CSSTransition classNames="fadedown" timeout={loaderDelay}>
                                <div style={{ transitionDelay: `${links.length * 100}ms` }}>
                                    <a href={Resume} aria-label="Checkout my Resume">
                                        <Button>
                                            Resume
                                        </Button>
                                    </a>
                                </div>
                            </CSSTransition>}
                    </TransitionGroup>
                </Navigation>
                {/* Mobile */}
                <BurgerMenuContainer>
                    <TransitionGroup>
                        {isMounted &&
                            <CSSTransition classNames="fade" timeout={loaderDelay}>
                                <BurgerMenu burger={menuOpen} OpenMenu={OpenMenuHandler} CloseMenu={CloseMenuHandler} />
                            </CSSTransition>
                        }
                    </TransitionGroup>
                </BurgerMenuContainer>
            </nav>
        </Container >
    )
}

export default Header;

const Container = styled.header`
    position:fixed;
    position:fixed;
    top:0;
    height: 85px;
    width: 100%;
    z-index: 500;
    backdrop-filter: blur(4px);
    background-color: rgba(10, 25, 47, 0.85);
    box-shadow: 0 10px 30px -10px var(--bg-navy-shadow);
    nav {
        padding: 1.5rem 2rem;
        justify-content: space-between;
        align-items: center;
        height: inherit;
    }
    @media(max-width:768px){
        height: 70px;
    }
`
const Navigation = styled.ul`
    align-items:center;
    gap: 1.5rem;
    a{
        &:hover,
        &:focus {
            svg {
                fill: var(--green-tint);
            }
        }
    }

    span{
        font-size: 13px;
        font-family: var(--font-mono);
        &:hover{
            color:var(--bg-green);
        }
    }
    @media(max-width:768px){
        display: none !important;
    }
`
const BurgerMenuContainer = styled.div`
    display: none;
    @media(max-width:768px){
        display: block !important;
    }
`