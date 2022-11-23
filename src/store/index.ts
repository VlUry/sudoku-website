import {configureStore} from '@reduxjs/toolkit'
import { sudokuApi } from './sudokuAPI/sudoku.api'
import { sudokuReducer } from './sudokuAPI/sudoku.slice'

export const store = configureStore({
  reducer: {
    [sudokuApi.reducerPath]: sudokuApi.reducer,
    sudoku: sudokuReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sudokuApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
