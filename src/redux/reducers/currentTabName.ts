import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const currentTabNameState = createSlice({
  name: 'currentTabName',
  initialState: '',
  reducers: {
    setCurrentTabName: (state, action: PayloadAction<string>) => action.payload
  }
})

export const { setCurrentTabName } = currentTabNameState.actions

export const currentTabNameReducer = currentTabNameState.reducer
