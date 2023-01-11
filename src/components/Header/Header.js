import BurgerMenu from './BurgerMenu';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Button from '../../UI/Button';
import styled from 'styled-components';
import MainLogo from '../../UI/MainLogo';
import Resume from '../../Assets/Resume.pdf';
import NavLink from '../../utils/ActiveNavLink';
import links from '../../content/links';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const OpenMenuHandler = () => {
        document.querySelector("body").style.overflowY = "hidden";
        document.querySelector(".main-container").classList.add("blur");
        setMenuOpen(true)
    }
    const CloseMenuHandler = () => {
        setMenuOpen(false)
        document.querySelector(".main-container").classList.remove("blur");
        document.querySelector("body").style.overflowY = "auto";
    }
    const navigationlinks = links.map((item, index) => {
        let temp = 150;
        return <li key={index}>
            <NavLink to={item.link}>
                <Fade top cascade delay={3000 + (temp * 1)}>
                    <span className='transition'>{item.name}</span>
                </Fade>
            </NavLink>
        </li>
    })
    return (
        <Container show={menuOpen}>
            <nav className='flex'>
                <Fade top delay={3050}>
                    <Logo><Link to='/' aria-label='Go to home page.'><MainLogo /></Link></Logo>
                </Fade>
                {/* Desktop */}
                <Navigation className='flex'>
                    {navigationlinks}
                    <li>
                        <a href={Resume} aria-label="Checkout my resume for qualifications." target="_blank" rel="noopener noreferrer">
                            <Fade top delay={3750}>
                                <Button>Resume</Button>
                            </Fade>
                        </a>
                    </li>
                </Navigation>
                {/* Mobile */}
                <BurgerMenu burger={menuOpen} OpenMenu={OpenMenuHandler} CloseMenu={CloseMenuHandler} />
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
const Logo = styled.div`
    svg {
        height: 30px;
        fill: none;
        /* user-select: none; */
      }

      @media(max-width:768px){
        svg{
            height: 25px;
            margin-top: 8px;
        }
      }
`
const Navigation = styled.ul`
    align-items:center;
    gap: 1.5rem;

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