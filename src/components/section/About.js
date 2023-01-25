import React, { useRef, useEffect } from 'react'
import { SectionHeader } from '../index'
import styled from 'styled-components';
import sr, { srConfig } from '../../utils/srConfig';

const About = () => {
    const revealContainer = useRef(null);
    const revealContent = useRef(null);
    const revealtech = useRef(null);
    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig());
        sr.reveal(revealContent.current, srConfig());
        sr.reveal(revealtech.current, srConfig());
    }, [])
    return (
        <Container id="about" className='section-container flex-column' ref={revealContainer}>
            <SectionHeader num={1}>About Me</SectionHeader>
            <Content ref={revealContent}>
                <p>Hello! My name is Mohit and I like creating things that live on the internet. I was in computers from early age. Started programming C++ in high school, learned java in <a href="https://srmuniversity.ac.in/" target="_blank" rel="noopener noreferrer"><span className="green hover-line"> college </span></a><span> &#8212;</span> witnessing the internet growing in our daily lives, I got into Web development.<br /><br />
                    Till date, I've dug deep into web development covering different technologies. Completed several <a href="#work"><span aria-label='Click to see my personal projects.' className="green hover-line">personal</span></a> and <a href="/#" aria-label='Click to see my freelance project.' target="_blank" rel="noopener noreferrer"><span className="green hover-line"> freelance </span></a> projects working alone as well as collaborating with others.
                </p>
                <TechUsed>
                    <h2>Here are a few technologies I’ve been working with recently:</h2>
                    <ul className='grid' ref={revealtech}>
                        <li><span>JavaScript (ES6+)</span></li>
                        <li><span>React</span></li>
                        <li><span>Redux</span></li>
                        <li><span>Node.js</span></li>
                        <li><span>MongoDB</span></li>
                        <li><span>Git</span></li>
                    </ul>
                </TechUsed>
            </Content>
        </Container >
    )
}

export default About

const Container = styled.section`
    gap:2rem;
`

const Content = styled.div`
    p{
        max-width: 540px;
        font-size: var(--font-para);
        word-spacing: -.5px;
    }
    .dash{
        width: 30px;
        display: inline-block;
        align-self: center;
    }
    .hover-line{
        line-height: normal;
    }
`

const TechUsed = styled.div`
    h2{
        font-size: var(--font-para);
        margin-bottom: 15px;
    }
    margin: 20px 0;
    ul{
        grid-template-columns: 1fr 1fr;
        gap: .8rem;
    }

    li {
        font-size: var(--font-note);
        &::before{
            content:"▹";
            color:var(--bg-green);
            margin-right:5px;
        }
    }
`