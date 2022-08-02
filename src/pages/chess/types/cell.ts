import { PiecesFullName, PiecesName } from "./pieces";

//
export type CellXY = {
    x: number;
    y: number;
};

//
export interface CellObj {
    pieces_name?: PiecesName;
    pieces_full_name?: PiecesFullName;
    is_pieces_black?: boolean;
    is_active?: boolean;
    can_move_in?: boolean;
    can_kill?: boolean
}

//
export type handleClickCellType = (params: {
    x: number;
    y: number;
    cell_obj: CellObj;
}) => void;
