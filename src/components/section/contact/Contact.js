import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <Container className='section-container flex' id="contact">
            <h6 className='green'>Work In Progress !!</h6>
        </Container>
    )
}

export default Contact

const Container = styled.section`
    justify-content:center;
    align-items: center !important;

    h6{
        font-size: var(--font-heading);
    }
`