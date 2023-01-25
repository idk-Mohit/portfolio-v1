import React, { useEffect, useState } from 'react'
import Button from '../../UI/Button';
import styled from 'styled-components';
import Resume from '../../Assets/Resume.pdf';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { loaderDelay, navDelay } from '../../utils/config';

const Home = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), navDelay);
        return () => clearTimeout(timeout);
    }, []);
    const one = <span className="green greeting">Hi, my name is</span>;
    const two = <h1 className="lgray">Mohit.</h1>;
    const three = <h2 className="gray">I build things for the web.</h2>;
    const four = <Brief>
        I’m a Web Developer specializing in building fast, attractive
        digital experiences. Currently, I’m focused on building
        Personal and freelance projects. And Available for opportunities.
    </Brief>
    const five = <a href={Resume} target="_blank" rel="noopener noreferrer">
        <Button>Resume</Button>
    </a>
    const items = [one, two, three, four, five];
    return (
        <Container className='section-container flex-column'>
            <TransitionGroup component={null}>
                {isMounted &&
                    items.map((item, index) => (
                        <CSSTransition key={index} classNames="fadeup" timeout={loaderDelay}>
                            <div style={{ transitionDelay: `${index + 1}00ms` }}>{item}</div>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>
        </Container >
    )
}

export default Home

const Container = styled.section`
    height: 100vh;
    min-height: 100vh;
    gap: 1.4rem;
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
        margin-top: -10px;
    }
    div{
        line-height: 1;
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