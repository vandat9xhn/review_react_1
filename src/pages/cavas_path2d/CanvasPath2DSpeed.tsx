import * as React from "react";

//
export interface CanvasPath2DSpeedProps {
    initial_speed: number;
    handleChangeSpeed: (speed: number) => void;
}

//
function CanvasPath2DSpeed({
    initial_speed,
    handleChangeSpeed,
}: CanvasPath2DSpeedProps) {
    //
    const [speed, setSpeed] = React.useState(initial_speed);

    //
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        let new_speed = parseInt(e.target.value);

        if (new_speed <= 0) {
            new_speed = 1;
        } else if (new_speed >= 11) {
            new_speed = 10;
        }

        setSpeed(new_speed);
        handleChangeSpeed(new_speed);
    };

    //
    return (
        <div>
            <input
                type="number"
                value={speed}
                min={1}
                max={10}
                onChange={handleChange}
            />
        </div>
    );
}

export default CanvasPath2DSpeed;
