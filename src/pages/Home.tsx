import React, { ReactElement } from 'react'
import { Lines, Line, ComponentSign, Component, Prop } from '@/components/Home'
import useApplyStyles from '@/hooks/useApplyStyles'
import styled from 'styled-components'
import { useAppSelector } from '@/components/Redux'

const Container = styled.div<{ loaded: boolean, delay: number }>`
  width: calc(100% - ${p => p.loaded ? '48' : '0'}px);
  height: calc(100% - ${p => p.loaded ? '35' : '0'}px);
  margin-left: ${p => p.loaded ? '48' : '0'}px;
  margin-top: ${p => p.loaded ? '35' : '0'}px;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1e1e1e;
  animation: ${p => p.loaded ? 'none' : `1s home-margin ease-in-out ${p.delay + 500}ms forwards`}};
`

function Home ({ blinkDuration, durationCh, initialDelay, loaded }: IHome): ReactElement<IHome> {
  const homeDelay = useAppSelector(state => state.delay)
  const ref = useApplyStyles({ blinkDuration, durationCh, initialDelay, loaded })
  console.log(loaded)

  return (
    <Container loaded={loaded} delay={homeDelay}>
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
    </Container>
  )
}

export default Home
