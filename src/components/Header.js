import * as React from 'react';
import Button from '../UI/Button';
import NavLink from '../utils/ActiveNavLink';
import styled from 'styled-components';
import Resume from './../Assets/Resume.pdf';
import MainLogo from '../UI/MainLogo';
import { Fade } from 'react-reveal';

const Header = () => {
    return (
        <Container className='flex'>
            <Fade top delay={3050}>
                <Logo><a href='/' aria-label='Go to home page.'><MainLogo /></a></Logo>
            </Fade>
            <Navigation className='flex'>
                <li>
                    <NavLink to='/#about'>
                        <Fade top cascade delay={3150}>
                            <span className='transistion'>About</span>
                        </Fade>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/#experience'>
                        <Fade top cascade delay={3300}>
                            <span className='transistion'>Experience</span>
                        </Fade>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/#work'>
                        <Fade top cascade delay={3450}>
                            <span className='transistion'>Work</span>
                        </Fade>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/#contact'>
                        <Fade top cascade delay={3600}>
                            <span className='transistion'>Contact</span>
                        </Fade>
                    </NavLink>
                </li>
                <li>
                    <a href={Resume} aria-label="Checkout my resume for qualifications." target="_blank" rel="noopener noreferrer">
                        <Fade top delay={3750}>
                            <Button>Resume</Button>
                        </Fade>
                    </a>
                </li>
            </Navigation>
        </Container >
    )
}

export default Header;

const Container = styled.header`
    position:fixed;
    top:0;
    height: 85px;
    width: 100%;
    padding: 1.5rem 2rem;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(2px);
    z-index: 1000;

`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        height: 30px;
        fill: none;
        /* user-select: none; */
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
`