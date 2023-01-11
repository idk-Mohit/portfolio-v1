import "../styles/Reset.css"
import "../styles/Global.css"
import * as React from 'react';
import { Header, Footer, Hero, About, SocialIcons, Experience, Projects, Loader, Contact } from '../components/index'
import config from 'react-reveal/globals'
import { Seo } from "../utils/seo";


const Home = () => {
  const [Loading, setLoading] = React.useState(true);
  config({ ssrFadeout: true });

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <>
      {Loading && <Loader />}
      <Header />
      <main className="main-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <SocialIcons />
      <Footer />
    </>
  )
}

export default Home;

export const Head = () => <Seo title="idk-Mohit" />