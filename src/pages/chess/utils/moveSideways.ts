import { CellObj } from "../types/cell";

import { canMoveInCell } from "./canMoveInCell";

//
export const checkCanMoveSideways = ({
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

    // top left
    (() => {
        let prev_y = y - 1;
        let next_x = x + 1;

        while (prev_y >= 0 && next_x <= 7) {
            next_cell_arr.push({ next_x: next_x, next_y: prev_y });
            if (cell_arr[next_x][prev_y].pieces_name) {
                break;
            }
            prev_y--;
            next_x++;
        }
    })();

    // bottom right
    (() => {
        let next_y = y + 1;
        let prev_x = x - 1;

        while (next_y <= 7 && prev_x >= 0) {
            next_cell_arr.push({ next_x: prev_x, next_y: next_y });
            if (cell_arr[prev_x][next_y].pieces_name) {
                break;
            }

            next_y++;
            prev_x--;
        }
    })();

    // top right
    (() => {
        let next_y = y + 1;
        let next_x = x + 1;

        while (next_y <= 7 && next_x <= 7) {
            next_cell_arr.push({ next_x: next_x, next_y: next_y });
            if (cell_arr[next_x][next_y].pieces_name) {
                break;
            }

            next_x++;
            next_y++;
        }
    })();

    // bottom left
    (() => {
        let prev_y = y - 1;
        let prev_x = x - 1;

        while (prev_y >= 0 && prev_x >= 0) {
            next_cell_arr.push({ next_x: prev_x, next_y: prev_y });
            if (cell_arr[prev_x][prev_y].pieces_name) {
                break;
            }

            prev_y--;
            prev_x--;
        }
    })();

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
