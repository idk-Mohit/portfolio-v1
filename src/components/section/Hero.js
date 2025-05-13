import React, { useEffect, useState } from "react";
import Button from "../../UI/Button";
import styled from "styled-components";
import Resume from "../../Assets/Resume.pdf";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { loaderDelay, navDelay } from "../../utils/config";

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  const one = <span className="green greeting">Hi, my name is</span>;
  const two = <h1 className="lgray">Mohit.</h1>;
  const three = (
    <h2 className="gray">
      I craft seamless, high-performance web experiences.
    </h2>
  );
  const four = (
    <Brief>
      Full-Stack Developer with <span className="green">2.5</span> years of
      professional experience, blending creativity with efficiency to build
      blazing-fast, visually stunning interfaces. Adept at solving complex UI/UX
      challenges and architecting scalable web solutions.
      <br />
      <span className="green">Open for exciting opportunities</span>. Currently
      working at
      <a
        href="https://www.e-pspl.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong> PSPL</strong>.
      </a>
    </Brief>
  );
  const five = (
    <a href={Resume} target="_blank" rel="noopener noreferrer">
      <Button>Resume</Button>
    </a>
  );
  const items = [one, two, three, four, five];
  return (
    <Container className="section-container flex-column">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, index) => (
            <CSSTransition
              key={index}
              classNames="fadeup"
              timeout={loaderDelay}
            >
              <div style={{ transitionDelay: `${index + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  margin: 0 auto !important;
  padding-top: 0 !important;
  gap: 1.4rem;
  justify-content: center;
  h1,
  h2 {
    font-size: var(--font-heading);
    font-family: var(--font-cali-bold);
    letter-spacing: 0.5px;
  }
  h2 {
    font-family: var(--font-cali-regular);
    font-weight: 800;
    letter-spacing: none;
    margin-top: -10px;
    font-size: var(--font-sub-heading);
  }
  div {
    line-height: 1;
  }
  button {
    margin-bottom: 2rem;
  }
  .greeting {
    font-size: var(--font-note);
    font-family: var(--font-mono);
  }
  strong:hover {
    color: var(--bg-green);
  }
`;

const Brief = styled.p`
  max-width: 540px;
  font-size: var(--font-para);
  margin-top: -15px;
  word-break: keep-all;
`;
