import React from "react"
import styled from "styled-components"
import Circles from "../Animations/Circles"

const CourseCard = () => {
  return (
    <Wrapper className="course-card">
      <AnimationWrapper>
        <Circles />
      </AnimationWrapper>
      <Illustration
        src="/images/illustrations/illustration-1.png"
        alt="Illustration"
      />
    </Wrapper>
  )
}

export default CourseCard

const Wrapper = styled.div`
  position: relative;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  max-width: 360px;
  height: 480px;
  background: linear-gradient(200.42deg, #ff8570 13.57%, #f9504a 98.35%);
  border-radius: 20px;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.25);
`

const AnimationWrapper = styled.div`
  position: absolute;
  width: 360px;
  padding-top: 30px;
  overflow: hidden;
  mix-blend-mode: overlay;
`

const Illustration = styled.img`
  width: 300px;
`
