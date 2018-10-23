import React from 'react'
import styled from 'styled-components'
import {StyledTitle} from './styledComponents'

const StyledDiv = styled.div`
  width: 70vw;
  position: relative;
  left: 15vw;
  padding: 10px;
  top: -50vh;
  overflow-y: hidden;
`
const StyledP = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 100;
  width: 40vw;
  text-align: justify;
  position: relative;
  left: 0vw;
  top: 0vh;
  background: #f7f7f7;
  padding: 10px;
`

const Skills = () => {
  return (
    <StyledDiv>
      <StyledTitle>SKILLS</StyledTitle>
      <hr />
      <br />
      <StyledP>
        TECHNOLOGIES
        <br />
        <br />
        JavaScript ∙ React ∙ Redux ∙ Node ∙ Express ∙ REST ∙ Sequelize ∙
        PostgreSQL ∙ HTML5 ∙ CSS3 ∙ Git ∙ Semantic UI ∙ Mocha ∙ Chai ∙ Waffle.io
      </StyledP>

      {/* <StyledImg /> */}
    </StyledDiv>
  )
}

export default Skills
