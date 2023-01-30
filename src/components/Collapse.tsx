import pickHex from '@/helpers/pickHex'
import React, { ReactElement, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'
import { eventEmitter } from '../helpers/eventEmitter'
import { ReactComponent as Cross } from '../assets/cross.svg'
import { ReactComponent as Link } from '../assets/link.svg'

export function CollapseContainer ({ children }: { children: ReactElement<typeof Collapse> | Array<ReactElement<typeof Collapse>> }): ReactElement {
  return (
    <div className='collapseContainer' data-childcount={Array.isArray(children) ? children.length : 1}>
      {children}
    </div>
  )
}

export function Collapse ({ title, children, open }: { title: string, children: ReactElement<typeof ModalCard> | Array<ReactElement<typeof ModalCard>> | string, open?: boolean }): ReactElement {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useLayoutEffect(() => {
    setCount(Number(ref.current!.parentElement!.dataset.childcount))
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

const levelPercentage = {
  'very basic': 14,
  basic: 28,
  'basic+': 42,
  intermediate: 56,
  'intermediate+': 70,
  advanced: 84,
  'very advanced': 98
}

export function ModalCard ({ title, Icon, children, level }: { title: string, level: Level, Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>, children?: ReactElement<typeof Modal> }): ReactElement {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <button ref={ref} className='modalCard'>
      <div className='logo'>
        <Icon />
      </div>
      <div className='level'>
        <div style={{ color: `rgb(${pickHex([0, 255, 0], [255, 0, 0], levelPercentage[level] / 100).toString()})` }}>
          {`${level.split(level[1])[0].toUpperCase()}${level.substring(1, level.length)}`}
        </div>
      </div>
      {children}
    </button>
  )
}

export function Modal ({ Icon, level, description, href, title }: ModalData): ReactElement {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const card = ref.current!.parentElement!
    card.onclick = () => {
      eventEmitter.dispatch('modal', {
        Icon,
        level,
        description,
        href,
        title
      } as ModalData)
    }
  })

  return <div ref={ref}></div>
}

export function ModalOutlet (): ReactElement {
  const [data, setData] = useState<ModalData>({
    Icon: Arrow,
    level: 'very basic',
    description: 'Arrow description'
  })

  useLayoutEffect(() => {
    eventEmitter.subscribe('modal', (modalData: ModalData) => {
      (document.querySelector('#modalOutlet') as HTMLDivElement).classList.add('visible')
      setData(modalData)
    })

    return () => {
      eventEmitter.unsubscribe('modal')
    }
  }, [])

  return (
    <div
      id='modalOutlet'
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'modalOutlet') (e.target as HTMLDivElement).classList.remove('visible')
      }}
    >
      <div className='modalContent'>
        <div className="icon">
          {data.href != null
            ? <a href={data.href} target='_blank' className='link-href' rel="noreferrer">
              <Link />
            </a>
            : <div className='link' />
          }
          <div className='logo'>
            <data.Icon />
          </div>
          <button className='cross'
            onClick={(e) => {
              (document.querySelector('#modalOutlet') as HTMLDivElement).classList.remove('visible')
            }}
          >
            <Cross />
          </button>
        </div>
        {data.href != null
          ? <div className="title">
            {data.title}
          </div>
          : <></>
        }
        <div className='level'>
          <div style={{ color: `rgb(${pickHex([0, 255, 0], [255, 0, 0], levelPercentage[data.level] / 100).toString()})` }}>
            {`${data.level.split(data.level[1])[0].toUpperCase()}${data.level.substring(1, data.level.length)}`}
          </div>
          <div style={{ fontSize: 20 }}>level</div>
        </div>
        <div className='description'>
          {data.description}
        </div>
      </div>
    </div>
  )
}
