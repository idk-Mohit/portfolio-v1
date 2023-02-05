import React from 'react'
import styled from 'styled-components'

const Button = ({ children }) => {
    return (
        <Container className='transistion'>
            {children}
        </Container>
    )
}

export default Button

const Container = styled.button`
  padding: .6rem 1.5rem;
  border: 1px solid var(--bg-green);
  background: transparent;
  font-size: 14px;
  color:var(--bg-green);
  border-radius: 4px;
  font-family: var(--font-mono);

  &:hover{
    cursor: pointer;
    background: var(--bg-green-tint);
  }
`
