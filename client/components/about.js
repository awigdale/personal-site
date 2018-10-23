import React, {Fragment} from 'react'
import styled from 'styled-components'
import {StyledTitle} from './styledComponents'

const StyledImg2 = styled.div`
  background-image: url('bw.jpg');
  background-size: cover;
  height: 35vh;
  width: 35vh;
  position: relative;
  left: 25vw;
  top: -40vh;
  border-radius: 50%;
`

const StyledP = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 100;
  width: 15vw;
  text-align: justify;
  position: relative;
  left: 54vw;
  height: 40vh;
  background: #f7f7f7;
  padding: 10px;
`
export const StyledDiv = styled.div`
  width: 70vw;
  position: relative;
  left: 15vw;
  padding: 10px;
  top: -25vh;
  overflow-y: hidden;
`
const About = () => {
  return (
    <StyledDiv>
      <StyledTitle>ABOUT ME</StyledTitle>
      <hr />
      <br />
      <StyledP>
        Hey there! I'm Abby. I'm an artist turned software developer through
        Fullstack Academy. Big fan of everything JavaScript. Looking for job
        opportunities in Los Angeles that allow me to combine art and software!
      </StyledP>
      <StyledImg2 />
      {/* <StyledImg /> */}
    </StyledDiv>
  )
}

export default About
