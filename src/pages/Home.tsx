import React, { memo, ReactElement } from 'react'
import { Lines, Line, ComponentSign, Component, Prop } from '@/components/Home'
import useApplyStyles from '@/hooks/useApplyStyles'

const Home = memo(function Home ({ blinkDuration, durationCh, initialDelay, loaded, className }: IHome): ReactElement<IHome> {
  const ref = useApplyStyles({ blinkDuration, durationCh, initialDelay, loaded })

  return (
    <div className={`w-[100%] h-[100%] relative z-[5] flex justify-center items-center bg-[#1e1e1e] ${className}`}>
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
        <Line indent={2} blinkDuration={blinkDuration} loaded={loaded}>
          <Prop name='stack' type='string' value='MERN' />
        </Line>
        <Line forwards blinkDuration={blinkDuration} loaded={loaded}>
          <ComponentSign />
        </Line>
      </Lines>
    </div>
  )
})

export default Home
