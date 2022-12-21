import { configureStore } from '@reduxjs/toolkit'
import { currentTabNameReducer } from './reducers/currentTabName'
import { visitedTabListReducer } from './reducers/visitedTabList'
import { delayReducer } from './reducers/delay'

const store = configureStore({
  reducer: {
    currentTabName: currentTabNameReducer,
    visitedTabList: visitedTabListReducer,
    delay: delayReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
