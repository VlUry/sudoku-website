import { useState } from "react";
import { NewSudoku } from "../components/NewSudoku";
import { Sudoku } from "../components/Sudoku";
import { useLazyGetSudokuQuery } from "../store/sudokuAPI/sudoku.api";

export function HomePage() {
  const [fetchSudoku, { data }] = useLazyGetSudokuQuery();
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  return (
    <>
      {!gameStarted ? (
        <NewSudoku fetchSudoku={fetchSudoku} setGameStarted={setGameStarted} />
      ) : (
        <Sudoku data={data} setGameStarted={setGameStarted} />
      )}
    </>
  );
}
