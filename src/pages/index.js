import "../styles/Reset.css"
import "../styles/Global.css"
import PropTypes from 'prop-types';
import React, { lazy, Suspense } from 'react';
import { Seo } from "../utils/seo";
import styled from "styled-components";
import { Hero, Layout } from '../components/index'
import LoaderIcon from "../UI/loadericon";
const About = lazy(() => import('../components/section/About'))
const Projects = lazy(() => import('../components/section/projects/Projects'))
const Experience = lazy(() => import('../components/section/experience/Experience'))
const Contact = lazy(() => import('../components/section/contact/Contact'))


const Home = ({ location }) => (
  <Layout location={location}>
    <Container className="fillHeight">
      <Hero />
      <Suspense fallback={<LoaderIcon />}>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </Container>
  </Layout >
)

export default Home;

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export const Head = () => <Seo title="idk-Mohit" />

const Container = styled.main`
  counter-reset: section;
`