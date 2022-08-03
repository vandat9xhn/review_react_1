import { CellObj } from "../types/cell";
import { PiecesName } from "../types/pieces";

import { checkCanMoveBishop } from "./moveBishop";
import { checkCanMoveKing } from "./moveKing";
import { checkCanMoveKnight } from "./moveKnight";
import { checkCanMovePawn } from "./movePawn";
import { checkCanMoveQueen } from "./moveQueen";
import { checkCanMoveRook } from "./moveRook";

//
type canMoveObjType = Partial<{ [K in PiecesName]: typeof checkCanMovePawn }>;
// type canMoveObjPartial = Partial<canMoveObjType>
// type canMoveObjRequired = Partial<canMoveObjPartial>

//
const canMoveObj: canMoveObjType = {
    pawn: checkCanMovePawn,
    rook: checkCanMoveRook,
    knight: checkCanMoveKnight,
    bishop: checkCanMoveBishop,
    queen: checkCanMoveQueen,
    king: checkCanMoveKing,
};

//
export const checkCanMoveIn = ({
    x,
    y,
    cell_obj,
    cell_arr,
}: {
    x: number;
    y: number;
    cell_obj: CellObj;
    cell_arr: CellObj[][];
}) => {
    canMoveObj[cell_obj.pieces_name]({ x, y, cell_obj, cell_arr });
};
