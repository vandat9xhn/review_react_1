import { Autocomplete, TextField } from '@mui/material';
import * as React from 'react';

//
const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
];

//
export interface InputMUIProps {}

//
function InputMUI({}: InputMUIProps) {
    //
    return (
        <div>
            <div className="mt-4">
                <TextField label="Text" sx={{ width: 300 }} />
            </div>

            <div className="mt-4">
                <Autocomplete
                    disablePortal
                    sx={{ width: 450 }}
                    options={topFilms}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Auto"
                            // id="standard-basic"
                            variant="standard"
                        />
                    )}
                />
            </div>
        </div>
    );
}

export default InputMUI;
