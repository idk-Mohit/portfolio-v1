import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const data = "<strong>Hello</strong>"
    return (
        <Container className='section-container flex-column' id="work">
            <SectionHeader num={3}>Some Things I've Built</SectionHeader>
            <ProjectCard />
        </Container>
    )
}

export default Projects

const Container = styled.section``