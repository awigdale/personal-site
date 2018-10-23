import React from 'react'

import styled from 'styled-components'

const StyledName = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  position: fixed;
  letter-spacing: 0px;
  top: 0vh;
  left: 0vw;
  padding-top: 2vh;
  height: 5vh;
  margin: 0;
  font-weight: 100;
  z-index: 1;
  width: 100vw;
  background: white;
  text-align: center;
  color: #121f26;
`

const StyledImg = styled.img`
  height: 4vh;
  width: 4vh;
`
const StyledA = styled.a`
  position: fixed;
  top: 35vh;
  left: 8vw;
  z-index: 3;
`
const StyledB = styled(StyledA)`
  top: 42vh;
`

const StyledC = styled(StyledA)`
  top: 49vh;
`

const StyledBox = styled.div`
  width: 6vh;
  height: 66vh;
  background: #d8f900;
  position: fixed;
  top: 34vh;
  left: 7.5vw;
`

//#54707f

const Navbar = () => (
  <div>
    <StyledName>ABBY WIGDALE</StyledName>

    <StyledBox />
    <StyledA href="https://github.com/awigdale">
      <StyledImg src="/github.png" />
    </StyledA>
    <StyledB href="https://www.linkedin.com/in/abby-wigdale/">
      <StyledImg src="/linkedin.png" />
    </StyledB>
    <StyledC href="mailto:abby.wigdale@gmail.com">
      <StyledImg src="/email.png" />
    </StyledC>
  </div>
)

/**
 * CONTAINER
 */

export default Navbar
