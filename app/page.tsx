import { startGame } from "./util";
import { Board } from "./Board";

export default function Home() {
  let data = startGame();
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Board data={data} />
    </div>
  );
}
