import React, { useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ImLocation } from "react-icons/im"
// import Aos from "aos"
// import "aos/dist/aos.css"

import { Button } from "./Button"

const ImageCards = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageCardDataJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  function getImageCards(data) {
    const imageCardsArray = []
    data.allImageCardDataJson.edges.forEach((item, key) => {
      imageCardsArray.push(
        <ImageCard key={key}>
          <ImageCardImg
            alt={item.node.alt}
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ImageCardInfo>
            <TextWrap>
              <ImLocation />
              <ImageCardTitle>{item.node.name}</ImageCardTitle>
            </TextWrap>
            <Button
              to="/inspirations"
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
            >
              {item.node.button}
            </Button>
          </ImageCardInfo>
        </ImageCard>
      )
    })
    return imageCardsArray
  }

  return (
    <ImageCardContainer>
      <ImageCardHeading>{heading}</ImageCardHeading>
      <ImageCardWrapper>{getImageCards(data)}</ImageCardWrapper>
    </ImageCardContainer>
  )
}

export default ImageCards

const ImageCardContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: #fff;
`
const ImageCardHeading = styled.h1`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ImageCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`

const ImageCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`
const ImageCardImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const ImageCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`

const ImageCardTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
