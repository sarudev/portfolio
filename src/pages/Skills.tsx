import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import react from '../assets/react.svg'
import javascript from '../assets/javascript.svg'
import typescript from '../assets/typescript.svg'

const CardContainer = styled.div`
  padding: 120px 120px;
  display: flex;
  flex-wrap: wrap;
  align-items: space-evenly;
  justify-content: space-evenly;
`

function Skills (): ReactElement {
  return (
    <CardContainer>
      <Card icon={react} name={'React'} percentage={0} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={8} mainColor={'#FF0'} secondaryColor={'black'}/>
      <Card icon={typescript} name={'Typescript'} percentage={16} mainColor={'#007acc'} secondaryColor={'black'}/>
      <Card icon={react} name={'React'} percentage={24} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={32} mainColor={'#FF0'} secondaryColor={'black'}/>
      <Card icon={typescript} name={'Typescript'} percentage={40} mainColor={'#007acc'} secondaryColor={'black'}/>
      <Card icon={react} name={'React'} percentage={48} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={56} mainColor={'#FF0'} secondaryColor={'black'}/>
      <Card icon={typescript} name={'Typescript'} percentage={64} mainColor={'#007acc'} secondaryColor={'black'}/>
      <Card icon={react} name={'React'} percentage={72} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={80} mainColor={'#FF0'} secondaryColor={'black'}/>
      <Card icon={typescript} name={'Typescript'} percentage={88} mainColor={'#007acc'} secondaryColor={'black'}/>
      <Card icon={react} name={'React'} percentage={92} mainColor={'#0FF'} secondaryColor={'black'}/>
      <Card icon={javascript} name={'Javascript'} percentage={100} mainColor={'#FF0'} secondaryColor={'black'}/>
    </CardContainer>
  )
}

export default Skills
const timing = '.25s'
const bezier = 'ease-in-out'
const transitions = ['width', 'height', 'border-radius'].map(t => `${t} ${timing} ${bezier}`).join(', ')

const cardStyles = {
  default: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    transition: `transform ${timing} ${bezier}, ${transitions}`,
    opacity: '0',
    zIndex: '0',
    pointerEvents: 'none'
  },
  hover: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    transition: transitions,
    opacity: '0',
    zIndex: '5',
    pointerEvents: 'none'
  },
  clicked: {
    width: '400px',
    height: '400px',
    borderRadius: '20px',
    transition: transitions,
    opacity: '1',
    zIndex: '0',
    pointerEvents: 'all'
  }
}

const Container = styled.div`
  // outline: 1px red solid;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1200px;
`

const CardStyled = styled.div<{ icon: string, mainColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 1px ${props => props.mainColor} solid;
  width: ${cardStyles.default.width};
  height: ${cardStyles.default.height};
  border-radius: ${cardStyles.default.borderRadius};
  backdrop-filter: blur(10px);
  position: absolute;
  background-image: url(${props => props.icon});
  background-position: center;
  background-size: 100%;
  transform-style: preserve-3d;
  object-fit: cover;
`

function pickHex (start: [number, number, number], end: [number, number, number], position: number): [number, number, number] {
  const w1 = position
  const w2 = 1 - w1
  return [Math.round(start[0] * w1 + end[0] * w2), Math.round(start[1] * w1 + end[1] * w2), Math.round(start[2] * w1 + end[2] * w2)]
}

const card = {
  width: '100%',
  height: '100%',
  transform: 'translateZ(50px)',
  position: 'absolute' as 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  transition: `opacity ${timing} ${bezier}`
}

function Card ({ icon, mainColor, secondaryColor, name, percentage }: ICard): ReactElement {
  const [clicked, setClicked] = useState(false)

  return (
    <Container>
      <div
        onMouseMove={(e) => {
          const card = e.currentTarget

          const xCoord = e.clientX - card.getBoundingClientRect().left
          const yCoord = e.clientY - card.getBoundingClientRect().top
          const xAxis = (card.clientWidth / 2 - xCoord) / (clicked ? 10 : 4)
          const yAxis = (card.clientHeight / 2 - yCoord) / (clicked ? 10 : 4)

          card.style.transform = `rotateX(${yAxis}deg) rotateY(${-xAxis}deg)`
        }}
        onMouseLeave={(e) => {
          const card = e.currentTarget
          const cardChildren = card.childNodes! as NodeListOf<HTMLElement>

          card.style.transition = cardStyles.default.transition
          card.style.width = cardStyles.default.width
          card.style.height = cardStyles.default.height
          card.style.borderRadius = cardStyles.default.borderRadius
          card.style.transform = 'none'
          setTimeout(() => {
            card.parentElement!.style.zIndex = cardStyles.default.zIndex
          }, 150)

          cardChildren.forEach(child => {
            child.style.opacity = cardStyles.default.opacity
            child.style.borderRadius = cardStyles.default.borderRadius
            child.style.pointerEvents = cardStyles.default.pointerEvents
          })

          setClicked(false)
        }}
        onMouseEnter={(e) => {
          const card = e.currentTarget
          const cardChildren = card.childNodes! as NodeListOf<HTMLElement>

          card.style.transition = cardStyles.hover.transition
          card.style.width = cardStyles.hover.width
          card.style.height = cardStyles.hover.height
          card.style.borderRadius = cardStyles.hover.borderRadius
          setTimeout(() => {
            card.parentElement!.style.zIndex = cardStyles.hover.zIndex
          }, 150)

          cardChildren.forEach(child => {
            child.style.opacity = cardStyles.hover.opacity
            child.style.borderRadius = cardStyles.hover.borderRadius
            child.style.pointerEvents = cardStyles.hover.pointerEvents
          })
        }}
        onClick={(e) => {
          const card = e.currentTarget
          const cardChildren = card.childNodes! as NodeListOf<HTMLElement>
          const currentState: 'hover' | 'clicked' = clicked
            ? 'hover'
            : 'clicked'

          card.style.width = cardStyles[currentState].width
          card.style.height = cardStyles[currentState].height
          card.style.borderRadius = cardStyles[currentState].borderRadius

          cardChildren.forEach(child => {
            child.style.opacity = cardStyles[currentState].opacity
            child.style.borderRadius = cardStyles[currentState].borderRadius
            child.style.pointerEvents = cardStyles[currentState].pointerEvents
            child.style.pointerEvents = cardStyles[currentState].pointerEvents
          })

          setClicked(c => !c)
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          outline: `1px ${mainColor} solid`,
          width: cardStyles.default.width,
          height: cardStyles.default.height,
          borderRadius: cardStyles.default.borderRadius,
          position: 'absolute',
          backgroundImage: `url(${icon})`,
          backgroundPosition: 'center',
          backgroundSize: '100%',
          objectFit: 'cover',
          transformStyle: 'preserve-3d',
          cursor: 'pointer'
        }}
      >
        <div style={{
          ...card,
          backdropFilter: 'blur(10px)',
          transform: 'translateZ(50px)'
        }}/>
        <div style={{
          ...card,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: 'translateZ(100px)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textShadow: `${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px`
        }}>
          <span style={{ color: mainColor }}>
            {name}
          </span>
          <span style={{ color: `rgba(${pickHex([0, 255, 0], [255, 0, 0], percentage / 100)}, 7.5)` }}>
            {percentage}%
          </span>
        </div>
      </div>
    </Container>
  )
}
