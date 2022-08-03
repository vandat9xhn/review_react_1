import * as React from "react";

import "./ChessWinner.scss";

//
export interface ChessWinnerProps {
    winner: string;
    handleReset: () => void;
}

//
function ChessWinner({ winner, handleReset }: ChessWinnerProps) {
    //
    return (
        <div className="ChessWinner">
            <div>
                <div>Winner is {winner}</div>
                <br />

                <div>
                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChessWinner;
