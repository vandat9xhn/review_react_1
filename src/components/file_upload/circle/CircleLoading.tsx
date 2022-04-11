import * as React from 'react';
//
import './CircleLoading.scss';

const strokeWidth = 6;

//
export interface CircleLoadingProps {}

//
function CircleLoading({}: CircleLoadingProps) {
    //
    const [percent, setPercent] = React.useState(75);

    //
    const ref_input = React.useRef<HTMLInputElement>(null);

    // -----

    //
    function handelChangePercent() {
        setPercent(parseFloat(ref_input.current.value));
    }
    //
    function handelUp() {
        setPercent(percent + 2 >= 100 ? 100 : percent + 2);
    }

    // ----

    const c_length = 2 * Math.PI * (100 - strokeWidth / 2);

    //
    return (
        <div className="CircleLoading">
            <div className="CircleLoading_contain">
                <div className="CircleLoading_border"></div>

                <svg className="CircleLoading_svg" viewBox="0 0 200 200">
                    <circle
                        cx="100"
                        cy="100"
                        r={100 - strokeWidth / 2}
                        stroke="blue"
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={`${
                            (c_length * percent) / 100
                        } ${c_length}`}
                    />
                </svg>

                <div
                    className="CircleLoading_slider"
                    style={{ transform: `rotate(${percent * 3.6}deg)` }}
                >
                    <div className="CircleLoading_slider_circle"></div>
                </div>
            </div>

            <div>
                <input
                    ref={ref_input}
                    type="number"
                    min={0}
                    max={100}
                    defaultValue={percent}
                />

                <button type="button" onClick={handelChangePercent}>
                    Change
                </button>

                <button type="button" onClick={handelUp}>
                    Up
                </button>
            </div>
        </div>
    );
}

export default CircleLoading;
