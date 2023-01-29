import React, { ReactElement, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { eventEmitter } from '../helpers/eventEmitter'

export function CollapseContainer ({ children }: { children: ReactElement<typeof Collapse> | Array<ReactElement<typeof Collapse>> }): ReactElement {
  return (
    <div className='collapseContainer' data-id={0} data-childcount={Array.isArray(children) ? children.length : 1}>
      {children}
    </div>
  )
}

export function Collapse ({ title, children, open }: { title: string, children: ReactElement<typeof ModalCard> | Array<ReactElement<typeof ModalCard>> | string, open?: boolean }): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    const collapse = ref.current!
    const container = collapse.parentElement as HTMLDivElement
    setCount(Number(container.dataset.childcount))

    container.childNodes.forEach((e, i) => {
      if (e.isEqualNode(collapse)) {
        collapse.dataset.id = `${container.dataset.id!}${i}`
      }
    })
  }, [])

  return (
    <div
      ref={ref}
      className={`collapseComponent ${open != null && open ? '' : 'closed'}`}
      style={{
        height: `calc(100% - ${(count - 1) * 40}px)`
      }}
    >
      <button
        className="interaction-bar"
        onClick={e => {
          const parent = e.currentTarget.parentElement!
          const parentSiblings = parent.parentElement!.childNodes as NodeListOf<HTMLDivElement>

          parent.classList.toggle('closed')
          parent.querySelector('.arrow')!.classList.toggle('rotate')

          parentSiblings.forEach(e => {
            if (!e.isEqualNode(parent)) {
              e.classList.add('closed')
              e.querySelector('.arrow')!.classList.remove('rotate')
            }
          })
        }}
      >
        <div className={`arrow ${open != null && open ? 'rotate' : ''}`}>
          <Arrow className='svg' />
        </div>
        <div className="title">
          {title}
        </div>
      </button>
      <div className="content">
        <div className="modalContainer">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ModalCard ({ title, Icon, children }: { title: string, Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, children?: ReactElement<typeof Modal> }): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const card = ref.current!
    const container = card.parentElement! as HTMLDivElement
    const collapse = card.parentElement!.parentElement!.parentElement as HTMLDivElement

    container.childNodes.forEach((e, i) => {
      if (e.isEqualNode(card)) {
        card.dataset.id = `${collapse.dataset.id!}${i}`
      }
    })
  }, [])

  return (
    <button ref={ref} className='modalCard'>
      <div className='logo'>
        <Icon />
      </div>
      <div className='title'>
        {title}
      </div>
      {children}
    </button>
  )
}

export function Modal ({ title, Icon, children }: { title: string, Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, children: ReactElement<any> }): ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const modal = ref.current!
    const card = modal.parentElement!
    card.onclick = () => {
      eventEmitter.dispatch('modal', {
        id: ref.current!.parentElement!.dataset.id,
        title,
        Icon,
        children
      })
    }
  }, [])

  return <div ref={ref} style={{ position: 'absolute', width: 0, height: 0 }}></div>
}

export function ModalOutlet (): ReactElement {
  const [event, setEvent] = useState(false)

  useEffect(() => {
    eventEmitter.subscribe('modal', (data) => {
      setEvent(true)
    })

    return () => {
      eventEmitter.unsubscribe('modal')
    }
  }, [])

  return (
    <div
      id='modalOutlet'
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modalOutlet') {
          setEvent(false)
        }
      }}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000099',
        opacity: event ? 1 : 0,
        pointerEvents: event ? 'all' : 'none',
        transition: 'all .2s ease'
      }}
    >
      <div style={{
        width: 300,
        height: 300,
        outline: '1px red solid',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
      }}>
        modal no terminado xd
      </div>
    </div>
  )
}
