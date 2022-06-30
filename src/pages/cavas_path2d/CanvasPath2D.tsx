import * as React from "react";

import { useCanvas } from "../../_hooks/useCanvas";
import CanvasPath2DSpeed from "./CanvasPath2DSpeed";

//
const d_path =
    "M107 446.582C148.629 499.888 202.34 489.536 242.76 465.585M242.76 465.585C270.255 456.814 278.848 388.109 232.449 388.109C186.05 388.109 175.324 445.297 242.76 465.585ZM242.76 465.585C321.443 499.98 372.886 496.001 474.754 456.814M474.754 456.814C567.026 492.888 614.073 475.047 693 402.727M474.754 456.814C396.789 408.176 371.645 358.873 399.141 326.713C426.636 294.553 482.244 327.306 474.754 335.484C473.796 333.866 509.123 297.477 548.648 316.48C588.173 335.484 556.405 405.827 474.754 456.814";

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
