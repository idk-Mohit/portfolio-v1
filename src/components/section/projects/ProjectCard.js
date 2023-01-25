import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Projects } from '../../../content/projectdata'
import sr, { srConfig } from '../../../utils/srConfig'
import { Icons } from '../../icons/index'


const ProjectCard = () => {
    const revealProjects = useRef([]);

    useEffect(() => {
        revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
    }, [])
    const content = Projects.map((item, index) => {
        const { github, deploy } = item.footerLink;
        return <Card key={index} className="grid" ref={el => (revealProjects.current[index] = el)}>
            <Content className='flex-column project-content'>
                <span className='green'>Featured Project</span>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <Title className='lgray hover-line project-title'>{item.linkText}</Title>
                </a>
                <Description className='project-description transition'><p>{item.description}
                </p>
                </Description>
                <Tech className='flex project-tech'>
                    {item.tech.map((item, index) => (
                        <li key={index} className="gray">
                            {item}
                        </li>
                    ))}
                </Tech>
                <FooterLinks className='flex footer-links'>
                    <li><a href={github} target="_blank" aria-label={item.linkText} rel="noopener noreferrer"><span><Icons name='github' /></span></a></li>
                    <li><a href={deploy} target="_blank" aria-label={item.linkText} rel="noopener noreferrer"><span><Icons name='external' /></span></a></li>
                </FooterLinks>
            </Content>
            <ImageContainer className='project-image'>
                <a className='flex' href={item.link} aria-label={`Visit my project (${item.linkText})`} target="_blank" rel="noopener noreferrer">
                    <div className="image-wrapper">
                        <img src={item.image} alt={item.linkText} />
                        <picture>
                            <source media="(min-width: 1090px)" srcSet={item.image} sizes="" />
                            <source media="(max-width: 1080px)" srcSet={item.smallImage} sizes="" />
                            <img src={item.image} alt={item.linkText} />
                        </picture>
                    </div>
                </a>
            </ImageContainer>
        </Card>
    })
    return (
        <Container>
            {content}
        </Container>
    )
}

export default ProjectCard

const Container = styled.ul`
    margin-top: 1rem;
    width: 100%;
`

const Card = styled.div`
    position: relative;
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    
    &:not(:last-of-type) {
    margin-bottom: 100px;
    @media (max-width: 768px) {
      margin-bottom: 70px;
    }
    @media (max-width: 480px) {
      margin-bottom: 30px;
    }
  }

    &:nth-of-type(odd) {
        .project-content{
            grid-column: 7 / -1;
            text-align: right;

            @media (max-width: 1080px) {
            grid-column: 5 / -1;
            }
        }
        .project-tech{
            justify-content: flex-end;
            @media (max-width:768px) {
                justify-content: flex-start;
            }
        }
        .footer-links{
            justify-content: flex-end;
            margin-left: 0;
            @media(max-width:768px){
                justify-content: flex-start;
            }
        }

        .project-image {
            grid-column: 1 / 8;
        @media (max-width: 768px) {
            grid-column: 1 / -1;
        }
    }
    }
`
const Content = styled.div`
    row-gap: 0.4rem;
    padding: 1rem;
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
    z-index: 2;
    gap:.8rem;
    @media (max-width: 1080px) {
      grid-column: 1 / 9;
    }
    @media (max-width: 768px) {
      height: 100%;
      justify-content: center;
      padding: 40px 40px 30px;
      background-color: rgb(17,34,64,.9);
      text-align: left !important;
      grid-column: 1 / -1 !important;
    }
`
const Title = styled.h4` 
    font-weight: 800;
    font-size:var(--font-med-heading);
    &:hover{
        color:var(--bg-green);
    }
`
const Description = styled.div`
    position:relative;
    margin: .4rem 0;
    border-radius: 4px;
    background:var(--bg-light-navy);
    box-shadow: var(--shadow);
    p{
        padding:25px;
    }
    span{
        font-size: 12px;
    }
    &:hover,&:focus{
        box-shadow: var(--shadow-hover);
    }
    @media(max-width:768px){
        background: transparent;
        box-shadow: none;
        color: var(--bg-lgray);
        p{
            padding: 0;
        }
    }
`
const ImageContainer = styled.div`
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 100%;
    border-radius: 2px;

    a{
        width: inherit;
        height: inherit;
    }

    .image-wrapper{
        width:inherit;
        min-height: 26rem;
        overflow: hidden;
        position: relative;

        img{
            position: absolute;
            margin: auto;
            inset: 0px;
            max-width: 100%;
            max-height: 100%;
            transition: 300ms ease;
            filter:saturate(17%) brightness(95%) contrast(80%);
            
            &:hover{
                transition: 300ms ease;
                filter:saturate(100%) brightness(100%) contrast(100%) sepia(10%);
            }

            @media(max-width:768px){
                height: 100%;
                /* opacity: 0.25; */
                filter:saturate(100%) brightness(100%) contrast(100%) sepia(10%);
            }
        }
    }
    @media (max-width: 768px) {
        grid-column: 1 / -1;
        height: 100%;
    }
`
const Tech = styled.ul`
    width: 100%;
    column-gap: 1rem;
    row-gap: .5rem;
    flex-wrap: wrap;
    justify-content: flex-start;
    font-family: var(--font-mono);
    li{
        font-size: 13px;
        white-space: nowrap;
    }
`
const FooterLinks = styled.ul`
    gap: 1rem;
    margin-top: 10px;
    @media(max-width:768px){
        .feather{
            color:var(--bg-green);
        }
    }
`