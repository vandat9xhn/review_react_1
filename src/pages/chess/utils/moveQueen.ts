import { CellObj } from "../types/cell";

import { checkCanMoveSideways } from "./moveSideways";
import { checkCanMoveStraight } from "./moveStraight";

//
export const checkCanMoveQueen = ({
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
    checkCanMoveSideways({ x, y, cell_obj, cell_arr });
    checkCanMoveStraight({ x, y, cell_obj, cell_arr });
};
