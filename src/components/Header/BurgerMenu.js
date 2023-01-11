import { Link } from 'gatsby'
import { X } from 'react-feather'
import styled from 'styled-components'
import React from 'react'
import BurgerMenuIcon from './BurgerMenuIcon'
import links from "../../content/links";
import Resume from '../../Assets/Resume.pdf';
import Button from '../../UI/Button'

const BurgerMenu = ({ burger, OpenMenu, CloseMenu }) => {
    const navigationlinks = links.map((item, index) => {
        return <li key={index}>
            <Link to={item.link} onClick={CloseMenu}>
                <span className='lgray'>{item.name}</span>
            </Link>
        </li>
    })
    return (
        <Container>
            <BurgerMenuIcon openMenu={OpenMenu} />
            <Blur show={burger} onClick={CloseMenu} />
            <InnerContainer className='transition flex-column' show={burger}>
                <X className='close-menu' onClick={CloseMenu} />
                <List className='flex-column'>
                    {navigationlinks}
                    <a href={Resume} onClick={CloseMenu} aria-label="Checkout my resume for qualifications." target="_blank" rel="noopener noreferrer">
                        <Button>Resume</Button>
                    </a>
                </List>
            </InnerContainer>
        </Container>
    )
}

export default BurgerMenu

const Container = styled.div`
    @media(min-width:769px){
        display: none !important;
    }
`
const Blur = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;
    display: ${props => (props.show ? 'block' : 'none')};
    z-index: 500;
`
const InnerContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0px;
    bottom: 0;
    justify-content: center;
    align-items: center;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0px;
    z-index: 10000;
    background-color: var(--bg-light-navy);
    box-shadow: -10px 0px 30px -15px var(--bg-navy-shadow);
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

    .close-menu{
        position: fixed;
        top:1rem;
        right: 1rem;
        width: 45px;
        height: 45px;
        stroke-width: 1;
        color:var(--bg-green);
    }
`
const List = styled.ol`
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    
    li{
        position: relative;
        margin: 0 auto 20px;
        counter-increment: item 1;
        font-family: var(--font-mono);

      &::before{
          content: "0" counter(item) ".";
          display: block;
          margin-bottom: 5px;
          text-align: center;
          color: var(--bg-green);
        }
    }
    @media(max-width:768px){
        gap: 1rem;
    }
`