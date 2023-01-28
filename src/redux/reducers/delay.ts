import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const delay = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    setDelay: (state, action: PayloadAction<number>) => action.payload
  }
})

export const { setDelay } = delay.actions

export const delayReducer = delay.reducer
