import React from 'react'
import styled from 'styled-components'
import SectionHeader from '../SectionHeader'
import ProjectCard from './ProjectCard'

const Projects = () => {
    return (
        <Container id="work">
            <SectionHeader num={3}>Some Things I've Built</SectionHeader>
            <ProjectCard />
        </Container>
    )
}

export default Projects

const Container = styled.section`
    margin: 0px auto;
    padding: 120px 0px;
    max-width: 1000px;
`