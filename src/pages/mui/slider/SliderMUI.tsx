import * as React from 'react';
import { Slider } from '@mui/material';

//
export interface SliderMUIProps {}

//
function SliderMUI({}: SliderMUIProps) {
    //
    function handleChange(event: Event, value: number) {
        console.log(value);
    }

    //
    return (
        <div>
            <div>
                <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    marks
                    min={10}
                    max={50}
                    step={10}
                    //
                    color="secondary"
                    sx={{ width: 400 }}
                    // onChange={handleChange}
                />
            </div>

            <div>
                <Slider
                    defaultValue={50}
                    valueLabelDisplay="auto"
                    marks={[
                        { value: 10, label: '10°C' },
                        { value: 35, label: '35°C' },
                    ]}
                    // min={10}
                    // max={50}
                    // step={10}
                    //
                    // getAriaValueText={(value) => `${value}°C`}
                    //
                    color="secondary"
                    sx={{ width: 400 }}
                    // onChange={handleChange}
                />
            </div>

            <div>
                <Slider
                    defaultValue={[10, 50]}
                    valueLabelDisplay="auto"
                    //
                    color="secondary"
                    sx={{ width: 400 }}
                    // onChange={handleChange}
                />
            </div>
        </div>
    );
}

export default SliderMUI;
