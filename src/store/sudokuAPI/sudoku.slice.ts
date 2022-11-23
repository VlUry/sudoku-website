import { SudokuState } from "../../models/models";
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const LS_S_KEY = 'solved sudokus' 

const initialState: SudokuState = {
  solved: JSON.parse(localStorage.getItem(LS_S_KEY) ?? '[]')
}

export const sudokuSlice = createSlice({
  name: 'sudoku',
  initialState,
  reducers: {
    addSolved(state, action: PayloadAction<string>) {
      state.solved.push(action.payload)
      localStorage.setItem(LS_S_KEY, JSON.stringify(state.solved))
    }
  }
})

export const sudokuActions = sudokuSlice.actions
export const sudokuReducer = sudokuSlice.reducer
