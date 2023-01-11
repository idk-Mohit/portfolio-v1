import React from 'react'
import { Fade } from 'react-reveal';
import Button from '../../UI/Button';
import styled from 'styled-components';
import Resume from '../../Assets/Resume.pdf';


const Home = () => {
    return (
        <Container className='section-container flex-column'>
            <Fade cascade delay={4100}>
                <span className="green greeting">Hi, my name is</span>
            </Fade>
            <div className="headings flex-column">
                <Fade cascade delay={4200}>
                    <h1 className="lgray">Mohit.</h1>
                </Fade>
                <Fade delay={4300}>
                    <div>
                        <h2 className="gray">I build things for the web.</h2>
                    </div>
                </Fade>
            </div>
            <Fade cascade delay={4400} duration={1500} opposite>
                <Brief>
                    I’m a Web Developer specializing in building fast, attractive
                    digital experiences. Currently, I’m focused on building
                    Personal and freelance projects. And Available for opportunities.
                </Brief>
            </Fade>
            <Fade delay={4500}>
                <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <Button>Resume</Button>
                </a>
            </Fade>
        </Container >
    )
}

export default Home

const Container = styled.section`
    height: 100vh;
    gap: 1.8rem;
    .headings{
        gap: .4rem;
        justify-content: center;
        h1,h2{
            font-size: var(--font-heading);
            font-family: var(--font-cali-bold);
            letter-spacing: .5px;
        }
        h2{
            font-family: var(--font-cali-regular);
            font-weight: 800;
            letter-spacing: none;
        }
    }
    button{
        margin-bottom: 2rem;
    }
    .greeting{
        font-size: var(--font-note);
        font-family: var(--font-mono);
    }
`

const Brief = styled.p`
    max-width: 540px;
    font-size: var(--font-para);
    margin-top: -15px;
    word-break: keep-all;
`