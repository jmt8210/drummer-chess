import clsx from "clsx";
import { Space } from "./types";

type BoardProps = {
  data: Space[][];
};

const getPiece = (s: Space) => {
  switch (s) {
    case "empty":
      return (
        <div className="flex items-center justify-center w-full h-full">e</div>
      );
    case "pawn":
      return (
        <div className="flex items-center justify-center w-full h-full">p</div>
      );
    case "bishop":
      return (
        <div className="flex items-center justify-center w-full h-full">b</div>
      );
    case "knight":
      return (
        <div className="flex items-center justify-center w-full h-full">k</div>
      );
    case "rook":
      return (
        <div className="flex items-center justify-center w-full h-full">r</div>
      );
    case "queen":
      return (
        <div className="flex items-center justify-center w-full h-full">q</div>
      );
    case "king":
      return (
        <div className="flex items-center justify-center w-full h-full">ki</div>
      );
  }
};

export const Board = ({ data }: BoardProps) => (
  <div className="w-fit grid grid-cols-8">
    {data.map((row, i) => {
      return row.map((col, j) => {
        return (
          <div
            className={clsx(
              "w-24  h-24",
              (i % 2 == 0 && j % 2 == 0) || (i % 2 == 1 && j % 2 == 1)
                ? "bg-green-800"
                : "bg-gray-200",
            )}
          >
            {getPiece(col)}
          </div>
        );
      });
    })}
  </div>
);
