import React, { forwardRef, ReactElement, useEffect, useRef } from 'react'

export const Lines = forwardRef<HTMLDivElement, { children: ReactElement | ReactElement[] }>(function lines ({ children }, ref) {
  return (
    <div className="home-lines w-[25ch]" ref={ref}>
      {children}
    </div>
  )
})

export function Line ({ indent = 0, forwards, blinkDuration, loaded, children }: ILine): ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elem = ref.current! as HTMLDivElement
    if (loaded && forwards) {
      elem.style.animation = `blink ${blinkDuration}ms infinite`
    }
  }, [])

  const width = loaded ? 'w-[max-content]' : 'w-0'
  const forwardsNo = indent > 0
    ? 'shadow-[inset_5px_0px_#aeafad]'
    : ''
  const loadedYes = forwards
    ? 'shadow-[5px_0px_#707070]'
    : forwardsNo
  const loadedNo = indent > 0
    ? 'shadow-[inset_5px_0px_#aeafad,5px_0px_#707070]'
    : 'shadow-[5px_0px_#707070]'
  const boxShadow = loaded
    ? loadedYes
    : loadedNo
  const beforeOpacity = loaded && forwards
    ? 'before:opacity-100'
    : 'before:opacity-[var(--line-opacity)]'

  return (
    <div ref={ref} data-forwards={forwards} data-indent={indent > 0} className={`${width} ${boxShadow} flex m-0 overflow-hidden whitespace-nowrap before:z-[-1] before:content-['A'] before:text-[transparent] before:absolute before:left-0 before:w-[100%] before:shadow-line ${beforeOpacity} pointer-events-none`}>
      {'\u00A0'.repeat(indent)}{ children }
    </div>
  )
}

export function ComponentSign ({ open }: { open?: boolean }): ReactElement {
  return (
    <span className='text-[#808080]'>{open ? '<' : '/>'}</span>
  )
}

export function Component ({ name }: { name: string }): ReactElement {
  return (
    <span className='text-[#4ec9b0]' id='sarudev'>{name}</span>
  )
}

export function Prop ({ name, type, value }: { name: string, type: 'string' | 'number' | 'variable', value: string }): ReactElement {
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
