import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import JobContent from "./JobContent";
import sr, { srConfig } from "../../../utils/srConfig";

const InteractiveMap = () => {
  const [currentTab, setCurrentTab] = useState("0");
  const revealTabs = useRef(null);

  const TabHandler = (e) => {
    setCurrentTab(e.target.parentElement.id);
  };

  useEffect(() => {
    sr.reveal(revealTabs.current, srConfig());
  }, []);

  return (
    <Container className="grid">
      <List className="flex-column" ref={revealTabs}>
        {[
          "PC Solution",
          "Exalens",
          "Shree Jewelry",
          "Ag Consultant",
          "Tvastra",
        ].map((label, index) => (
          <li
            key={index}
            className="tab-item"
            id={index.toString()}
            aria-hidden={currentTab !== index.toString()}
          >
            <button
              onKeyDown={TabHandler}
              onClick={TabHandler}
              className={currentTab === index.toString() ? "active" : ""}
            >
              {label}
            </button>
          </li>
        ))}
      </List>
      <JobContent currentTab={currentTab} />
    </Container>
  );
};

export default InteractiveMap;

const Container = styled.div`
  grid-template-columns: 25% auto;
  max-width: 700px;
  width: 100%;
  gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const List = styled.ul`
  @media (max-width: 600px) {
    flex-direction: row !important;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 30px;
  }

  li {
    button {
      font-size: 12px;
      width: 9rem;
      border-left: 1px solid var(--bg-darkgray);
      padding: 0.9rem 0;
      transition: 300ms ease;
      outline: none;
      @media (max-width: 600px) {
        border-left: none;
        border-bottom: 1px solid var(--bg-darkgray);
      }

      &.active {
        color: var(--bg-green);
        border-left: 2px solid var(--bg-green);
        @media (max-width: 600px) {
          border-left: none;
          border-bottom: 2px solid var(--bg-green);
        }
      }

      &:hover {
        color: var(--bg-green);
        transition: 300ms ease;
        background-color: var(--bg-light-navy);
      }
    }
  }
`;
