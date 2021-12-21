import * as React from 'react';
import { Button, Theme, styled } from '@mui/material';
import { purple } from '@mui/material/colors';
//
import './HeaderRight.scss';

//
const BtnPurple = styled(Button)(({ theme }: { theme: Theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    textTransform: 'none',
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

//
export interface HeaderRightProps {
    count: number;
}

//
function HeaderRight({ count }: HeaderRightProps) {
    //
    return (
        <div className="HeaderRight">
            <div>
                <BtnPurple className="HeaderRight_btn-mui" variant="contained">
                    Btn mui {count}
                </BtnPurple>
            </div>
        </div>
    );
}

export default HeaderRight;
