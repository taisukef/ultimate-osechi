import { Cell } from "./logic.js";
import { IMino, LMino, OMino, SMino, TMino } from "./mino.js";

const randomMino = (parentId) => {
  const minoType = Math.floor(Math.random() * 5);
  switch (minoType) {
    case 0:
      return new IMino(parentId);
    case 1:
      return new LMino(parentId);
    case 2:
      return new OMino(parentId);
    case 3:
      return new SMino(parentId);
    case 4:
      return new TMino(parentId);
  }
};

export const createMinoList = (num) => {
  const minoList = [];
  for (let i = 0; i < num; i++) {
    minoList.push(randomMino(new Cell(i, -2)));
  }
  return minoList;
};
