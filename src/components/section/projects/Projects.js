import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Container className='section-container flex-column' id="work">
            <SectionHeader num={3}>Some Things I've Built</SectionHeader>
            <ProjectCard />
        </Container>
    )
}

export default Projects

const Container = styled.section`
    /* min-height: auto !important; */
    height: auto !important;
`