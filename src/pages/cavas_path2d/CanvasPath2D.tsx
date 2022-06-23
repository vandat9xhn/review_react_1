import * as React from "react";

import { useCanvas } from "../../_hooks/useCanvas";
import CanvasPath2DSpeed from "./CanvasPath2DSpeed";

//
const d_path =
    "M148.185,118.975c0,0-92.592,39.507-80.247,79.013,s79.012,143.21,129.629,124.691s64.198-113.856,120.988-100.755s118.518,30.384,116.049,109.397s-82.715,118.519-97.53,201.235,s-92.593,139.505,0,159.259";

//
export interface CanvasPath2DProps {}

//
function CanvasPath2D({}: CanvasPath2DProps) {
    //
    const refStep = React.useRef(0);
    const refPath = React.useRef<SVGPathElement>(null);
    const refPathLength = React.useRef(0);

    const refStart = React.useRef(false);
    const refForward = React.useRef(true);
    const refSpeed = React.useRef(1);

    //
    const { refCanvas, refCtx } = useCanvas();

    //
    React.useEffect(() => {
        drawFirst();
    }, []);

    // -----

    //
    const drawRocket = ({ x = 0, y = 0 }) => {
        refCtx.current.beginPath();

        refCtx.current.arc(x, y, 10, 0, 2 * Math.PI);
        refCtx.current.stroke();

        refCtx.current.closePath();
    };

    const drawPath = () => {
        const path2d = new Path2D(d_path);
        refCtx.current.stroke(path2d);
    };

    // ----

    //
    const getPath = () => {
        if (refPath.current) {
            return refPath.current;
        }

        const path = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path"
        );
        path.setAttribute("d", d_path);
        refPath.current = path;

        return path;
    };

    const getPathLength = () => {
        if (refPathLength.current) {
            return refPathLength.current;
        }

        return refPath.current.getTotalLength();
    };

    //
    const handleChangeSpeed = (new_speed = 1) => {
        refSpeed.current = new_speed;
    };

    //
    const stepUp = () => {
        refStep.current += refSpeed.current;
    };

    //
    const stepDown = () => {
        refStep.current -= refSpeed.current;
    };

    //
    const handleChangeStep = () => {
        const totalLength = getPathLength();

        if (refForward.current) {
            stepUp();
            if (refStep.current >= totalLength) {
                refForward.current = false;
                stepDown();
            }

            return;
        }

        stepDown();
        if (refStep.current < 0) {
            refForward.current = true;
            stepUp();
        }
    };

    // ----

    //
    const drawRocketMove = () => {
        const path = getPath();
        const { x, y } = path.getPointAtLength(refStep.current);

        refCtx.current.clearRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );
        drawPath();
        drawRocket({ x, y });
        handleChangeStep();

        if (refStart.current) {
            window.requestAnimationFrame(drawRocketMove);
        }
    };

    //
    const drawFirst = () => {
        const path = getPath();
        const { x, y } = path.getPointAtLength(refStep.current);
        drawRocket({ x, y });
        drawPath();
    };

    // ----

    //
    const handleToggle = () => {
        refStart.current = !refStart.current;

        if (refStart.current) {
            drawRocketMove();
        }
    };

    //
    const handleRestart = () => {
        refStart.current = false;
        refStep.current = 0;
        refForward.current = true;
        refCtx.current.clearRect(
            0,
            0,
            refCanvas.current.width,
            refCanvas.current.height
        );
        drawFirst();
    };

    //
    return (
        <div>
            <div>
                <button type="button" onClick={handleToggle}>
                    Toggle
                </button>
            </div>
            <div>
                <button type="button" onClick={handleRestart}>
                    Restart
                </button>
            </div>
            <br />
            <div>
                <CanvasPath2DSpeed
                    initial_speed={refSpeed.current}
                    handleChangeSpeed={handleChangeSpeed}
                />
            </div>
            <canvas
                ref={refCanvas}
                width={800}
                height={800}
                style={{ border: "1px solid" }}
            />
            ;
        </div>
    );
}

export default CanvasPath2D;
