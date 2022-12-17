import React, { ReactElement } from 'react'

function App (): ReactElement {
  return (
    <Lines>
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

function Lines ({ children }: { children: ReactElement | ReactElement[] }): ReactElement {
  return (
    <div>{ children }</div>
  )
}

function Line ({ indent = 0, children }: { indent?: number, children: ReactElement | ReactElement[] }): ReactElement {
  return (
    <div>{'\u00A0'.repeat(indent)}{ children }</div>
  )
}

function ComponentSign ({ open }: { open?: boolean }): ReactElement {
  return (
    <span className='text-[#808080]'>{open ? '<' : '/>'}</span>
  )
}

function Component ({ name }: { name: string }): ReactElement {
  return (
    <span className='text-[#4ec9b0]'>{name}</span>
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

// #808080 #4ec9b0
// #9cdcfe #d4d4d4 #ce9178
// #9cdcfe #d4d4d4 #569cd6 #9cdcfe #569cd6
// #9cdcfe #d4d4d4 #569cd6 #b5cea8 #569cd6
// #808080

export default App
