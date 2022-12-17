import React, { forwardRef, ReactElement, useEffect, useRef } from 'react'

const delayBlink = 300
const durationCh = 75
const initialDelay = 500

function App (): ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let delay = initialDelay
    ref.current?.childNodes.forEach(e => {
      const elem = e as HTMLDivElement
      const length = elem.textContent!.length
      const animationDuration = durationCh * length
      elem.style.setProperty('--real-width', `${length}ch`)
      elem.style.animation = `write ${animationDuration}ms steps(${length}) forwards ${delay}ms`
      delay += animationDuration
    })
  }, [])

  return (
    <Lines ref={ref}>
      <Line>
        <ComponentSign open />
        <Component name='Sarudev' />
      </Line>
      <Line indent={2}>
        <Prop name='realName' type='string' value='Jose Coria' />
      </Line>
      <Line indent={2}>
        <Prop name='country' type='variable' value='argentinaFlag' />
      </Line>
      <Line indent={2}>
        <Prop name='age' type='number' value='19' />
      </Line>
      <Line>
        <ComponentSign />
      </Line>
    </Lines>
  )
}

const Lines = forwardRef<HTMLDivElement, { children: ReactElement | ReactElement[] }>(function lines ({ children }, ref) {
  return (
    <div className='w-[25ch]' ref={ref}>
      {children}
    </div>
  )
})

function Line ({ indent = 0, children }: { indent?: number, children: ReactElement | ReactElement[] }): ReactElement {
  return (
    <div className='w-0 overflow-hidden whitespace-nowrap'>{'\u00A0'.repeat(indent)}{ children }</div>
  )
}

function ComponentSign ({ open }: { open?: boolean }): ReactElement {
  return (
    <span className='text-[#808080]'>{open ? '<' : '/>'}</span>
  )
}

function Component ({ name }: { name: string }): ReactElement {
  return (
    <span className='text-[#4ec9b0]' id='sarudev'>{name}</span>
  )
}

function Prop ({ name, type, value }: { name: string, type: 'string' | 'number' | 'variable', value: string }): ReactElement {
  let propValue
  if (type === 'string') {
    propValue = <span className='text-[#ce9178]'>{`"${value}"`}</span>
  } else if (type === 'variable' || type === 'number') {
    propValue = <span className='text-[#569cd6]'>{'{'}<span className={type === 'variable' ? 'text-[#9cdcfe]' : 'text-[#b5cea8]'}>{value}</span>{'}'}</span>
  }

  return (
    <span className='text-[#9cdcfe]'>{name}<span className='text-[#d4d4d4]'>=</span>{propValue}</span>
  )
}

export default App
