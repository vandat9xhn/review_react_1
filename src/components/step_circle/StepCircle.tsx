import * as React from 'react';
//
import './StepCircle.scss';

//
export interface StepCircleProps {}

//
const circle_border = 2;
const step_arr = [1, 2, 3, 4];
const base_deg = 45 + 360 / step_arr.length;
const distance_deg = 360 / step_arr.length;

//
function StepCircle({}: StepCircleProps) {
    //
    const [step_ix, setStepIx] = React.useState(0);
    const [changing, setChanging] = React.useState(true);

    //
    React.useEffect(() => {
        setTimeout(() => {
            setChanging(false);
        }, 250);
    }, []);

    // ----

    //
    function handleChangeStep(new_step: number) {
        setStepIx(new_step);

        setChanging(true);
        setTimeout(() => {
            setChanging(false);
        }, 250);
    }

    //
    return (
        <div className="StepCircle">
            <div className="StepCircle_row">
                <div className="StepCircle_left">
                    <div className="StepCircle_left_contain">
                        <svg
                            className="StepCircle_circle"
                            viewBox="0 0 200 200"
                        >
                            <circle
                                cx="100"
                                cy="100"
                                r={`${100 - circle_border / 2}`}
                                fill="none"
                                strokeWidth={circle_border}
                                stroke="gray"
                            />
                        </svg>

                        <div
                            className="StepCircle_sliders"
                            style={{
                                transform: `rotate(-${
                                    step_ix * distance_deg
                                }deg)`,
                            }}
                        >
                            {step_arr.map((item, ix) => (
                                <div
                                    key={ix}
                                    className="StepCircle_slider"
                                    style={{
                                        transform: `rotate(${
                                            base_deg + ix * distance_deg
                                        }deg)`,
                                    }}
                                >
                                    <div
                                        className="StepCircle_slider_contain"
                                        style={{
                                            left: `${circle_border / 2}px`,
                                        }}
                                    >
                                        {ix === step_ix ? (
                                            <div
                                                className="StepCircle_slider_circle-active"
                                                style={{
                                                    transform: `rotate(-${base_deg}deg)`,
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ) : (
                                            <div
                                                className="StepCircle_slider_circle"
                                                onClick={() =>
                                                    handleChangeStep(ix)
                                                }
                                            ></div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="StepCircle_connect">
                            <div
                                className={`StepCircle_connect_contain ${
                                    changing
                                        ? 'StepCircle_connect_contain-none'
                                        : ''
                                }`}
                            >
                                <div className="StepCircle_connect_line_1"></div>
                                <div className="StepCircle_connect_line_2"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="StepCircle_right">
                    <h3 className="StepCircle_right_title">
                        Title {step_arr[step_ix]}{' '}
                    </h3>

                    <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Et repellendus recusandae ab quam aperiam
                        dignissimos corporis, numquam dicta maxime ratione ipsam
                        quidem animi veniam sit perferendis? Dolores id et
                        expedita.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StepCircle;
