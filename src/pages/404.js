import { Link } from "gatsby"
import * as React from "react"
import styled from "styled-components"
import { Footer, Header, SocialIcons } from "../components"
import Button from "../UI/Button"

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <Container className="section-container flex-column" id="pagenotfound">
          <h1 className="green">404</h1>
          <h3 className="lgray">Page Not Found</h3>
          <Link to={'/'}><Button>Go Home</Button></Link>
        </Container>
      </main>
      <Footer />

      {/* SocialIcons */}
      <SocialIcons />
    </>
  )
}

export default NotFoundPage

const Container = styled.div`
  justify-content: center;
  align-items: center !important;
  gap: 2rem;

  h1{
    font-size: 170px;
    line-height: .7;
  }
  h3{
    font-size: 45px;
  }

  @media (max-width:1024px){
    h1{
      font-size: 120px;
    }
  }

  @media (max-width:768px){
    h1{
      font-size: 90px;
    }
  }
`



export const Head = () => <title>Not found</title>
