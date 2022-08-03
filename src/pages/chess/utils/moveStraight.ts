import { CellObj } from "../types/cell";

import { canMoveInCell } from "./canMoveInCell";

//
export const checkCanMoveStraight = ({
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

    // ----- vertical: y not change
    // up
    for (let next_x = x + 1; next_x <= 7; next_x++) {
        next_cell_arr.push({ next_x: next_x, next_y: y });
        if (cell_arr[next_x][y].pieces_name) {
            break;
        }
    }

    // down
    for (let prev_x = x - 1; prev_x >= 0; prev_x--) {
        next_cell_arr.push({ next_x: prev_x, next_y: y });
        if (cell_arr[prev_x][y].pieces_name) {
            break;
        }
    }

    // ----- horizontal: x not change
    // left
    for (let next_y = y + 1; next_y <= 7; next_y++) {
        next_cell_arr.push({ next_x: x, next_y: next_y });
        if (cell_arr[x][next_y].pieces_name) {
            break;
        }
    }

    // right
    for (let prev_y = y - 1; prev_y >= 0; prev_y--) {
        next_cell_arr.push({ next_x: x, next_y: prev_y });
        if (cell_arr[x][prev_y].pieces_name) {
            break;
        }
    }

    // ------

    next_cell_arr.forEach((item) => {
        canMoveInCell({
            next_x: item.next_x,
            next_y: item.next_y,
            cell_obj: cell_obj,
            cell_arr: cell_arr,
        });
    });
};
