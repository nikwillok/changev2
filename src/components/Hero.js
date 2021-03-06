import React, { useEffect } from "react"
import styled from "styled-components"
// import Aos from "aos"
// import "aos/dist/aos.css"

import { Button } from "./Button"

import Video from "../assets/videos/palm-tree-sunrise.mp4"

const Hero = () => {
  // useEffect(() => {
  //   Aos.init({})
  // }, [])

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
          // data-aos="fade-up"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          >
            Change in Ten Days
          </HeroH1>
          <HeroP
          // data-aos="fade-zoom-in"
          // data-aos-easing="ease-in-back"
          // data-aos-delay="300"
          // data-aos-offset="0"
          >
            Are You Living Your Best Life Now??
          </HeroP>
          <Button
            primary="true"
            big="true"
            round="true"
            to="/contact"
            // data-aos="fade-zoom-in"
            // data-aos-easing="ease-in-back"
            // data-aos-delay="300"
            // data-aos-offset="0"
          >
            Click to Change
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #3a3b3c;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(255, 255, 255, 0.8) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`
const HeroBg = styled.div`
  position: absolute;
  color: transparent;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #3a3b3c;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
