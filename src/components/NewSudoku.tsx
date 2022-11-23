import { useEffect, useState } from "react";

export function NewSudoku(props: any) {
  const { fetchSudoku, setGameStarted } = props;
  const [difficulty, setDifficulty] = useState<string>("Select difficulty");
  const [difficultyNum, setDifficultyNum] = useState<number>(1);
  const [showDiffList, setShowDiffList] = useState<boolean>(false);

  useEffect(() => {
    switch (difficulty) {
      case "Easy":
        setDifficultyNum(1);
        break;
      case "Medium":
        setDifficultyNum(2);
        break;
      case "Hard":
        setDifficultyNum(3);
        break;
    }
  }, [difficulty]);

  const handleDifficultyBtnClick = () => {
    setShowDiffList(!showDiffList);
  };

  const handleDifficultyChange = (e: any) => {
    setDifficulty(e.target.textContent);
    setShowDiffList(false);
  };

  const handleNewSudoku = async () => {
    try {
      await fetchSudoku(difficultyNum);
      setGameStarted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <button
        onClick={handleNewSudoku}
        className="w-[300px] h-[100px] py-2 px-4 border rounded shadow-md hover:bg-gray-100"
      >
        New sudoku
      </button>
      <div className="flex flex-col justify-center mt-10 relative">
        <button
          onClick={handleDifficultyBtnClick}
          className="w-[200px] h-[35px] border rounded shadow-md hover:bg-gray-100"
        >
          {difficulty}
        </button>
        {showDiffList && (
          <ul className="absolute top-[33px] w-full flex flex-col bg-white border">
            <li
              onClick={handleDifficultyChange}
              className="w-full text-center p-1 hover:bg-gray-100 border-b cursor-pointer"
            >
              Easy
            </li>
            <li
              onClick={handleDifficultyChange}
              className="w-full text-center p-1 hover:bg-gray-100 border-b cursor-pointer"
            >
              Medium
            </li>
            <li
              onClick={handleDifficultyChange}
              className="w-full text-center p-1 hover:bg-gray-100 border-b cursor-pointer"
            >
              Hard
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
