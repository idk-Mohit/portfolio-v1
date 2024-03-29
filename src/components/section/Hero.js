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
  const three = <h2 className="gray">I build things for the web.</h2>;
  const four = (
    <Brief>
      Passionate frontend developer adept at creating lightning-fast, visually
      appealing web experiences. Skilled in translating designs into clean,
      efficient code, solving complex UI challenges. Currently, I’m working as a
      Frontend Engineer at&nbsp;
      <a
        href="https://www.exalens.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="green hover-line">Exalens.</span>
      </a>{" "}
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
`;

const Brief = styled.p`
  max-width: 540px;
  font-size: var(--font-para);
  margin-top: -15px;
  word-break: keep-all;
`;
