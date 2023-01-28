import React from 'react'
import styled from 'styled-components'

const ButtonLoader = () => {
    return (
        <Container />
    )
}

export default ButtonLoader

const Container = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50px;
    margin: auto;
    border: 2px solid var(--bg-green-tint);
    border-top: 2px solid var(--bg-green);
    animation: Loader-spin 1s infinite;

    @keyframes Loader-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }   
`