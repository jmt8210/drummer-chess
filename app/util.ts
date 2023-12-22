import { Space } from "./types";

export const startGame = () => {
  let data: Space[][] = [];
  for (let i = 0; i < 8; i++) {
    data[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i == 1 || i == 6) {
        data[i][j] = "pawn";
      } else if ((i == 0 || i == 7) && (j == 0 || 7 - j == 0)) {
        data[i][j] = "rook";
      } else if ((i == 0 || i == 7) && (j == 1 || 7 - j == 1)) {
        data[i][j] = "knight";
      } else if ((i == 0 || i == 7) && (j == 2 || 7 - j == 2)) {
        data[i][j] = "bishop";
      } else if ((i == 0 && j == 3) || (i == 7 && j == 4)) {
        data[i][j] = "king";
      } else if ((i == 0 && j == 4) || (i == 7 && j == 3)) {
        data[i][j] = "queen";
      } else {
        data[i][j] = "empty";
      }
    }
  }

  return data;
};
