import { CellObj } from "../types/cell";

//
export const canMovePawnInCell = ({
    y,
    next_x,
    next_y,
    cell_obj,
    cell_arr,
}: {
    y: number;
    next_x: number;
    next_y: number;
    cell_obj: CellObj;
    cell_arr: CellObj[][];
}) => {
    //
    if (next_x < 0 || next_x > 7 || next_y < 0 || next_y > 7) {
        return;
    }

    const next_cell = cell_arr[next_x][next_y];

    if (next_y !== y) {
        if (
            next_cell.pieces_name &&
            next_cell.is_pieces_black !== cell_obj.is_pieces_black
        ) {
            next_cell.can_kill = true;
            return;
        }
    } else {
        if (!next_cell.pieces_name) {
            next_cell.can_move_in = true;
            return;
        }
    }
};

//
export const checkCanMovePawn = ({
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
    const is_black = cell_obj.is_pieces_black ? -1 : 1;
    const next_cell_arr: { next_x: number; next_y: number }[] = [];

    next_cell_arr.push(
        { next_x: x + is_black * 1, next_y: y },
        { next_x: x + is_black * 1, next_y: y + 1 },
        { next_x: x + is_black * 1, next_y: y - 1 }
    );

    if (
        (x === 1 && !cell_arr[x + 1][y].pieces_name) ||
        (x === 6 && !cell_arr[x - 1][y].pieces_name)
    ) {
        next_cell_arr.push({ next_x: x + is_black * 2, next_y: y });
    }

    next_cell_arr.forEach((item) => {
        canMovePawnInCell({
            y: y,
            next_x: item.next_x,
            next_y: item.next_y,
            cell_obj: cell_obj,
            cell_arr: cell_arr,
        });
    });
};
