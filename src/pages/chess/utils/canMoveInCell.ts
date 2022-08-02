import { CellObj } from "../types/cell";

//
type canMoveInCellType = ({
    next_x,
    next_y,
    cell_obj,
    cell_arr,
}: {
    next_x: number;
    next_y: number;
    cell_obj: CellObj;
    cell_arr: CellObj[][];
}) => void;

//
export const canMoveInCell: canMoveInCellType = ({
    next_x,
    next_y,
    cell_obj,
    cell_arr,
}) => {
    //
    if (next_x < 0 || next_x > 7 || next_y < 0 || next_y > 7) {
        return;
    }

    const next_cell = cell_arr[next_x][next_y];

    if (!next_cell.pieces_name) {
        next_cell.can_move_in = true;
        return;
    }

    if (next_cell.is_pieces_black !== cell_obj.is_pieces_black) {
        next_cell.can_kill = true;
        return;
    }
};
