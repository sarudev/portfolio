import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import react from '../assets/react.svg'

const CardContainer = styled.div`
  padding: 100px 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: space-evenly;
`

function Skills (): ReactElement {
  return (
    <CardContainer>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
      <Card icon={react}/>
    </CardContainer>
  )
}

export default Skills

const RealContainer = styled.div`
  outline: 1px red solid;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  outline: 1px green solid;
  perspective: 1200px;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  transition: width .25s ease-in-out, height .25s ease-in-out, border-radius .25s ease-in-out;
`

const CardStyled = styled.div<{ icon: string }>`
  outline: 1px yellow solid;
  width: 200px;
  height: 200px;
  position: relative;
  background-image: url(${props => props.icon});
  background-position: center;
  background-size: 100%;
  border-radius: 50%;
  object-fit: cover;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width .25s ease-in-out, height .25s ease-in-out, border-radius .25s ease-in-out;
`

function Card ({ icon }: { icon: string }): ReactElement {
  const [clicked, setClicked] = useState(false)

  return (
    <RealContainer>
      <Container
        onMouseMove={(e) => {
          const container = e.currentTarget
          const card = container.firstChild! as HTMLDivElement

          const xCoord = e.clientX - container.getBoundingClientRect().left
          const yCoord = e.clientY - container.getBoundingClientRect().top
          const xAxis = (container.clientWidth / 2 - xCoord) / (clicked ? 10 : 4)
          const yAxis = (container.clientHeight / 2 - yCoord) / (clicked ? 10 : 4)

          card.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`
        }}
        onMouseLeave={(e) => {
          const container = e.currentTarget
          const card = container.firstChild! as HTMLDivElement

          card.style.width = '200px'
          card.style.height = '200px'
          card.style.borderRadius = '50%'
          card.style.transition = 'transform .25s ease-in-out, width .25s ease-in-out, height .25s ease-in-out, border-radius .25s ease-in-out'
          card.style.transform = 'none'

          container.style.borderRadius = '50%'
          container.style.width = '200px'
          container.style.height = '200px'
          container.style.zIndex = '0'

          setClicked(false)
        }}
        onMouseEnter={(e) => {
          const container = e.currentTarget
          const card = container.firstChild! as HTMLDivElement

          card.style.transition = 'width .25s ease-in-out, height .25s ease-in-out, border-radius .25s ease-in-out'
          card.style.width = '250px'
          card.style.height = '250px'

          container.style.width = '250px'
          container.style.height = '250px'
        }}
        onClick={(e) => {
          const container = e.currentTarget
          const card = container.firstChild! as HTMLDivElement

          if (clicked) {
            card.style.width = '250px'
            card.style.height = '250px'
            card.style.borderRadius = '50%'

            container.style.width = '250px'
            container.style.height = '250px'
            container.style.borderRadius = '50%'
          } else {
            card.style.width = '400px'
            card.style.height = '400px'
            card.style.borderRadius = '20px'

            container.style.width = '400px'
            container.style.height = '400px'
            container.style.borderRadius = '20px'
          }
          container.style.zIndex = '5'
          setClicked(c => !c)
        }}
      >
        <CardStyled icon={icon}>

        </CardStyled>
      </Container>
    </RealContainer>
  )
}
