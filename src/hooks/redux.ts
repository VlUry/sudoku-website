import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import { sudokuActions } from '../store/sudokuAPI/sudoku.slice'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import { RootState } from '../store'

const actions = {
  ...sudokuActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector