import React, { useEffect } from 'react'
import styled from 'styled-components'
import LoaderIcon from './loadericon.js'


const Loader = () => {
    useEffect(() => {
        document.querySelector("body").style.overflowY = "hidden";
        return () => {
            document.querySelector("body").style.overflowY = "auto";
        }
    }, [])
    return (
        <Container className='grid'>
            <LoaderIcon />
        </Container>
    )
}

export default Loader

const Container = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--bg-dark-navy);
    z-index: 10001;
    place-items: center;
`