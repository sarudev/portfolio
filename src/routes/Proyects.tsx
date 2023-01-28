import React, { ReactElement, useState } from 'react'
import uno from '../assets/uno.svg'
import '../styles/routes/proyects.scss'
import { Card } from '@/components/Proyects'

const content = [
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
]

export default function Proyects (): ReactElement {
  const [index, setIndex] = useState(0)

  function handleOnClick ({ currentTarget }: { currentTarget: HTMLButtonElement }): void {
    const prev = currentTarget.id === 'prev'
    const tempItem = {
      pos: '-5',
      z: '-5'
    }

    const contentLength = content.length > 5 ? (4) : (3)

    const forContent = (i: number): void => {
      const idx1 = (i + index) % content.length
      const idx2 = (i + index + (prev ? (-1) : (1))) % content.length

      if ((prev ? (i === 0) : (i === (contentLength))) && content.length <= 5) {
        tempItem.pos = content.at(idx2)!.pos
        tempItem.z = content.at(idx2)!.z
        console.log('condition')
      }

      ;[content.at(idx2)!.pos, content.at(idx1)!.pos] = [content.at(idx1)!.pos, content.at(idx2)!.pos]
      ;[content.at(idx2)!.z, content.at(idx1)!.z] = [content.at(idx1)!.z, content.at(idx2)!.z]
    }

    if (prev) {
      for (let i = 0; i <= contentLength; i++) {
        forContent(i)
      }
    } else {
      for (let i = contentLength; i >= 0; i--) {
        forContent(i)
      }
    }

    setIndex(p => p + (prev ? (-1) : (1)))
  }

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
      <button id='prev' className='btn' onClick={handleOnClick}> {'<-'} </button>
      <button id='next' className='btn' onClick={handleOnClick}> {'->'} </button>
    </div>
  )
}
