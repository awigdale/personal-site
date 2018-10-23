import React from 'react'
import styled from 'styled-components'
import {StyledTitle} from './styledComponents'

const StyledImg = styled.img`
  height: 35vh;
  margin-left: 50px;
  margin-top: 10px;
  position: relative;
  left: 45vw;
  top: -35vh;
`
const StyledWeb = styled.img`
  height: 35vh;
  position: relative;
  left: 43vw;
  top: -50vh;
`

const StyledP = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 12px;
  font-weight: 100;
  width: 40vw;
  text-align: justify;
  position: relative;
  left: 0vw;
  height: 25vh;
  background: #f7f7f7;
  padding: 10px;
`
const NewStyledP = styled(StyledP)`
  position: relative;
  top: -20vh;
`
const StyledHeading = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #121f26;
`
const StyledBookHeading = styled(StyledHeading)`
  position: relative;
  top: -20vh;
`
const StyledDiv = styled.div`
  width: 70vw;
  position: relative;
  left: 15vw;
  top: -40vh;
  padding: 10px;
  overflow-y: hidden;
  height: 100vh;
`

const Project = () => {
  return (
    <StyledDiv>
      <StyledTitle>PROJECTS</StyledTitle>
      <hr />
      <br />
      <StyledHeading>RADIUS</StyledHeading>
      <br />
      <StyledP>
        Radius is a user-driven responsive web application that helps users find
        and discover local restaurants.
        <br />
        <br />
        React ∙ Node ∙ Express ∙ PostgreSQL ∙ React-Map-Gl ∙ Deck.gl
        <br />
        <br />
        Used Google Places API and Yelp Fusion API to provide users with
        information
      </StyledP>
      <StyledImg src="radius1.jpg" />
      <StyledImg src="radius2.jpg" />
      <StyledBookHeading>BOOKSTACK</StyledBookHeading>
      <br />
      <NewStyledP>
        An ecommerce web application, in which users can browse, filter, and
        purchase books.
        <br />
        <br />
        React ∙ Node ∙ Express ∙ PostgreSQL ∙ Mocha ∙ Chai
        <br />
        <br />
        Implement REST API, tested with Mocha and Chai
        <br />
        <br />
        Designed the frontend using Semantic UI React with customizations in
        CSS3
        <br />
        <br />
        Team collaborated through Github, agile workflow with Waffle.io
      </NewStyledP>
      <StyledWeb src="bookstack.jpg" />
    </StyledDiv>
  )
}

export default Project
