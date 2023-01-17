import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Editor from '@/routes/Editor'
import Home from '@/routes/Home'
import Knowledge from '@/routes/Knowledge'
import Proyects from '@/routes/Proyects'
import styled from 'styled-components'

const blinkDuration = 750
const durationCh = 75
const initialDelay = 1500

const NotFoundStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Router (): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Editor/>}>
          <Route index element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={false} />}/>
          <Route path='home' element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={true} />}/>
          <Route path='knowledge' element={<Knowledge />}/>
          <Route path='proyects' element={<Proyects />}/>
          <Route path='contact' element={<NotFoundStyled>🛠 Work in Progress 🛠</NotFoundStyled>}/>
          <Route path='greetings' element={<NotFoundStyled>🛠 Work in Progress 🛠</NotFoundStyled>}/>
          <Route path='acknowledgment' element={<NotFoundStyled>🛠 Work in Progress 🛠</NotFoundStyled>}/>
        </Route>
        <Route path='*' element={<NotFoundStyled>404</NotFoundStyled>} />
      </Routes>
    </BrowserRouter>
  )
}
