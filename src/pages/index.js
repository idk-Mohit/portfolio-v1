import "../styles/Reset.css"
import "../styles/Global.css"
import PropTypes from 'prop-types';
import React from 'react';
import { Hero, About, Experience, Projects, Contact, Layout } from '../components/index'
import { Seo } from "../utils/seo";
import styled from "styled-components";


const Home = ({ location }) => (
  <Layout location={location}>
    <Container className="fillHeight">
      <Hero />
      <About />
      <Experience />
      {/* <Featured /> */}
      <Projects />
      <Contact />
    </Container>
  </Layout>
)

export default Home;

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export const Head = () => <Seo title="idk-Mohit" />

const Container = styled.main`
  counter-reset: section;
`