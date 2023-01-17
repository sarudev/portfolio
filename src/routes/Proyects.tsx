import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react'
import uno from '../assets/uno.svg'
import like from '../assets/like.svg'
import liked from '../assets/liked.svg'
import dislike from '../assets/dislike.svg'
import tool from '../assets/tool.svg'
import '../styles/routes/proyects.scss'
import formatNumber from '@/helpers/formatNumber'

export default function Proyects (): ReactElement {
  return (
    <div className='cardsContainer'>
      <Card iconOrText={uno} icon wip bg={'/src/assets/website-uno-api.vercel.app.png'} link={'https://website-uno-api.vercel.app'} />
    </div>
  )
}

function Card ({ iconOrText, icon, bg, link, wip }: { iconOrText: string, icon?: boolean, bg: string, link: string, wip?: boolean }): ReactElement {
  const [likedState, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const likeRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    cardRef.current!.style.setProperty('--bg-img-url', `url(${bg})`)
    cardRef.current!.style.setProperty('--content-bg-img-url', icon != null && icon ? `url(${iconOrText})` : 'none')
    cardRef.current!.style.setProperty('--link-bg-img-url', `url(${liked})`)
  }, [])

  return (
    <div className='card' ref={cardRef}>
      <div className={(wip === true) ? 'wip' : ''}>
        {(wip === true) && <>
          <img src={tool} alt="" />
          Work In Progress
          <img src={tool} alt="" />
        </>}
      </div>
      <div className='img' />
      <div className='blur' />
      <div className='text-or-logo'>
        {(icon == null || !icon) && iconOrText}
      </div>
      <div className='description-box'>
        <div className='text-container'>
          <div className='tittle'>
            UNO: Cards Game
          </div>
          <div className='description'>
            Original UNO game, with multiplayer and rankeds.
          </div>
        </div>
        <div className='button-container'>
          <button className='like'
            ref={likeRef}
            onMouseEnter={(e) => {
              const first = e.currentTarget.firstChild as HTMLImageElement
              first.src = likedState ? dislike : like
            }}
            onMouseLeave={(e) => {
              const first = e.currentTarget.firstChild as HTMLImageElement
              first.src = likedState ? liked : like
            }}
            onClick={(e) => {
              setLiked(prev => !prev)
              // setLikesCount(prev => likedState ? prev - 1 : prev + 1)
              setLikesCount(prev => likedState ? prev - 1 : prev + 1)
            }}
          >
            <img src={likedState ? liked : like} alt=""
            />
            <div>
              {formatNumber(likesCount)}
            </div>
          </button>
          <a className='link' href={link} target='_blank' rel="noreferrer">
            Visit
          </a>
        </div>
      </div>
    </div>
  )
}
