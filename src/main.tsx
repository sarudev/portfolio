import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Knowledgement from './pages/Knowledgement'
import Editor from '@/pages/Editor'
import '@/styles/index.scss'
import styled from 'styled-components'

const blinkDuration = 750
const durationCh = 75
const initialDelay = 1500

const NotFoundStyled = styled.div`
  width: calc(100% - 48px);
  height: calc(100% - 35px);
  margin: 35px 0 0 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Editor/>}>
              <Route index element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={false} />}/>
              <Route path='home' element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={true} />}/>
              <Route path='knowledgement' element={<Knowledgement />}/>
              <Route path='*' element={<NotFoundStyled>Not finished</NotFoundStyled>} />
            </Route>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
