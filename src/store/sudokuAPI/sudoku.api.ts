import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ServerResponse, Sudoku } from '../../models/models'

export const sudokuApi = createApi({
  reducerPath: 'sudokuAPI/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://sudoku-generator1.p.rapidapi.com/sudoku/'
  }),
  refetchOnFocus: false,
  endpoints: build => ({
    getSudoku: build.query<Sudoku, number>({
      query: (diff: number) => ({
        url: 'https://sudoku-board.p.rapidapi.com/new-board',
        params: {
          diff: diff,
          stype: 'string',
          solu: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '',
          'X-RapidAPI-Host': 'sudoku-board.p.rapidapi.com'
        }
      }),
      transformResponse: (response: ServerResponse<Sudoku>) => response.response
    })
  })
})

export const {useLazyGetSudokuQuery} = sudokuApi