import React from 'react'
import { SectionHeader } from '../index'
import styled from 'styled-components';
import { Fade } from 'react-reveal';

const About = () => {
    return (
        <Container className='section-container flex-column' id="about">
            <SectionHeader num={1}>About Me</SectionHeader>
            <Content>
                <Fade bottom delay={500}>
                    <p>Hello! My name is Mohit and I like creating things that live on the internet. I was in computers from early age. Started programming C++ in high school, learned java in<a href="https://srmuniversity.ac.in/" target="_blank" rel="noopener noreferrer"><span className="green"> college </span></a><span>&#8212;</span> witnessing the internet growing in our daily lives, I got into Web development.<br /><br />
                        Till date, I've dug deep into web development covering different technologies. Completed several <a href="#work"><span className="green">personal</span></a> and <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer"><span className="green"> freelance </span></a> projects working alone as well as collaborating with others.
                    </p>
                </Fade>
                <Fade bottom cascade delay={700}>
                    <TechUsed>
                        <h3>Here are a few technologies I’ve been working with recently:</h3>
                        <ul className='grid'>
                            <li><span>JavaScript (ES6+)</span></li>
                            <li><span>React</span></li>
                            <li><span>Redux</span></li>
                            <li><span>Node.js</span></li>
                            <li><span>MongoDB</span></li>
                            <li><span>Git</span></li>
                        </ul>
                    </TechUsed>
                </Fade>
            </Content>
        </Container>
    )
}

export default About

const Container = styled.section`
    gap:2rem;
`
const Content = styled.div`
    .dash{
        width: 30px;
        display: inline-block;
        align-self: center;
    }
    p{
        max-width: 540px;
        font-size: var(--font-para);
        word-spacing: -.5px;
    }
`

const TechUsed = styled.div`
    h3{
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