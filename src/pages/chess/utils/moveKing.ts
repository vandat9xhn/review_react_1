import { CellObj } from "../types/cell";

import { canMoveInCell } from "./canMoveInCell";

//
export const checkCanMoveKing = ({
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
    const next_cell_arr: { next_x: number; next_y: number }[] = [];

    next_cell_arr.push(
        { next_x: x + 1, next_y: y },
        { next_x: x + 1, next_y: y - 1 },
        { next_x: x + 1, next_y: y + 1 },

        { next_x: x - 1, next_y: y },
        { next_x: x - 1, next_y: y - 1 },
        { next_x: x - 1, next_y: y + 1 },

        { next_x: x, next_y: y - 1 },
        { next_x: x, next_y: y + 1 }
    );

    next_cell_arr.forEach((item) => {
        canMoveInCell({
            next_x: item.next_x,
            next_y: item.next_y,
            cell_obj: cell_obj,
            cell_arr: cell_arr,
        });
    });
};
