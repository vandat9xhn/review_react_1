import * as React from "react";

import { useChess } from "../hooks/useChess";

import ChessCell from "../components/cell/ChessCell";

import "./Chess.scss";
import Portal from "../../../components/portal/Portal";
import PromotePawn from "../components/promote_pawn/PromotePawn";
import ChessWinner from "../components/winner/ChessWinner";

//
export interface ChessProps {}

//
function Chess({}: ChessProps) {
    //
    const {
        player1,
        player2,
        ref_black_player,

        ref_cell_arr,
        ref_cur_cell,
        ref_promote_pawn,
        ref_winner,

        startGame,
        handleClickCell,
        handlePromotePawn,
    } = useChess();

    //
    React.useEffect(() => {
        startGame("My", "Nguyen");
    }, []);

    // -----

    const handleStart = () => {
        startGame("My", "Nguyen");
    };

    //
    return (
        <div className="Chess">
            <div className="Chess_btn">
                <button type="button" onClick={handleStart}>
                    Start
                </button>
            </div>

            <div
                className={`Chess_player ${
                    ref_black_player.current === player1.is_black
                        ? "Chess_player-active"
                        : ""
                }`}
            >
                {player1.name}
            </div>

            {ref_cell_arr.current.length === 0 ? null : (
                <div className="Chess_table">
                    <div className="Chess_table_contain">
                        {ref_cell_arr.current.map((row_arr, x) =>
                            row_arr.map((cell_obj, y) => (
                                <div
                                    key={`${x}_${y}`}
                                    className={`Chess_cell ${
                                        ref_black_player.current ===
                                        cell_obj.is_pieces_black
                                            ? "Chess_cell-player"
                                            : ""
                                    }`}
                                >
                                    <ChessCell
                                        is_active={
                                            ref_cur_cell.current.x === x &&
                                            ref_cur_cell.current.y === y
                                        }
                                        x={x}
                                        y={y}
                                        cell_obj={cell_obj}
                                        handleClickCell={handleClickCell}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}

            <div
                className={`Chess_player ${
                    ref_black_player.current === player2.is_black
                        ? "Chess_player-active"
                        : ""
                }`}
            >
                {player2.name}
            </div>

            <Portal>
                <React.Fragment>
                    {ref_promote_pawn.current && (
                        <PromotePawn
                            is_black={
                                ref_promote_pawn.current.cell_obj
                                    .is_pieces_black
                            }
                            handlePromotePawn={handlePromotePawn}
                        />
                    )}

                    {ref_winner.current && (
                        <ChessWinner
                            winner={ref_winner.current}
                            handleReset={handleStart}
                        />
                    )}
                </React.Fragment>
            </Portal>
        </div>
    );
}

export default Chess;
