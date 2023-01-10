import React from 'react'
import styled from 'styled-components'
import { Projects } from '../../../content/projectdata'
const ProjectCard = () => {
    const content = Projects.map((item, index) => {
        return <Card key={index} className="grid">
            <Content className='flex-column'>
                <span className='green'>Featured Project</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Title className='lgray'>{item.linkText}</Title>
                </a>
                <Description><p>{item.description}</p></Description>
            </Content>
            <Image>
                <a href={item.link} aria-label={`Visit my project (${item.linkText})`} target="_blank" rel="noopener noreferrer">
                    {/* <img src={} alt={item.linkText} /> */}
                </a>
            </Image>
        </Card>
    })
    return (
        <Container>
            {content}
        </Container>
    )
}

export default ProjectCard

const Container = styled.div`
    margin-top: 5rem;
    width: 100%;
`

const Card = styled.div`
    width:100%;
    grid-template-columns: repeat(6 , 1fr);
`
const Content = styled.div`
    grid-column-start: 3;
    grid-column-end: 6;
    gap:.5rem;
    align-items:flex-end;
    text-align:end;
`
const Title = styled.h4` 
    font-size:var(--font-med-heading);
    &:hover{
        color:var(--bg-green);
    }
`
const Description = styled.div`
    position:relative;
    max-width: 500px;
    background:var(--bg-light-navy);
    p{
        padding:25px;
    }
`
const Image = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    width: 100%;
    z-index: -1;
    img{
        width: 100%;
    }
`