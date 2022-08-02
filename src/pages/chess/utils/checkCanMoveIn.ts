import { CellObj } from "../types/cell";

import { checkCanMovePawn } from "./movePawn";

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
    // pawn
    if (cell_obj.pieces_name === "pawn") {
        checkCanMovePawn({ x, y, cell_obj, cell_arr });
    }
};
