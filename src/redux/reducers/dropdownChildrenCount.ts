import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const count = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    setCount: (state, action: PayloadAction<number>) => action.payload
  }
})

export const { setCount } = count.actions

export const countReducer = count.reducer
