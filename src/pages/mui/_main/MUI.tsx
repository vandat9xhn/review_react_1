import * as React from 'react';
import { Button, Theme, styled, ButtonGroup } from '@mui/material';
import { blue } from '@mui/material/colors';
import BadgeMUI from '../badge_mui/BadgeMUI';
import InputMUI from '../input/InputMUI';
import SliderMUI from '../slider/SliderMUI';

//
const BtnBlue = styled(Button)(({ theme }: { theme: Theme }) => ({
    color: blue[900],
    textTransform: 'none',

    // '&:hover': {
    //     backgroundColor: blue[700],
    // },
}));

//
export interface HeaderRightProps {}

//
function MUI({}: HeaderRightProps) {
    //
    return (
        <div className="MUI">
            <ButtonGroup className="p-[20px]" variant="outlined">
                <BtnBlue>One</BtnBlue>

                <BtnBlue>Two</BtnBlue>
            </ButtonGroup>

            <div className="p-[20px]">
                <BadgeMUI />
            </div>

            <div className="p-[20px]">
                <InputMUI />
            </div>

            <div className="p-[20px]">
                <SliderMUI />
            </div>
        </div>
    );
}

export default MUI;
