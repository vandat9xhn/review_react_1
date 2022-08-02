//
// export type PiecesMove = "straight" | ""

export type PiecesName =
    | "queen"
    | "rook"
    | "bishop"
    | "knight"
    | "king"
    | "pawn";

export type PiecesFullName =
    | "white_queen"
    | "white_rook"
    | "white_bishop"
    | "white_knight"
    | "white_king"
    | "white_pawn"
    //
    | "black_queen"
    | "black_rook"
    | "black_bishop"
    | "black_knight"
    | "black_king"
    | "black_pawn";

export interface PiecesChess {
    name: PiecesName;
    full_name: PiecesFullName
    is_black: boolean;
    x: number;
    y: number;
}
