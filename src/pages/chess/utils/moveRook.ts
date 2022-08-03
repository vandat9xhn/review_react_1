import { CellObj } from "../types/cell";

import { checkCanMoveStraight } from "./moveStraight";

//
export const checkCanMoveRook = ({
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
    checkCanMoveStraight({ x, y, cell_obj, cell_arr });
};
