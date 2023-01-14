import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Home from './pages/Home'
import Knowledgement from './pages/Knowledgement'
import Editor from '@/pages/Editor'
import '@/styles/index.scss'

const blinkDuration = 750
const durationCh = 75
const initialDelay = 1500

createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
          <Routes>
            <Route path='/' element={<Editor/>}>
              <Route index element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={false} />}/>
              <Route path='home' element={<Home blinkDuration={blinkDuration} durationCh={durationCh} initialDelay={initialDelay} loaded={true} />}/>
              <Route path='knowledgement' element={<Knowledgement />}/>
              <Route path='*' element={<div>Not found</div>} />
            </Route>
          </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
