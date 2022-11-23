import React, { useState, useEffect } from "react";
import { useActions } from "../hooks/redux";
import { Numpad } from "./Numpad";

interface ISelectedCellCoords {
  x: number;
  y: number;
}

export function Sudoku(props: any) {
  const { data, setGameStarted } = props;

  const sudokuArr = data["unsolved-sudoku"].split("");
  const sudokuSolution = data.solution;

  const [sudokuNums, setSudokuNums] = useState<string[]>([...sudokuArr]);
  const [selectedCellId, setSelectedCellId] = useState<number | undefined>();
  const [selectedCellCoords, setSelectedCellCoords] =
    useState<ISelectedCellCoords>({ x: 0, y: 0 });
  const [showNumpad, setShowNumpad] = useState<boolean>(false);
  const { addSolved } = useActions();

  useEffect(() => getNumpadPosition(), [selectedCellId]);

  const getNumpadPosition = () => {
    const cell = document.getElementById(String(selectedCellId));
    if (!cell) return;
    setSelectedCellCoords(() => ({ x: cell.offsetLeft, y: cell.offsetTop }));
  };

  const handleCellFocus = (index: number) => {
    setSelectedCellId(index);
    setTimeout(() => setShowNumpad(true), 0);
  };

  const handleChooseNum = (num: string) => {
    setShowNumpad(false);
    setSudokuNums((sudokuNums) =>
      sudokuNums.map((sudokuNum, numIndex) => {
        if (numIndex === selectedCellId) {
          return num;
        }
        return sudokuNum;
      })
    );
  };

  const handleSubmitSolution = () => {
    if (sudokuNums.includes(".")) return;
    if (sudokuNums.join("") === sudokuSolution) {
      alert("you're right");
      addSolved(data.solution);
      setGameStarted(false);
    }
    alert("you're wrong");
  };

  const handleScreenClick = (e: any) => {
    if (!e.target.closest("#sudoku-board")) {
      setSelectedCellId(undefined);
      setShowNumpad(false);
    }
    return;
  };

  return (
    <div
      onClick={(e) => handleScreenClick(e)}
      className="flex flex-col justify-center items-center h-screen w-screen"
    >
      <div
        className="w-[450px] h-[450px] flex flex-wrap justify-center shadow-md"
        id="sudoku-board"
      >
        {sudokuArr.map((number: string, index: number) => {
          return number !== "." ? (
            <div
              key={index}
              className="w-[50px] h-[50px] border flex items-center justify-center bg-yellow-100"
            >
              {number}
            </div>
          ) : (
            <button
              key={index}
              id={String(index)}
              onFocus={() => handleCellFocus(index)}
              className="w-[50px] h-[50px] border hover:bg-purple-100"
              style={{
                backgroundColor:
                  index === selectedCellId ? "rgb(233 213 255)" : "",
              }}
            >
              {sudokuNums[index] === "." ? null : sudokuNums[index]}
            </button>
          );
        })}
        {showNumpad && (
          <Numpad onChooseNum={handleChooseNum} position={selectedCellCoords} />
        )}
      </div>
      <button
        onClick={handleSubmitSolution}
        className="translate-y-[35px] w-[250px] h-[70px] py-2 px-4 border rounded shadow-md hover:bg-gray-100"
      >
        Submit solution
      </button>
    </div>
  );
}
