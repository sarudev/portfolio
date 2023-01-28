import React, { ReactElement, useLayoutEffect, useRef } from 'react'
import pickHex from '@/helpers/pickHex'
import useTilt from '@/hooks/useTile'
import '../styles/routes/knowledge.scss'

function Card ({ icon, mainColor, secondaryColor, name, percentage, backgroundSize }: ICard): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const { onMouseMove, onMouseEnter, onMouseLeave, onClick } = useTilt({ styles: cardStyles })

  useLayoutEffect(() => {
    if (ref.current != null) {
      ref.current.style.setProperty('--outline-color', mainColor)
      ref.current.style.setProperty('--width', cardStyles.default.width)
      ref.current.style.setProperty('--height', cardStyles.default.height)
      ref.current.style.setProperty('--border-radius', cardStyles.default.borderRadius)
      ref.current.style.setProperty('--transition', cardStyles.default.transition)

      ref.current.style.setProperty('--bg-img-url', `url(${icon})`)
      ref.current.style.setProperty('--bg-size', backgroundSize)
      ref.current.style.setProperty('--after-translate', '25px')

      ref.current.style.setProperty('--first-width', mainColor)
      ref.current.style.setProperty('--first-hieght', `opacity ${timings[1]} ${bezier}, width ${timings[1]} ${bezier}, height ${timings[1]} ${bezier}, border-radius ${timings[1]} ${bezier}`)
      ref.current.style.setProperty('--first-border-radius', cardStyles.default.width)
      ref.current.style.setProperty('--first-outline-color', cardStyles.default.height)
      ref.current.style.setProperty('--first-transition', cardStyles.default.borderRadius)

      ref.current.style.setProperty('--last-outline-color', mainColor)
      ref.current.style.setProperty('--last-transition', `opacity ${timings[2]} ${bezier}, width ${timings[2]} ${bezier}, height ${timings[2]} ${bezier}, border-radius ${timings[2]} ${bezier}`)
      ref.current.style.setProperty('--last-text-shadow', `${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px, ${secondaryColor} 0 0 20px`)
      ref.current.style.setProperty('--last-width', cardStyles.default.width)
      ref.current.style.setProperty('--last-height', cardStyles.default.height)
      ref.current.style.setProperty('--last-border-radius', cardStyles.default.borderRadius)
    }
  }, [])

  const handleOnMouseMove = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    onMouseMove({ card: e.currentTarget, clientX: e.clientX, clientY: e.clientY })
  }
  const handleOnMouseEnter = (e: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>): void => {
    const card = e.currentTarget
    const cardChildren = card.childNodes as NodeListOf<HTMLElement>

    onMouseEnter(card)
    card.style.setProperty('--after-width', cardStyles.hover.width)
    card.style.setProperty('--after-height', cardStyles.hover.height)

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
    const cardChildren = card.childNodes as NodeListOf<HTMLElement>

    onMouseLeave(card)
    card.style.setProperty('--after-width', cardStyles.default.width)
    card.style.setProperty('--after-border-radius', cardStyles.default.borderRadius)
    card.style.setProperty('--after-height', cardStyles.default.height)
    card.style.setProperty('--after-translate', '25px')
    card.parentElement!.style.zIndex = cardStyles.default.zIndex

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
    const cardChildren = card.childNodes as NodeListOf<HTMLElement>
    const clicked = onClick(card)
    const currentState: 'hover' | 'clicked' = clicked
      ? 'clicked'
      : 'hover'

    card.parentElement!.style.zIndex = cardStyles[clicked ? 'hover' : 'default'].zIndex
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
    <div>
      <div
        ref={ref}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        onMouseEnter={handleOnMouseEnter}
        onClick={handleOnClick}
      >
        <div/>
        <div>
          <span style={{ color: mainColor }}>
            {name}
          </span>
          <span style={{ color: `rgba(${pickHex([0, 255, 0], [255, 0, 0], percentage / 100).join(', ')}, 7.5)` }}>
            {percentage}%
          </span>
        </div>
      </div>
    </div>
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
