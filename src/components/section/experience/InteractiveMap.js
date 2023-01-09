import React, { useState } from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';
import JobContent from './JobContent';

const InteractiveMap = () => {
    const [currentTab, setCurrentTab] = useState('0');
    const TabHandler = (e) => {
        const TabItems = [...document.querySelectorAll('.tab-item')];
        setCurrentTab(e.target.parentElement.ariaValueText);
        TabItems.forEach((item) => {
            let btn = item.firstChild;
            if (btn.className.includes("active")) {
                btn.classList.remove("active");
            }
        })
        e.target.classList.add('active');
    }
    return (
        <Container className='grid'>
            <Tab>
                <List className='flex-column'>
                    <Fade bottom cascade delay={500}>
                        <li className='tab-item' aria-valuetext='0' onClick={TabHandler}><button className='active'>Shree Jewellry</button></li>
                        <li className='tab-item' aria-valuetext='1' onClick={TabHandler}><button>Ag Consultant</button></li>
                        <li className='tab-item' aria-valuetext='2' onClick={TabHandler}><button>Tvastra</button></li>
                    </Fade>
                </List>
            </Tab>
            <Fade bottom delay={700}>
                <JobContent currentTab={currentTab} />
            </Fade>
        </Container>
    )
}

export default InteractiveMap

const Container = styled.div`
    grid-template-columns: 25% auto;
    max-width: 700px;
    width:100%;
    min-height: 500px;
`
const Tab = styled.div`
    gap: .8rem;
`
const List = styled.ul`
li{
    button{
        font-size: 12px;
        width: 9rem;
        border-left: 1px solid var(--bg-darkgray);
        padding: .9rem 0;
        transition: 300ms ease;
        outline: none;

        &.active{
            color:var(--bg-green);
            border-left:2px solid var(--bg-green);
        }

        &:hover{
            color: var(--bg-green);
            transition: 300ms ease;
            background-color: var(--bg-light-navy);
        }
        }
    }
`