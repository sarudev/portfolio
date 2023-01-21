import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editor from '@/routes/Editor'
import Home from '@/routes/Home'
import Knowledge from '@/routes/Knowledge'
import Proyects from '@/routes/Proyects'
import styled from 'styled-components'
import tool from '../assets/tool.svg'

const blinkDuration = 750
const durationCh = 75
const initialDelay = 1500

const NotFoundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WipS = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0, 0,  0, .25) 0%, rgba(255, 255,  0, .25) 1%, rgba(0, 0,  0, .25) 2%, rgba(255, 255,  0, .25) 3%, rgba(0, 0,  0, .25) 4%, rgba(255, 255,  0, .25) 5%, rgba(0, 0,  0, .25) 6%, rgba(255, 255,  0, .25) 7%, rgba(0, 0,  0, .25) 8%, rgba(255, 255,  0, .25) 9%, rgba(0, 0,  0, .25) 10%, rgba(255, 255,  0, .25) 11%, rgba(0, 0,  0, .25) 12%, rgba(255, 255,  0, .25) 13%, rgba(0, 0,  0, .25) 14%, rgba(255, 255,  0, .25) 15%, rgba(0, 0,  0, .25) 16%, rgba(255, 255,  0, .25) 17%, rgba(0, 0,  0, .25) 18%, rgba(255, 255,  0, .25) 19%, rgba(0, 0,  0, .25) 20%, rgba(255, 255,  0, .25) 21%, rgba(0, 0,  0, .25) 22%, rgba(255, 255,  0, .25) 23%, rgba(0, 0,  0, .25) 24%, rgba(255, 255,  0, .25) 25%, rgba(0, 0,  0, .25) 26%, rgba(255, 255,  0, .25) 27%, rgba(0, 0,  0, .25) 28%, rgba(255, 255,  0, .25) 29%, rgba(0, 0,  0, .25) 30%, rgba(255, 255,  0, .25) 31%, rgba(0, 0,  0, .25) 32%, rgba(255, 255,  0, .25) 33%, rgba(0, 0,  0, .25) 34%, rgba(255, 255,  0, .25) 35%, rgba(0, 0,  0, .25) 36%, rgba(255, 255,  0, .25) 37%, rgba(0, 0,  0, .25) 38%, rgba(255, 255,  0, .25) 39%, rgba(0, 0,  0, .25) 40%, rgba(255, 255,  0, .25) 41%, rgba(0, 0,  0, .25) 42%, rgba(255, 255,  0, .25) 43%, rgba(0, 0,  0, .25) 44%, rgba(255, 255,  0, .25) 45%, rgba(0, 0,  0, .25) 46%, rgba(255, 255,  0, .25) 47%, rgba(0, 0,  0, .25) 48%, rgba(255, 255,  0, .25) 49%, rgba(0, 0,  0, .25) 50%, rgba(255, 255,  0, .25) 51%, rgba(0, 0,  0, .25) 52%, rgba(255, 255,  0, .25) 53%, rgba(0, 0,  0, .25) 54%, rgba(255, 255,  0, .25) 55%, rgba(0, 0,  0, .25) 56%, rgba(255, 255,  0, .25) 57%, rgba(0, 0,  0, .25) 58%, rgba(255, 255,  0, .25) 59%, rgba(0, 0,  0, .25) 60%, rgba(255, 255,  0, .25) 61%, rgba(0, 0,  0, .25) 62%, rgba(255, 255,  0, .25) 63%, rgba(0, 0,  0, .25) 64%, rgba(255, 255,  0, .25) 65%, rgba(0, 0,  0, .25) 66%, rgba(255, 255,  0, .25) 67%, rgba(0, 0,  0, .25) 68%, rgba(255, 255,  0, .25) 69%, rgba(0, 0,  0, .25) 70%, rgba(255, 255,  0, .25) 71%, rgba(0, 0,  0, .25) 72%, rgba(255, 255,  0, .25) 73%, rgba(0, 0,  0, .25) 74%, rgba(255, 255,  0, .25) 75%, rgba(0, 0,  0, .25) 76%, rgba(255, 255,  0, .25) 77%, rgba(0, 0,  0, .25) 78%, rgba(255, 255,  0, .25) 79%, rgba(0, 0,  0, .25) 80%, rgba(255, 255,  0, .25) 81%, rgba(0, 0,  0, .25) 82%, rgba(255, 255,  0, .25) 83%, rgba(0, 0,  0, .25) 84%, rgba(255, 255,  0, .25) 85%, rgba(0, 0,  0, .25) 86%, rgba(255, 255,  0, .25) 87%, rgba(0, 0,  0, .25) 88%, rgba(255, 255,  0, .25) 89%, rgba(0, 0,  0, .25) 90%, rgba(255, 255,  0, .25) 91%, rgba(0, 0,  0, .25) 92%, rgba(255, 255,  0, .25) 93%, rgba(0, 0,  0, .25) 94%, rgba(255, 255,  0, .25) 95%, rgba(0, 0,  0, .25) 96%, rgba(255, 255,  0, .25) 97%, rgba(0, 0,  0, .25) 98%, rgba(255, 255,  0, .25) 99%, rgba(0, 0,  0, .25) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 20px;
  gap: 20px;

  &>img {
    height: 20px;
  }
`

const Wip = (): ReactElement => {
  return (
    <WipS>
      <img src={tool} alt="" />
      Work In Progress
      <img src={tool} alt="" />
    </WipS>
  )
}

export default function Router (): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Editor/>}>
          <Route index element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={false} />}/>
          <Route path='home' element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={true} />}/>
          <Route path='knowledge' element={<Knowledge />}/>
          <Route path='proyects' element={<Proyects />}/>
          <Route path='contact' element={<Wip />}/>
          <Route path='greetings' element={<Wip />}/>
          <Route path='acknowledgment' element={<Wip />}/>
        </Route>
        <Route path='*' element={<NotFoundStyled>404</NotFoundStyled>} />
      </Routes>
    </BrowserRouter>
  )
}
