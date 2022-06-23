import { useEffect, useRef } from "react";

//
export const useCanvas = () => {
    const refCanvas = useRef<HTMLCanvasElement>(null);
    const refCtx = useRef<CanvasRenderingContext2D>(null);

    //
    useEffect(() => {
        refCtx.current = refCanvas.current.getContext("2d");
    }, []);

    //
    return {
        refCanvas,
        refCtx,
    };
};
