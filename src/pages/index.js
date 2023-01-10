import "../styles/Reset.css"
import "../styles/Global.css"
import * as React from 'react';
import { Header, Hero, Footer, About, SocialIcons, Experience, Projects, Loader, Contact } from '../components/index'
import config from 'react-reveal/globals'


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
      <SocialIcons />
      <main className="main-container">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Home;

export const Head = () => <title>idk-Mohit</title>