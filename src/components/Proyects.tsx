import React, { useRef, useState, useLayoutEffect, ReactElement } from 'react'
import like from '../assets/like.svg'
import liked from '../assets/liked.svg'
import dislike from '../assets/dislike.svg'
import tool from '../assets/tool.svg'
import formatNumber from '@/helpers/formatNumber'
import styled from 'styled-components'

const TranslatableCard = styled.div<{ trans: string, z: string }>`
  transform: translateX(${p => (Number(p.trans) === -5 ? 0 : Number(p.trans)) * 250}px) scale(${p => {
    const num = Math.abs(Number(p.z))
    if (num === 0) return 1
    if (num === 1) return 0.95
    if (num === 2) return 0.9
    return 0
  }});
  z-index: ${p => p.z};
`

const CardImg = styled.div<{ url: string }>`
  background-image: url(${p => p.url});
`
const CardLogo = styled.div<{ iconUrl: string, icon: boolean }>`
  background-image: ${p => p.icon ? `url(${p.iconUrl})` : 'none'};
`

export function Card ({ iconOrText, icon, bgUrl, link, wip, id, trans }: IProyectCard): ReactElement {
  const [likedState, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const likeRef = useRef<HTMLButtonElement>(null)

  useLayoutEffect(() => {
    const storageLike = localStorage.getItem(id.toString())

    if (storageLike != null) {
      setLiked(true)
    }
  }, [])

  return (
    <TranslatableCard
      trans={trans}
      z={id.replace('x', '')}
      id={id}
      className='card'
      ref={cardRef}
    >
      {(wip === true) &&
        <div className='wip'>
          <img src={tool} alt="" />
          Work In Progress
          <img src={tool} alt="" />
        </div>
      }
      <CardImg className='img' url={bgUrl} />
      <div className='blur' />
      <CardLogo className='text-or-logo' iconUrl={iconOrText} icon={icon != null && icon}>
        {(icon == null || !icon) && iconOrText}
      </CardLogo>
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
              if (likedState) {
                localStorage.setItem(id, 'true')
              }
              setLiked(prev => !prev)
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
    </TranslatableCard>
  )
}
