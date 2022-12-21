import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const visitedTabList = createSlice({
  name: 'visitedTabList',
  initialState: [] as string[],
  reducers: {
    setVisitedTabList: (state, action: PayloadAction<string[]>) => action.payload
  }
})

export const { setVisitedTabList } = visitedTabList.actions

export const visitedTabListReducer = visitedTabList.reducer
