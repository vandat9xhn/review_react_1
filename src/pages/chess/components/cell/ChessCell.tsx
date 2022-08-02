import * as React from "react";

import { CellObj, handleClickCellType } from "../../types/cell";

import { icon_chess_obj } from "../../icons/IconChess";

import "./ChessCell.scss";

//
export interface ChessCellProps {
    x: number;
    y: number;
    cell_obj: CellObj;
    is_active: boolean;
    handleClickCell: handleClickCellType;
}

//
function ChessCell({
    x,
    y,
    cell_obj,
    is_active,
    handleClickCell,
}: ChessCellProps) {
    //
    const is_black_cell = (x + y) % 2 === 1;

    //
    const onClick = () => {
        handleClickCell({ x: x, y: y, cell_obj: cell_obj });
    };

    //
    return (
        <div
            className={`ChessCell ${is_black_cell ? "ChessCell-black" : ""} ${
                is_active ? "ChessCell-active" : ""
            } ${cell_obj.can_move_in ? "ChessCell-can_in" : ""} ${
                cell_obj.can_kill ? "ChessCell-can_kill" : ""
            }`}
            onClick={onClick}
        >
            {cell_obj.pieces_name ? (
                <div>{icon_chess_obj[cell_obj.pieces_full_name]}</div>
            ) : null}
        </div>
    );
}

export default ChessCell;
