import React, { useRef, useEffect } from "react";
import { SectionHeader } from "../index";
import styled from "styled-components";
import sr, { srConfig } from "../../utils/srConfig";
import tech from "../../content/tech";

const About = () => {
  const revealContainer = useRef(null);
  const revealContent = useRef(null);
  const revealtech = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
    sr.reveal(revealContent.current, srConfig());
    sr.reveal(revealtech.current, srConfig());
  }, []);
  return (
    <Container
      id="about"
      className="section-container flex-column"
      ref={revealContainer}
    >
      <SectionHeader num={1}>About Me</SectionHeader>
      <Content ref={revealContent}>
        <p>
          I thrive on building performant, scalable, and visually engaging web
          applications. My expertise spans frontend architecture, backend APIs,
          and system optimization, ensuring seamless user experiences.
          <br />
          <br />
          I’ve worked on production-grade projects, tackling UI/UX challenges,
          performance bottlenecks, and full-stack development while keeping
          scalability and maintainability at the core.
        </p>
        <TechUsed>
          <h2>Here are a few technologies I’ve been working with recently:</h2>
          <ul className="grid" ref={revealtech}>
            {tech.map((t, index) => (
              <li key={index}>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </TechUsed>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.section`
  gap: 2rem;
`;

const Content = styled.div`
  p {
    max-width: 540px;
    font-size: var(--font-para);
    word-spacing: -0.5px;
  }
  .dash {
    width: 30px;
    display: inline-block;
    align-self: center;
  }
  .hover-line {
    line-height: normal;
  }
`;

const TechUsed = styled.div`
  h2 {
    font-size: var(--font-para);
    margin-bottom: 25px;
  }
  margin: 20px 0;
  ul {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.8rem;
  }

  li {
    font-size: var(--font-note);
    &::before {
      content: "▹";
      color: var(--bg-green);
      margin-right: 5px;
    }
  }
`;
