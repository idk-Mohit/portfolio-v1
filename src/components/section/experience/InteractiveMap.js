import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import JobContent from './JobContent';
import sr, { srConfig } from '../../../utils/srConfig';

const InteractiveMap = () => {
    const [currentTab, setCurrentTab] = useState('0');
    const revealTabs = useRef(null)
    const TabHandler = (e) => {
        const TabItems = [...document.querySelectorAll('.tab-item')];
        setCurrentTab(e.target.parentElement.id);
        TabItems.forEach((item) => {
            let btn = item.firstChild;
            if (btn.className.includes("active")) {
                btn.classList.remove("active");
            }
        })
        e.target.classList.add('active');
    }
    useEffect(() => {
        sr.reveal(revealTabs.current, srConfig());
    }, [])
    return (
        <Container className='grid'>
            <List className='flex-column' ref={revealTabs}>
                <li className='tab-item' id='0' aria-hidden={currentTab === 0} ><button onKeyDown={TabHandler} onClick={TabHandler} className='active'>Shree Jewellry</button></li>
                <li className='tab-item' id='1' aria-hidden={currentTab === 1} ><button onKeyDown={TabHandler} onClick={TabHandler}>Ag Consultant</button></li>
                <li className='tab-item' id='2' aria-hidden={currentTab === 2} ><button onKeyDown={TabHandler} onClick={TabHandler}>Tvastra</button></li>
            </List>
            <JobContent currentTab={currentTab} />
        </Container>
    )
}

export default InteractiveMap

const Container = styled.div`
    grid-template-columns: 25% auto;
    max-width: 700px;
    width:100%;
    gap: 1rem;
    @media(max-width:600px){
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
`
const List = styled.ul`
@media(max-width:600px){
        flex-direction: row !important;
        justify-content: center;
        overflow-x: auto;
        width: calc(100% + 100px);
        padding-left: 50px;
        margin-left: -50px;
        margin-bottom: 30px;
    }
    @media(max-width:480px){
    width: calc(100% + 50px);
    padding-left: 25px;
    margin-left: -25px;
}
li{
    button{
        font-size: 12px;
        width: 9rem;
        border-left: 1px solid var(--bg-darkgray);
        padding: .9rem 0;
        transition: 300ms ease;
        outline: none;
        @media(max-width:600px){
            border-left: none;
            border-bottom: 1px solid var(--bg-darkgray);
        }

        &.active{
            color:var(--bg-green);
            border-left:2px solid var(--bg-green);
            @media(max-width:600px){
                border-left: none;
                border-bottom:2px solid var(--bg-green);
            }
        }

        &:hover{
            color: var(--bg-green);
            transition: 300ms ease;
            background-color: var(--bg-light-navy);
        }
        }
    }
`