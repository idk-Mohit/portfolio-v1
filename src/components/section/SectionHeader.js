import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import sr, { srConfig } from '../../utils/srConfig';

const SectionHeader = ({ children, num }) => {
    const revealHeader = useRef(null);
    useEffect(() => {
        sr.reveal(revealHeader.current, srConfig(300))
    }, [])
    return (
        <Container val={num} ref={revealHeader}>
            <h1 className='flex'>{children}</h1>
        </Container >
    )
}

export default SectionHeader

const Container = styled.div`
    width: 100%;
    h1{
        min-width: 400px;
        align-items: center;
        font-size: var(--font-med-heading);
        font-family: var(--font-cali-regular);
        font-weight: 800;
        color:var(--bg-lgray);
        position:relative;
        width:100%;
        white-space: nowrap;

        @media(max-width:768px){
            min-width: auto;
        }
        &:before{
            bottom: 2px;
            counter-increment: ${props => `section ${props.val}`};
            content: "0" counter(section) ".";
            margin-right: 10px;
            color: var(--bg-green);
            font-family: var(--font-mono);
            font-weight: 400;
            font-size: var(--font-para);
        }
        &:after{
            content: "";
            display: block;
            position: relative;
            top: -5px;
            width: 300px;
            height: 1px;
            margin-left: 20px;
            background-color: var(--bg-darkgray);

            @media (max-width: 1080px){
                width: 200px;
            }
            @media(max-width:768px){
                width:100%;
            }
        }
    }
   
`