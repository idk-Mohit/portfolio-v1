import React from 'react'
import styled from 'styled-components'
import { SectionHeader, InteractiveMap } from '../../index'

const Experience = () => {
    return (
        <Container className='section-container flex-column' id='experience'>
                <SectionHeader num={2}>Experience</SectionHeader>
            <InteractiveMap />
        </Container>
    )
}

export default Experience

const Container = styled.section`
    gap:2rem;
`
