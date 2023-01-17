import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'
import '@/styles/index.scss'
import Router from '@/routes/Router'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>
)
