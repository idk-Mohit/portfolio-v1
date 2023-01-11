import React from 'react'
import styled from 'styled-components'

const Close = ({ close }) => {
    return (
        <Container className='close-menu' onClick={close} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                // width="24" height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-x icon">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
        </Container>
    )
}

export default Close

const Container = styled.div`
    cursor: pointer;
`