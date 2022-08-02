import { useRef, useState } from "react";
import { useForceUpdate } from "react-commons-ts";

import { CellObj, CellXY, handleClickCellType } from "../types/cell";
import { PlayerObj } from "../types/player";
import { PiecesName } from "../types/pieces";

import { getInitialCells } from "../utils/initial";
import { checkCanMoveIn } from "../utils/checkCanMoveIn";
import { handlePromotePawnType } from "../types/pawn";

//
export function useChess() {
    //
    const [player1, setPlayer1] = useState<PlayerObj>({
        name: "",
        is_black: false,
    });
    const [player2, setPlayer2] = useState<PlayerObj>({
        name: "",
        is_black: true,
    });

    //
    const ref_black_player = useRef(false);
    const ref_cur_cell = useRef<CellXY>({ x: -1, y: -1 });
    const ref_cell_arr = useRef<CellObj[][]>([]);

    const ref_promote_pawn =
        useRef<{ x: number; y: number; cell_obj: CellObj }>(null);

    //
    const forceUpdate = useForceUpdate();

    // ----

    const startGame = (name1: string, name2: string) => {
        ref_cell_arr.current = getInitialCells();
        setPlayer1({ name: name1, is_black: false });
        setPlayer2({ name: name2, is_black: true });
    };

    const handleClickCell: handleClickCellType = (params) => {
        //
        // if (player1.is_black  !== is_black_player) {
        //     return
        // }

        const { x, y, cell_obj } = params;

        // pick
        if (ref_cur_cell.current.x < 0) {
            if (!cell_obj.pieces_name) {
                return;
            }

            if (ref_black_player.current !== cell_obj.is_pieces_black) {
                return;
            }

            checkCanMoveIn({
                x: x,
                y: y,
                cell_obj: cell_obj,
                cell_arr: ref_cell_arr.current,
            });
            ref_cur_cell.current = { x: x, y: y };
            forceUpdate();

            return;
        }

        // move
        const next_cell = ref_cell_arr.current[x][y];

        if (next_cell.can_move_in || next_cell.can_kill) {
            ref_cell_arr.current[x][y] = {
                ...ref_cell_arr.current[ref_cur_cell.current.x][
                    ref_cur_cell.current.y
                ],
            };
            ref_cell_arr.current[ref_cur_cell.current.x][
                ref_cur_cell.current.y
            ] = {};
            ref_cur_cell.current = { x: -1, y: -1 };
            ref_black_player.current = !ref_black_player.current;
            ref_cell_arr.current.forEach((row) => {
                row.forEach((item) => {
                    item.can_move_in = false;
                    item.can_kill = false;
                });
            });

            if (
                ref_cell_arr.current[x][y].pieces_name === "pawn" &&
                (x === 7 || x === 1)
            ) {
                ref_promote_pawn.current = {
                    x: x,
                    y: y,
                    cell_obj: ref_cell_arr.current[x][y],
                };
            }

            forceUpdate();

            return;
        }

        ref_cell_arr.current.forEach((row) => {
            row.forEach((item) => {
                item.can_move_in = false;
                item.can_kill = false;
            });
        });
        ref_cur_cell.current = { x: -1, y: -1 };
        forceUpdate();
    };

    //
    const handlePromotePawn: handlePromotePawnType = (pieces_name) => {
        const { x, y, cell_obj } = ref_promote_pawn.current;

        ref_cell_arr.current[x][y] = {
            is_pieces_black: cell_obj.is_pieces_black,
            pieces_name: pieces_name,
            pieces_full_name: `${
                cell_obj.is_pieces_black ? "black" : "white"
            }_${pieces_name}`,
        };

        ref_promote_pawn.current = null;
        forceUpdate();
    };

    // ----

    return {
        player1,
        player2,
        ref_black_player,

        ref_cur_cell,
        ref_cell_arr,
        ref_promote_pawn,

        startGame,
        handleClickCell,
        handlePromotePawn,
    };
}
