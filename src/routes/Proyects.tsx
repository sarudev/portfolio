import React, { ReactElement, useLayoutEffect, useRef, useState } from 'react'
import uno from '../assets/uno.svg'
import like from '../assets/like.svg'
import liked from '../assets/liked.svg'
import dislike from '../assets/dislike.svg'
import tool from '../assets/tool.svg'
import '../styles/routes/proyects.scss'
import formatNumber from '@/helpers/formatNumber'
import styled from 'styled-components'

export default function Proyects (): ReactElement {
  const [content] = useState([
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: true,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '-0.75',
      z: '-2'
    },
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: false,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '-0.5',
      z: '-1'
    },
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: true,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '0',
      z: '0'
    },
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: false,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '0.5',
      z: '-1'
    },
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: true,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '0.75',
      z: '-2'
    },
    {
      content: {
        iconOrText: uno,
        icon: true,
        wip: false,
        bgUrl: '/website-uno-api.vercel.app.png',
        link: 'https://website-uno-api.vercel.app'
      },
      pos: '-5',
      z: '-5'
    }
  ])

  const [index, setIndex] = useState(0)

  return (
    <div className='cardsContainer'>
      {content.map((e, i) => {
        return (
          <Card
            key={i}
            trans={e.pos}
            id={`x${e.z}`}
            iconOrText={e.content.iconOrText}
            icon={e.content.icon}
            wip={e.content.wip}
            bgUrl={e.content.bgUrl}
            link={e.content.link}
          />
        )
      })}
      <button id='prev' className='btn'
        onClick={e => {
          // console.log('======= CONTENT =======')
          // content.forEach(e => console.log(e))
          // console.log('=======================')
          const tempItem = {
            pos: '-5',
            z: '-5'
          }
          for (let i = 0; i <= (content.length > 5 ? 4 : 3); i++) {
            console.log({ i, index, len: content.length })
            const idx1 = (i + index) % content.length
            const idx2 = (i + index - 1) % content.length

            if (i === 0 && content.length <= 5) {
              tempItem.pos = content.at(idx2)!.pos
              tempItem.z = content.at(idx2)!.z
            }

            // console.log({ idx1, idx2 })
            // console.log(content.at(idx1))
            // console.log(content.at(idx2))
            // console.log(tempItem)
            content.at(idx2)!.pos = content.at(idx1)!.pos
            content.at(idx2)!.z = content.at(idx1)!.z
            // content.at(idx1)!.pos = ''
            // content.at(idx1)!.z = ''
            // console.log(content.at(idx1))
            // console.log(content.at(idx2))
          }
          const idx = ((content.length > 5 ? 4 : 3) + index) % content.length
          content.at(idx)!.pos = tempItem.pos
          content.at(idx)!.z = tempItem.z
          // content.forEach(e => console.log(e))
          // console.log('=======================')
          setIndex(prev => prev - 1)
        }}
      >
        {'<-'}
      </button>
      <button id='next' className='btn'
        onClick={e => {
          const tempItem = {
            pos: '-5',
            z: '-5'
          }
          for (let i = (content.length > 5 ? 4 : 3); i >= 0; i--) {
            const idx1 = (i + index) % content.length
            const idx2 = (i + index + 1) % content.length

            if (i === (content.length > 5 ? 4 : 3) && content.length <= 5) {
              tempItem.pos = content.at(idx2)!.pos
              tempItem.z = content.at(idx2)!.z
            }

            content.at(idx2)!.pos = content.at(idx1)!.pos
            content.at(idx2)!.z = content.at(idx1)!.z
          }
          const idx = index % content.length
          content.at(idx)!.pos = tempItem.pos
          content.at(idx)!.z = tempItem.z
          setIndex(prev => prev + 1)
        }}
      >
        {'->'}
      </button>
    </div>
  )
}

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

function Card ({ iconOrText, icon, bgUrl, link, wip, id, trans }: IProyectCard): ReactElement {
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
