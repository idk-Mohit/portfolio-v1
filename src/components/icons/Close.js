import React from 'react'
import styled from 'styled-components'

const Close = ({ close }) => {
    return (
        <Container className='close-menu' onClick={close} >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x">
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