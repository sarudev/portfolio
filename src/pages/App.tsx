import React, { ReactElement } from 'react'
import { Lines, Line, ComponentSign, Component, Prop } from '../components/Home'
import useApplyStyles from '../hooks/useApplyStyles'

const blinkDuration = 500
const durationCh = 150
const initialDelay = 1500
const loaded = false

function App (): ReactElement {
  const ref = useApplyStyles({ blinkDuration, durationCh, initialDelay, loaded })

  return (
    <Lines ref={ref}>
      <Line blinkDuration={blinkDuration} loaded={loaded}>
        <ComponentSign open />
        <Component name='Sarudev' />
      </Line>
      <Line indent={2} blinkDuration={blinkDuration} loaded={loaded}>
        <Prop name='realName' type='string' value='Jose Coria' />
      </Line>
      <Line indent={2} blinkDuration={blinkDuration} loaded={loaded}>
        <Prop name='country' type='variable' value='argentinaFlag' />
      </Line>
      <Line indent={2} blinkDuration={blinkDuration} loaded={loaded}>
        <Prop name='age' type='number' value='19' />
      </Line>
      <Line forwards blinkDuration={blinkDuration} loaded={loaded}>
        <ComponentSign />
      </Line>
    </Lines>
  )
}

export default App
