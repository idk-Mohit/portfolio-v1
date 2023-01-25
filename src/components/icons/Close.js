import React from 'react'
import styled from 'styled-components'

const IconClose = ({ close }) => {
    return (
        <Container className='close-menu' onClick={close} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-x icon">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </Container >
    )
}

export default IconClose

const Container = styled.div`
    cursor: pointer;
    svg{
        width: inherit;
        height: inherit;
    }
`