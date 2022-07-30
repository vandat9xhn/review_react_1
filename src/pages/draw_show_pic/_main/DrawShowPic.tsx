import * as React from "react";
import { useMouseDownToWindowUp } from "react-commons-ts";
import { MouseTouchEventType } from "react-commons-ts/dist/types/_common";

import { useCanvas } from "../../../_hooks/useCanvas";

import pic from "../../../../images/beautiful_place.jpg";

const thick = 50;

//
export interface DrawShowPicProps {}

//
function DrawShowPic({}: DrawShowPicProps) {
    //
    const { refCanvas, refCtx } = useCanvas();
    const refImg = React.useRef<HTMLImageElement>(null);

    const refLeft = React.useRef(0);
    const refTop = React.useRef(0);

    //
    const { onDown } = useMouseDownToWindowUp({
        handleDown: handleDown,
        handleMove: handleMove,
        handleEnd: handleEnd,
    });

    //
    React.useEffect(() => {
        handleClear();
        changeTopLeft();
        window.addEventListener("scroll", changeTopLeft);

        return () => {
            window.removeEventListener("scroll", changeTopLeft);
        };
    }, []);

    // ---
    const changeTopLeft = () => {
        const { top, left } = refCanvas.current.getBoundingClientRect();
        refTop.current = top;
        refLeft.current = left;
    };

    const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
        onDown(e.nativeEvent);
    };

    function handleDown(e: MouseTouchEventType) {
        if (e instanceof MouseEvent) {
            draw(e.clientX - refLeft.current, e.clientY - refTop.current);
        }
    }

    function handleMove(e: MouseTouchEventType) {
        if (e instanceof MouseEvent) {
            draw(e.clientX - refLeft.current, e.clientY - refTop.current);
        }
    }

    function handleEnd(e: MouseTouchEventType) {}

    // ----

    const draw = (dx = 0, dy = 0) => {
        refCtx.current.save();
        const circlePath = new Path2D();
        circlePath.arc(dx, dy, thick, 0, 2 * Math.PI);
        refCtx.current.clip(circlePath);
        refCtx.current.clearRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );

        refCtx.current.restore();
    };

    const handleClear = () => {
        refCtx.current.clearRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );
        refCtx.current.fillStyle = "white";
        refCtx.current.fillRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );
    };

    //
    return (
        <div>
            <div
                onMouseDown={handleMouseDown}
                style={{
                    position: "relative",
                    width: "fit-content",
                    border: "1px solid",
                    userSelect: "none",
                }}
            >
                <img
                    ref={refImg}
                    src={pic}
                    alt=""
                    style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                    }}
                />

                <canvas
                    ref={refCanvas}
                    width={500}
                    height={300}
                    style={{ position: "relative" }}
                />
            </div>

            <div>
                <button type="button" onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
}

export default DrawShowPic;
