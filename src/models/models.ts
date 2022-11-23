export interface Sudoku {
  difficulty: string;
  solution: string;
  'unsolved-sudoku': string;
}

export interface ServerResponse<T> {
  response: T;
}

export interface SudokuState {
  solved: string[]
}