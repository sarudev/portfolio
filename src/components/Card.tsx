import React, { ReactElement, CSSProperties } from 'react'
import pickHex from '@/helpers/pickHex'
import useTilt from '@/hooks/useTile'
import styled from 'styled-components'

function Card ({ icon, mainColor, secondaryColor, name, percentage, backgroundSize }: ICard): ReactElement {
  const { onMouseMove, onMouseEnter, onMouseLeave, onClick } = useTilt({ styles: cardStyles })

  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    onMouseMove({ card: e.currentTarget, clientX: e.clientX, clientY: e.clientY })
  }
  const handleOnMouseEnter = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    const card = e.currentTarget
    const cardChildren = card.childNodes! as NodeListOf<HTMLElement>

    onMouseEnter(card)
    card.style.setProperty('--after-width', cardStyles.hover.width)
    card.style.setProperty('--after-height', cardStyles.hover.height)
    setTimeout(() => {
      card.parentElement!.style.zIndex = cardStyles.hover.zIndex
    }, 150)

    cardChildren.forEach(child => {
      child.style.width = cardStyles.hover.width
      child.style.height = cardStyles.hover.height
      child.style.opacity = cardStyles.hover.opacity
      child.style.borderRadius = cardStyles.hover.borderRadius
      child.style.pointerEvents = cardStyles.hover.pointerEvents
    })
  }
  const handleOnMouseLeave = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    const card = e.currentTarget
    const cardChildren = card.childNodes! as NodeListOf<HTMLElement>

    onMouseLeave(card)
    card.style.setProperty('--after-width', cardStyles.default.width)
    card.style.setProperty('--after-border-radius', cardStyles.default.borderRadius)
    card.style.setProperty('--after-height', cardStyles.default.height)
    card.style.setProperty('--after-translate', '25px')
    setTimeout(() => {
      card.parentElement!.style.zIndex = cardStyles.default.zIndex
    }, 150)

    cardChildren.forEach(child => {
      child.style.width = cardStyles.default.width
      child.style.height = cardStyles.default.height
      child.style.opacity = cardStyles.default.opacity
      child.style.borderRadius = cardStyles.default.borderRadius
      child.style.pointerEvents = cardStyles.default.pointerEvents
    })
  }
  const handleOnClick = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    const card = e.currentTarget
    const cardChildren = card.childNodes! as NodeListOf<HTMLElement>
    const clicked = onClick(card)
    const currentState: 'hover' | 'clicked' = clicked
      ? 'clicked'
      : 'hover'

    card.style.setProperty('--after-width', cardStyles[currentState].width)
    card.style.setProperty('--after-height', cardStyles[currentState].height)
    card.style.setProperty('--after-border-radius', cardStyles[currentState].borderRadius)
    card.style.setProperty('--after-translate', clicked ? '0' : '25px')
    cardChildren.forEach(child => {
      child.style.width = cardStyles[currentState].width
      child.style.height = cardStyles[currentState].height
      child.style.opacity = cardStyles[currentState].opacity
      child.style.borderRadius = cardStyles[currentState].borderRadius
      child.style.pointerEvents = cardStyles[currentState].pointerEvents
    })
  }

  return (
    <ContainerStyled>
      <CardStyled
        mainColor={mainColor}
        icon={icon}
        backgroundSize={backgroundSize}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        onMouseEnter={handleOnMouseEnter}
        onClick={handleOnClick}
      >
        <div style={styles.firstChild(mainColor)}/>
        <div style={styles.lastChild(mainColor, secondaryColor)}>
          <span style={{ color: mainColor }}>
            {name}
          </span>
          <span style={{ color: `rgba(${pickHex([0, 255, 0], [255, 0, 0], percentage / 100)}, 7.5)` }}>
            {percentage}%
          </span>
        </div>
      </CardStyled>
    </ContainerStyled>
  )
}

export default Card

const timings = ['.25s', '.5s', '.75s']
const bezier = 'ease'
const transitions = ['width', 'height', 'border-radius'].map(t => `${t} ${timings[0]} ${bezier}`).join(', ')

const cardStyles = {
  default: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    transition: `transform ${timings[0]} ${bezier}, ${transitions}`,
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

const styles: { container: () => CSSProperties, card: (mainColor: string, icon: string, backgroundSize: string) => CSSProperties, firstChild: (mainColor: string) => CSSProperties, lastChild: (mainColor: string, secondaryColor: string) => CSSProperties } = {
  container: () => ({
    width: '200px',
    height: '200px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    perspective: '1200px'
  }),
  card: (mainColor, icon, backgroundSize) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: `1px ${mainColor} solid`,
    width: cardStyles.default.width,
    height: cardStyles.default.height,
    borderRadius: cardStyles.default.borderRadius,
    transition: cardStyles.default.transition,
    position: 'absolute',
    backgroundImage: `url(${icon})`,
    backgroundPosition: 'center',
    backgroundSize,
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
    transformStyle: 'preserve-3d',
    cursor: 'pointer'
  }),
  firstChild: (mainColor) => ({
    backdropFilter: 'blur(10px)',
    transform: 'translateZ(25px)',
    outline: `1px ${mainColor} solid`,
    transition: `opacity ${timings[1]} ${bezier}, width ${timings[1]} ${bezier}, height ${timings[1]} ${bezier}, border-radius ${timings[1]} ${bezier}`,
    width: cardStyles.default.width,
    height: cardStyles.default.height,
    borderRadius: cardStyles.default.borderRadius,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    userSelect: 'none'
  }),
  lastChild: (mainColor, secondaryColor) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transform: 'translateZ(50px)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    outline: `1px ${mainColor} solid`,
    transition: `opacity ${timings[2]} ${bezier}, width ${timings[2]} ${bezier}, height ${timings[2]} ${bezier}, border-radius ${timings[2]} ${bezier}`,
    textShadow: `${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px`,
    width: cardStyles.default.width,
    height: cardStyles.default.height,
    borderRadius: cardStyles.default.borderRadius,
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    userSelect: 'none'
  })
}

const ContainerStyled = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 10000px;
`

const CardStyled = styled.div<{ mainColor: string, icon: string, backgroundSize: string }>`
  outline: 1px ${props => props.mainColor} solid;
  position: absolute;
  width: ${cardStyles.default.width};
  height: ${cardStyles.default.height};
  border-radius: ${cardStyles.default.borderRadius};
  transition: ${cardStyles.default.transition};
  transform-style: preserve-3d;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  --after-width: ${cardStyles.default.width};
  --after-height: ${cardStyles.default.height};
  --after-border-radius: ${cardStyles.default.borderRadius};
  --after-translate: 25px;

  &::after {
    content: '';
    position: absolute;
    width: var(--after-width);
    height: var(--after-height);
    border-radius: var(--after-border-radius);
    transition: ${cardStyles.default.transition};
    background-image: url(${props => props.icon});
    background-position: center;
    background-size: ${props => props.backgroundSize};
    background-repeat: no-repeat;
    object-fit: cover;
    transform: translateZ(var(--after-translate));
  }
`
