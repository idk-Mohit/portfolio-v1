import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import sr, { srConfig } from '../../utils/srConfig';

const SectionHeader = ({ children }) => {
    const revealHeader = useRef(null);
    useEffect(() => {
        sr.reveal(revealHeader.current, srConfig(300))
    }, [])
    return (
        <Container ref={revealHeader}>
            <h2 className='flex'>{children}</h2>
        </Container >
    )
}

export default SectionHeader

const Container = styled.div`
    width: 100%;
    h2{
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
        @media(max-width:300px){
            white-space: pre-wrap;
        }
        &:before{
            bottom: 4px;
            position: relative;
            counter-increment: section;
            content: '0' counter(section) '.';
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
            max-width:300px;
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