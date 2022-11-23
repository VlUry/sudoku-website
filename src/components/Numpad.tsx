export function Numpad(props: any) {
  const { onChooseNum, position } = props;

  return (
    <div
      style={{ top: position.y + 50, left: position.x - 65 }}
      className="absolute flex items-center flex-col"
    >
      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-b-[8px] border-b-[#000000be] border-r-[8px] border-r-transparent"></div>
      <div className="w-[180px] h-[180px] bg-[#000000be] text-white rounded z-30 flex flex-wrap">
        <button
          onClick={() => onChooseNum("1")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          1
        </button>
        <button
          onClick={() => onChooseNum("2")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          2
        </button>
        <button
          onClick={() => onChooseNum("3")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          3
        </button>
        <button
          onClick={() => onChooseNum("4")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          4
        </button>
        <button
          onClick={() => onChooseNum("5")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          5
        </button>
        <button
          onClick={() => onChooseNum("6")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          6
        </button>
        <button
          onClick={() => onChooseNum("7")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          7
        </button>
        <button
          onClick={() => onChooseNum("8")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          8
        </button>
        <button
          onClick={() => onChooseNum("9")}
          className="w-[60px] h-[60px] p-2 hover:bg-[#0000003b] rounded"
        >
          9
        </button>
      </div>
    </div>
  );
}
