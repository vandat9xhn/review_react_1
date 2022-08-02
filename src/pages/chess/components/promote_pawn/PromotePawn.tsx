import * as React from "react";

import { handlePromotePawnType } from "../../types/pawn";

import { PROMOTE_PAWN, icon_chess_obj } from "../../icons/IconChess";

import "./PromotePawn.scss";

//
export interface PromotePawnProps {
    is_black: boolean;
    handlePromotePawn: handlePromotePawnType;
}

//
function PromotePawn({ is_black, handlePromotePawn }: PromotePawnProps) {
    //
    return (
        <div className="PromotePawn">
            {PROMOTE_PAWN.map((item, ix) => (
                <div
                    key={ix}
                    className="PromotePawn_item"
                    onClick={() => handlePromotePawn(item)}
                >
                    {icon_chess_obj[`${is_black ? "black" : "white"}_${item}`]}
                </div>
            ))}
        </div>
    );
}

export default PromotePawn;
