import React, {Fragment} from 'react'
import styled from 'styled-components'
import {StyledDiv} from './styledComponents'
import {About, Skills, Project} from './index'

const StyledPlant = styled.div`
  position: absolute;
  top: 0vh;
  left: 93vw;
  width: 20vw;
  height: 90vh;
  background-image: url('plants.jpg');
  opacity: 0.9;
  background-size: cover;
  z-index: 1;
`

const StyledBold = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 180px;
  letter-spacing: -5px;
  font-weight: 800;
  width: 70vw;
  left: 15vw;
  top: 10vh;
  color: #047c78;
  opacity: 0.5;
  position: relative;
`
const StyledBold2 = styled(StyledBold)`
  top: -10vh;
`
const StyledBold3 = styled(StyledBold)`
  top: -30vh;
`

const HomePage = () => {
  return (
    <Fragment>
      <StyledBold>Developer.</StyledBold>
      <StyledBold2>Artist.</StyledBold2>
      <StyledBold3>Innovator.</StyledBold3>
      {/* <StyledPlant /> */}
      {/* <StyledPic /> */}
      <About />
      <Skills />
      {/* <StyledProjectBox /> */}
      <Project />
    </Fragment>
  )
}

export default HomePage
