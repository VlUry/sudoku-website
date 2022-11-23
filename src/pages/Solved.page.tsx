import { useAppSelector } from "../hooks/redux";

export function SolvedPage() {
  const { solved } = useAppSelector((store) => store.sudoku);

  if (solved.length === 0)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <p>You haven't solved any sudoku yet.</p>
      </div>
    );

  return (
    <div className="translate-y-[70px] flex flex-wrap items-center justify-center">
      {solved.map((solve) => (
        <div
          key={solve}
          className="w-[270px] h-[270px] flex flex-wrap justify-center shadow-md m-3"
        >
          {solve.split("").map((num, index) => (
            <div
              key={index}
              className="w-[30px] h-[30px] border flex items-center justify-center"
            >
              {num}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
