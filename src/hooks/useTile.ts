function useTilt ({ styles, config, debug }: IUseTiltConfig = { styles: {}, config: {}, debug: {} }): IUseTilt {
  const tiltDebug = {
    styles: {
      timing: '.25s',
      bezier: 'ease-in-out'
    },
    ...debug
  }
  const cardStyles = {
    default: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      transition: `transform ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, width ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, height ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, border-radius ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}`
    },
    hover: {
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      transition: `width ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, height ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, border-radius ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}`
    },
    clicked: {
      width: '400px',
      height: '400px',
      borderRadius: '20px',
      transition: `width ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, height ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}, border-radius ${tiltDebug.styles.timing} ${tiltDebug.styles.bezier}`
    },
    ...styles
  }
  const tiltConfig = {
    clickedHoverMultiplier: 0.1,
    defaultHoverMulitplier: 0.25,
    inverted: false,
    ...config
  }
  let clicked = false

  const onMouseMove = ({ card, clientX, clientY }: { card: HTMLDivElement, clientX: number, clientY: number }): boolean => {
    const multiplier = clicked ? tiltConfig.clickedHoverMultiplier : tiltConfig.defaultHoverMulitplier
    const inverter = tiltConfig.inverted ? [1, -1] : [-1, 1]
    const xCoord = clientX - card.getBoundingClientRect().left
    const yCoord = clientY - card.getBoundingClientRect().top
    const xAxis = (card.clientWidth / 2 - xCoord) * multiplier * inverter[0]
    const yAxis = (card.clientHeight / 2 - yCoord) * multiplier * inverter[1]

    card.style.transform = `rotateX(${yAxis}deg) rotateY(${xAxis}deg)`

    return clicked
  }
  const onMouseEnter = (card: HTMLDivElement): boolean => {
    card.style.transition = cardStyles.hover.transition
    card.style.width = cardStyles.hover.width
    card.style.height = cardStyles.hover.height
    card.style.borderRadius = cardStyles.hover.borderRadius

    return clicked
  }
  const onMouseLeave = (card: HTMLDivElement): boolean => {
    card.style.transition = cardStyles.default.transition
    card.style.width = cardStyles.default.width
    card.style.height = cardStyles.default.height
    card.style.borderRadius = cardStyles.default.borderRadius
    card.style.transform = 'none'

    clicked = false

    return clicked
  }
  const onClick = (card: HTMLDivElement): boolean => {
    const currentState: 'hover' | 'clicked' = clicked
      ? 'hover'
      : 'clicked'

    card.style.width = cardStyles[currentState].width
    card.style.height = cardStyles[currentState].height
    card.style.borderRadius = cardStyles[currentState].borderRadius

    clicked = !clicked

    return clicked
  }

  return {
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
    onClick
  }
}

export default useTilt
