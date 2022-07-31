import * as React from "react";
import { useMouseDownToWindowUp } from "react-commons-ts";
import { MouseTouchEventType } from "react-commons-ts/dist/types/_common";

import { useCanvas } from "../../../_hooks/useCanvas";

import pic from "../../../../images/beautiful_place.jpg";
import Portal from "../../../components/portal/Portal";

import "./DrawShowPic.scss";

const thick = 50;

//
export interface DrawShowPicProps {}

//
function DrawShowPic({}: DrawShowPicProps) {
    //
    const [is_done, setIsDone] = React.useState(false);

    //
    const { refCanvas, refCtx } = useCanvas();
    const refDiv = React.useRef<HTMLDivElement>(null);
    const refImg = React.useRef<HTMLImageElement>(null);

    const refLeft = React.useRef(0);
    const refTop = React.useRef(0);
    const refDataUrl = React.useRef("");

    //
    const { onDown } = useMouseDownToWindowUp({
        handleDown: handleDown,
        handleMove: handleMove,
        handleEnd: handleEnd,
    });

    //
    React.useEffect(() => {
        detectWidthHeight();
        changeTopLeft();

        window.addEventListener("resize", detectWidthHeight);
        window.addEventListener("scroll", changeTopLeft);

        return () => {
            window.removeEventListener("resize", detectWidthHeight);
            window.removeEventListener("scroll", changeTopLeft);
        };
    }, []);

    // ---
    const detectWidthHeight = () => {
        const { width, height } = refDiv.current.getBoundingClientRect();
        console.log(width);

        refCanvas.current.width = width;
        refCanvas.current.height = height;
        handleClear();
    };

    const changeTopLeft = () => {
        const { top, left } = refCanvas.current.getBoundingClientRect();
        refTop.current = top;
        refLeft.current = left;
    };

    // ----

    const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
        onDown(e.nativeEvent);
    };

    const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
        onDown(e.nativeEvent);
    };

    function handleDown(e: MouseTouchEventType) {
        if (e instanceof MouseEvent) {
            draw(e.clientX - refLeft.current, e.clientY - refTop.current);
        } else if (e instanceof TouchEvent) {
            draw(
                e.touches[0].clientX - refLeft.current,
                e.touches[0].clientY - refTop.current
            );
        }
    }

    function handleMove(e: MouseTouchEventType) {
        if (e instanceof MouseEvent) {
            draw(e.clientX - refLeft.current, e.clientY - refTop.current);
        } else if (e instanceof TouchEvent) {
            draw(
                e.touches[0].clientX - refLeft.current,
                e.touches[0].clientY - refTop.current
            );
        }
    }

    function handleEnd(e: MouseTouchEventType) {
        isCratchDone();
    }

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

    const isCratchDone = () => {
        const url = refCanvas.current.toDataURL();
        const _is_done = refDataUrl.current === url;
        setIsDone(_is_done);
    };

    const handleClear = () => {
        refCtx.current.clearRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );
        refDataUrl.current = refCanvas.current.toDataURL();
        setIsDone(false);

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
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: "8px",
            }}
        >
            <div
                style={{
                    maxWidth: "100%",
                    maxHeight: "100vh",
                    border: "1px solid",
                    pointerEvents: is_done ? "none" : undefined,
                    touchAction: "none",
                }}
            >
                <div
                    ref={refDiv}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleTouchStart}
                    style={{
                        position: "relative",
                        width: "500px",
                        height: "300px",
                        maxWidth: "100%",
                        maxHeight: "100vh",
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
                        style={{
                            position: "relative",
                        }}
                    />
                </div>
            </div>

            <Portal>
                <div
                    className={`DrawShowPic_done ${
                        is_done ? "DrawShowPic_done-done" : ""
                    }`}
                >
                    <div>
                        <div>DONE</div>

                        <div>
                            <button type="button" onClick={handleClear}>
                                Restart
                            </button>
                        </div>
                    </div>
                </div>
            </Portal>
        </div>
    );
}

export default DrawShowPic;
