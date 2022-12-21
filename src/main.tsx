import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/pages/Editor'
import { Provider } from 'react-redux'
import store from '@/redux/store.js'
import '@/styles/index.scss'

createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
