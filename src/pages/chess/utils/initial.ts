import { CellObj } from "../types/cell";
import { PiecesName } from "../types/pieces";

//
const ARR8 = [0, 1, 2, 3, 4, 5, 6, 7];

//
export const getInitialCells = () => {
    const new_cell_arr: CellObj[][] = [];

    ARR8.forEach((x) => {
        new_cell_arr.push([]);
        ARR8.forEach((y) => {
            new_cell_arr[x].push({});
        });
    });

    ARR8.forEach((y) => {
        new_cell_arr[1][y] = {
            pieces_name: "pawn",
            pieces_full_name: "white_pawn",
            is_pieces_black: false,
        };

        new_cell_arr[6][y] = {
            pieces_name: "pawn",
            pieces_full_name: "black_pawn",
            is_pieces_black: true,
        };
    });

    const arr: PiecesName[] = ["rook", "knight", "bishop"];
    arr.forEach((item, ix) => {
        new_cell_arr[0][ix] = {
            pieces_name: item,
            pieces_full_name: `white_${item}`,
            is_pieces_black: false,
        };
        new_cell_arr[0][7 - ix] = {
            pieces_name: item,
            pieces_full_name: `white_${item}`,
            is_pieces_black: false,
        };

        new_cell_arr[7][ix] = {
            pieces_name: item,
            pieces_full_name: `black_${item}`,
            is_pieces_black: true,
        };
        new_cell_arr[7][7 - ix] = {
            pieces_name: item,
            pieces_full_name: `black_${item}`,
            is_pieces_black: true,
        };
    });

    const _arr: PiecesName[] = ["queen", "king"];
    _arr.forEach((item, ix) => {
        new_cell_arr[0][ix + 3] = {
            pieces_name: item,
            pieces_full_name: `white_${item}`,
            is_pieces_black: false,
        };

        new_cell_arr[7][ix + 3] = {
            pieces_name: item,
            pieces_full_name: `black_${item}`,
            is_pieces_black: true,
        };
    });

    return new_cell_arr;
};
