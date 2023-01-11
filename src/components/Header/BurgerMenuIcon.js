import React from 'react'
import styled from 'styled-components'

const BurgerMenuIcon = ({ openMenu }) => {
    return (
        <Wrapper onClick={openMenu} >
            <Container>
                <InnerContainer />
            </Container>
        </Wrapper>
    )
}

export default BurgerMenuIcon

const Wrapper = styled.button`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0px;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
`

const Container = styled.div`
    display: inline-block;
    position: relative;
    width: 30px;
    height: 24px;
`
const InnerContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 0px;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--bg-green);
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
    transform: rotate(0deg);
    &::before, &::after{
        content: "";
        display: block;
        position: absolute;
        left: auto;
        right: 0px;
        height: 2px;
        border-radius: 4px;
        background-color: var(--bg-green);
        transition-timing-function: ease;
        transition-duration: 0.15s;
        transition-property: transform;
    }
    &::before{
        width: 120%;
        top: -10px;
        opacity: 1;  
        transition: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
    }
    &::after{
        width: 80%;
        bottom: -10px;
        transform: rotate(0deg);
        transition: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);;
    }
`