import { CellObj } from "../types/cell";

import { checkCanMoveSideways } from "./moveSideways";

//
export const checkCanMoveBishop = ({
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
};
