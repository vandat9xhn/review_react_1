import * as React from 'react';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//
export interface BadgeMUIProps {}

//
function BadgeMUI({}: BadgeMUIProps) {
    //
    return (
        <div className="BadgeMUI">
            <div>
                <Badge badgeContent={4} color="success" invisible={false}>
                    <MailIcon color="action" />
                </Badge>
            </div>

            <div>
                <Badge
                    badgeContent={4}
                    color="success"
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <ShoppingCartIcon color="action" />
                </Badge>
            </div>

            <div>
                <Badge badgeContent={4} color="error" variant="dot">
                    <MailIcon color="action" />
                </Badge>
            </div>

            <div>
                <Badge
                    badgeContent={100}
                    color="success"
                    invisible={false}
                    max={99}
                >
                    <MailIcon color="action" />
                </Badge>
            </div>

            <div>
                <Badge badgeContent={4} color="secondary" invisible={true}>
                    <ShoppingCartIcon color="action" />
                </Badge>
            </div>
        </div>
    );
}

export default BadgeMUI;
