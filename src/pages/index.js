import "../styles/Reset.css"
import "../styles/Global.css"
import * as React from 'react';
import { Header, Hero, Footer, About, SocialIcons, Experience, Projects, Contact } from '../components/index'
import config from 'react-reveal/globals'


const Home = () => {

  config({ ssrFadeout: true });
  return (
    <>
      <Header />
      <main className="main-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* SocialIcons */}
      <SocialIcons />
    </>
  )
}

export default Home;

export const Head = () => <title>Gatsby Crash Course</title>